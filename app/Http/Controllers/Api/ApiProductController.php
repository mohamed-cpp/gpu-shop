<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Product;
use App\ProductDetails;
use Illuminate\Http\Request;

class ApiProductController extends Controller
{
    public function index(Product $slug){
        if (request()->wantsJson() && $slug) {
            $images = $slug->images()->get();
            $slug['images'] = $images;
            return $slug->setHidden(['status','approved','seller_id']);
        }
    }
    public function detailsIndex($id, $image = false){
        if (request()->wantsJson() && $id) {
            if ($image == true){
                return json_encode(ProductDetails::with('subDetailsWithoutImage')
                    ->without('subDetails')
                    ->where('product_id',$id)
                    ->get());
            }
            return json_encode(ProductDetails::where('product_id',$id)->get());
        }
    }
}
