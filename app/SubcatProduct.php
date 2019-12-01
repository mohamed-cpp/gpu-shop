<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SubcatProduct extends Model
{
    use SoftDeletes;

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
            ->where('products.status','=',1);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphToMany
     */
    public function product()
    {
        return $this->morphedByMany(Product::class, 'productable', 'subcat_products', 'id');
    }
}
