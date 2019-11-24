<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\App;

class SubCategory extends Model
{
    protected $fillable = [
        'name_en'
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
