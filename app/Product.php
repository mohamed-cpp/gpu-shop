<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use SoftDeletes;

    // Status Product
    const PUBLISHED = 0;
    const UNPUBLISHED = 2;

    static public $priceIs = ["egp", "usd"];

    protected $fillable = [
        'name_en', 'name_ar', 'description_en', 'description_ar',
        'title_meta_en', 'title_meta_ar', 'description_meta_ar', 'description_meta_en',
        'slug_en', 'slug_ar', 'main_image', 'status', 'price_egp', 'price_usd', 'seller_id', 'quantity',
    ];


    public static function boot()
    {
        parent::boot();
//        static::created(function (Product $product) {
//            dd('here');
//        });

    }

    /**
     * Images
     * @return \Illuminate\Database\Eloquent\Relations\MorphMany
     */
    public function images()
    {
        return $this->morphMany(Image::class, 'imageable');
    }

    /**
     * Images
     * @return \Illuminate\Database\Eloquent\Relations\MorphMany
     */
    public function subcategories()
    {
        return $this->morphMany(SubcatProduct::class, 'productable');
    }

    public function seller(){
        return $this->belongsTo(Seller::class, 'seller_id');
    }

    public function hello(){
        return 'hello';
    }


}
