<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Product;
use App\ProductDetails;
use App\Client;
use Illuminate\Http\Request;

class ApiWishlistController extends Controller
{
    /**
     * @param Client $client
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function storeWishlist(Client $client, $id){
        try{
            $numberSort = 0;
            if ($sort = $client->wishlist()->orderBy('sort','desc')->first()){
                $numberSort = $sort->sort;
            }
            $data = [
                'product_id' => $id,
                'client_id' => $client->id,
                'sort' =>  $numberSort + 1,
            ];
            $client->wishlist()->create($data);
            return response([], 204);
        }
        catch (\Illuminate\Database\QueryException $e){
            return response([], 204);
        }
    }

    public function destroyWishlist(Client $client, $id){
        $client->wishlist()->where('product_id',$id)->first()->delete();
        return response([], 204);
    }
}
