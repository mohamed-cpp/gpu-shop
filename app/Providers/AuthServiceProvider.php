<?php

namespace App\Providers;

use App\Policies\ProductPolicy;
use App\Policies\SellerProductPolicy;
use App\Product;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Product' => 'App\Policies\SellerProductPolicy',
        'App\Wishlist' => 'App\Policies\ClientWishlistPolicy',
        'App\Order' => 'App\Policies\OrderPolicy',
//        Product::class => SellerProductPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        if (auth('web')->check()){
            Gate::before(function ($user, $ability) {
                return $user->hasRole('Super Admin') ? true : null;
            });
        }
    }
}
