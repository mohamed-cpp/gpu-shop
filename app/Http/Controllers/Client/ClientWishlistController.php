<?php

namespace App\Http\Controllers\Client;

use App\Client;
use App\Http\Controllers\Controller;
use App\Wishlist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;

class ClientWishlistController extends Controller
{

    public function index(Request $request){
        $keywords = $request->keywords;
        $wishlist = auth('client')->user()->wishlist()
            ->with(['products' => function($query) use ($keywords)
            {
                $query->where("name_".App::getLocale(),'like','%'.$keywords.'%');
            }])
            ->orderBy('sort','desc')
            ->paginate(15);
        return view('client.products.wishlist',['wishlistProducts'=> $wishlist]);
    }

    public function show(Client $client,Request $request){
        $keywords = $request->keywords;
        $wishlist = $client->wishlist()
            ->with(['products' => function($query) use ($keywords)
            {
                $query->where("name_".App::getLocale(),'like','%'.$keywords.'%');
            }])
            ->orderBy('sort','desc')
            ->where('public',1)
            ->paginate(15);
        return view('client.products.wishlist_guest',['wishlistProducts'=> $wishlist]);

    }

    /**
     * @param $id
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function visibilityWishlist($id){
            $wishlist = auth("client")->user()->wishlist()->where('id', $id)->first();
            $wishlist->update([
                'public' => !$wishlist->public
            ]);
            return response([], 204);
    }

    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function storeWishlist($id){
        try {
            $numberSort = 0;
            $client = auth("client")->user();
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

    /**
     * @param $id
     * @param $anotherId
     * @param bool $isUp
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function moveWishlist($id, $anotherId, $isUp = false ){

            $wishlist = auth("client")->user()->wishlist()
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

    /**
     * @param $id
     * @param bool $isTop
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function topOrBottomWishlist($id, $isTop = false){
        if ($isTop === 'true'){
            $biggestNumber = auth("client")->user()->wishlist()->orderBy('sort', 'desc')->get();
            $biggestNumber->find($id)->update([
                'sort'=> $biggestNumber->first()->sort+1,
            ]);
        }else{
            $smallestNumber = auth("client")->user()->wishlist()->orderBy('sort', 'asc')->get();
            $smallestNumber->find($id)->update([
                'sort'=> $smallestNumber->first()->sort-1,
            ]);
        }
        return response([], 204);
    }

    public function destroyWishlistInProducts($id){
        auth("client")->user()->wishlist()->where('product_id', $id)->first()->delete();
            return response([], 204);
    }

    public function destroyWishlist($id){
        auth("client")->user()->wishlist()->where('id', $id)->first()->delete();
            return response([], 204);
    }

}
