<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use Illuminate\Support\Str;
use Faker\Generator as Faker;
use Illuminate\Http\UploadedFile;

$factory->define(\App\Product::class, function (Faker $faker,$id = null) {
    return [
        'name_en' => $faker->text,
        'name_ar' => $faker->text,
        'description_en' => $faker->paragraph,
        'description_ar'=> $faker->paragraph,
        'title_meta_en' => $faker->streetAddress,
        'title_meta_ar' => $faker->streetAddress,
        'description_meta_ar' => $faker->text,
        'description_meta_en' => $faker->text,
        'slug_en' => $faker->slug,
        'slug_ar' => $faker->slug,
        'main_image' => UploadedFile::fake()->image('photo1.jpg'),
        'status' => 1,
        'approved' => 1,
        'price_egp' => rand(100,500),
        'price_usd' => rand(100,500),
        'seller_id' => $id ? $id : create('App\Seller')->id,
        'quantity'  => rand(1,50),
        'quantity_offer'  => rand(1,50),
        'weight'  => rand(1,50),
        'offer_price_egp' => null,
        'offer_price_usd' => null,
        'username_seller' => $faker->name,
    ];
});

$factory->define(\App\Image::class, function (Faker $faker,$id = null) {

    //$product = factory('App\Product')->create();
    return [
        'path' => $faker->image('public/storage/product/images',400,400, null, false),
        'imageable_type' => 'App\Product',
        'imageable_id' => $id ? $id : null
    ];
});

$factory->define(\App\SubcatProduct::class, function (Faker $faker,$id = null, $idSub = null) {
//    $subcat = $idSub ? $idSub : factory('App\SubCategory')->create()->id;
//    $product = factory('App\Product')->create();
    return [
        'subcategoryable_id' => $idSub ,
        'productable_type' => 'App\Product' ,
        'productable_id' => $id ? $id : $idSub
    ];
});

$factory->define(\App\ProductDetails::class, function (Faker $faker) {
    return [
        'product_id' => factory('App\Product')->create()->id,
        'name_en' => 'Name En',
        'name_ar' => 'Name Ar',
    ];
});

$factory->define(\App\ProductSubDetails::class, function (Faker $faker) {
    return [
        'details_id' => factory('App\ProductDetails')->create()->id,
        'name_en' => 'Name En',
        'name_ar' => 'Name Ar',
    ];
});

$factory->define(\App\Wishlist::class, function (Faker $faker) {
    return [
        'product_id' => \App\Product::first() ? \App\Product::first()->id : factory('App\Product')->create()->id,
        'client_id' => \App\Client::first() ? \App\Client::first()->id : factory('App\Client')->create()->id,
    ];
});

$factory->define(\App\Rating::class, function (Faker $faker) {
    return [
        'product_id' => 3,
        'client_id' => rand(9999999,99999999),
        'rating' => 4,
    ];
});

$factory->define(\App\Coupon::class, function (Faker $faker) {
    return [
        'code' => Str::random(20),
        'name' => $faker->name,
        'uses' => rand(10,99),
        'max_uses' => rand(100,500),
        'is_disposable' => 1,
        'start_at' => now(),
        'end_at' => now()->addDays(1) ,
        'discount' => rand(1,99),
        'is_percent' => 1,
    ];
});

$factory->define(\App\Order::class, function (Faker $faker) {
    $prodcut = factory('App\Product')->create();
    $client = factory('App\Client')->create();
    $name = $faker->name;
    return [
        'first_name' => $name,
        'last_name' => $name,
        'address' => $name,
        'city' => $name,
        'country' => $name,
        'phone' => $faker->unique()->phoneNumber,
        'client_id' => $client->id,
        'client_username' => $client->username,
        'status' => 4,
        'pay_by' => 'Cash',
        'total' => $prodcut->price_usd,
        'currency' => 'usd',
        'ip' => '127.0.0.1',
    ];
});
