<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use Faker\Generator as Faker;

$factory->define(\App\Product::class, function (Faker $faker) {
    return [
        'name_en' => $faker->text,
        'name_ar' => $faker->text,
        'description_en' => $faker->paragraph,
        'description_ar'=> $faker->paragraph,
        'title_meta_en' => $faker->streetAddress,
        'title_meta_ar' => $faker->streetAddress,
        'description_meta_ar' => $faker->paragraph,
        'description_meta_en' => $faker->paragraph,
        'slug_en' => $faker->slug,
        'slug_ar' => $faker->slug,
        'main_image' => $faker->image('public/storage/product/images/',100,100, null, false),
        'status' => 1,
        'price_egp' => rand(100,500),
        'price_usd' => rand(100,500),
        'seller_id' => factory('App\Seller')->create()->id,
        'quantity'  => rand(1,50),
    ];
});

$factory->define(\App\Image::class, function (Faker $faker) {

    $product = factory('App\Product')->create();
    return [
        'path' => 'public/storage/product/images/'.$faker->image('public/storage/product/images',100,100, null, false),
        'imageable_type' => get_class($product),
        'imageable_id' => $product->id
    ];
});

$factory->define(\App\SubcatProduct::class, function (Faker $faker) {
    $subcat = \App\SubCategory::first();
    $product = factory('App\Product')->create();
    return [
        'subcategoryable_id' => $subcat ? $subcat->id : factory('App\SubCategory')->create()->id,
        'productable_type' => get_class($product),
        'productable_id' => $product->id
    ];
});
