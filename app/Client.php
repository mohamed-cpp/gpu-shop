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
 * @property int $id
 * @property int $approved
 * @property int|null $provider_id
 * @property string $name
 * @property string $username
 * @property string $phone_number
 * @property string|null $email
 * @property int|null $code
 * @property \Illuminate\Support\Carbon|null $create_code_at
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property \Illuminate\Support\Carbon|null $phone_verified_at
 * @property string $password
 * @property string|null $deleted_at
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Spatie\Permission\Models\Permission[] $permissions
 * @property-read int|null $permissions_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Spatie\Permission\Models\Role[] $roles
 * @property-read int|null $roles_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Wishlist[] $wishlist
 * @property-read int|null $wishlist_count
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Client newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Client newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Client permission($permissions)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Client query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Client role($roles, $guard = null)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Client whereApproved($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Client whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Client whereCreateCodeAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Client whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Client whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Client whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Client whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Client whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Client wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Client wherePhoneNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Client wherePhoneVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Client whereProviderId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Client whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Client whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Client whereUsername($value)
 * @mixin \Eloquent
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Order[] $orders
 * @property-read int|null $orders_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Rating[] $rating
 * @property-read int|null $rating_count
 * @property string|null $img
 * @property string|null $address
 * @property string|null $city
 * @property string|null $country
 * @property string|null $zip
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Comment[] $comment
 * @property-read int|null $comment_count
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Client whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Client whereCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Client whereCountry($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Client whereImg($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Client whereZip($value)
 */

class Client extends Authenticatable implements MustVerifyEmail
{
    use Notifiable;
    use HasRoles;


    protected $guard = 'client';

    protected $fillable = [
        'name', 'username', 'phone_number','email', 'password', 'email_verified_at'
        , 'code', 'phone_verified_at', 'create_code_at', 'img', 'address', 'city', 'country', 'zip'
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

    public function orders()
    {
        return $this->hasMany(Order::class);
    }

    public function rating()
    {
        return $this->hasMany(Rating::class);
    }

    public function comment()
    {
        return $this->morphMany(Comment::class, 'commentable');
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

    public function commentNotification($product){
        return [
            'message_en' => $this->name." Replied On $product->name_en Product",
            'message_ar' => '???????? ' . $product->name_ar . " ???? ???? ?????????? ?????? " . $this->name
        ];
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
