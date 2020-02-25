<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\OptionsProductOrder
 *
 * @property int $id
 * @property int $product_order_id
 * @property int $product_id
 * @property string $option
 * @property int $option_id
 * @property string $sub_option
 * @property int $sub_option_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\OptionsProductOrder newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\OptionsProductOrder newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\OptionsProductOrder query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\OptionsProductOrder whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\OptionsProductOrder whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\OptionsProductOrder whereOption($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\OptionsProductOrder whereOptionId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\OptionsProductOrder whereProductId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\OptionsProductOrder whereProductOrderId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\OptionsProductOrder whereSubOption($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\OptionsProductOrder whereSubOptionId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\OptionsProductOrder whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class OptionsProductOrder extends Model
{
    protected $fillable = [
        'product_order_id', 'product_id', 'option', 'option_id', 'sub_option', 'sub_option_id',
    ];
}
