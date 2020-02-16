<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOptionsProductOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('options_product_orders', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('product_order_id');
            $table->unsignedInteger('product_id');
            $table->string('option',20);
            $table->unsignedInteger('option_id');
            $table->string('sub_option',20);
            $table->unsignedInteger('sub_option_id');
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
        Schema::dropIfExists('options_product_orders');
    }
}
