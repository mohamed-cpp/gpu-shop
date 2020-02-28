<?php

namespace App\Http\Controllers\Client;

use App\Client;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProfileUpdateClient;
use Hash;
use Illuminate\Http\Request;
use Str;

class ProfileClientController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:client');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function show(Client $client)
    {
        $client = auth('client')->user();
        return view('client.profile.profile')->with(['client'=>$client]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function edit(Client $client)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function update(ProfileUpdateClient $request)
    {
        $client = auth('client')->user();
        $input = $request->all();
        if($input['old_password']){
            if(!Hash::check($input['old_password'], $client->password)){
                return back()->withErrors(['The Current Password Not Correct']);
            }
            $input['password'] = Hash::make($input['new_password']);
        }
        if($input['phone_number'] != $client->phone_number){
            $input['phone_verified_at'] = null;
        }
        if($input['email'] != $client->email){
            $input['email_verified_at'] = null;
        }
        if ($image = $request->file('image')){
            $path = 'storage/client/images/';
            $image->move(public_path($path),$name = md5(Str::random(10).$image->getClientOriginalName()).'.'.$image->getClientOriginalExtension());
            $input['img'] = $name;
        }


        $client->update($input);
        return redirect()->route('client.profile');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function destroy(Client $client)
    {
        //
    }
}
