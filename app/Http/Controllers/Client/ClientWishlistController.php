<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ClientWishlistController extends Controller
{

    public function show(){
        auth('client')->user()->wishlist()
            ->orderBy('sort','desc')
            ->orderBy('id','desc')
            ->paginate(15);
        return view('client.products.wishlist');
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

}
