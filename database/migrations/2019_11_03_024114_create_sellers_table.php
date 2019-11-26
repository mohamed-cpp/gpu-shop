<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSellersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sellers', function (Blueprint $table) {
            $table->increments('id');
            $table->boolean('approved')->default(0);
            $table->boolean('company_or_individual');
            $table->string('name', 30);
            $table->string('username', 30)->unique();
            $table->string('phone_number')->unique();
            $table->string('email')->nullable()->unique();
            $table->integer('code',false)->nullable()->unique();
            $table->timestamp('create_code_at')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->timestamp('phone_verified_at')->nullable();
            $table->string('password');
            $table->string('company_logo')->nullable();
            $table->string('id_or_passport');
            $table->string('tax')->nullable();
            $table->softDeletes();
            $table->rememberToken();
            $table->timestamps();
            $table->unsignedInteger('company_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sellers');
    }
}
