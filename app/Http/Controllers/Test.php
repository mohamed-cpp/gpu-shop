<?php

namespace App\Http\Controllers;

use App\Image;
use App\Product;
use App\ProductSubDetails;
use App\Seller;
use App\SubCategory;
use App\SubcatProduct;
use Illuminate\Http\Request;

class Test extends Controller
{
    public function test(){

    $product = Product::with('details')->first();


return $product;













    }
}
