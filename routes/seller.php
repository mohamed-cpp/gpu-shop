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

Route::get("product/create", "ProductController@create")->name("create.product")->middleware('auth:seller');
Route::post("product/store", "ProductController@store")->name("store.product")->middleware('auth:seller');

Route::get('/test', function () {
    return 'welcome';
})->middleware('email_verified:seller') ;