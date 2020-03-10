<?php

use App\GpuShopSetting;

function cartImage(){
    $image = GpuShopSetting::getAllSettings()->where('name','CART_IMAGE')->first();
    if($image){
        return asset(config('websiteSettings.IMAGE_PUBLIC_DIR'))."/{$image->val}";
    }
    return asset('/assets/img/bg/breadcrumb.jpg');
}

function wishlistImage(){
    $image = GpuShopSetting::getAllSettings()->where('name','WISHLIST_IMAGE')->first();
    if($image){
        return asset(config('websiteSettings.IMAGE_PUBLIC_DIR'))."/{$image->val}";
    }
    return asset('/assets/img/bg/breadcrumb.jpg');
}

function orderImage(){
    $image = GpuShopSetting::getAllSettings()->where('name','ORDER_IMAGE')->first();
    if($image){
        return asset(config('websiteSettings.IMAGE_PUBLIC_DIR'))."/{$image->val}";
    }
    return asset('/assets/img/bg/breadcrumb.jpg');
}

function checkoutImage(){
    $image = GpuShopSetting::getAllSettings()->where('name','CHECKOUT_IMAGE')->first();
    if($image){
        return asset(config('websiteSettings.IMAGE_PUBLIC_DIR'))."/{$image->val}";
    }
    return asset('/assets/img/bg/breadcrumb.jpg');
}

function wishlistGuestImage(){
    $image = GpuShopSetting::getAllSettings()->where('name','WISHLIST_GUEST_IMAGE')->first();
    if($image){
        return asset(config('websiteSettings.IMAGE_PUBLIC_DIR'))."/{$image->val}";
    }
    return asset('/assets/img/bg/breadcrumb.jpg');
}

function sliderImages(){
    $slider = GpuShopSetting::getAllSettings()->where('name','SLIDER_HOMEPAGE');
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
