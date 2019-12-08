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

        Route::resource('products','Admin\AdminProductController');
        Route::patch("products/quick/{product}", "Admin\AdminProductController@quickButtons")->name("products.quick.buttons");
        Route::patch("products/rejected/{product}", "Admin\AdminProductController@rejected")->name("products.rejected.button");
    });


    Route::get("login", "Auth\Admin\LoginController@showLoginForm")->name("admin.loginForm");
    Route::post("login", "Auth\Admin\LoginController@login")->name('admin.login');
    Route::post("logout", "Auth\Admin\LoginController@logout")->name("admin.logout");

    Route::get('/test2', function () {
//        Spatie\Permission\Models\Role::create(['name' => 'Super Admin']);
//        return auth('web')->user()->assignRole('Super Admin');
        //return auth('web')->user()->givePermissionTo('categories');
//        auth('web')->user()->givePermissionTo('categories');
        //return \App\Admin::role('super-admin')->get();
//    $role = Spatie\Permission\Models\Role::create(['name' => 'admin']);
        //    $role = Spatie\Permission\Models\Role::create(['name' => 'Super Admin']);
//    $permission = Spatie\Permission\Models\Permission::create(['name' => 'categories']);
//    $role->givePermissionTo($permission);
//        return auth('web')->user()->revokePermissionTo('categories');
    });

    Route::get("test", "Test@test");


});