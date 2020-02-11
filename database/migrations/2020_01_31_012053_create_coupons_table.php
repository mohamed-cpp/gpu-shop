<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCouponsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('coupons', function (Blueprint $table) {
            $table->increments('id');
            $table->string('code', 30)->unique();
            $table->string('name');
            $table->smallInteger('uses');
            $table->smallInteger('max_uses');
            $table->boolean('is_disposable')->default(1);
            $table->timestamp('start_at')->nullable();
            $table->timestamp('end_at')->nullable();
            $table->unsignedInteger('seller_id')->nullable();
            $table->unsignedInteger('product_id')->nullable();
            $table->unsignedInteger('sub_categories_id')->nullable();
            $table->unsignedTinyInteger('discount')->default(0);
            $table->float('discount_egp')->default(0);
            $table->float('discount_usd')->default(0);
            $table->boolean('is_percent')->default(0);
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
        Schema::dropIfExists('coupons');
    }
}
