<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBalanceWebsitesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('balance_websites', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('balanceable_id');
            $table->string('balanceable_type',50);
            $table->float('available_balance_egp');
            $table->float('available_balance_usd');
            $table->float('balance_egp');
            $table->float('balance_usd');
            $table->float('fee_egp');
            $table->float('fee_usd');
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
        Schema::dropIfExists('balance_websites');
    }
}
