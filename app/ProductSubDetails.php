<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\App;

class ProductSubDetails extends Model
{
    protected $fillable = [
        'details_id','name_en','name_ar','price_egp','price_usd','quantity'
    ];

//    public $with = ['images'];

    public function images()
    {
        return $this->morphMany(Image::class, 'imageable');
    }

    public function getNameAttribute()
    {
        $locale = App::getLocale();
        $column = "name_" . $locale;
        return $this->{$column};
    }
}
