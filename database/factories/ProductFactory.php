<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use Faker\Generator as Faker;

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
        'main_image' => $faker->image('public/storage/product/images/',400,400, null, false),
        'status' => 1,
        'price_egp' => rand(100,500),
        'price_usd' => rand(100,500),
        'seller_id' => $id ? $id : create('App\Seller')->id,
        'quantity'  => rand(1,50),
        'quantity_offer'  => rand(1,50),
    ];
});

$factory->define(\App\Image::class, function (Faker $faker,$id = null) {

    //$product = factory('App\Product')->create();
    return [
        'path' => 'public/storage/product/images/'.$faker->image('public/storage/product/images',400,400, null, false),
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
