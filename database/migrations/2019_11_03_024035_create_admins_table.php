<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;

class CreateAdminsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admins', function (Blueprint $table) {
            $table->increments('id');
            $table->boolean('enable')->default(0);
            $table->string('name', 30);
            $table->string('username', 30)->unique();
            $table->string('phone_number')->unique();
            $table->string('email')->nullable()->unique();
            $table->integer('code',false)->nullable()->unique();
            $table->timestamp('create_code_at')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->timestamp('phone_verified_at')->nullable();
            $table->string('password');
            $table->string('id_or_passport');
            $table->string('profile_picture');
            $table->rememberToken();
            $table->timestamps();
        });
        // Insert Super Admin
        $nameProject = env('APP_NAME');
        $nowTime = \Carbon\Carbon::now();
        DB::table('admins')->insert(
            array(
                'enable'=> 1,
                'name'=> $nameProject,
                'username'=> $nameProject,
                'phone_number'=> env('Super_Admin_Email'),
                'email'=> env('Super_Admin_Phone'),
                'email_verified_at'=> $nowTime,
                'phone_verified_at'=> $nowTime,
                'password'=> Hash::make(env('Super_Admin_Password')),
                'id_or_passport'=> $nameProject,
                'profile_picture'=> $nameProject,
                'created_at' => $nowTime,
                'updated_at'=> $nowTime,
            )
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('admins');
    }
}
