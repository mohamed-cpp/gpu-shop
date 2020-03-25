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
            $products = $subcategory->paginateManyProducts()
                ->orderBy('created_at', 'desc')
                ->paginate(15);
            return view('client.products.show_products',[
                'products' => $products,
                'subcategory' => $subcategory,
                'priceMinMax' => $this->minMaxPriceCache($subcategory),
                'count'=>$this->count($products),
                'topRated'=>$this->topRated($subcategory->id),
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
        $currency = Cookie::get('currency') ? Cookie::get('currency') : 'usd';
        $column = "products.name_" . app()->getLocale();
        $keywords = $request->keywords ?  $request->keywords : null ;
        $isOfferPage = $request->offer ? ['offer_',
            [['products.offer_start_at', '<', now()],
            ['products.offer_end_at', '>', now()]]] : ['',null];
        $sort = $this->sort($request->sort,$column,$currency,$isOfferPage[0]);
        $products = $subcategory->paginateManyFilterProducts($column,$keywords,$currency,
                                                            $request->all(),$isOfferPage,$sort)
            ->paginate(15);
        $parameters = $request->all();
        $parameters['keywords'] = $keywords;
        return view('client.products.show_products',[
            'products' => $products,
            'subcategory' => $subcategory,
            'priceMinMax' => $request->offer ? $this->minMaxPriceOffer($subcategory) : $this->minMaxPriceCache($subcategory),
            'sort'=>$parameters,
            'count'=>$this->count($products),
            'topRated'=>$this->topRated($subcategory->id),
        ]);

    }
    public function showOffers(SubCategory $subcategory){
        if($subcategory->status){
            $products = $subcategory->paginateManyOfferProducts()
                ->paginate(15);
            return view('client.products.show_products',[
                'products' => $products,
                'subcategory' => $subcategory,
                'priceMinMax' => $this->minMaxPriceOffer($subcategory),
                'count'=>$this->count($products),
                'topRated'=>$this->topRated($subcategory->id),
            ]);
        }
        return response()->view('client.errors.error',['errorCode' => 404,
            'errorMessage'=>'Not Found']);
    }

    protected function minMaxPriceCache($subcategory){
        return Cache::remember($subcategory->slug_en, 900, function() use ($subcategory) {
            $products = $subcategory->products();
            $currency = Cookie::get('currency') ;
            $productsPrices = $products->get()
                ->pluck('productable');
            return ['min_price' =>  $productsPrices->min("price_$currency")
                ,'max_price' =>  $productsPrices->max("price_$currency")];
        });
    }
    protected function minMaxPriceOffer($subcategory){
        $currency = Cookie::get('currency') ? Cookie::get('currency') : 'usd';
        $products = $subcategory->products()->get()->pluck('productable');
        return ['min_price' =>  $products->min("offer_price_$currency")
            ,'max_price' =>  $products->max("offer_price_$currency")];
    }
    protected function sort($sort,$name,$currency,$offer){
        $sortArray = [];
        if ($sort=='Z' || $sort=='H' || $sort=='D'){
            $sortArray[] =['desc'];
        }else{
            $sortArray[] =['asc'];
        }
        if ($sort=='L' || $sort=='H'){
            $sortArray[] =[ "products.{$offer}price_" . $currency];
        }elseif($sort=='A' || $sort=='Z'){
            $sortArray[] =[$name];

        }else{
            $sortArray[] =["products.created_at"];
        }
        return $sortArray;
    }

    protected function count($products){
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

    protected function topRated($id){
        $products = \DB::table('subcat_products')
            ->where('subcategoryable_id',$id)
            ->join('products', 'products.id', '=', 'subcat_products.productable_id')
            ->where('products.status', '=', 1)
            ->where('products.approved', '=', 1)
            ->orderBy('count_rating', 'desc')
            ->orderBy('rating_of_product', 'desc')
            ->select('products.*')
            ->take(4)
            ->get()
            ->toArray();

        return Product::hydrate($products);
    }
}
