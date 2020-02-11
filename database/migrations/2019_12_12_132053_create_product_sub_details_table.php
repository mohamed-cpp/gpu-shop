<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductSubDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_sub_details', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('details_id');
            $table->string('name_en');
            $table->string('name_ar');
            $table->float('price_egp')->nullable();
            $table->float('price_usd')->nullable();
            $table->unsignedSmallInteger('quantity')->nullable();
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
        Schema::dropIfExists('product_sub_details');
    }
}
