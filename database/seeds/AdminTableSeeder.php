<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AdminTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (app()->environment() === 'local') {
            $randomPassword = Str::random(10);
            $admin = factory(\App\Admin::class)->create([
                'password' => Hash::make($randomPassword)
            ]);
            echo("Email: $admin->email\nPassword: $randomPassword\n");
        }else{
            factory(\App\Admin::class)->create();
        }
    }
}
