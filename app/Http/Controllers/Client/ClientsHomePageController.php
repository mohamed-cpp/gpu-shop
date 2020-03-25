<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Product;
use App\ProductOrder;
use Illuminate\Http\Request;

class ClientsHomePageController extends Controller
{
    public function homepage()
    {

	      $newProduct = Product::enabled()->orderBy('created_at', 'desc')->take(8)->get();
        $highestRating = Product::enabled()->orderBy('rating_of_product', 'desc')->take(12)->get();
        $offerProduct = Product::enabled()
            ->where('offer_start_at','<',now())
            ->where('offer_end_at','>',now())
            ->inRandomOrder()
            ->take(12)
            ->get();
        $randomProduct = Product::enabled()
            ->inRandomOrder()
            ->take(12)
            ->get();

        return view('client.main',[
            'newProducts' => $newProduct,
            'highestRatings' => $highestRating,
            'offerProducts' => $offerProduct,
            'randomProducts' => $randomProduct,
            'bestsellers' => $this->bestsellers(),
        ]);
    }

    private function bestsellers(){
        $ids = \Cache::remember('bestsellers',86400, function () {
            $bestsellers = ProductOrder::where('status',ProductOrder::ORDERED)
                ->get()->groupBy('product_id');
            $orders = $bestsellers->sort()->reverse()->take(12);
            return array_keys($orders->toArray());

        });
        if(!empty($ids)){
        $ids_ordered = implode(',', $ids);
        return Product::enabled()
            ->whereIn('id', $ids)
            ->orderByRaw("FIELD(id, ".$ids_ordered.")")
            ->get();
        }

    }
}
