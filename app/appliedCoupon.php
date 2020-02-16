<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * App\appliedCoupon
 *
 * @property int $id
 * @property int $client_id
 * @property int $coupon_id
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static bool|null forceDelete()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\appliedCoupon newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\appliedCoupon newQuery()
 * @method static \Illuminate\Database\Query\Builder|\App\appliedCoupon onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\appliedCoupon query()
 * @method static bool|null restore()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\appliedCoupon whereClientId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\appliedCoupon whereCouponId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\appliedCoupon whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\appliedCoupon whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\appliedCoupon whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\appliedCoupon whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\appliedCoupon withTrashed()
 * @method static \Illuminate\Database\Query\Builder|\App\appliedCoupon withoutTrashed()
 * @mixin \Eloquent
 */
class appliedCoupon extends Model
{
    use SoftDeletes;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'client_id', 'coupon_id',
    ];
}
