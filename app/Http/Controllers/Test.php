<?php

namespace App\Http\Controllers;

use App\Image;
use App\Product;
use App\Seller;
use App\SubCategory;
use App\SubcatProduct;
use Illuminate\Http\Request;

class Test extends Controller
{
    public function test(){
        $seller2 = Seller::find(2);
        $seller4 = Seller::find(4);
//        $user = Seller::find(2);

        //$product = Product::find(4);
        $product = SubCategory::find(1);


        $test =  $product->products()->first()->productable()->get();

//       foreach ($test as $new){
//           echo $new->hello() ;
//       }

        return $test;

//        return  $product ;
//        if ($user instanceof Illuminate\Database\Eloquent\Collection) {
//            return 'here';
//        }


















    }
}
