<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * App\ProductOrder
 *
 * @property int $id
 * @property int $order_id
 * @property int $client_id
 * @property int $seller_id
 * @property int $product_id
 * @property int $status
 * @property string|null $for
 * @property int $qty
 * @property int $coupon
 * @property float|null $price_after_discount
 * @property float|null $price
 * @property float|null $fee
 * @property string $currency
 * @property string|null $seller_note
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static bool|null forceDelete()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductOrder newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductOrder newQuery()
 * @method static \Illuminate\Database\Query\Builder|\App\ProductOrder onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductOrder query()
 * @method static bool|null restore()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductOrder whereClientId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductOrder whereCoupon($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductOrder whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductOrder whereCurrency($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductOrder whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductOrder whereFee($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductOrder whereFor($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductOrder whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductOrder whereOrderId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductOrder wherePrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductOrder wherePriceAfterDiscount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductOrder whereProductId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductOrder whereQty($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductOrder whereSellerId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductOrder whereSellerNote($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductOrder whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductOrder whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\ProductOrder withTrashed()
 * @method static \Illuminate\Database\Query\Builder|\App\ProductOrder withoutTrashed()
 * @mixin \Eloquent
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\OptionsProductOrder[] $optionsProductOrder
 * @property-read int|null $options_product_order_count
 * @property-read \App\Order $order
 * @property-read \App\Product $product
 */
class ProductOrder extends Model
{
    use SoftDeletes;


    const ORDERED = 0;
    const PROCESSING = 1;
    const PACKED = 2;
    const SHIPPED = 3;
    const DELIVERED = 4;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'order_id', 'client_id', 'seller_id', 'status', 'for', 'qty', 'coupon', 'seller_note',
        'price_after_discount', 'price', 'fee', 'currency', 'product_id'
    ];


    protected $with = ['optionsProductOrder','product'];

    public function optionsProductOrder()
    {
        return $this->hasMany(OptionsProductOrder::class,'product_order_id');
    }

    public function product()
    {
        return $this->belongsTo(Product::class,'product_id');
    }

    public function order()
    {
        return $this->belongsTo(Order::class,'order_id');
    }

    public function bought($id,$idProduct){
        $order = $this->whereClientId($id)
            ->without(['optionsProductOrder','product'])
            ->whereProductId($idProduct)
            ->whereFor(null)
            ->with('order')
            ->latest()
            ->first();

        return $order->order->status === Order::DELIVERED;
    }
}
