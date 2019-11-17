<?php

namespace App\Http\Controllers\Auth\Seller;

use App\Http\Controllers\Controller;
use App\Seller;
use Illuminate\Foundation\Auth\VerifiesEmails;
use Illuminate\Http\Request;

class VerificationController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Email Verification Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling email verification for any
    | user that recently registered with the application. Emails may also
    | be re-sent if the user didn't receive the original email message.
    |
    */

    use VerifiesEmails;

    /**
     * Where to redirect users after verification.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:seller')->except('verify');
//        $this->middleware('signed')->only('verify');
        $this->middleware('throttle:6,1')->only('verify', 'resend');
    }

    public function verify(Request $request)
    {
        if ($seller = $this->tokenMatched($request)) {

            $seller->markEmailAsVerified();
            session()->flash('success', '<b>Success</b>, You have verified your email successfully!');
            return redirect('/');

        }

        session()->flash('fail', __("<b>Oops!!</b>, The verification link may not be correct."));
        return redirect('/');
    }

    /**
     * @param Request $request
     * @return bool
     */
    private function tokenMatched(Request $request)
    {
        $seller = Seller::whereEmail($request->get('email'))->first();

        if ($seller->matchEmailVerificationToken($request->get('token'))) {
            return $seller;
        }

        return false;
    }
}
