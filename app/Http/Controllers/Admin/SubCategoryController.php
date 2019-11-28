<?php

namespace App\Http\Controllers\Admin;

use App\SubCategory;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SubCategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('permission:categories');
    }
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
        return view('admin.categories.create_sub_category');
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
            'category_id' => 'required',
            'name_en' => 'required|string',
            'name_ar' => 'required|string',
            'slug_en' => 'required|string',
            'slug_ar' => 'required|string',
            'sort'    => 'required|numeric|min:0',
            'status'  => 'required|boolean',
            'image'   => 'required|mimes:jpeg,png,jpg,gif,svg|dimensions:width=1920,height=500'
        ];
        $this->validate($request, $rules);
        $file = $request->file('image');
        $input = $request->all();
        $input['image'] = $this->moveImage($file,$request);
        SubCategory::create($input);
        \Cache::forget('categories');
        return redirect(route('categories.show',$request->category_id))->with('flash','The Subcategory Added Successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param SubCategory $subcategory
     * @return void
     */
    public function show(SubCategory $subcategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param SubCategory $subcategory
     * @return void
     */
    public function edit(SubCategory $subcategory)
    {
        return view('admin.categories.edit_sub_category',[
            'subcategory' => $subcategory
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param SubCategory $subcategory
     * @return void
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request, SubCategory $subcategory)
    {
        $rules = [
            'name_en' => 'required|string',
            'name_ar' => 'required|string',
            'slug_en' => 'required|string',
            'slug_ar' => 'required|string',
            'sort'    => 'required|numeric|min:0',
            'status'  => 'required|boolean',
            'image'   => 'sometimes|mimes:jpeg,png,jpg,gif,svg|dimensions:width=1920,height=500'
        ];
        $this->validate($request, $rules);

        $input = $request->all();
        if($image = $request->file('image')){
            $input['image'] = $this->moveImage($image,$request);
        }
        $subcategory->update($input);
        \Cache::forget('categories');
        return redirect(route('categories.show',$subcategory->category_id))->with('flash',"$subcategory->name Updated Successfully");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param SubCategory $subcategory
     * @return \Illuminate\Http\Response
     * @throws \Exception
     */
    public function destroy(SubCategory $subcategory)
    {
        $subcategory->delete();
        \Cache::forget('categories');
        return back()->with('flash','The Subcategory Deleted Successfully');
    }

    /**
     * @param SubCategory $subcategory
     * @return \Illuminate\Http\RedirectResponse
     */
    public function quickButtons(SubCategory $subcategory){
        $subcategory->update([
            'status' => !$subcategory->status
        ]);
        $subcategory->save();
        \Cache::forget('categories');
        $status = $subcategory->status == true ? 'Enabled' : 'Disabled';
        return back()->with('flash',"The Subcategory $status Successfully");
    }

    protected function moveImage($image,$request){
        $path = 'storage/admin/subcategory/images/';
        $image->move(public_path($path),$name = md5($request->name_en.$request->image).'.'.$image->getClientOriginalExtension());
         return $path.$name;
    }
}
