<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\App;

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

    public function child(){
        return $this->hasMany(SubCategory::class,'parent_id');
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
