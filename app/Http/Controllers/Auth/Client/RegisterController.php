<?php

namespace App\Http\Controllers\Auth\Client;

use App\Http\Controllers\Controller;
use App\Client;
use App\Jobs\MessageClient;
use Illuminate\Auth\Events\Registered;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    public function showRegistrationForm()
    {
        return view('client.auth.register');
    }

    /**
     * Handle a registration request for the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $request->merge(['username' => str_replace(' ','_',$request->username) ]);

        $this->validator($request->all())->validate();

        event(new Registered($user = $this->create($request->all())));

        $this->guard()->login($user);

        return $this->registered($request, $user)
            ?: redirect($this->redirectPath());
    }

    /**
     * @param Request $request
     * @param Client $user
     */
    public function registered(Request $request, Client $user)
    {
        if (!app()->runningUnitTests()) {
            $name = $request->user('client')->name;
            $body = "Welcome, $name  \nYou need to verify your phone number,\nGo to profile and verify number. \nRegards, \nGPU-Shop";
            MessageClient::dispatch($body,$user)
                ->onQueue('low');

        }
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'min:8', 'max:20'],
            'username' => ['required', 'string', 'min:8',  'max:20', 'unique:clients','unique:sellers','unique:admins'],
            'phone_number' => ['required', 'numeric', 'regex:/^[0-9-+ ]{7,15}$/', 'unique:clients','unique:sellers','unique:admins'],
            'email' => ['sometimes','nullable' ,'string', 'email', 'max:255', 'unique:clients','unique:sellers','unique:admins'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'agree' => ['required'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Client
     */
    protected function create(array $data)
    {
        return Client::create([
            'name' => $data['name'],
            'username' => $data['username'],
            'phone_number' => $data['phone_number'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
    }

    /**
     * Get the guard to be used during registration.
     * @return StatefulGuard
     */
    protected function guard()
    {
        return Auth::guard('client');
    }
}
