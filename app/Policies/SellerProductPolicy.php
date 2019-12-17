<?php

namespace App\Policies;

use App\Admin;
use App\Product;
use App\Seller;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Auth\Access\Response;

class SellerProductPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {

    }

    public function update(?Seller $seller, Product $product)
    {
        return auth('seller')->user()->id === $product->seller_id;
    }

    public function editDetails(?Seller $seller, Product $product)
    {
        return auth('seller')->user()->id === $product->seller_id;
    }

}
