<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\App;

/**
 * App\SubCategory
 *
 * @property int $id
 * @property string $name_en
 * @property string $name_ar
 * @property string|null $slug_en
 * @property string|null $slug_ar
 * @property string|null $image
 * @property int|null $category_id
 * @property int|null $sort
 * @property bool $status
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property bool $parent
 * @property int|null $parent_id
 * @property-read \App\Category|null $category
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\SubCategory[] $child
 * @property-read int|null $child_count
 * @property-read mixed $name
 * @property-read mixed $slug
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\SubcatProduct[] $products
 * @property-read int|null $products_count
 * @method static bool|null forceDelete()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\SubCategory newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\SubCategory newQuery()
 * @method static \Illuminate\Database\Query\Builder|\App\SubCategory onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\SubCategory query()
 * @method static bool|null restore()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\SubCategory whereCategoryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\SubCategory whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\SubCategory whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\SubCategory whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\SubCategory whereImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\SubCategory whereNameAr($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\SubCategory whereNameEn($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\SubCategory whereParent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\SubCategory whereParentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\SubCategory whereSlugAr($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\SubCategory whereSlugEn($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\SubCategory whereSort($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\SubCategory whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\SubCategory whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\SubCategory withTrashed()
 * @method static \Illuminate\Database\Query\Builder|\App\SubCategory withoutTrashed()
 * @mixin \Eloquent
 */
class SubCategory extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name_en','name_ar','sort','status','slug_en','slug_ar','category_id','image','parent','parent_id'
    ];

    protected $casts = [
        'status' => 'boolean',
        'parent' => 'boolean',
    ];
//    protected $with = ['child'];
    /**
     * Category
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category()
    {
        return $this->belongsTo(Category::class,'category_id');
    }

    public function products(){
        return $this->hasMany(SubcatProduct::class,'subcategoryable_id');
    }

    public function manyProducts(){
        return $this->hasManyThrough(
            'App\Product',
            'App\SubcatProduct',
            'subcategoryable_id',
            'id',
            'id',
            'productable_id')
            ->where('products.status','=',1)
            ->where('products.approved','=',1);
    }

    public function child(){
        return $this->hasMany(SubCategory::class,'parent_id');
    }
    public function paginateManyProducts(){
        return $this->manyProducts()->paginate(15);
    }

    public function paginateManyOfferProducts(){
        return $this->manyProducts()
            ->where([['products.offer_start_at', '<', now()],
                    ['products.offer_end_at', '>', now()]])
            ->paginate(15);
    }

    public function paginateManyFilterProducts($column,$keywords,$currency,$request,$isOfferPage,$sort){
        return $this->manyProducts()
            ->where([[$column, 'LIKE', '%' . $keywords . '%' ],
                ["products.{$isOfferPage[0]}price_".$currency, '<=',  $request['max'] ],
                ["products.{$isOfferPage[0]}price_".$currency, '>=',  $request['min'] ],])
            ->where($isOfferPage[1])
            ->orderBy($sort[1][0], $sort[0][0])
            ->paginate(15);
    }

    public static function findBySlugsOrFail($slug){
        return self::where('slug_ar',$slug)
            ->orWhere('slug_en',$slug)
            ->firstOrFail();
    }

    public function subCategoryPath(){
        return 'storage/admin/subcategory/images/';
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
}
