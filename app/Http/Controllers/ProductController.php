<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductCreateRequest;
use App\Http\Requests\ProductUpdateRequest;
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
        return view('seller.product.index',[
            'products' => auth('seller')->user()->products()->paginate(15),
        ]);
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
        $subcategories = SubCategory::where('status',true)->get();
        return view('seller.product.edit',[
            'product' => $product,
            'subcategories' => $subcategories,
            'subcategories_id' => $product->subcategories_ids->toArray(),
        ]);
    }

    /**
     * @param ProductUpdateRequest $request
     * @param Product $product
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     * @throws \Exception
     */
    public function update(ProductUpdateRequest $request, Product $product)
    {
        $input = $request->all();
        if($image = $request->file('main_image')){
            $input['main_image'] = $this->moveImage($image,$request);
        }
        $product->update($input);
        if ($request->deleteImages){
            foreach ($request->deleteImages as $deleteImage){
                $product->images()->find($deleteImage)->delete();
            }
        }
        foreach ($product->subcategories_ids as $id){
            if (! in_array($id,$input['subcategories'])){
                $product->subcategories()->whereIn('subcategoryable_id',[$id])->delete();
            }
        }
        $subcategories = [];
        foreach ($input['subcategories'] as $subcategory){
            if(! in_array($subcategory,$product->subcategories_ids->toArray())){
                $subcategories[] = new \App\SubcatProduct(['subcategoryable_id' => $subcategory]);
            }
        }
        $product->subcategories()->saveMany($subcategories);
        if ($request->file('images')){
            $images = [];
            foreach ($request->file('images') as $requestImage){
                $images[] = new \App\Image(['path' => $this->moveImage($requestImage,$request)]) ;
            }
            $product->images()->saveMany($images);
        }

        return redirect(route('product.index'))->with('flash','The Product Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Product $product
     * @return \Illuminate\Http\Response
     * @throws \Exception
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return back()->with('flash','The Product Deleted Successfully');
    }

    public function quickButtons(Product $product){
        $product->update([
            'status' => !$product->status
        ]);
        $product->save();
        $status = $product->status == true ? 'Enabled' : 'Disabled';
        return back()->with('flash',"The Product $status Successfully");
    }

    public function moveImage($image,$request){
        $path = 'storage/product/images/';
        $image->move(public_path($path),$name = md5(Str::random(10).$request->image).'.'.$image->getClientOriginalExtension());
        $img = Image::make(public_path($path.$name));
        $img->resize(365, 302);
        $img->save('storage/product/images/thumbnail/'.$name);
        return $name;
    }
}
