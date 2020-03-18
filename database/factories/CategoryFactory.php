<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */


use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(\App\Category::class, function (Faker $faker) {

    return [
        'name_en' => $faker->word,
        'name_ar' => $faker->word ,
        'sort' => rand(1,15),
        'status' => 1
    ];
});

$factory->define(\App\SubCategory::class, function (Faker $faker) {

    return [
        'name_en' => $faker->word ,
        'name_ar' => $faker->word ,
        'title_en' => $faker->title ,
        'title_ar' => $faker->title ,
        'description_en' => $faker->text,
        'description_ar' => $faker->text,
        'slug_en' => $faker->slug,
        'slug_ar' => $faker->slug,
        'image'   => $faker->image('public/storage/admin/subcategory/images',100,100, null, false) ,
        'category_id' => factory('App\Category')->create()->id,
        'sort'    => rand(1,15),
        'status'  => 1
    ];
});
