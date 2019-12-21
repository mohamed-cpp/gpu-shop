<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Product;
use Illuminate\Http\Request;

class ApiProductController extends Controller
{
    public function index(Product $slug){
        if (request()->wantsJson() && $slug) {
            return $slug->setHidden(['id','status','approved','seller_id']);
        }
    }
    public function detailsIndex($slug){
        if (request()->wantsJson() && $slug) {
            return Product::where('slug_en',$slug)->without('images')->first()->details()->get();
        }
    }
}
