<?php

namespace App\Http\Controllers\Client;

use App\Cart;
use App\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Session;

class ClientCartController extends Controller
{
    public function addCart(Product $product){
        $oldCart = Session::has('cart') ? Session::get('cart') : null;

        $cart = new Cart($oldCart);
        $add = $cart->add($product);

        session()->put('cart',$cart);

    }

    public function addProductCart(Product $product,Request $request){
        $oldCart = Session::has('cart') ? Session::get('cart') : null;
        $cart = new Cart($oldCart);
        $addWithQtyOptions = $cart->addWithQtyOptions($product,$request->all());
        session()->put('cart',$cart);
        return response([], 204);

    }

    public function removeProductCart(Product $product){
        $oldCart = Session::has('cart') ? Session::get('cart') : null;
        $cart = new Cart($oldCart);
        $remove = $cart->deleteAProduct($product);
        session()->put('cart',$cart);

    }
}
