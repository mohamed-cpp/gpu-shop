<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * App\Image
 *
 * @property int $id
 * @property string $path
 * @property int $imageable_id
 * @property string $imageable_type
 * @property string|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read string $thumb
 * @property-read string $thumb_url
 * @property-read \App\Image $imageable
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Product[] $product
 * @property-read int|null $product_count
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Image newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Image newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Image query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Image whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Image whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Image whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Image whereImageableId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Image whereImageableType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Image wherePath($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Image whereUpdatedAt($value)
 * @mixin \Eloquent
 */
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
