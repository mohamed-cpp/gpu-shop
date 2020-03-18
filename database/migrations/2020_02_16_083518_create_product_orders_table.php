<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_orders', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('order_id');
            $table->unsignedInteger('client_id');
            $table->unsignedInteger('seller_id');
            $table->unsignedInteger('product_id');
            $table->boolean('status')->default(0);
            $table->string('for', 30)->nullable();
            $table->unsignedMediumInteger('qty');
            $table->boolean('coupon')->default(0);
            $table->float('price_after_discount')->nullable();
            $table->float('price')->nullable();
            $table->float('fee')->nullable();
            $table->string('currency',3);
            $table->string('seller_note')->nullable();
            $table->softDeletes();
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
        Schema::dropIfExists('product_orders');
    }
}
