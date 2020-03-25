<?php

namespace App\Http\Middleware;

use App\Cart;
use App\Product;
use App\SubCategory;
use Closure;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Session;

class ChangeLocaleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (!preg_match('/\b'. app()->getLocale().'\b/', url()->previous()) ){
            $oldCart = Session::has('cart') ? Session::get('cart') : null;
            if ($oldCart){
                $cart = new Cart($oldCart);
                $cart->updateItems(Cookie::get('currency'));
                session()->put('cart',$cart);
            }
        }
        if(Cookie::get('currency') == null){
            
            //Cookie::queue(Cookie::forever('currency', 'usd', 99999));
            //cookie('currency', 'usd', 0, '/', config('session.domain'), true, false);
            //Cookie::queue(Cookie::make('currency', 'usd',0, '/', config('session.domain'), true, false ));
            return $next($request)->withCookie(cookie('currency', 'usd'));
        }
        return $next($request);
    }
}
