<?php

namespace App\Http\Controllers\Auth\admin;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

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

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/admin';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest:web')->except('logout');
    }

    /**
     * Show the application's login form.
     *
     * @return \Illuminate\Http\Response
     */
    public function showLoginForm()
    {
        return view('admin.auth.login');
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

        $request->merge(['email_enable' => $request->email]);
        $rules = [
            'email' => 'required|string|exists:admins,email,enable,1',
            'password' => 'required|string',
        ];
        $messages = [
            'email.exists' => 'Sorry your account disabled or the email you entered is wrong',
        ];

        $this->validate($request, $rules, $messages);

    }

    public function logout(Request $request)
    {
        auth()->logout();
        return $this->loggedOut($request) ?: redirect(route('admin.home'));
    }


    /**
     * Get the post register / login redirect path.
     * @return string
     */
    public function redirectPath()
    {
        return route('admin.home');
    }
}
