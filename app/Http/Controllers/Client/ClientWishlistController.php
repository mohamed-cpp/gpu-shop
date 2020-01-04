<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Wishlist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ClientWishlistController extends Controller
{

    public function show(){
        $wishlist = auth('client')->user()->wishlist()
            ->with('products')
            ->orderBy('sort','desc')
            ->orderBy('id','desc')
            ->paginate(15);
        return view('client.products.wishlist',['wishlistProducts'=> $wishlist]);
    }

    public function store($id){
        try{
            $numberSort = 0;
            if ($sort = auth('client')->user()->wishlist()->orderBy('sort','desc')->first()){
                $numberSort = $sort->sort;
            }
            $data = [
                'product_id' => $id,
                'client_id' => auth('client')->user()->id,
                'sort' =>  $numberSort + 1,
            ];
            auth('client')->user()->wishlist()->create($data);
            return back();
        }
        catch (\Illuminate\Database\QueryException $e){
            return back();
        }
    }

    public function destroy(Wishlist $wishlist)
    {
        $wishlist->delete();
        return back();
    }

    public function visibility(Wishlist $wishlist)
    {
        $wishlist->update([
            'public' => !$wishlist->public
        ]);
        $wishlist->save();
        return back();
    }

}
