<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Wishlist extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'product_id', 'client_id', 'status', 'public', 'sort',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'status' => 'boolean',
        'public' => 'boolean',
    ];

//    protected $with = ['products'];

    public function products()
    {
        return $this->belongsTo(Product::class,'product_id');
    }


    public function clients()
    {
        return $this->belongsTo(Client::class,'client_id');
    }
}
