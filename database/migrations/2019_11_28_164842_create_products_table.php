<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name_en');
            $table->string('name_ar');
            $table->string('description_en');
            $table->string('description_ar');
            $table->string('title_meta_en')->nullable();
            $table->string('title_meta_ar')->nullable();
            $table->string('description_meta_en')->nullable();
            $table->string('description_meta_ar')->nullable();
            $table->string('slug_en');
            $table->string('slug_ar');
            $table->string('main_image');
            $table->boolean('status');
            $table->boolean('approved')->default(0);
            $table->float('price_egp')->default(0);
            $table->float('price_usd')->default(0);
            $table->float('offer_price_egp')->default(0);
            $table->float('offer_price_usd')->default(0);
            $table->timestamp('offer_start_at')->nullable();
            $table->timestamp('offer_end_at')->nullable();
            $table->unsignedInteger('seller_id');
            $table->unsignedTinyInteger('quantity');
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
        Schema::dropIfExists('products');
    }
}
