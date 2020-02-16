<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id');
            $table->string('first_name');
            $table->string('last_name');
            $table->string('address');
            $table->string('city');
            $table->string('country');
            $table->string('zip')->nullable();
            $table->string('e-mail')->nullable();
            $table->string('phone');
            $table->string('order_provider_id',100)->nullable();
            $table->string('status_provider')->nullable();
            $table->unsignedInteger('client_id');
            $table->string('client_username',30);
            $table->boolean('status')->default(0);
            $table->string('pay_by',10);
            $table->float('total_after_discount')->nullable();
            $table->float('total')->nullable();
            $table->string('currency',3);
            $table->string('ip');
            $table->string('where',30)->nullable();
            $table->string('client_note')->nullable();
            $table->string('coupon', 30)->nullable();
            $table->boolean('seen_notes')->default(0);
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
        Schema::dropIfExists('orders');
    }
}
