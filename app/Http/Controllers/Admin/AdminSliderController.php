<?php

namespace App\Http\Controllers\Admin;

use App\GpuShopSetting;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminSliderController extends Controller
{
    public function index(){
        return view('admin.slider.index',
            [
                'settings'=> GpuShopSetting::where('name','like','SLIDER_HOMEPAGE_%')
                    ->paginate(15)
            ]);
    }

    public function create(){
        return view('admin.slider.create');
    }

    public function store(Request $request){
        $rules = [
            'image' => 'required|mimes:jpeg,png,jpg|dimensions:width=1920,height=785'
        ];
        $this->validate( $request , $rules);
        $name = moveImage($request->file('image'),config('websiteSettings.IMAGE_DIR'));
        $input = $request->all();
        $input['image'] = $name;
        unset($input['_token']);
        GpuShopSetting::create([
            'name' => 'SLIDER_HOMEPAGE_'.$input['locale'],
            'val' => json_encode($input),
            'type' => 'json',
        ]);
        return redirect()->route('slider.index')->with('flash','Slider Added Successfully');
    }

    public function edit(GpuShopSetting $slider){
        return view('admin.slider.edit',['slider'=>$slider,'sliderJson'=>json_decode($slider->val,true)]);
    }

    public function update(Request $request,GpuShopSetting $slider){
        $rules = [
            'image' => 'sometimes|mimes:jpeg,png,jpg|dimensions:width=1920,height=785',
            'oldImage' => 'required|string'
        ];
        $input = $request->all();

        $this->validate( $request , $rules);
        if($request->file('image')){
            $name = moveImage($request->file('image'),config('websiteSettings.IMAGE_DIR'));
            $input['image'] = $name;
        }else{
            $input['image'] = $input['oldImage'];
        }

        unset($input['_token']);
        $slider->update([
            'val' => json_encode($input),
            'type' => 'json',
        ]);
        return redirect()->route('slider.index')->with('flash','Slider Updated Successfully');
    }

    public function destroy(GpuShopSetting $slider){
        $slider->delete();
        return redirect()->route('slider.index')->with('flash','Slider Deleted Successfully');
    }
}
