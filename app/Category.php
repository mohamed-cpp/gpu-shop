<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\App;

class Category extends Model
{
    protected $fillable = [
        'name_en','name_ar','sort','status'
    ];

    protected $casts = [
        'status' => 'boolean',
    ];

    /**
     * Cities
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function subCategories()
    {
        return $this->hasMany(SubCategory::class);
    }

    public function getNameAttribute()
    {
        $locale = App::getLocale();
        $column = "name_" . $locale;
        return $this->{$column};
    }
}
