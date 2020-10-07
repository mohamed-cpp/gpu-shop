<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Http\UploadedFile;
use Intervention\Image\Facades\Image as EditerImage;

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

    const PATH = Product::PATH;
    const BIG_IMAGE_PATH = Product::BIG_IMAGE_PATH;
    const THUMBNAIL_PATH = Product::THUMBNAIL_PATH;

    protected $fillable = ['path', 'imageable_type', 'imageable_id'];

    //protected $appends = ['thumb_url', 'small_url', 'big_url', 'original_url'];

    public static function boot()
    {
        parent::boot();
        self::deleted(function (Image $image) {
            (new Filesystem())->delete(Image::PATH.$image->path);
            (new Filesystem())->delete(Image::BIG_IMAGE_PATH.$image->path);
            (new Filesystem())->delete(Image::THUMBNAIL_PATH.$image->path);
        });
    }

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

    public function setPathAttribute($file)
    {
        if ($file instanceof UploadedFile) {
            $name = $file->hashName();
            $normal_image = EditerImage::make($file->getRealPath());
            $normal_image->save(public_path(self::PATH.$name));

            $image_resize = EditerImage::make(public_path(self::PATH.$name));
            $image_resize->resize(1200, 1125);
            $image_resize->save(public_path(self::BIG_IMAGE_PATH.$name));

            addWatermark($name);
            addWatermark($name,self::BIG_IMAGE_PATH);
            thumbnail($name);

            $this->attributes['path'] = $name;
        }
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
