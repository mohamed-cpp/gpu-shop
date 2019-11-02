<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'App\Http\Controllers';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
        //

        parent::boot();
    }

    /**
     * Define the routes for the application.
     *
     * @return void
     */
    public function map()
    {
        $this->mapAdminRoutes();

        $this->mapSellerRoutes();

        $this->mapApiRoutes();

        $this->mapWebRoutes();

        //
    }

    /**
     * Define the "admin" routes for the application.
     * These routes all receive session state, CSRF protection, etc.
     * @return void
     */
    protected function mapAdminRoutes()
    {
        $locale = app('LaravelLocalization')->setLocale();

        Route::middleware('web')
            ->prefix($locale)
            ->namespace($this->namespace)
            ->group(base_path('routes/admin.php'));
    }
    /**
     * Define the "web" routes for the application.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @return void
     */
    protected function mapWebRoutes()
    {
        $locale = app('LaravelLocalization')->setLocale();

        Route::middleware('web')
            ->prefix($locale)
            ->namespace($this->namespace)
            ->domain(env('APP_DOMAIN'))
            ->group(base_path('routes/web.php'));
    }

    /**
     * Define the "Seller" routes for the application.
     * These routes all receive session state, CSRF protection, etc.
     * @return void
     */
    protected function mapSellerRoutes()
    {
        $locale = app('LaravelLocalization')->setLocale();

        Route::middleware('web')
            ->prefix($locale)
            ->namespace($this->namespace)
            ->domain('sellers.' . env('APP_DOMAIN'))
            ->group(base_path('routes/seller.php'));
    }

    /**
     * Define the "api" routes for the application.
     *
     * These routes are typically stateless.
     *
     * @return void
     */
    protected function mapApiRoutes()
    {
        Route::prefix('api')
             ->middleware('api')
             ->namespace($this->namespace)
             ->group(base_path('routes/api.php'));
    }
}
