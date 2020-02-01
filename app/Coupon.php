<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cookie;

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
        'sub_categories_id', 'discount', 'discount_egp', 'discount_usd', 'is_percent', 'product_id'
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
            return 'used';
        }
        if ($this->uses > $this->max_uses){
            return 'max';
        }else{
            return 'time';
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
