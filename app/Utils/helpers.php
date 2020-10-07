<?php

use App\GpuShopSetting;
use Intervention\Image\Facades\Image as EditerImage;

function cartImage(){
    $image = GpuShopSetting::getAllSettings()->where('name','CART_IMAGE_'. strtoupper(app()->getLocale()))->first();
    if($image){
        return asset(config('websiteSettings.IMAGE_PUBLIC_DIR'))."/{$image->val}";
    }
    return asset('/assets/img/bg/breadcrumb.jpg');
}

function wishlistImage(){
    $image = GpuShopSetting::getAllSettings()->where('name','WISHLIST_IMAGE_'. strtoupper(app()->getLocale()))->first();
    if($image){
        return asset(config('websiteSettings.IMAGE_PUBLIC_DIR'))."/{$image->val}";
    }
    return asset('/assets/img/bg/breadcrumb.jpg');
}

function orderImage(){
    $image = GpuShopSetting::getAllSettings()->where('name','ORDER_IMAGE_'. strtoupper(app()->getLocale()))->first();
    if($image){
        return asset(config('websiteSettings.IMAGE_PUBLIC_DIR'))."/{$image->val}";
    }
    return asset('/assets/img/bg/breadcrumb.jpg');
}

function checkoutImage(){
    $image = GpuShopSetting::getAllSettings()->where('name','CHECKOUT_IMAGE_'. strtoupper(app()->getLocale()))->first();
    if($image){
        return asset(config('websiteSettings.IMAGE_PUBLIC_DIR'))."/{$image->val}";
    }
    return asset('/assets/img/bg/breadcrumb.jpg');
}

function wishlistGuestImage(){
    $image = GpuShopSetting::getAllSettings()->where('name','WISHLIST_GUEST_IMAGE_'. strtoupper(app()->getLocale()))->first();
    if($image){
        return asset(config('websiteSettings.IMAGE_PUBLIC_DIR'))."/{$image->val}";
    }
    return asset('/assets/img/bg/breadcrumb.jpg');
}

function registerImage(){
    $image = GpuShopSetting::getAllSettings()->where('name','REGISTER_IMAGE_'. strtoupper(app()->getLocale()))->first();
    if($image){
        return asset(config('websiteSettings.IMAGE_PUBLIC_DIR'))."/{$image->val}";
    }
    return asset('/assets/img/bg/breadcrumb.jpg');
}
function hotSaleImage(){
    $image = GpuShopSetting::getAllSettings()->where('name','HOT_SALE_IMAGE_'. strtoupper(app()->getLocale()))->first();
    if($image){
        return asset(config('websiteSettings.IMAGE_PUBLIC_DIR'))."/{$image->val}";
    }
    return asset('/assets/img/bg/breadcrumb.jpg');
}

function loginImage(){
    $image = GpuShopSetting::getAllSettings()->where('name','LOGIN_IMAGE_'. strtoupper(app()->getLocale()))->first();
    if($image){
        return asset(config('websiteSettings.IMAGE_PUBLIC_DIR'))."/{$image->val}";
    }
    return asset('/assets/img/bg/breadcrumb.jpg');
}

function SEODescription(){
    $description = GpuShopSetting::getAllSettings()->where('name','SEO_DESCRIPTION_'. strtoupper(app()->getLocale()) )->first();
    if($description){
        return $description->val;
    }
    return 'New Online Shopping';
}

function sliderImages(){
    $slider = GpuShopSetting::getAllSettings()->where('name','SLIDER_HOMEPAGE_'. strtoupper(app()->getLocale()));
    return $slider;
}

function cashPayment($exception = false){
    if ( $payment = GpuShopSetting::getAllSettings()->where('name','CASH_PAYMENT')->first()){
        $status = $payment->castValue($payment->val, $payment->type);
        if($exception && !$status){
            throw new InvalidArgumentException('Not found Payment');
        }
        return $status;
    }
    if($exception){
        throw new InvalidArgumentException('Not found Payment');
    }
    return false;
}

function creditCardPayment($exception = false){
    if ( $payment = GpuShopSetting::getAllSettings()->where('name','CREDIT_CARDS_PAYMENT')->first()){
        $status = $payment->castValue($payment->val, $payment->type);
        if($exception && !$status){
            throw new InvalidArgumentException('Not found Payment');
        }
        return $status;
    }
    if($exception){
        throw new InvalidArgumentException('Not found Payment');
    }
    return false;
}

function PayPalPayment($exception = false){
    if ( $payment = GpuShopSetting::getAllSettings()->where('name','PAYPAL_PAYMENT')->first()){
        $status = $payment->castValue($payment->val, $payment->type);
        if($exception && !$status){
            throw new InvalidArgumentException('Not found Payment');
        }
        return $status;
    }
    if($exception){
        throw new InvalidArgumentException('Not found Payment');
    }
    return false;
}

function moveImage($image,$path){
    $image->move($path,$name = md5(Str::random(10).$image->getClientOriginalName()).'.'.$image->getClientOriginalExtension());
    return $name;
}

function castVal($val, $castTo)
{
    switch ($castTo) {
        case 'int':
        case 'integer':
            return intval($val);
            break;

        case 'bool':
        case 'boolean':
            return boolval($val);
            break;
        case 'json':
            return json_decode($val,true);
            break;

        default:
            return $val;
    }
}

function addWatermark($name,$path = \App\Product::PATH){
    $img = EditerImage::make(public_path($path.$name));
    $img->insert(public_path(\App\GpuShopSetting::WATERMARK), 'bottom-left', 10, 10);
    $img->save(public_path($path.$name));
}
function thumbnail($name,$path = \App\Product::PATH){
    $img = EditerImage::make(public_path($path.$name));
    $img->resize(365, 400);
    $img->save(public_path(\App\Product::THUMBNAIL_PATH.$name));
}
