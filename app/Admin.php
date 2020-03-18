<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;

/**
 * App\Admin
 *
 * @property int $id
 * @property bool $enable
 * @property string $name
 * @property string $username
 * @property string $phone_number
 * @property string|null $email
 * @property int|null $code
 * @property \Illuminate\Support\Carbon|null $create_code_at
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property \Illuminate\Support\Carbon|null $phone_verified_at
 * @property string $password
 * @property string $id_or_passport
 * @property string $profile_picture
 * @property string|null $deleted_at
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\Spatie\Permission\Models\Permission[] $permissions
 * @property-read int|null $permissions_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Spatie\Permission\Models\Role[] $roles
 * @property-read int|null $roles_count
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Admin newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Admin newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Admin permission($permissions)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Admin query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Admin role($roles, $guard = null)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Admin whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Admin whereCreateCodeAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Admin whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Admin whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Admin whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Admin whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Admin whereEnable($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Admin whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Admin whereIdOrPassport($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Admin whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Admin wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Admin wherePhoneNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Admin wherePhoneVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Admin whereProfilePicture($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Admin whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Admin whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Admin whereUsername($value)
 * @mixin \Eloquent
 * @property string|null $img
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Comment[] $comment
 * @property-read int|null $comment_count
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Admin whereImg($value)
 */
class Admin extends Authenticatable
{

    use HasRoles;
    use Notifiable;

    protected $guard = 'admin';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'enable', 'phone_number', 'username', 'code', 'create_code_at',
        'email_verified_at', 'phone_verified_at', 'id_or_passport', 'profile_picture',
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
        'enable' => 'boolean',
    ];


    public function comment()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }

    public function commentNotification($product){
        return [
            'message_en' => "Admin Replied On $product->name_en Product",
            'message_ar' => 'منتج ' . $product->name_ar . " رد مشرف فى تعليق على " . $this->name
        ];
    }
}
