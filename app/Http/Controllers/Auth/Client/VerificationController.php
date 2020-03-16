<?php

namespace App\Http\Controllers\Auth\Client;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\VerifiesEmails;
use App\Client;
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
        $this->middleware('auth:client')->except('verify');
//        $this->middleware('signed')->only('verify');
        $this->middleware('throttle:6,1')->only('verify', 'resend');
    }

    public function verify(Request $request)
    {
        if ($client = $this->tokenMatched($request)) {

            $client->markEmailAsVerified();
            session()->flash('success', '<b>Success</b>, You have verified your email successfully!');
            return redirect(route("homepage"));

        }

        session()->flash('fail', __("<b>Oops!!</b>, The verification link may not be correct."));
        return redirect(route("homepage"));
    }

    /**
     * @param Request $request
     * @return bool
     */
    private function tokenMatched(Request $request)
    {
        $client = Client::whereEmail($request->get('email'))->first();

        if ($client->matchEmailVerificationToken($request->get('token'))) {
            return $client;
        }

        return false;
    }

    public function resend(Request $request)
    {
        $request = $request->user('client') ;
        if ($request->hasVerifiedEmail()) {
            return redirect($this->redirectPath());
        }

        $request->sendEmailVerificationNotification();

        return back()->with('resent', true);
    }

}
