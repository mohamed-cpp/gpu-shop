<?php

namespace App\Http\Controllers\Admin;

use App\GpuShopSetting;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class GpuShopSettingController extends Controller
{
    public function index(){
        return view('admin.settings.index',
            [
                'settings'=> GpuShopSetting::where('name','!=','SLIDER_HOMEPAGE_EN')
                    ->where('name','!=','SLIDER_HOMEPAGE_AR')
                        ->paginate(15)
            ]);
    }

    public function create(){
        return view('admin.settings.create');
    }

    public function store(Request $request){
        $rules = [
            'name' => 'required',
            'val' => 'required_without:main_image',
            'type' => 'required',
            'main_image' => 'sometimes|mimes:jpeg,png,jpg|dimensions:width=1920,height=500'
        ];
        $date = $this->validate( $request , $rules);
        if($request->file('main_image')){
            $name = moveImage($request->file('main_image'),config('websiteSettings.IMAGE_DIR'));
            $date['val'] = $name;
        }
        GpuShopSetting::create($date);
        return redirect()->route('settings.index')->with('flash','Setting Added Successfully');
    }

    public function edit(GpuShopSetting $setting){
        return view('admin.settings.edit',['setting'=>$setting]);
    }

    public function update(Request $request,GpuShopSetting $setting){
        $rules = [
            'name' => 'required',
            'val' => 'sometimes|main_image',
            'type' => 'required',
            'main_image' => 'sometimes|mimes:jpeg,png,jpg|dimensions:width=1920,height=500'
        ];
        $date = $this->validate( $request , $rules);
        if($request->file('main_image')){
            $name = moveImage($request->file('main_image'),config('websiteSettings.IMAGE_DIR'));
            $date['val'] = $name;
        }
        $setting->update($date);
        return redirect()->route('settings.index')->with('flash','Setting Updated Successfully');
    }

    public function destroy(GpuShopSetting $setting){
        $setting->delete();
        return redirect()->route('settings.index')->with('flash','Setting Deleted Successfully');
    }
}
