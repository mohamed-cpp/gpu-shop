<?php

namespace App;

use App\Notifications\SellerResetPasswordNotification;
use App\Notifications\SendSellerVerificationEmailNotification;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Spatie\Permission\Traits\HasRoles;

/**
 * App\Models\Seller
 *
 * @method static Builder|Seller whereId($value)
 * @property int $id
 * @property bool $approved
 * @property bool $company_or_individual
 * @property string $name
 * @property string $username
 * @property string $phone_number
 * @property string|null $email
 * @property int|null $code
 * @property \Illuminate\Support\Carbon|null $create_code_at
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property \Illuminate\Support\Carbon|null $phone_verified_at
 * @property string $password
 * @property string|null $company_logo
 * @property string $id_or_passport
 * @property string|null $tax
 * @property string|null $deleted_at
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $company_id
 * @property bool $is_fixed
 * @property int|null $fee
 * @property float|null $fee_egp
 * @property float|null $fee_usd
 * @property float|null $balance_usd
 * @property float|null $balance_egp
 * @property-read mixed $fee_currency
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Spatie\Permission\Models\Permission[] $permissions
 * @property-read int|null $permissions_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Product[] $products
 * @property-read int|null $products_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Spatie\Permission\Models\Role[] $roles
 * @property-read int|null $roles_count
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Seller newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Seller newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Seller permission($permissions)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Seller query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Seller role($roles, $guard = null)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Seller whereApproved($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Seller whereBalanceEgp($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Seller whereBalanceUsd($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Seller whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Seller whereCompanyId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Seller whereCompanyLogo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Seller whereCompanyOrIndividual($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Seller whereCreateCodeAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Seller whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Seller whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Seller whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Seller whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Seller whereFee($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Seller whereFeeEgp($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Seller whereFeeUsd($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Seller whereIdOrPassport($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Seller whereIsFixed($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Seller whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Seller wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Seller wherePhoneNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Seller wherePhoneVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Seller whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Seller whereTax($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Seller whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Seller whereUsername($value)
 * @mixin \Eloquent
 * @property string|null $img
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Comment[] $comment
 * @property-read int|null $comment_count
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Seller whereImg($value)
 */

class Seller extends Authenticatable implements MustVerifyEmail
{

    use Notifiable;
    use HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'approved', 'company_or_individual', 'phone_number', 'username',
        'code', 'create_code_at', 'email_verified_at', 'phone_verified_at',
        'company_logo', 'id_or_passport', 'tax', 'company_id', 'is_fixed', 'fee', 'fee_egp', 'fee_usd',
        'balance_usd', 'balance_egp',
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
        'is_fixed' => 'boolean',
    ];

    public function products(){
        return $this->hasMany(Product::class,'seller_id');
    }

    public function comment()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
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

    public function getFeeCurrencyAttribute()
    {
        $currency = Cookie::get('currency');
        $price = "fee_$currency";
        return $this->$price;
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

    public function commentNotification($name){
        return "Seller Replied On Has Product $name";
    }

    public function guard(array $guarded)
    {
        return Auth::guard('seller');
    }

    public function hello(){
        return 'hello';
    }

}
