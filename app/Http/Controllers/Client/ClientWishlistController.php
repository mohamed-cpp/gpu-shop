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

}
