<?php
Route::group(['prefix' => 'admin'], function () {

    Route::get('/', function () {
        return view('admin.main');
    })->name('admin.home');

    Route::get("login", "Auth\Admin\LoginController@showLoginForm")->name("admin.loginForm");
    Route::post("login", "Auth\Admin\LoginController@login")->name('admin.login');
    Route::post("logout", "Auth\Admin\LoginController@logout")->name("admin.logout");

    Route::get('/test', function () {
        return ;
    });


});