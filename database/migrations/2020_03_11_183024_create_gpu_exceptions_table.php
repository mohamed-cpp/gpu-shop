<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGpuExceptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gpu_exceptions', function (Blueprint $table) {
            $table->increments('id');
            $table->string('code')->nullable();
            $table->longText('message');
            $table->longText('trace');
            $table->string('ip');
            $table->string('url');
            $table->text('user')->nullable();
            $table->text('request')->nullable();
            $table->text('header')->nullable();
            $table->string('method')->nullable();
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
        Schema::dropIfExists('gpu_exceptions');
    }
}
