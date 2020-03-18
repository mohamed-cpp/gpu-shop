<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\App;

/**
 * App\ProductDetails
 *
 * @property int $id
 * @property int $product_id
 * @property string $name_en
 * @property string $name_ar
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read mixed $name
 * @property-read \App\Product $product
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\ProductSubDetails[] $subDetails
 * @property-read int|null $sub_details_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\ProductSubDetails[] $subDetailsWithoutImage
 * @property-read int|null $sub_details_without_image_count
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductDetails newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductDetails newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductDetails query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductDetails whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductDetails whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductDetails whereNameAr($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductDetails whereNameEn($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductDetails whereProductId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductDetails whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class ProductDetails extends Model
{
    protected $fillable = [
        'name_en','name_ar'
    ];

    public $with = ['subDetails'];

    public static function boot()
    {
        parent::boot();
        static::deleting(function($details) {
            $details->subDetails()->get()->each(function ($item) {
                $item->delete();
            });
        });

    }

    public function subDetails()
    {
        return $this->hasMany(ProductSubDetails::class,'details_id');
    }
    public function subDetailsWithoutImage()
    {
        return $this->hasMany(ProductSubDetails::class,'details_id')->without('images');
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function getNameAttribute()
    {
        $locale = App::getLocale();
        $column = "name_" . $locale;
        return $this->{$column};
    }



}
