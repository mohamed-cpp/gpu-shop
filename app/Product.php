<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cookie;
use Cviebrock\EloquentTaggable\Taggable;

/**
 * App\Product
 *
 * @property int $id
 * @property string $name_en
 * @property string $name_ar
 * @property string $description_en
 * @property string $description_ar
 * @property string|null $title_meta_en
 * @property string|null $title_meta_ar
 * @property string|null $description_meta_en
 * @property string|null $description_meta_ar
 * @property string $slug_en
 * @property string $slug_ar
 * @property string $main_image
 * @property bool $status
 * @property int $approved
 * @property float $price_egp
 * @property float $price_usd
 * @property float|null $offer_price_egp
 * @property float|null $offer_price_usd
 * @property \Illuminate\Support\Carbon|null $offer_start_at
 * @property \Illuminate\Support\Carbon|null $offer_end_at
 * @property int $seller_id
 * @property int $quantity
 * @property int|null $quantity_offer
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property float|null $weight
 * @property bool $fee
 * @property float|null $fee_egp
 * @property float|null $fee_usd
 * @property float|null $offer_fee_egp
 * @property float|null $offer_fee_usd
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\ProductDetails[] $details
 * @property-read int|null $details_count
 * @property-read mixed $description
 * @property-read mixed $fee_currency
 * @property-read mixed $is_offer
 * @property-read mixed $name
 * @property-read mixed $slug
 * @property-read mixed $subcategories_ids
 * @property-read array $tag_array
 * @property-read array $tag_array_normalized
 * @property-read string $tag_list
 * @property-read string $tag_list_normalized
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Image[] $images
 * @property-read int|null $images_count
 * @property-read \App\Seller $seller
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\SubcatProduct[] $subcategories
 * @property-read int|null $subcategories_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Cviebrock\EloquentTaggable\Models\Tag[] $tags
 * @property-read int|null $tags_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Wishlist[] $wishlist
 * @property-read int|null $wishlist_count
 * @method static bool|null forceDelete()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product isNotTagged()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product isTagged()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product newQuery()
 * @method static \Illuminate\Database\Query\Builder|\App\Product onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product query()
 * @method static bool|null restore()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereApproved($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereDescriptionAr($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereDescriptionEn($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereDescriptionMetaAr($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereDescriptionMetaEn($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereFee($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereFeeEgp($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereFeeUsd($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereMainImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereNameAr($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereNameEn($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereOfferEndAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereOfferFeeEgp($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereOfferFeeUsd($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereOfferPriceEgp($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereOfferPriceUsd($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereOfferStartAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product wherePriceEgp($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product wherePriceUsd($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereQuantity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereQuantityOffer($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereSellerId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereSlugAr($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereSlugEn($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereTitleMetaAr($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereTitleMetaEn($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereWeight($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product withAllTags($tags)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product withAnyTags($tags)
 * @method static \Illuminate\Database\Query\Builder|\App\Product withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product withoutAllTags($tags, $includeUntagged = false)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product withoutAnyTags($tags, $includeUntagged = false)
 * @method static \Illuminate\Database\Query\Builder|\App\Product withoutTrashed()
 * @mixin \Eloquent
 * @property int $rating_of_product
 * @property int $count_rating
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Rating[] $rating
 * @property-read int|null $rating_count
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereCountRating($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereRatingOfProduct($value)
 */
class Product extends Model
{
    use SoftDeletes;
    use Taggable;

    // Status Product
    const ENABLED = 1;
    const DISABLED = 0;

    const DISAPPROVED = 0;
    const APPROVED = 1;
    const REJECTED = 2;

    static public $priceIs = ["egp", "usd"];

    protected $fillable = [
        'name_en', 'name_ar', 'description_en', 'description_ar', 'username_seller',
        'title_meta_en', 'title_meta_ar', 'description_meta_ar', 'description_meta_en',
        'slug_en', 'slug_ar', 'main_image', 'status', 'price_egp', 'price_usd', 'seller_id', 'quantity',
        'offer_price_egp', 'offer_price_usd', 'offer_start_at', 'offer_end_at', 'quantity_offer', 'approved',
        'weight', 'fee', 'fee_egp', 'fee_usd', 'offer_fee_egp', 'offer_fee_usd', 'rating_of_product', 'count_rating'
    ];

    protected $casts = [
        'status' => 'boolean',
        'fee' => 'boolean',
        'offer_start_at' =>'datetime',
        'offer_end_at' =>'datetime',
    ];
//    public $with = ['images'];

//    protected $appends = ['subcategories_ids','isOffer'];
    protected $appends = ['isOffer'];

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

    public function rating()
    {
        return $this->hasMany(Rating::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class)->whereNull('parent_id');
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

    public function getFeeCurrencyAttribute()
    {
        $currency = Cookie::get('currency');
        $price = "fee_$currency";
        return $this->$price;
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
        $currency = Cookie::get('currency');
        $price = "offer_price_$currency";
        if($this->isOffer() == true && $status){
            return $this->$price;
        }
        $price = "price_$currency";
        return $this->$price;
    }


    public function scopeEnabled(Builder $query)
    {
        return $query->where('status', self::ENABLED)
                    ->where('approved', self::APPROVED);
    }


}
