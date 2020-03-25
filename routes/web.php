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

    Route::prefix('profile')->group(function () {
        Route::get('/', 'Client\ProfileClientController@show')->name('client.profile');
        Route::put('/', 'Client\ProfileClientController@update')->name('update.client.profile');

        Route::get('phone/verify', 'Client\PhoneVerifyClientController@index')->name('verify.phone.client');
        Route::post('phone/verify', 'Client\PhoneVerifyClientController@create')->name('code.phone.client');
        Route::get('verify/code', 'Client\PhoneVerifyClientController@show')->name('verify.page.client');
        Route::post('verify/code', 'Client\PhoneVerifyClientController@update')->name('verify.code.client');
    });

    Route::get('wishlist', 'Client\ClientWishlistController@index')->name('show.wishlist.client');
    // axios wishlist
    Route::post('wishlist/{id}', 'Client\ClientWishlistController@storeWishlist');
    Route::put('vcisibility/{wishlist}', 'Client\ClientWishlistController@visibilityWishlist');
    Route::put('wishlist/move/{id}/{anotherId}/{up}', 'Client\ClientWishlistController@moveWishlist');
    Route::put('wishlist/move/{id}/{up}', 'Client\ClientWishlistController@topOrBottomWishlist');
    Route::delete('wishlist/{id}', 'Client\ClientWishlistController@destroyWishlistInProducts');
    Route::delete('wishlist/page/{wishlist}', 'Client\ClientWishlistController@destroyWishlist');

    Route::get('cart', 'Client\ClientCartController@index')->name('cart.client');
    Route::post('cart/add/{product}', 'Client\ClientCartController@addCart');
    Route::put('cart/page/{product}', 'Client\ClientCartController@addProductCart');
    Route::put('cart/qty/{index}/{qty}', 'Client\ClientCartController@qtyCart');
    Route::patch('cart/coupon/{coupon}', 'Client\ClientCartController@coupon')
        ->middleware('throttle:5,1');
    Route::delete('cart/remove/coupon', 'Client\ClientCartController@removeCoupon');
    Route::delete('cart/remove/{index}', 'Client\ClientCartController@removeProductCart');

    Route::get('orders', 'Client\OrderController@index')->name('orders.client');
    Route::get('orders/{order}', 'Client\OrderController@show')->name('order.client');
    Route::post('orders', 'Client\OrderController@delivered')->name('delivered.client');
    Route::get('checkout', 'Client\OrderController@create')->name('checkout.client');
    Route::post('checkout', 'Client\OrderController@store')->name('create.checkout.client');
    Route::get('confirm', 'Client\OrderController@confirm')->name('confirm.checkout.client');
    Route::get('paypal/checkout', 'Client\OrderController@paypalCheckout')->name('checkout.paypal.client');
    Route::get('paypal/cancel', 'Client\OrderController@paypalCancel')->name('cancel.paypal.client');

    Route::post('rating', 'Client\ClientProductController@rating')
        ->name('create.rating.client')
        ->middleware('throttle:5,1');

    Route::post('comment/store/{product}', 'CommentController@store');
    Route::patch('comment/update', 'CommentController@update');
    Route::delete('comment/delete/{id}', 'CommentController@delete');

    Route::get('notification', 'Client\ProfileClientController@notification')->name('notification.client');
    Route::put('notification/read', 'Client\ProfileClientController@readNotification')->name('read.notification.client');
    Route::patch('notification/read/{id}', 'Client\ProfileClientController@aReadNotification')->name('read.notification.client');
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


Route::get("search", "Client\ClientProductController@search")->name('search.product');
Route::get("s/{subcategory}", "SubcatProductController@show")->name('show.products');
Route::get('p/{product}', 'Client\ClientProductController@show')->name('show.product.client');
Route::get('hot-sale', 'Client\ClientProductController@hotSale')->name('hotSale.client');
Route::get('f/{subcategory}/', 'SubcatProductController@filter')->name('filter.product.client');
Route::get('offer/{subcategory}/', 'SubcatProductController@showOffers')->name('offers.product.client');
Route::get('change/currency', 'Client\ClientController@currency')->name('currency.product.client');

Route::get('wishlists/{client}', 'Client\ClientWishlistController@show')->name('show.wishlist.guest');
Route::get('profile/{username}', 'Client\ProfileClientController@index')->name('view.profile');
