<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\App;

/**
 * App\ProductSubDetails
 *
 * @property int $id
 * @property int $details_id
 * @property string $name_en
 * @property string $name_ar
 * @property float|null $price_egp
 * @property float|null $price_usd
 * @property int|null $quantity
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read mixed $name
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Image[] $images
 * @property-read int|null $images_count
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductSubDetails newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductSubDetails newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductSubDetails query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductSubDetails whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductSubDetails whereDetailsId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductSubDetails whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductSubDetails whereNameAr($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductSubDetails whereNameEn($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductSubDetails wherePriceEgp($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductSubDetails wherePriceUsd($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductSubDetails whereQuantity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductSubDetails whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class ProductSubDetails extends Model
{
    protected $fillable = [
        'details_id','name_en','name_ar','price_egp','price_usd','quantity'
    ];

    public $with = ['images'];


    public static function boot()
    {
        parent::boot();
        static::deleting(function($subDetails) {
            $subDetails->images()->delete();
        });

    }
    public function images()
    {
        return $this->morphMany(Image::class, 'imageable');
    }

    public function getNameAttribute()
    {
        $locale = App::getLocale();
        $column = "name_" . $locale;
        return $this->{$column};
    }
}
