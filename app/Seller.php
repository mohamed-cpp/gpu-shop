<?php

namespace App;

use App\Notifications\SellerResetPasswordNotification;
use App\Notifications\SendSellerVerificationEmailNotification;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Support\Facades\Auth;

class Seller extends Authenticatable implements MustVerifyEmail
{

    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'approved', 'company_or_individual', 'phone_number', 'username', 'code', 'create_code_at', 'email_verified_at', 'phone_verified_at',
        'company_logo', 'id_or_passport', 'tax', 'company_id',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'phone_verified_at' =>'datetime',
        'create_code_at' => 'datetime',
        'approved' => 'boolean',
        'company_or_individual' => 'boolean',
    ];



    /**
     * Send an email with a verification code for the client
     * @var TYPE_NAME $this
     */
    public function sendEmailVerificationNotification()
    {
        if (! $this->email_verified_at) {
            return $this->notify(new SendSellerVerificationEmailNotification($this));
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
        return $this->notify(new SellerResetPasswordNotification($this, $token));
    }

    /**
     * send sms to client
     *
     * @param $body
     * @param null $phone
     * @throws \Twilio\Exceptions\ConfigurationException
     */
    public function twilioSMS($body, $phone = null){
        $client = new \Twilio\Rest\Client(env('TWILIO_SID'), env('TWILIO_AUTH_TOKEN'));
        $phone = $phone ? $phone : auth('seller')->user()->phone_number;
        try {
            $client->messages->create(
                $phone,
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
     * @param null $phone
     * @throws \Twilio\Exceptions\ConfigurationException
     * @throws \Twilio\Exceptions\TwilioException
     */
    public function twilioWhatsApp($body, $phone = null){

        $twilio = new \Twilio\Rest\Client(env('TWILIO_SID'), env('TWILIO_AUTH_TOKEN'));
        $phone = $phone ? $phone : auth('seller')->user()->phone_number;
        $twilio->messages
            ->create("whatsapp:".$phone,
                array(
                    "from" => "whatsapp:".env('TWILIO_WHATSAPP'),
                    "body" => $body
                )
            );
    }

    public function guard(array $guarded)
    {
        return Auth::guard('seller');
    }

}
