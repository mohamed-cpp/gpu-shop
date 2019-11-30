<?php

use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $seller = factory(\App\Seller::class)->create();
        $product = factory(\App\Product::class)->create([ 'seller_id' => $seller->id] );
        $image = factory(\App\Image::class)->create([ 'imageable_id' => $product->id] );
        $subcatProduct = factory(\App\SubcatProduct::class)->create([ 'subcategoryable_id' => 1,'productable_id' => $product->id] );


    }
}
