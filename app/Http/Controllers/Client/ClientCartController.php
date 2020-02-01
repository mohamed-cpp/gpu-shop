<?php

namespace App\Http\Controllers\Client;

use App\Cart;
use App\Coupon;
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
    public function addCart(Product $product, Request $request){
        $oldCart = Session::has('cart') ? Session::get('cart') : null;
        $username = $request->username != auth('client')->user()->username ? $request->username : null ;
        $cart = new Cart($oldCart);
        $add = $cart->add($product,$username);
        session()->put('cart',$cart);
        return response(json_encode($cart));
    }

    public function addProductCart(Product $product,Request $request){
        $oldCart = Session::has('cart') ? Session::get('cart') : null;
        $cart = new Cart($oldCart);
        $addWithQtyOptions = $cart->addWithQtyOptions($product,$request->all());
        session()->put('cart',$cart);
        return response(json_encode($cart));

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
        return response(json_encode($cart));
    }

    public function coupon(Coupon $coupon){
        $validate = $coupon->validateCart();
        if ($validate === true){
            $oldCart = Session::has('cart') ? Session::get('cart') : null;
            $cart = new Cart($oldCart);
            $cart->coupon($coupon);
            session()->put('cart',$cart);
            return response(json_encode($cart));
        }
        return response([$validate],406);
    }

    public function removeCoupon(){
        $oldCart = Session::has('cart') ? Session::get('cart') : null;
        $cart = new Cart($oldCart);
        $cart->removeCoupon();
        session()->put('cart',$cart);
        return response(json_encode($cart));


    }
}
