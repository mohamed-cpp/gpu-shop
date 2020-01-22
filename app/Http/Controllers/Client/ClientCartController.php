<?php

namespace App\Http\Controllers\Client;

use App\Cart;
use App\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Session;

class ClientCartController extends Controller
{
    public function index(){
        $oldCart = Session::has('cart') ? Session::get('cart') : null;

        return view('client.products.cart',[
            'cart' => json_encode($oldCart),
        ]);
    }
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
//        $addWithQtyOptions = $cart->deleteAll();
        session()->put('cart',$cart);
        return response([], 204);

    }

    public function qtyCart($index, $qty){
        $oldCart = Session::has('cart') ? Session::get('cart') : null;
        $cart = new Cart($oldCart);
        $qty = $cart->qtyUpdate($index,$qty);
        session()->put('cart',$cart);
        return response(json_encode($cart));

    }

    public function removeProductCart($index){
        $oldCart = Session::has('cart') ? Session::get('cart') : null;
        $cart = new Cart($oldCart);
        $remove = $cart->deleteAProduct($index);
        session()->put('cart',$cart);
        return response([], 204);
    }
}
