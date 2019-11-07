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
});

// Authentication Routes
Route::get("login", "Auth\Client\LoginController@showLoginForm")->name("client.loginForm")->middleware('guest:client');
Route::post("login", "Auth\Client\LoginController@login")->name('client.login');
Route::post("logout", "Auth\Client\LoginController@logout")->name("client.logout");
// Registration Routes
Route::get('register', 'Auth\Client\RegisterController@showRegistrationForm')->name('client.registerForm');
Route::post('register', 'Auth\Client\RegisterController@register')->name('client.register');
Route::get('register/verify', 'Auth\Client\VerificationController@verify')->name('client.email.verifyForm');
Route::get('register/verify/resend', 'Auth\Client\VerificationController@resend')->name('client.email.verifyResend');

// Password Reset Routes
Route::get('password/reset', 'Auth\Client\ForgotPasswordController@showLinkRequestForm')
    ->name('client.password.request');
Route::post('password/email', 'Auth\Client\ForgotPasswordController@sendResetLinkEmail')
    ->name('client.password.email');
Route::get('password/reset/{token}', 'Auth\Client\ResetPasswordController@showResetForm')
    ->name('client.password.reset');
Route::post('password/reset', 'Auth\Client\ResetPasswordController@reset')
    ->name('client.password.update');

//Auth::routes();


Route::get('/test', function () {
    $sid = env('TWILIO_SID');
    $token = env('TWILIO_AUTH_TOKEN');

    $client = new Twilio\Rest\Client($sid, $token);
    $message = $client->messages->create(
        "+201153904374",
        array(
            'from' => env('TWILIO_NUMBER'),
            'body' => "welcome"
        )
    );
});
