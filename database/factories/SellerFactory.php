<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Seller;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Seller::class, function (Faker $faker) {
    return [
        'approved' => 1,
        'company_or_individual' => 1,
        'name' => $faker->name,
        'username' => $faker->unique()->userName,
        'phone_number' => $faker->unique()->phoneNumber,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'phone_verified_at' => now(),
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        'remember_token' => Str::random(10),
        'is_fixed' => 1,
        'fee' => 1,
        'id_or_passport'=> $faker->image('public/storage/seller/images',100,100, null, false) ,
    ];
});

$factory->state(App\Seller::class, 'company', function (Faker $faker) {
    return [
        'company_or_individual' => 0 ,
        'tax' => $faker->image('public/storage/seller/image',100,100, null, false),
        'company_logo' => $faker->image('public/storage/seller/images',100,100, null, false),
    ];
});
