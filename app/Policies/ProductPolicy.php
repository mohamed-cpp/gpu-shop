<?php

namespace App\Policies;

use App\Admin;
use App\Product;
use App\Seller;
use Illuminate\Auth\Access\HandlesAuthorization;

class ProductPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any products.
     *
     * @param  \App\Admin  $user
     * @return mixed
     */
    public function viewAny(Admin $user)
    {
        dd('wer');

    }

    /**
     * Determine whether the user can view the product.
     *
     * @param  \App\Admin  $user
     * @param  \App\Product  $product
     * @return mixed
     */
    public function view(Admin $user, Product $product)
    {
        dd('wer');

    }

    /**
     * Determine whether the user can create products.
     *
     * @param  \App\Admin  $user
     * @return mixed
     */
    public function create(Seller $user)
    {
        dd('wer');

    }

    public function edit(Seller $user)
    {
        dd('wer');

    }

    /**
     * Determine whether the user can update the product.
     *
     * @param  \App\Admin  $user
     * @param  \App\Product  $product
     * @return mixed
     */
    public function update(Seller $user, Product $product)
    {
        dd('wer');
        return $user->id === $product->seller_id;
    }

    /**
     * Determine whether the user can delete the product.
     *
     * @param  \App\Admin  $user
     * @param  \App\Product  $product
     * @return mixed
     */
    public function delete(Admin $user, Product $product)
    {
        dd('wer');

    }

    /**
     * Determine whether the user can restore the product.
     *
     * @param  \App\Admin  $user
     * @param  \App\Product  $product
     * @return mixed
     */
    public function restore(Admin $user, Product $product)
    {
        dd('wer');

    }

    /**
     * Determine whether the user can permanently delete the product.
     *
     * @param  \App\Admin  $user
     * @param  \App\Product  $product
     * @return mixed
     */
    public function forceDelete(Admin $user, Product $product)
    {
        dd('wer');

    }
}
