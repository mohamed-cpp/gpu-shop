@extends('client.app')
@section('title', $seller->name.' '.__('Seller'))
@section("SEO")
    <link rel="canonical" href="{{request()->fullUrl()}}" />
    <meta name="robots" content="index,follow">
    <meta property="og:locale" content="{{app()->getLocale()}}">
    <meta name="description" content="{{ __('Profile') }} {{ $seller->name}} {{__('Seller')}}">
    <meta property="og:type" content="product"/>
    <meta property="og:title" content="{{ __('Profile') }}"/>
    <meta property="og:description" content="{{ __('Profile') }}"/>
    <meta property="og:image" content="{{asset('storage/client/images/'.$seller->img)}}"/>
    <meta property="og:url" content="{{ route('view.profile',$seller->username) }}"/>
    <meta property="og:site_name" content="{{ __("GPU_Shop") }}"/>
@endsection
@push('styles')
    <link href="{{mix('GPU-Shop/css/products_page.css')}}" rel="stylesheet">
@endpush

@section('content')
    <div class="col">
        <div class="row">
            <div class="col mb-3">
                <div class="card">
                    <div class="card-body">
                        <div class="e-profile w-75 mx-auto p-3">
                            <div class="row">
                                <div class="col-12 col-sm-auto mb-3">
                                    <div class="mx-auto" style="width: 140px;">
                                        <div class="d-flex justify-content-center align-items-center rounded" style="height: 140px; background-color: rgb(233, 236, 239);">
                                            <img width="140" height="140" alt="{{$seller->name}}" id="profile_image" src="{{$seller->img ?asset('storage/client/images/'.$client->img) : '/GPU-Shop/img/avatar.jpg'}}" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                                    <div class="text-center text-sm-left mb-2 mb-sm-0">
                                        <h4 class="pt-sm-2 pb-1 mb-0 text-nowrap">{{$seller->name}}</h4>
                                        <p class="mb-0">{{'@'. $seller->username }}</p>
                                        <div class="top-rated-rating">
                                            <ul>
                                                @for($x = 1; $x <= 5; $x++)
                                                    @if($x <= $rating)
                                                        <li><i class="reting-color ion-android-star"></i></li>
                                                    @else
                                                        <li><i class="ion-android-star-outline"></i></li>
                                                    @endif
                                                @endfor
                                            </ul>
                                            <span>({{$count}}) @lang('Products')</span>
                                        </div>
                                    </div>
                                    <div class="text-center text-sm-right">
                                        <span class="badge badge-secondary">{{__('Seller')}}</span>
                                        <div class="text-muted"><small>@lang('Joined') {{$seller->created_at->format('jS F Y')}}</small></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="section-title text-center mb-55">
                                <h4>@lang('Latest Products From') {{'@'. $seller->username }}</h4>
                            </div>
                            <div class="row" id="appView">
                                <div class="new-collection-slider owl-carousel">
                                    @php $currency = Cookie::get('currency') == 'egp' ? '£' : '$' @endphp
                                    @foreach($products as $product)
                                        <div class="col-md-3 col-lg-3 col-sm-4 col-xs-12">
                                            <div class="single-product mb-35">
                                                <div class="product-img">
                                                    <a href="{{route('show.product.client', $product->slug)}}"><img src="{{asset('storage/product/images/thumbnail/'.$product->main_image)}}" alt="{{$product->name}}"></a>
                                                    @if($isOffer = $product->isOffer == true) <span>sale</span> @endif
                                                    <div class="product-action">
                                                        <add_wishlist idproduct="{{$product->id}}"></add_wishlist>
                                                        <click_quick_view slugproduct="{{$product->slug_en}}"></click_quick_view>
                                                    </div>
                                                </div>
                                                <div class="product-content">
                                                    <div class="product-title-price">
                                                        <div class="product-title">
                                                            <h4><a href="{{route('show.product.client', $product->slug)}}">{{$product->name}}</a></h4>
                                                        </div>
                                                        <div class="product-price">
                                                            <div><span class="{{ $isOffer? 'oldprice' : '' }} price">{{$currency}}{{$product->offerPrice(false)}}</span></div>
                                                            @if($isOffer)<span class="offer" >{{$currency}}{{$product->offerPrice()}}</span>@endif
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <add_cart slug="{{$product->slug}}" tablist="true"></add_cart>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    @endforeach
                                </div>
                                <quick_view locale="@if(app()->getLocale() == 'ar') 'ar' @endif" currencyprop="{{ Cookie::get('currency') }}"></quick_view>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@push('scripts')

@endpush