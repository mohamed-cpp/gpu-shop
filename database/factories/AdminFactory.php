<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */


use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(\App\Admin::class, function (Faker $faker) {
    return [
        'enable' => 1,
        'name' => $faker->name,
        'username' => $faker->unique()->userName,
        'phone_number' => $faker->unique()->phoneNumber,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'phone_verified_at' => now(),
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        'remember_token' => Str::random(10),
        'id_or_passport'=> 'public/storage/admin/images/'.$faker->image('public/storage/admin/images',600,600, null, false) ,
        'profile_picture'=> 'public/storage/admin/images/'.$faker->image('public/storage/admin/images',600,600, null, false) ,

    ];
});
