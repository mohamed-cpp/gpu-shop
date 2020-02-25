<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * App\Order
 *
 * @property int $id
 * @property string $first_name
 * @property string $last_name
 * @property string $address
 * @property string $city
 * @property string $country
 * @property string|null $zip
 * @property string|null $e-mail
 * @property string $phone
 * @property int|null $order_provider_id
 * @property string|null $status_provider
 * @property int $client_id
 * @property string $client_username
 * @property int $status
 * @property int $pay_by
 * @property float|null $total_after_discount
 * @property float|null $total
 * @property string $currency
 * @property string $ip
 * @property string|null $where
 * @property string|null $client_note
 * @property string|null $coupon
 * @property int $seen_notes
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static bool|null forceDelete()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order newQuery()
 * @method static \Illuminate\Database\Query\Builder|\App\Order onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order query()
 * @method static bool|null restore()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order whereCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order whereClientId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order whereClientNote($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order whereClientUsername($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order whereCountry($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order whereCoupon($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order whereCurrency($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order whereEMail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order whereFirstName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order whereIp($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order whereLastName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order whereOrderProviderId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order wherePayBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order whereSeenNotes($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order whereStatusProvider($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order whereTotal($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order whereTotalAfterDiscount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order whereWhere($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order whereZip($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Order withTrashed()
 * @method static \Illuminate\Database\Query\Builder|\App\Order withoutTrashed()
 * @mixin \Eloquent
 * @property \Illuminate\Support\Carbon|null $shipped_at
 * @property \Illuminate\Support\Carbon|null $delivered_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\BalanceWebsite[] $balanceWebsite
 * @property-read int|null $balance_website_count
 * @property-read mixed $status_order
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\ProductOrder[] $productOrder
 * @property-read int|null $product_order_count
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order whereDeliveredAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order whereShippedAt($value)
 */
class Order extends Model
{
    use SoftDeletes;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    const ORDERED = 0;
    const PROCESSING = 1;
    const PACKED = 2;
    const SHIPPED = 3;
    const DELIVERED = 4;


    protected $fillable = [
        'order_provider_id', 'client_id', 'status', 'pay_by', 'where', 'client_note', 'coupon',
        'seen_notes', 'total_after_discount', 'total', 'currency', 'ip', 'client_username',
        'status_provider', 'first_name', 'last_name', 'address', 'city', 'country', 'zip', 'e-mail', 'phone',
        'shipped_at', 'delivered_at'
    ];

    protected $appends = ['status_order'];


    protected $casts = [
        'shipped_at' =>'datetime',
        'delivered_at' => 'datetime',
    ];

    public function productOrder()
    {
        return $this->hasMany(ProductOrder::class,'order_id');
    }

    public function balanceWebsite()
    {
        return $this->morphMany(BalanceWebsite::class, 'balanceable');
    }


    public function getStatusOrderAttribute()
    {
        if($this->status == Order::ORDERED){
            if ($this->status == 'Cash'){
                return "Ordered";
            }
            return "Paid and Ordered";
        }elseif ($this->status == Order::PROCESSING){
            return "The Order Processing";
        }elseif ($this->status == Order::PACKED){
            return "The Order Packed";
        }elseif ($this->status == Order::SHIPPED){
            return "The order in way to you";
        }elseif ($this->status == Order::DELIVERED){
            return "Delivered";
        }
    }
}
