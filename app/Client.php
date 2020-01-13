<?php

namespace App;

use App\Notifications\ClientResetPasswordNotification;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Notifications\SendClientVerificationEmailNotification;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;


/**
 * App\Models\Client
 *
 * @method static Builder|Client whereEmail($value)
 */

class Client extends Authenticatable implements MustVerifyEmail
{
    use Notifiable;
    use HasRoles;


    protected $fillable = [
        'name', 'username', 'phone_number','email', 'password', 'email_verified_at'
        , 'code', 'phone_verified_at', 'create_code_at'
    ];

    protected $hidden = ['password', 'remember_token'];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'phone_verified_at' =>'datetime',
        'create_code_at' => 'datetime',
    ];


    public function wishlist()
    {
        return $this->hasMany(Wishlist::class);
    }
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
     * Get the route key name.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return "username";
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
        $phone = $phone ? $phone : auth('client')->user()->phone_number;
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
        $phone = $phone ? $phone : auth('client')->user()->phone_number;
        $twilio->messages
            ->create("whatsapp:".$phone,
                array(
                    "from" => "whatsapp:".env('TWILIO_WHATSAPP'),
                    "body" => $body
                )
            );
    }

    public function generateCode(){
        $code = rand(100000,999999);
        return $code;
    }

    public function isCodeValid(){
        $time = auth('client')->user()->create_code_at;
        return $time ? $time->diffInMinutes() < 15 : false ;
    }

    public function isCode($code){
         auth('client')->user();
        return auth('client')->user()->code == $code;
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
