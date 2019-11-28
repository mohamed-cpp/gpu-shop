<?php

namespace App\Http\Controllers\Admin;

use App\Category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('permission:categories');
    }
    /**
     * Display a listing of the resource.
     *
     * @param Category $category
     * @return \Illuminate\Support\Collection
     */
    public function index()
    {
        $category = Category::all()->sortBy('created_at');
        return view('admin.categories.index_category',[
            'categories' => $category
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.categories.create_category');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return void
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $rules = [
            'name_en' => 'required|string',
            'name_ar' => 'required|string',
            'sort'    => 'required|numeric|min:0',
            'status'  => 'required|boolean',
        ];
        $this->validate($request, $rules);
        Category::create($request->toArray());
        \Cache::forget('categories');
        return redirect(route('categories.index'))->with('flash','The Category Added Successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        $subCategories = $category->subCategories()->get();
        return view('admin.categories.index_sub_category',[
            'subCategories' => $subCategories,
            'category' => [ 'name' => $category->name, 'categoryId' => $category->id,]
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        return view('admin.categories.edit_category',[
            'category' => $category
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Category $category
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request, Category $category)
    {
        $rules = [
            'name_en' => 'required|string',
            'name_ar' => 'required|string',
            'sort'    => 'required|numeric|min:0',
            'status'  => 'required|boolean',
        ];
        $this->validate($request, $rules);
        $category->update($request->toArray());
        \Cache::forget('categories');
        return redirect(route('categories.index'))->with('flash',"$category->name Updated Successfully");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Category $category
     * @return \Illuminate\Http\Response
     * @throws \Exception
     */
    public function destroy(Category $category)
    {
        $category->delete();
        \Cache::forget('categories');
        return redirect(route('categories.index'))->with('flash','The Category Deleted Successfully');
    }

    public function quickButtons(Category $category){
        $category->update([
            'status' => !$category->status
        ]);
        $category->save();
        \Cache::forget('categories');
        return back();
    }
}
