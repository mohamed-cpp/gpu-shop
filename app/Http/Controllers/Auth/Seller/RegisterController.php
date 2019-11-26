<?php

namespace App\Http\Controllers\Auth\Seller;

use App\Http\Controllers\Controller;
use App\Seller;
use Illuminate\Auth\Events\Registered;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
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
    protected $redirectTo = '/';

    protected $passport_or_id ;
    protected $company_logo = null;
    protected $tax = null;
    
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Show the application registration form.
     *
     * @return \Illuminate\Http\Response
     */
    public function showRegistrationForm()
    {
        return view('seller.auth.register');
    }


    public function register(Request $request)
    {
        $request->company_or_individual == 'true'
             ? $request->merge(['company_or_individual' => true])
             : $request->merge(['company_or_individual' => false]) ;

        $this->validator($request->all())->validate();
        $this->addImage($request);

        event(new Registered($user = $this->create($request->all())));

        //$this->guard()->login($user);

        return $this->registered($request, $user)
            ?: redirect($this->redirectPath());
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        if($data['company_or_individual'] == true){
            return Validator::make($data, [
                'name' => ['required', 'string', 'min:8', 'max:30'],
                'username' => ['required', 'string', 'min:8','max:30', 'unique:sellers','unique:clients'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:sellers','unique:clients'],
                'phone_number' => ['required', 'numeric', 'regex:/^[+][0-9-+ ]{7,15}$/', 'unique:sellers','unique:clients'],
                'password' => ['required', 'string', 'min:8', 'confirmed', 'regex:/[a-z]/' ,'regex:/[A-Z]/' ,'regex:/[0-9]/'],
                'passport_or_id' => ['required', 'mimes:jpeg,png,jpg,gif,svg', 'max:2048'],
                'agree' => ['required'],
            ]);
        }else{
            return Validator::make($data, [
                'name' => ['required', 'string', 'min:8', 'max:30'],
                'username' => ['required', 'string', 'min:8','max:30', 'unique:sellers','unique:clients'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:sellers','unique:clients'],
                'phone_number' => ['required', 'numeric', 'regex:/^[+][0-9-+ ]{7,15}$/', 'unique:sellers','unique:clients'],
                'password' => ['required', 'string', 'min:8', 'regex:/[a-z]/' ,'regex:/[A-Z]/' ,'regex:/[0-9]/', 'confirmed'],
                'passport_or_id' => ['required', 'mimes:jpeg,png,jpg,gif,svg', 'max:2048'],
                'tax' => ['required', 'mimes:jpeg,png,jpg,gif,svg', 'max:2048'],
                'company_logo' => ['required', 'mimes:jpeg,png,jpg,gif,svg', 'max:2048'],
                'agree' => ['required'],
            ]);
        }

    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {

        return Seller::create([
            'company_or_individual' => $data['company_or_individual'],
            'name' => $data['name'],
            "username" => $data['username'],
            'email' => $data['email'],
            "phone_number" => $data['phone_number'],
            'password' => Hash::make($data['password']),
            'company_logo' => $this->company_logo,
            'id_or_passport' => $this->passport_or_id,
            'tax' => $this->tax,
        ]);
    }

    protected function registered(Request $request, $user)
    {
        if (!app()->runningUnitTests()) {
            $name = $request->name;
            $phone = $request->phone_number;
            $body = "Welcome, $name  \nYou need to wait until admin call you or message you to approve your account,\nThen please verify number. \nRegards, \nGPU-Shop";
            $user->twilioSMS($body,$phone);
            $user->twilioWhatsApp($body,$phone);
        }
    }

    protected function addImage(Request $request){
        $path = 'public/storage/seller/images/';
        $file = $request->file('passport_or_id');
        $file->move(public_path($path),$name = md5($request->username.$request->passport_or_id).'.'.$file->getClientOriginalExtension());
        $this->passport_or_id = $path.$name;

        if($request->company_or_individual == false){

            $file = $request->file('company_logo');
            $file->move(public_path($path),$name = md5($request->username.$request->company_logo).'.'.$file->getClientOriginalExtension());
            $this->company_logo = $path.$name;

            $file = $request->file('tax');
            $file->move(public_path($path),$name = md5($request->username.$request->tax).'.'.$file->getClientOriginalExtension());
            $this->tax = $path.$name;
        }
    }

    protected function guard()
    {
        return Auth::guard('seller');
    }
}
