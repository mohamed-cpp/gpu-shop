<?php

namespace App\Http\Controllers\Client;

use App\Cart;
use App\Product;
use App\Http\Controllers\Controller;
use App\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Redis\RedisManager;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Session;

class ClientProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        $added = false;
        $relatedProduct = $product->withAnyTags($product->tagList)
            ->where('approved',1)->where('status',true)
            ->take(11)->orderBy('created_at','desc')->get();

        $filtered = $relatedProduct->reject(function ($value) use($product) {
            return $value->id == $product->id;
        });
        if(auth('client')->check()){
            $added = !! auth('client')->user()->wishlist()->where('product_id',$product->id)->first();
        }
        $price = [
            'normalPrice' => $product->offerPrice(false),
            'offerPrice' => $product->offerPrice()
        ];
        return view('client.products.show_product',
            ['product'=>$product->with('images','details')->find($product->id),
                'relatedProducts' => $filtered,
                'price'=>$price,
                'addedWishlist' => $added
            ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }

    public function currency($currency){
        $currency = $currency === 'EGP' ? 'EGP' : 'USD';
        Cookie::queue(Cookie::make('currency', $currency, 10080));
        $oldCart = Session::has('cart') ? Session::get('cart') : null;
        $cart = new Cart($oldCart);
        $cart->updateItems($currency);
        session()->put('cart',$cart);
        return back();
    }

//    public function lang(){
//
//        if (app()->getLocale() == 'ar'){
//            \LaravelLocalization::setLocale('en');
//        }else{
//            \LaravelLocalization::setLocale('ar');
//        }
//        $UrlPrevious = url()->previous();
//        if(strpos(url()->previous(), '/p/') !== false){
//            $UrlProduct= ltrim(strstr(url()->previous(),"/p/"),"/p/");
//            $previousLang = request()->segment(1) ;
//            $slug = Product::where("slug_$previousLang",$UrlProduct)
//                ->first()
//                ->slug;
//            $UrlPrevious = str_replace($UrlProduct,$slug,$UrlPrevious) ;
//        }elseif (strpos(url()->previous(), '/s/') !== false || strpos(url()->previous(), '/f/') !== false){
//            if (strpos(url()->previous(), '/s/')){
//                $segment = '/s/';
//            }else{
//                $segment = '/f/';
//            }
//            $UrlProduct= ltrim(strstr(url()->previous(),$segment),$segment);
//            $oldSlug = str_replace(strstr($UrlProduct,'?'),'',$UrlProduct) ;
//            $previousLang = request()->segment(1);
//            $slug = SubCategory::where("slug_$previousLang",$oldSlug)
//                ->first()
//                ->slug;
//            $UrlPrevious = str_replace($oldSlug,$slug,$UrlPrevious) ;
//        }
//        $url = \LaravelLocalization::getLocalizedURL(App::getLocale(), $UrlPrevious);
//        $oldCart = Session::has('cart') ? Session::get('cart') : null;
//        $cart = new Cart($oldCart);
//        $cart->updateItems(Cookie::get('currency'));
//        session()->put('cart',$cart);
//        return redirect($url);
//
//    }
}
