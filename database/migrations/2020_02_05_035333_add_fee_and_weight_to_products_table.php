<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFeeAndWeightToProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('products', function (Blueprint $table) {
            $table->unsignedMediumInteger('weight')->nullable();
            $table->boolean('fee')->default(0);
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
        Schema::table('products', function (Blueprint $table) {
            $table->dropColumn('fee');
            $table->dropColumn('fee_egp');
            $table->dropColumn('fee_usd');
        });
    }
}
