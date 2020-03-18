<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Wishlist
 *
 * @property int $id
 * @property int $product_id
 * @property int $client_id
 * @property bool $public
 * @property float $sort
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Client $clients
 * @property-read \App\Product $products
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Wishlist newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Wishlist newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Wishlist query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Wishlist whereClientId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Wishlist whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Wishlist whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Wishlist whereProductId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Wishlist wherePublic($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Wishlist whereSort($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Wishlist whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Wishlist extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'product_id', 'client_id', 'status', 'public', 'sort',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'status' => 'boolean',
        'public' => 'boolean',
    ];

//    protected $with = ['products'];

    public function products()
    {
        return $this->belongsTo(Product::class,'product_id');
    }


    public function clients()
    {
        return $this->belongsTo(Client::class,'client_id');
    }
}
