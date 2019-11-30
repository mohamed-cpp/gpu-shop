<?php

namespace App\Http\Controllers;

use App\SubCategory;
use App\SubcatProduct;
use Illuminate\Http\Request;

class SubcatProductController extends Controller
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
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param SubCategory $subcategory
     * @return SubCategory
     */
    public function show(SubCategory $subcategory)
    {
        if($subcategory->status){
            $products = $subcategory->products()->paginate(15);
            return view('client.products.show_products',[
                'products' => $products,
                'subcategory' => $subcategory
            ]);
        }
            return response()->view('client.errors.error',['errorCode' => 404,
                'errorMessage'=>'Not Found']);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\SubcatProduct  $subcatProduct
     * @return \Illuminate\Http\Response
     */
    public function edit(SubcatProduct $subcatProduct)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\SubcatProduct  $subcatProduct
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SubcatProduct $subcatProduct)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SubcatProduct  $subcatProduct
     * @return \Illuminate\Http\Response
     */
    public function destroy(SubcatProduct $subcatProduct)
    {
        //
    }
}
