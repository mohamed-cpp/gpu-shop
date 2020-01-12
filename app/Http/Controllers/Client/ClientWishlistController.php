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

}
