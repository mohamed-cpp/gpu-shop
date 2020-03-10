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
                'settings'=> GpuShopSetting::where('name','SLIDER_HOMEPAGE')
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
            'name' => 'SLIDER_HOMEPAGE',
            'val' => json_encode($input),
            'type' => 'json',
        ]);
        return redirect()->route('slider.index')->with('flash','Slider Added Successfully');
    }

    public function destroy(GpuShopSetting $slider){
        $slider->delete();
        return redirect()->route('slider.index')->with('flash','Slider Deleted Successfully');
    }
}
