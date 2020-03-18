<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cookie;

/**
 * App\Coupon
 *
 * @property int $id
 * @property string $code
 * @property string $name
 * @property int $uses
 * @property int $max_uses
 * @property bool $is_disposable
 * @property \Illuminate\Support\Carbon|null $start_at
 * @property \Illuminate\Support\Carbon|null $end_at
 * @property int|null $seller_id
 * @property int|null $product_id
 * @property int|null $sub_categories_id
 * @property int $discount
 * @property float $discount_egp
 * @property float $discount_usd
 * @property bool $is_percent
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $count
 * @property-read \App\SubCategory|null $SubCategory
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\appliedCoupon[] $appliedCoupon
 * @property-read int|null $applied_coupon_count
 * @property-read mixed $is_usable
 * @method static bool|null forceDelete()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Coupon newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Coupon newQuery()
 * @method static \Illuminate\Database\Query\Builder|\App\Coupon onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Coupon query()
 * @method static bool|null restore()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Coupon whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Coupon whereCount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Coupon whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Coupon whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Coupon whereDiscount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Coupon whereDiscountEgp($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Coupon whereDiscountUsd($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Coupon whereEndAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Coupon whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Coupon whereIsDisposable($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Coupon whereIsPercent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Coupon whereMaxUses($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Coupon whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Coupon whereProductId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Coupon whereSellerId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Coupon whereStartAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Coupon whereSubCategoriesId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Coupon whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Coupon whereUses($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Coupon withTrashed()
 * @method static \Illuminate\Database\Query\Builder|\App\Coupon withoutTrashed()
 * @mixin \Eloquent
 */
class Coupon extends Model
{

    use SoftDeletes;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'code', 'name', 'uses', 'max_uses', 'is_disposable', 'start_at', 'end_at', 'seller_id',
        'sub_categories_id', 'discount', 'discount_egp', 'discount_usd', 'is_percent', 'product_id', 'count'
    ];

    protected $casts = [
        'is_percent' => 'boolean',
        'is_disposable' => 'boolean',
        'start_at' =>'datetime',
        'end_at' =>'datetime',
    ];

    protected $appends = ['isUsable'];

    public function appliedCoupon()
    {
        return $this->hasMany(appliedCoupon::class);
    }
    public function SubCategory()
    {
        return $this->belongsTo(SubCategory::class,'sub_categories_id');
    }


    public function validateCart()
    {
        if ($this->isUsable){
            $appliedCoupon = null;
            if ($this->is_disposable){
                $appliedCoupon =  $this->appliedCoupon()
                    ->where('client_id',auth('client')->user()->id)
                    ->first();
            }
            if (!$appliedCoupon){
                return true;
            }
            return trans('You used the coupon before');
        }
        if ($this->uses >= $this->max_uses){
            return trans('All available coupon used');
        }else{
            return trans('Sorry the coupon expired');
        }
    }
    /**
     * Get the route key name.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'code';
    }


    public function getIsUsableAttribute()
    {
        return $this->isUsable();
    }

    public function isUsable(){
        $now = Carbon::now();
        if($now < $this->end_at && $now > $this->start_at &&  $this->uses < $this->max_uses ){
            return true;
        }
        return false;
    }

    public function price(){
        $currency = Cookie::get('currency');
        $price = "discount_$currency";
        return $this->$price;
    }
}
