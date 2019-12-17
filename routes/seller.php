<?php

Route::get('/', function () {
    return view('seller.main');
})->name('home.seller');
Route::get('/dashboard', function () {
    return view('seller.main');
});

// Authentication Routes
Route::get("login", "Auth\Seller\LoginController@showLoginForm")->name("seller.loginForm")->middleware('guest:seller');
Route::post("login", "Auth\Seller\LoginController@login")->name('seller.login')->middleware('guest:seller');
Route::post("logout", "Auth\Seller\LoginController@logout")->name("seller.logout");
// Registration Routes
Route::get('register', 'Auth\Seller\RegisterController@showRegistrationForm')->name('seller.registerForm')->middleware('guest:seller');
Route::post('register', 'Auth\Seller\RegisterController@register')->name('seller.register')->middleware('guest:seller');
Route::get('register/verify', 'Auth\Seller\VerificationController@verify')->name('seller.email.verifyForm');
Route::get('register/verify/resend', 'Auth\Seller\VerificationController@resend')->name('seller.email.verifyResend');
// Password Reset Routes
Route::get('password/reset', 'Auth\Seller\ForgotPasswordController@showLinkRequestForm')
    ->name('seller.password.request');
Route::post('password/email', 'Auth\Seller\ForgotPasswordController@sendResetLinkEmail')
    ->name('seller.password.email');
Route::get('password/reset/{token}', 'Auth\Seller\ResetPasswordController@showResetForm')
    ->name('seller.password.reset');
Route::post('password/reset', 'Auth\Seller\ResetPasswordController@reset')
    ->name('seller.password.update');

Route::group(['middleware' => 'seller'], function (){
    Route::resource('product','Seller\ProductController');
    Route::patch("product/quick/{product}", "Seller\ProductController@quickButtons")->name("product.quick.buttons");
    Route::get("product/{product}/details", "Seller\ProductController@addDetails")->name("product.details.create");
    Route::post("product/{product}/details", "Seller\ProductController@storeDetails")->name("product.details.store");
    Route::get("details/{details}/edit", "Seller\ProductController@editDetails")->name("product.details.edit");
    Route::post("details/{details}/edit", "Seller\ProductController@updateDetails")->name("product.details.update");
    Route::delete("details/{details}/delete", "Seller\ProductController@destroyDetails")->name("product.details.delete");
});


Route::get('/test', function () {
    return ;
}) ;