<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\App;

class ProductDetails extends Model
{
    protected $fillable = [
        'name_en','name_ar'
    ];

    public $with = ['subDetails'];

    public function subDetails()
    {
        return $this->hasMany(ProductSubDetails::class,'details_id');
    }


    public function getNameAttribute()
    {
        $locale = App::getLocale();
        $column = "name_" . $locale;
        return $this->{$column};
    }



}
