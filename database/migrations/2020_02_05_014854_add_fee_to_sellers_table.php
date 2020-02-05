<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFeeToSellersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sellers', function (Blueprint $table) {
            $table->boolean('is_fixed')->default(1);
            $table->unsignedTinyInteger('fee')->nullable();
            $table->float('fee_egp')->nullable();
            $table->float('fee_usd')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('sellers', function (Blueprint $table) {
            $table->dropColumn('fee');
            $table->dropColumn('is_fixed');
            $table->dropColumn('fee_egp');
            $table->dropColumn('fee_usd');
        });
    }
}
