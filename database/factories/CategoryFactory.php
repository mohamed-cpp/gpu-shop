<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */


use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(\App\Category::class, function (Faker $faker) {

    $fakerAr = \Faker\Factory::create('ar_JO');
    return [
        'name_en' => $faker->word ,
        'name_ar' => $fakerAr->word ,
        'sort' => rand(1,15),
        'status' => 1
    ];
});

$factory->define(\App\SubCategory::class, function (Faker $faker) {

    $fakerAr = \Faker\Factory::create('ar_JO');
    return [
        'name_en' => $faker->word ,
        'name_ar' => $fakerAr->word ,
        'slug_en' => $faker->slug,
        'slug_ar' => $fakerAr->slug,
        'image'   => 'storage/admin/subcategory/images/'.$faker->image('public/storage/admin/subcategory/images',100,100, null, false) ,
        'category_id' => factory('App\Category')->create()->id,
        'sort'    => rand(1,15),
        'status'  => 1
    ];
});
