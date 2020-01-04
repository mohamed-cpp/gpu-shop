<?php

namespace App\Http\Controllers\Auth\Client;

use App\Client;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\ValidationException;
use Laravel\Socialite\Facades\Socialite;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    public $username;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    //protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**
     * Show the application's login form.
     * @return Response
     */
    public function showLoginForm()
    {
        session(['link' => url()->previous()]);
        return view('client.auth.login');
    }
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\RedirectResponse|Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function phoneOrEmail(Request $request){

        if(!strpos($request->email,"@")) {
            $client = Client::where('phone_number','like','%'.$request->email)
                ->pluck('phone_number')
                ->first();
            $len = str_replace($request->email,'',$client);
            if( $client == null || strlen($len) > 4 ){
                return $this->sendFailedLoginResponse($request);
            }
            $request->merge(['phone_number' => $client]);
            $request->merge(['email' => $client]);
            $this->username = "phone_number";

        }else{
            $this->username = "email";
        }
        return $this->login($request);
    }

    /**
     * Validate the user login request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return void
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    protected function validateLogin(Request $request)
    {
        $request->validate([
            'email' => "required|string|min:7|exists:clients,$this->username,approved,1",
            'password' => 'required|string',
        ]);
    }

    /**
     * Redirect the user to the GitHub authentication page.
     *
     * @return \Illuminate\Http\Response
     */
    public function redirectToProvider()
    {
        return Socialite::driver('github')->redirect();
    }

    /**
     * Obtain the user information from GitHub.
     *
     * @return \Illuminate\Http\Response
     */
    public function handleProviderCallback()
    {
        $user = Socialite::driver('github')->user();
        dd($user);
        // $user->token;
    }

    protected function sendFailedLoginResponse(Request $request)
    {
        throw ValidationException::withMessages([
            'email' => [trans('auth.failed')],
        ]);
    }

    public function logout(Request $request)
    {
        auth('client')->logout();
        return $this->loggedOut($request) ?: redirect('/');
    }

    public function redirectPath()
    {
        $intended = session('link');
        return $intended ?? route('client.home');
    }

    /**
     * Get the login username to be used by the controller.
     *
     * @param Request $request
     * @return string
     */
    public function username()
    {
        return $this->username;
    }

    protected function guard()
    {
        return Auth::guard('client');
    }
}
