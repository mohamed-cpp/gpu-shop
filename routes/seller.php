<?php

Route::get('/', function () {
    return view('seller.main');
});

// Authentication Routes
Route::get("login", "Auth\Seller\LoginController@showLoginForm")->name("seller.loginForm")->middleware('guest:seller');
Route::post("login", "Auth\Seller\LoginController@login")->name('seller.login')->middleware('guest:seller');
Route::post("logout", "Auth\Seller\LoginController@logout")->name("seller.logout");
// Registration Routes
Route::get('register', 'Auth\Seller\RegisterController@showRegistrationForm')->name('seller.registerForm')->middleware('guest:seller');
Route::post('register', 'Auth\Seller\RegisterController@register')->name('seller.register')->middleware('guest:seller');
