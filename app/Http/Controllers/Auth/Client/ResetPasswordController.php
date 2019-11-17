<?php

namespace App\Http\Controllers\Auth\Client;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;

class ResetPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */

    use ResetsPasswords;

    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest:client');
    }

    /**
     * Display the password reset view for the given token.
     * If no token is present, display the link request form.
     * @param Request     $request
     * @param string|null $token
     * @return Factory|View
     */
    public function showResetForm(Request $request, $token = null)
    {
        return view('client.auth.passwords.reset', [
            'token' => $token,
            'email' => $request->get('email')
        ]);
    }

    protected function broker()
    {
        return Password::broker('clients');
    }

    /**
     * Get the guard to be used during password reset.
     * @return StatefulGuard
     */
    protected function guard()
    {
        return Auth::guard('client');
    }
}
