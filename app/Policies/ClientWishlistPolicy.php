<?php

namespace App\Policies;

use App\Admin;
use App\Client;
use App\Wishlist;
use Illuminate\Auth\Access\HandlesAuthorization;

class ClientWishlistPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function update(?Client $client, Wishlist $wishlist)
    {
        return auth('client')->user()->id === $wishlist->client_id;
    }
}
