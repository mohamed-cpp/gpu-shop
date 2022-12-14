<?php
Route::group(['prefix' => 'admin'], function () {

    Route::group(['middleware' => 'admin'], function (){

        Route::get('/', function () {
            return view('admin.main');
        })->name('admin.home');

        Route::resource('categories','Admin\CategoryController');
        Route::patch("categorises/quick/{category}", "Admin\CategoryController@quickButtons")->name("quick.buttons");

        Route::resource('subcategories','Admin\SubCategoryController');

        Route::get("parent/add", "Admin\SubCategoryController@parent")->name("add.parent");
        Route::post("parent/create", "Admin\SubCategoryController@createParent")->name("create.parent");
        Route::patch("parent/update/{subcategory}", "Admin\SubCategoryController@updateParent")->name("update.parent");

        Route::get("child/add", "Admin\SubCategoryController@child")->name("add.child");
        Route::post("child/create", "Admin\SubCategoryController@createChild")->name("create.child");

        Route::patch("subcategories/quick/{subcategory}", "Admin\SubCategoryController@quickButtons")->name("sub.quick.buttons");

        Route::resource('products','Admin\AdminProductController');
        Route::patch("products/quick/{product}", "Admin\AdminProductController@quickButtons")->name("products.quick.buttons");
        Route::patch("products/rejected/{product}", "Admin\AdminProductController@rejected")->name("products.rejected.button");
        Route::get("filter/products", "Admin\AdminProductController@filter")->name("products.filter");

        Route::resource('settings','Admin\GpuShopSettingController');
        Route::resource('slider','Admin\AdminSliderController');


    });


    Route::get("login", "Auth\Admin\LoginController@showLoginForm")->name("admin.loginForm");
    Route::post("login", "Auth\Admin\LoginController@login")->name('admin.login');
    Route::post("logout", "Auth\Admin\LoginController@logout")->name("admin.logout");

    Route::get('/test2', function () {
        $output = "
            //remove comment
            this1 //remove comment
            this2 /* remove comment */
            this3 /* remove
            comment */
            this4 /* * * remove
            * * * *
            comment * * */
            this5 http://removecomment.com
            id = id.replace(/\//g,''); //do not remove the regex //
            HTTP+'//www.googleadservices.com/pagead/conversion'
            ";

        $pattern = '/(?:(?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)|(?:(?<!\:|\\\|\')\/\/.*))/';
        $output = preg_replace($pattern, '', $output);

        echo nl2br($output);
    });

    Route::get("test", "Test@test");


});