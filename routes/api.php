<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('product/{slug}', 'Api\ApiProductController@index');
Route::get('details/{id}', 'Api\ApiProductController@detailsIndex');

//Wishlist
Route::get('wishlist/{client}/{id}', 'Api\ApiWishlistController@storeWishlist');
Route::get('vcisibility/{client}/{id}', 'Api\ApiWishlistController@visibilityWishlist');
Route::delete('wishlist/{client}/{id}', 'Api\ApiWishlistController@destroyWishlistInProducts');
Route::delete('wishlist/page/{client}/{id}', 'Api\ApiWishlistController@destroyWishlist');


