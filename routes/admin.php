<?php
Route::group(['prefix' => 'admin'], function () {

    Route::get('/', function () {
        return view('admin.main');
    });

    Route::get('/test', function () {
        return time();
    });


});