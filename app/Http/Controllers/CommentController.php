<?php

namespace App\Http\Controllers;

use App\Events\NewComment;
use App\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use mysql_xdevapi\Exception;

class CommentController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param Product $product
     * @param \Illuminate\Http\Request $request
     * @return Response
     */
    public function store(Product $product,Request $request)
    {
        if (request()->wantsJson() ) {
            $data = [
                'body' => $request->body,
                'product_id' => $product->id,
                'parent_id' => $request->parent_id,
            ];

            if ( auth('client')->check() && $request->body){
                $user = auth('client')->user();
                $order = new \App\ProductOrder();
                try{
                $order =  $order->bought($user->id,$product->id);
                if($order){
                    $comment = $user->comment()->save(new \App\Comment($data));
                    $comment['commentable'] = $user;
                }else{
                    throw new \Exception('Need to buy first');
                }
                }catch (\Exception $exception){
                    return response('You should buy the product first',422);
                }

            }elseif(auth('seller')->check()){
                $user = auth('seller')->user();
                if($user->username != $product->username_seller){
                    return response('you dont have this product to comment',422);
                }
                $comment = $user->comment()->save(new \App\Comment($data));
                $comment['commentable'] = $user;

            }elseif(auth('web')->check()){
                $user = auth('web')->user();
                $comment = $user->comment()->save(new \App\Comment($data));
                $comment['commentable'] = $user;
            }else{
                return response('there something wrong try again later',422);
            }

            event(new NewComment($comment,$user,$request->all()));
            return response(['Add comment successfully',$comment], 200);
        }
    }

    public function update(Request $request)
    {
        if (request()->wantsJson() ) {

            if ( auth('client')->check() && $request->body){
                $user = auth('client')->user();
                $comment = $user->comment()->find($request->id);
                $comment->update(['body'=>$request->body]);
                $comment['commentable'] = $user;
                return response(['Updated comment successfully',$comment], 200);

            }elseif(auth('seller')->check()){
                $user = auth('seller')->user();
                $comment = $user->comment()->find($request->id);
                $comment->update(['body'=>$request->body]);
                $comment['commentable'] = $user;
                return response(['Updated comment successfully',$comment], 200);

            }elseif(auth('web')->check()){
                $user = auth('web')->user();
                $comment = $user->comment()->find($request->id);
                $comment->update(['body'=>$request->body]);
                $comment['commentable'] = $user;
                return response(['Updated comment successfully',$comment], 200);
            }
            return response('there something wrong try again later',422);
        }
    }

    public function delete($id)
    {
        if (request()->wantsJson() ) {
            if ( auth('client')->check()){
                $user = auth('client')->user();
                $user->comment()->find($id)->delete();
                return response(['Deleted comment successfully'], 200);

            }elseif(auth('seller')->check()){
                $user = auth('seller')->user();
                $user->comment()->find($id)->delete();
                return response(['Deleted comment successfully'], 200);

            }elseif(auth('web')->check()){
                $user = auth('web')->user();
                $user->comment()->find($id)->delete();
                return response(['Deleted comment successfully'], 200);
            }
            return response('there something wrong try again later',422);
        }
    }
}
