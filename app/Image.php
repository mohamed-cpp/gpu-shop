<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Image extends Model
{

    protected $fillable = ['path', 'imageable_type', 'imageable_id'];

    //protected $appends = ['thumb_url', 'small_url', 'big_url', 'original_url'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphTo
     */
    public function imageable()
    {
        return $this->morphTo('imageable', 'imageable_type', 'imageable_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphToMany
     */
    public function product()
    {
        return $this->morphedByMany(Product::class, 'imageable', 'images', 'imageable_id');
    }

    /**
     * @return string
     */
    public function getThumbAttribute()
    {
        //
    }

    /**
     * @return string
     */
    public function getThumbUrlAttribute()
    {
        //
    }
}
