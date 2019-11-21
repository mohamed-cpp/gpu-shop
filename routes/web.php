<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get("/", 'Client\ClientsHomePageController@homepage')->name('homepage');

Route::group(['middleware' => 'client'], function () {
    Route::get('/home', function () {
        return view('client.main');
    })->name('client.home');

    Route::prefix('profile')->group(function () {
        Route::get('/', 'Client\ProfileClientController@show')->name('client.profile');

        Route::get('phone/verify', 'Client\PhoneVerifyClientController@index')->name('verify.phone.client');
        Route::post('phone/verify', 'Client\PhoneVerifyClientController@create')->name('code.phone.client');
        Route::get('verify/code', 'Client\PhoneVerifyClientController@show')->name('verify.page.client');
        Route::post('verify/code', 'Client\PhoneVerifyClientController@update')->name('verify.code.client');
    });

});

// Authentication Routes
Route::get("login", "Auth\Client\LoginController@showLoginForm")->name("client.loginForm")->middleware('guest:client');
Route::post("login", "Auth\Client\LoginController@phoneOrEmail")->name('client.login');
Route::post("logout", "Auth\Client\LoginController@logout")->name("client.logout");
// Registration Routes
Route::get('register', 'Auth\Client\RegisterController@showRegistrationForm')->name('client.registerForm');
Route::post('register', 'Auth\Client\RegisterController@register')->name('client.register');
Route::get('register/verify', 'Auth\Client\VerificationController@verify')->name('client.email.verifyForm');
Route::get('register/verify/resend', 'Auth\Client\VerificationController@resend')->name('client.email.verifyResend');
// Facebook Login
Route::get('login/facebook', 'Auth\Client\LoginController@redirectToProvider')->name('login.facebook');
Route::get('login/facebook/callback', 'Auth\Client\LoginController@handleProviderCallback')->name('callback.facebook');

// Password Reset Routes
Route::get('password/reset', 'Auth\Client\ForgotPasswordController@showLinkRequestForm')
    ->name('client.password.request');
Route::post('password/email', 'Auth\Client\ForgotPasswordController@sendResetLinkEmail')
    ->name('client.password.email');
Route::get('password/reset/{token}', 'Auth\Client\ResetPasswordController@showResetForm')
    ->name('client.password.reset');
Route::post('password/reset', 'Auth\Client\ResetPasswordController@reset')
    ->name('client.password.update');
// Password Reset Routes Via Phone
Route::get('password/phone/{phone}', 'Client\PhoneVerifyClientController@showFormMessage')
    ->name('client.password.reset.phone');
Route::post('password/phone', 'Client\PhoneVerifyClientController@sendResetCode')
    ->name('client.send.reset.password');
Route::get('password/phone/code/{phone}', 'Client\PhoneVerifyClientController@checkCodeForm')
    ->name('client.check.code.password');
Route::post('password/phone/code', 'Client\PhoneVerifyClientController@checkCode')
    ->name('client.code.password');
Route::get('password/change/phone/{phone}/{code}', 'Client\PhoneVerifyClientController@changePasswordForm')
    ->name('client.change.password.form');
Route::post('password/change/phone', 'Client\PhoneVerifyClientController@changePassword')
    ->name('client.change.password.phone');


Route::get('/test', function () {
     $test = asset('storage/seller/image/5954a82320532ed606eccbf097155353.jpg') ;

     return "<img src='$test'></img>";
}) ;