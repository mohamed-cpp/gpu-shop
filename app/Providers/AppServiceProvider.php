<?php

namespace App\Providers;

use App\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\ServiceProvider;
use Mcamara\LaravelLocalization\LaravelLocalization;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        \View::composer('client.layout._sideBar', function ($view) {
            $categories = \Cache::rememberForever('categories', function () {

                return Category::with(array('subCategories' => function($query){
                    $query->where('status',true)->orderBy('sort','DESC')
                        ->with(array('child' => function($query){
                        $query->where('status',true)->orderBy('sort','DESC');
                    }));
                }))
                    ->where('categories.status', '=', '1')
                    ->orderBy('categories.sort','DESC')
                    ->get();
                });

            $view->with('categories', $categories);
        });

        $this->app->singleton('LaravelLocalization', function () {
            return new LaravelLocalization();
        });
        
        /*
        if($this->app->isLocal() || env('DEBUGBAR_ENABLED')){
            $this->app->register(\Barryvdh\Debugbar\ServiceProvider::class);
            //$this->app->register(\Barryvdh\LaravelIdeHelper\IdeHelperServiceProvider::class);
        }
        */
        
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {

    }
}
