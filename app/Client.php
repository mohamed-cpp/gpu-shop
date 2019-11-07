<?php

namespace App;

use App\Notifications\ClientResetPasswordNotification;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Notifications\SendClientVerificationEmailNotification;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Auth;
use Illuminate\Notifications\Notifiable;


/**
 * App\Models\Client
 *
 * @method static Builder|Client whereEmail($value)
 */

class Client extends Authenticatable implements MustVerifyEmail
{
    use Notifiable;

    protected $fillable = [
        'name', 'username', 'phone_number','email', 'password', 'email_verified_at'
    ];

    protected $hidden = ['password', 'remember_token'];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    /**
     * Send an email with a verification code for the client
     */
    public function sendEmailVerificationNotification()
    {
        if (! $this->email_verified_at) {
            return $this->notify(new SendClientVerificationEmailNotification($this));
        }
    }

    /**
     * Match a token with the correct user verification token
     * @param $token
     * @return bool
     */
    public function matchEmailVerificationToken($token)
    {
        return $this->extractVerificationToken() === $token;
    }

    /**
     * Extract client's verification token from client's information
     * @return string
     */
    public function extractVerificationToken()
    {
        return md5($this->created_at . $this->email . $this->username);
    }

    /**
     * @param string $token
     */
    public function sendPasswordResetNotification($token)
    {
        return $this->notify(new ClientResetPasswordNotification($this, $token));
    }

    /**
     * send sms to client
     *
     * @param $body
     * @throws \Twilio\Exceptions\ConfigurationException
     * @throws \Twilio\Exceptions\TwilioException
     */
    public function twilioSMS($body){
        $client = new \Twilio\Rest\Client(env('TWILIO_SID'), env('TWILIO_AUTH_TOKEN'));
        try {
        $client->messages->create(
            $this->phone_number,
            array(
                'from' => env('TWILIO_NUMBER'),
                'body' => $body
            )
        );
        } catch (\Exception $e){
            if($e->getCode() == 400)
            {
                $message = $e->getMessage();

                session()->flash('message', $message);
            }
        }

    }
    /**
     * send message to client via whatsapp
     *
     * @param $body
     * @throws \Twilio\Exceptions\ConfigurationException
     * @throws \Twilio\Exceptions\TwilioException
     */
    public function twilioWhatsApp($body){
        $twilio = new \Twilio\Rest\Client(env('TWILIO_SID'), env('TWILIO_AUTH_TOKEN'));
        $twilio->messages
            ->create("whatsapp:$this->phone_number",
                array(
                    "from" => "whatsapp:".env('TWILIO_WHATSAPP'),
                    "body" => $body
                )
            );
    }

    /**
     * Get the guard to be used during password reset.
     * @param array $guarded
     * @return StatefulGuard
     */
    public function guard(array $guarded)
    {
        return Auth::guard('client');
    }
}
