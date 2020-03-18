<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSeoToSubCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sub_categories', function (Blueprint $table) {
            $table->string('title_en')->nullable();
            $table->string('title_ar')->nullable();
            $table->string('description_en')->nullable();
            $table->string('description_ar')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('sub_categories', function (Blueprint $table) {
            $table->dropColumn('title_en');
            $table->dropColumn('title_ar');
            $table->dropColumn('description_en');
            $table->dropColumn('description_ar');

        });
    }
}
