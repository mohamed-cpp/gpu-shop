<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cookie;
use Cviebrock\EloquentTaggable\Taggable;

class Product extends Model
{
    use SoftDeletes;
    use Taggable;

    // Status Product
    const PUBLISHED = 0;
    const UNPUBLISHED = 2;

    static public $priceIs = ["egp", "usd"];

    protected $fillable = [
        'name_en', 'name_ar', 'description_en', 'description_ar',
        'title_meta_en', 'title_meta_ar', 'description_meta_ar', 'description_meta_en',
        'slug_en', 'slug_ar', 'main_image', 'status', 'price_egp', 'price_usd', 'seller_id', 'quantity',
        'offer_price_egp', 'offer_price_usd', 'offer_start_at', 'offer_end_at', 'quantity_offer', 'approved'
    ];

    protected $casts = [
        'status' => 'boolean',
        'offer_start_at' =>'datetime',
        'offer_end_at' =>'datetime',
    ];
//    public $with = ['images'];

    protected $appends = ['subcategories_ids','isOffer'];

    public static function boot()
    {
        parent::boot();
//        static::created(function (Product $product) {
//            dd($product);
//            $product->images()->saveMany($product);
//        });

    }

    public function details()
    {
        return $this->hasMany(ProductDetails::class);
    }

    public function wishlist()
    {
        return $this->hasMany(Wishlist::class);
    }
    /**
     * Images
     * @return \Illuminate\Database\Eloquent\Relations\MorphMany
     */
    public function images()
    {
        return $this->morphMany(Image::class, 'imageable');
    }

    public function subcategories()
    {
        return $this->morphMany(SubcatProduct::class, 'productable');
    }

    public function seller(){
        return $this->belongsTo(Seller::class, 'seller_id');
    }

    public function getSubcategoriesIdsAttribute()
    {
        return $this->subcategories()->pluck('subcategoryable_id');
    }

    public function getNameAttribute()
    {
        $locale = App::getLocale();
        $column = "name_" . $locale;
        return $this->{$column};
    }

    public function getSlugAttribute()
    {
        $locale = App::getLocale();
        $column = "slug_" . $locale;
        return $this->{$column};
    }

    public function getDescriptionAttribute()
    {
        $locale = App::getLocale();
        $column = "description_" . $locale;
        return $this->{$column};
    }

    /**
     * Get the route key name.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        $locale = App::getLocale();
        return "slug_" . $locale;
    }

    public function getIsOfferAttribute()
    {
        return $this->isOffer();
    }

    public function setOfferStartAtAttribute($value)
    {
        return $this->attributes['offer_start_at'] = empty($value) ? null : \Carbon\Carbon::parse($value)->format('Y-m-d H:i:s');

    }

    public function setOfferEndAtAttribute($value)
    {
        return $this->attributes['offer_end_at'] = empty($value) ? null : \Carbon\Carbon::parse($value)->format('Y-m-d H:i:s');
    }

    public function isOffer(){
        $now = Carbon::now();
        $start = $this->offer_start_at;
        $end =  $this->offer_end_at;
        if( $now < $end){
            if($now > $start){
                return true;
            }
        }
        return false;
    }

    public function offerPrice($status = true){
        $cookie = strtolower(Cookie::get('currency'));
        $currency = $cookie ? $cookie : 'usd';
        $price = "offer_price_$currency";
        if($this->isOffer() == true && $status){
            return $this->$price;
        }
        $price = "price_$currency";
        return $this->$price;
    }


    public function hello(){
        return 'hello';
    }


}
