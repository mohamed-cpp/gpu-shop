<?php

namespace App\Http\Controllers\Admin;

use App\Category;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Seller\ProductController;
use App\Http\Requests\AdminProductUpdateRequest;
use App\Http\Requests\ProductUpdateRequest;
use App\Image;
use App\Product;
use App\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class AdminProductController extends ProductController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::with('seller')->without('images')->paginate(15);
        return view('admin.product.index',[
            'products' => $products,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Product $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        $subcategories = SubCategory::where('status',true)->get();
        return view('admin.product.edit',[
            'product' => $product,
            'subcategories' => $subcategories,
            'subcategories_id' => $product->subcategories_ids->toArray(),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Product $product
     * @return \Illuminate\Http\Response
     * @throws \Exception
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return back()->with('flash','The Product Deleted Successfully');
    }

    public function quickButtons(Product $product){
        $approved = $product->approved == 0 ? 1 : 0 ;
        $product->update([
            'approved' => $approved
        ]);
        $product->save();
        $approved = $product->approved == 1 ? 'Approved' : 'Not Approved';
        return back()->with('flash',"The Product $approved Successfully");
    }

    public function rejected(Product $product){
        $product->update([
            'approved' => 2
        ]);
        $product->save();
        return back()->with('flash',"The Product Rejected Successfully");
    }

}
