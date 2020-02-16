<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * App\SubcatProduct
 *
 * @property int $id
 * @property int $productable_id
 * @property string $productable_type
 * @property int $subcategoryable_id
 * @property string|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Product[] $product
 * @property-read int|null $product_count
 * @property-read \App\SubcatProduct $productFrontEndClient
 * @property-read \App\SubcatProduct $productableAdmin
 * @method static \Illuminate\Database\Eloquent\Builder|\App\SubcatProduct newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\SubcatProduct newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\SubcatProduct query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\SubcatProduct whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\SubcatProduct whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\SubcatProduct whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\SubcatProduct whereProductableId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\SubcatProduct whereProductableType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\SubcatProduct whereSubcategoryableId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\SubcatProduct whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class SubcatProduct extends Model
{

    protected $fillable = ['productable_id', 'productable_type', 'subcategoryable_id'];

    public $with = ['productFrontEndClient'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphTo
     */
    public function productableAdmin()
    {
        return $this->morphTo('productable', 'productable_type', 'productable_id');
    }
    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphTo
     */
    public function productFrontEndClient()
    {
        return $this->morphTo('productable', 'productable_type', 'productable_id')
            ->where('products.status','=',1)
            ->where('products.approved','=',1);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphToMany
     */
    public function product()
    {
        return $this->morphedByMany(Product::class, 'productable', 'subcat_products', 'id');
    }
}
