<?php

namespace App\Http\Controllers\Client;

use App\Cart;
use App\Comment;
use App\Http\Requests\RatingRequest;
use App\Jobs\ProductRating;
use App\Order;
use App\Product;
use App\Http\Controllers\Controller;
use App\ProductOrder;
use App\Rating;
use App\SubCategory;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Redis\RedisManager;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Session;

class ClientProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return Response
     */
    public function show(Product $product)
    {
        $ratingClient = false;
        $ratingsArray = [1 => 0, 2 => 0, 3 => 0, 4 => 0, 5 => 0,];
        $added = false;
        $product->load('images','details');
        $comments = Comment::with('replies')
            ->whereNull('parent_id')
            ->where('product_id',$product->id)
            ->orderBy('created_at', 'desc')
            ->paginate(15);
        $relatedProduct = $product->withAnyTags($product->tagList)
                            ->where('approved',1)->where('status',true)
                            ->take(11)->orderBy('created_at','desc')->get();

        $filtered = $relatedProduct->reject(function ($value) use($product) {
            return $value->id == $product->id;
        });

        $allRatings = $product->rating()->get();
        $count = count($allRatings);
        $ratings = $allRatings->groupBy('rating');
        $ratingsArray['count'] = $count;

        if(auth('client')->check()){
            $user = auth('client')->user();
            $added = !! $user->wishlist()->where('product_id',$product->id)->first();
            $ratingClient = $user->rating()
                            ->where('product_id',$product->id)
                            ->first();
            $ratingsArray['rating'] = $ratingClient ? $ratingClient->rating : 0;
        }
        if(!$ratingClient || !auth('client')->check()){
            $ratingsArray['rating'] = $product->rating_of_product;
        }
        if ($allRatings){
            foreach($ratings as $index => $rating){
                $ratingsArray[$index] = round((count($rating) / $count ) *100);
            }
        }

        return view('client.products.show_product', [
                'product'=> $product,
                'comments'=> $comments,
                'currentPage'=> $comments->currentPage(),
                'relatedProducts' => $filtered,
                'price'=>[
                    'normalPrice' => $product->offerPrice(false),
                    'offerPrice' => $product->offerPrice()],
                'addedWishlist' => $added,
                'ratings' => $ratingsArray,
            ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Product  $product
     * @return Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return Response
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return Response
     */
    public function destroy(Product $product)
    {
        //
    }

    /**
     * @param RatingRequest $request
     * @return ResponseFactory|Response
     */
    public function rating(RatingRequest $request){
        $user = auth('client')->user();
        $order = new \App\ProductOrder();
        $order =  $order->bought($user->id,$request->product);

        if ( $order && $request->rating <= 5){
            try{
                $created = Rating::updateOrCreate(
                    ['client_id' => $user->id, 'product_id' => $request->product]
                    ,[
                        'client_id' => $user->id,
                        'product_id' => $request->product,
                        'rating' => $request->rating]);

                ProductRating::dispatch($request->product);
                if ($created->wasRecentlyCreated){
                    return response(['created'], 200);
                }
                return response(['updated'], 200);

            }catch (\Exception $exception){
                return response('there something wrong try later',422);
            }
        }
        return response([],403);

    }

}
