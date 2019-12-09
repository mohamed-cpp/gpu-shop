<?php

namespace App\Http\Controllers\Auth\Seller;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Password;

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

    /**
     * Where to redirect users after resetting their password.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest:seller');
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
        return view('seller.auth.passwords.reset', [
            'token' => $token,
            'email' => $request->get('email')
        ]);
    }

    /**
     * Get the password reset validation rules.
     *
     * @return array
     */
    protected function rules()
    {
        return [
            'token' => ['required'],
            'email' => ['required', 'email'],
            'password' => ['required', 'string', 'min:8', 'confirmed', 'regex:/[a-z]/' ,'regex:/[A-Z]/' ,'regex:/[0-9]/'],
        ];
    }

    protected function broker()
    {
        return Password::broker('sellers');
    }

    /**
     * Get the guard to be used during password reset.
     * @return StatefulGuard
     */
    protected function guard()
    {
        return Auth::guard('seller');
    }
}
