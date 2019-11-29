<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\App;

class SubCategory extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name_en','name_ar','sort','status','slug_en','slug_ar','category_id','image'
    ];

    protected $casts = [
        'status' => 'boolean',
    ];

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
}
