<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductCreateRequest;
use App\Product;
use App\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $subcategories = SubCategory::where('status',true)->get();
        return view('seller.product.create',['subcategories' => $subcategories]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ProductCreateRequest $request
     * @return void
     */
    public function store(ProductCreateRequest $request)
    {
        $input = $request->all();

        $image = $request->file('main_image');

        $input['main_image'] = $this->moveImage($image,$request);

        $product = auth('seller')->user()->products()->create($input);

        $images = [];
        foreach ($request->file('images') as $requestImage){
            $images[] = new \App\Image(['path' => $this->moveImage($requestImage,$request)]) ;
        }

        $subcategories = [];
        foreach ($input['subcategories'] as $subcategor){
            $subcategories[] = new \App\SubcatProduct(['subcategoryable_id' => $subcategor]);
        }

        $product->images()->saveMany($images);
        $product->subcategories()->saveMany($subcategories);

        return redirect('/');


//        $test =$this->moveImage($image,$request);
//
//        $img = Image::make(public_path($test));
//        $img->resize(320, 240);
//        $img->save('bar.jpg');
//
//        dd('done');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
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
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }

    public function moveImage($image,$request){
        $path = 'storage/product/images/';
        $image->move(public_path($path),$name = md5(Str::random(5).$request->image).'.'.$image->getClientOriginalExtension());
        return $name;
    }
}
