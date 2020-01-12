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
        if (request()->wantsJson() && $id) {
            try {
                $numberSort = 0;
                if ($sort = $client->wishlist()->orderBy('sort', 'desc')->first()) {
                    $numberSort = $sort->sort;
                }
                $data = [
                    'product_id' => $id,
                    'client_id' => $client->id,
                    'sort' => $numberSort + 1,
                ];
                $client->wishlist()->create($data);
                return response([], 204);
            } catch (\Illuminate\Database\QueryException $e) {
                return response([], 204);
            }
        }
    }

    public function visibilityWishlist(Client $client, $id){
        if (request()->wantsJson() && $id) {
            $wishlist = $client->wishlist()->where('id', $id)->first();
            $wishlist->update([
                'public' => !$wishlist->public
            ]);
            $wishlist->save();
            return response([], 204);
        }
    }

    public function moveWishlist(Client $client, $id, $anotherId, $isUp = false){

        if (request()->wantsJson() && $id) {
            $wishlist = $client->wishlist()
                ->whereIn('id', [$id,$anotherId])
                ->get();
            $mainWishlist  = $wishlist->find($id);
            $anotherWishlist  = $wishlist->find($anotherId);
            $mainWishlist->update([
                'sort' => $isUp === 'true' ? $mainWishlist->sort + 1  : $mainWishlist->sort - 1 ,
            ]);
            $anotherWishlist->update([
                'sort' => $isUp === 'true' ? $anotherWishlist->sort - 1  : $anotherWishlist->sort + 1 ,
            ]);
            return response([], 204);
        }
    }

    public function destroyWishlistInProducts(Client $client, $id){
        if (request()->wantsJson() && $id) {
            $client->wishlist()->where('product_id', $id)->first()->delete();
            return response([], 204);
        }
    }

    public function destroyWishlist(Client $client, $id){
        if (request()->wantsJson() && $id) {
            $client->wishlist()->where('id', $id)->first()->delete();
            return response([], 204);
        }
    }
}
