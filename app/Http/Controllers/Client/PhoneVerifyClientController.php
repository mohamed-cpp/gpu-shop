<?php

namespace App\Http\Controllers\Client;

use App\Client;
use App\Http\Controllers\Controller;
use App\Rules\VerifyValidate;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;

class PhoneVerifyClientController extends Controller
{
    public function __construct()
    {
        $this->middleware('is_code_valid')->only('show','update');
        $this->middleware('guest:client')
            ->only('showFormMessage','sendResetCode','checkCodeForm','checkCode','changePasswordForm','changePassword');
    }

    /**
     * Display a listing of the resource.
     *
     * @param Client $user
     * @return \Illuminate\Http\Response
     */
    public function index(Client $user)
    {

        if($user->isCodeValid()){
            return redirect(route('verify.page.client'));
        }else{
            return view('client.auth.verify_phone');
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param Request $request
     * @param Client $user
     * @return \Illuminate\Http\Response
     * @throws \Twilio\Exceptions\ConfigurationException
     * @throws \Twilio\Exceptions\TwilioException
     */
    public function create(Request $request ,Client $user)
    {
        $code = $user->generateCode();
        $body = "Your GPU-Shop Code is $code";
        if(!app()->runningUnitTests()){
            if($request->message == "whatsapp"){
                $user->twilioWhatsApp($body);
            }else{
                $user->twilioSMS($body);
            }
        }
        $dt = \Carbon\Carbon::now();
        $user = $request->user('client');

        $user->update([
            'code' => $code,
            'create_code_at' => $dt,
        ]);
        $user->save();

        return redirect(route('verify.page.client'));
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
    public function show()
    {
        return view('client.auth.code_phone');
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
    public function update(Request $request, Client $client)
    {
        if($client->isCode($request->code)){
            $user = $request->user('client');
            $user->update([
                'code' => null,
                'create_code_at' => null,
                'phone_verified_at' => \Carbon\Carbon::now(),
            ]);
            $user->save();
            return redirect(route('client.profile'));
        }else{
            Session::flash('error',"Sorry code $request->code not correct, Try again");
            return  redirect()->back();
        }
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
    public function showFormMessage(Request $request){
        return view('client.auth.passwords.verify_phone',['phone'=>$request->phone]);
    }

    /**
     * @param Request $request
     * @param Client $client
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     * @throws \Twilio\Exceptions\ConfigurationException
     * @throws \Twilio\Exceptions\TwilioException
     */
    public function sendResetCode(Request $request, Client $client){
        $code = $client->generateCode();
        $body = "Your GPU-Shop Code is $code to reset password";
        $user = Client::where('phone_number','like',"%".$request->phone)->first();

        $dt = \Carbon\Carbon::now();
        $user->update([
            'code' => $code,
            'create_code_at' => $dt,
        ]);
        $user->save();

        if(!app()->runningUnitTests()){
            if($request->message == "whatsapp"){
                $client->twilioWhatsApp($body,$user->phone_number);
            }else{
                $client->twilioSMS($body,$user->phone_number);
            }
        }
        return redirect(route('client.check.code.password',['phone'=>$user->phone_number]));
    }

    public function checkCodeForm(Request $request){
        return view('client.auth.passwords.code_phone',['phone'=>$request->phone]);
    }
    public function checkCode(Request $request){
        $user = Client::where('phone_number',$request->phone)->first();
        if($user->create_code_at->diffInMinutes() < 15){
            if($user->code == $request->code){
                return redirect(route('client.change.password.form',['phone'=> $request->phone, 'code'=>$request->code]));
            }else{
                Session::flash('error',"Sorry code $request->code not correct, Try again");
                return redirect()->back();
            }
        }else{
            return response()->view('client.errors.error',['errorCode' => 403,
                'errorMessage'=>'sorry timeout please generate new code to reset password.']);
        }
    }
    public function changePasswordForm(Request $request){
        return view('client.auth.passwords.resetViaPhone',
            ['phone'=>$request->phone,'code'=>$request->code]);
    }
    public function changePassword(Request $request){
        $request->validate([
            'password' => 'required|confirmed|min:8',
            ]);
        $user = Client::where('phone_number',$request->phone)->first();
        if($user->code == $request->code){
            $user->password = Hash::make($request->password);
            $user->setRememberToken(Str::random(60));
            $user->update([
                'code' => null,
                'create_code_at' => null,
            ]);
            $user->save();
            auth('client')->login($user);
            return redirect(route('homepage'));
        }
        return response()->view('client.errors.error',['errorCode' => 500,
            'errorMessage'=>'something wrong please connect us or try again later.']);

    }

}
