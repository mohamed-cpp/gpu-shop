<?php

namespace App\Http\Controllers;

use App\Product;
use App\SubCategory;
use App\SubcatProduct;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\DB;

class SubcatProductController extends Controller
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
     * @param SubCategory $subcategory
     * @return SubCategory|\Illuminate\Support\Collection
     */
    public function show(SubCategory $subcategory)
    {
        if($subcategory->status){
            $products = $subcategory->products()->paginate(15);
            return view('client.products.show_products',[
                'products' => $products,
                'subcategory' => $subcategory,
                'priceMinMax' => $this->minMaxPriceCache($subcategory),
                'count'=>$this->count($products),
            ]);
        }
        return response()->view('client.errors.error',['errorCode' => 404,
            'errorMessage'=>'Not Found']);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\SubcatProduct  $subcatProduct
     * @return \Illuminate\Http\Response
     */
    public function edit(SubcatProduct $subcatProduct)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\SubcatProduct  $subcatProduct
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SubcatProduct $subcatProduct)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SubcatProduct  $subcatProduct
     * @return \Illuminate\Http\Response
     */
    public function destroy(SubcatProduct $subcatProduct)
    {
        //
    }

    public function filter(SubCategory $subcategory, Request $request){
        $currency = Cookie::get('currency') ? strtolower(Cookie::get('currency')) : 'usd';
        $column = "products.name_" . App::getLocale();
        $keywords = $request->keywords ?  $request->keywords : null ;
        $sort = $this->sort($request->sort,$column,$currency);
        $products = DB::table('subcat_products')
            ->where('subcategoryable_id',$subcategory->id)
            ->join('products', 'products.id', '=', 'subcat_products.productable_id')
            ->where('products.status', '=', 1)
            ->where('products.approved', '=', 1)
            ->where([[$column, 'LIKE', '%' . $keywords . '%' ],
                     ['products.price_'.$currency, '<=',  $request->max ],
                     ['products.price_'.$currency, '>=',  $request->min ],])
            ->orderBy($sort[1][0], $sort[0][0])
            ->select('products.*')
            ->paginate(15);
        return view('client.products.show_products',[
            'products' => $this->changeKeyLocale($products),
            'subcategory' => $subcategory,
            'priceMinMax' => $this->minMaxPriceCache($subcategory),
            'sort'=>$request->all(),
            'count'=>$this->count($products),
        ]);

    }

    protected function minMaxPriceCache($subcategory){
        $products = $subcategory->products();
        if ($cachePrice =  Cache::get($subcategory->slug_en)){
            return $cachePrice;
        }
        $currency = Cookie::get('currency') ?strtolower(Cookie::get('currency')) : 'usd';
        $prices = Cache::remember($subcategory->slug_en, 900, function() use ($products,$currency) {
            $productsPrices = $products->get()
                ->pluck('productable');
            return ['min_price' =>  $productsPrices->min("price_$currency")
                ,'max_price' =>  $productsPrices->max("price_$currency")];
        });
        return $prices;
    }
    protected function sort($sort,$name,$currency){
        $sortArray = [];
        if ($sort=='Z' || $sort=='H'){
            $sortArray[] =['desc'];
        }else{
            $sortArray[] =['asc'];
        }
        if ($sort=='L' || $sort=='H'){
            $sortArray[] =[ "products.price_" . $currency];
        }elseif($sort=='A' || $sort=='Z'){
            $sortArray[] =[$name];

        }else{
            $sortArray[] =["products.created_at"];
        }
        return $sortArray;
    }
    protected function changeKeyLocale($products){
        $locale =  App::getLocale();
        $name = "name_$locale";
        $slug = "slug_$locale";
        $description = "description_$locale";
        foreach ($products as $product){
            $product->name = $product->$name;
            $product->slug = $product->$slug;
            $product->description = $product->$description;
            $product->isOffer = $this->isOffer($product);
            $product->offerPriceold = $this->offerPrice($product,false);
            $product->offerPrice = $this->offerPrice($product);
        }
        return $products;
    }

    protected function isOffer($product){
        $now = Carbon::now();
        $start = $product->offer_start_at;
        $end =  $product->offer_end_at;
        if( $now < $end){
            if($now > $start){
                return true;
            }
        }
        return false;
    }

    protected function offerPrice($product,$status = true){
        $cookie = strtolower(Cookie::get('currency'));
        $currency = $cookie ? $cookie : 'usd';
        $price = "offer_price_$currency";
        if($this->isOffer($product) == true && $status){
            return $product->$price;
        }
        $price = "price_$currency";
        return $product->$price;
    }
    public function count($products){
        if( $products->perPage() != count($products->items()) ){
            $count = $products->currentPage() * $products->perPage();
            $currentItems = $products->perPage() - count($products->items());
            $countArray[] = [$count - $currentItems];
        }else{
            $countArray[] = [$products->currentPage() * count($products->items())];
        }
        $countArray[] = [$products->total()];
        return $countArray;
    }
}
