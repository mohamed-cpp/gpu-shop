<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clients', function (Blueprint $table) {
            $table->increments('id');
            $table->boolean('approved')->default(1);
            $table->unsignedInteger('provider_id')->nullable();
            $table->string('name', 30);
            $table->string('username', 30)->unique()->index();
            $table->string('phone_number')->unique();
            $table->string('email')->nullable()->unique();
            $table->unsignedInteger('code')->nullable()->unique();
            $table->timestamp('create_code_at')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->timestamp('phone_verified_at')->nullable();
            $table->string('password');
            $table->softDeletes();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clients');
    }
}
