<?php

namespace App\Http\Controllers\Client;

use App\Product;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Redis\RedisManager;
use Illuminate\Support\Facades\Cookie;

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
        Cookie::queue(Cookie::make('currency', $currency, 10080));
        return back();
    }
}
