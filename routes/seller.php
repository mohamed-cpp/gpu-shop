<?php

Route::get('/', function () {
    return view('seller.main');
});

//Route::get('/robots.txt',function (){
//    return Redirect::to('google.com');
//});


Route::get('register', 'Auth\Seller\RegisterController@showRegistrationForm')->name('seller.registerForm');
Route::post('register', 'Auth\Seller\RegisterController@register')->name('seller.register');
