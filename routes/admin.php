<?php
Route::group(['prefix' => 'admin'], function () {

    Route::group(['middleware' => 'admin'], function (){

        Route::get('/', function () {
            return view('admin.main');
        })->name('admin.home');

        Route::resource('categories','Admin\CategoryController');
        Route::patch("categorises/quick/{category}", "Admin\CategoryController@quickButtons")->name("quick.buttons");

        Route::resource('subcategories','Admin\SubCategoryController');
        Route::patch("subcategories/quick/{subcategory}", "Admin\SubCategoryController@quickButtons")->name("sub.quick.buttons");
    });


    Route::get("login", "Auth\Admin\LoginController@showLoginForm")->name("admin.loginForm");
    Route::post("login", "Auth\Admin\LoginController@login")->name('admin.login');
    Route::post("logout", "Auth\Admin\LoginController@logout")->name("admin.logout");

    Route::get('/test', function () {

    });


});