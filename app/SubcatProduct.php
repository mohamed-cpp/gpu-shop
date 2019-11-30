<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SubcatProduct extends Model
{
    use SoftDeletes;

    protected $fillable = ['productable_id', 'productable_type', 'subcategoryable_id'];

    public $with = ['productable'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphTo
     */
    public function productable()
    {
        return $this->morphTo('productable', 'productable_type', 'productable_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphToMany
     */
    public function product()
    {
        return $this->morphedByMany(Product::class, 'productable', 'subcat_products', 'id');
    }
}
