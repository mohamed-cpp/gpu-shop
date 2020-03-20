<?php

namespace App\Http\Controllers\Client;

use App\Admin;
use App\Client;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProfileUpdateClient;
use App\Product;
use App\Seller;
use Hash;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;
use Str;

class ProfileClientController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:client')->except('index');
    }
    /**
     * Display a listing of the resource.
     *
     * @param $username
     * @return \Illuminate\Http\Response
     */
    public function index($username)
    {
        $client = Client::whereUsername($username)->first();
        if ($client){
            return view('client.profile.profileClient')->with(['client'=>$client]);
        }
        $seller = Seller::whereUsername($username)->first();
        if ($seller){
            $rating = 0;
            $products = Product::whereSellerId($seller->id)
                ->enabled()
                ->orderBy('updated_at', 'desc')
                ->get();
            $count = count($products);
            if ($count != 0){
                $rating =  round($products->sum('rating_of_product') / $count );
            }
            return view('client.profile.profileSeller')->with([
                'seller'=>$seller,
                'products'=>$products->take(10),
                'rating' => $rating,
                'count' => $count,
            ]);
        }
        $admin = Admin::whereUsername($username)->first();
        if ($admin){
            return view('client.profile.profileAdmin')->with([
                'admin'=>$admin,
            ]);
        }
        abort(404);
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

            $name = md5(Str::random(10).$image->getClientOriginalName()).'.'.$image->getClientOriginalExtension();
            $image_resize = Image::make($image->getRealPath());
            $image_resize->resize(140, 140);
            $image_resize->save(public_path($path.$name));


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

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function notification(Request $request){
        if(auth('client')->check() && $request->wantsJson()){
            $notifications = auth('client')->user()->notifications()->paginate(10);
            return response()->json([$notifications->items(),$notifications->lastPage()]);
        }

    }

    public function readNotification(Request $request){
        if(auth('client')->check() && $request->wantsJson()){
            auth('client')->user()->unreadNotifications()->update(['read_at' => now()]);
            return response([],204);
        }
    }
    
    public function aReadNotification(Request $request,$id){
        if(auth('client')->check() && $request->wantsJson()){
            auth('client')->user()->unreadNotifications()->find($id)->markAsRead();
            return response([],204);
        }
    }
}
