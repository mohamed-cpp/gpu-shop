@extends('client.app')
@section('title', __('Search'))
@section("SEO")
    <link rel="canonical" href="{{request()->fullUrl()}}" />
    <meta name="robots" content="index,follow">
    <meta property="og:locale" content="{{app()->getLocale()}}">
    <meta name="description" content="{{ __('Search') }}">
    <meta property="og:type" content="product"/>
    <meta property="og:title" content="{{ __('Search') }}"/>
    <meta property="og:description" content="{{ __('Search') }}"/>
    <meta property="og:url" content="{{ route('search.product') }}"/>
    <meta property="og:site_name" content="{{ __("GPU_Shop") }}"/>
@endsection
@push('styles')
    <link href="{{mix('GPU-Shop/css/products_page.css')}}" rel="stylesheet">
    <style>
        .padding-filter{
            padding: 26px 89px 60px !important;
        }
    </style>
@endpush
@section('content')
    <div id="appView">
        @php $horizontal= request()->get('horizontal'); @endphp
        @php $currency = Cookie::get('currency') == 'egp' ? '£' : '$' @endphp
        <div class="shop-page-wrapper hidden-items padding-filter">
            <div class="container-fluid">
                <div class="shop-filters-right">
                    <div class="shop-bar-area pb-60">
                        <div class="shop-bar">
                            <div class="shop-found-selector">
                                <div class="shop-found">
                                    <p><span>{{$count[0][0]}}</span> Product Found of <span>{{$count[1][0]}}</span></p>
                                </div>
                            </div>
                            <div class="shop-filter-tab">
                                <div class="shop-tab nav" role=tablist>
                                    <a class="{{ $horizontal ? : 'active' }}" href="#grid-5-col1" data-toggle="tab" role="tab" aria-selected="false">
                                        <i class="ion-android-apps"></i>
                                    </a>
                                    <a class="{{ $horizontal ? 'active' : '' }}" href="#grid-5-col2" data-toggle="tab" role="tab" aria-selected="true">
                                        <i class="ion-android-menu"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="shop-product-content tab-content">
                        <div id="grid-5-col1" class="tab-pane fade  {{ $horizontal ? '' : 'active show'  }}">
                            <div class="row custom-row">
                                @foreach($products as $product)
                                    <div class="custom-col-5 custom-col-style">
                                        <div class="single-product mb-35">
                                            <div class="product-img">
                                                <a href="{{route('show.product.client', $product->slug)}}"><img height="270" src="{{asset('storage/product/images/thumbnail/'.$product->main_image)}}" alt="{{$product->name }}"></a>
                                                @if($isOffer = $product->isOffer )
                                                    <span>sale
                                                <span>{{round(($product->offerPrice(false) - $product->offerPrice()) / $product->offerPrice(false) * 100) }}% Off</span>
                                            </span>
                                                @endif
                                                <div class="product-action">
                                                    <add_wishlist idproduct="{{$product->id}}"></add_wishlist>
                                                    <click_quick_view slugproduct="{{$product->slug_en}}"></click_quick_view>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <div class="product-title-price">
                                                    <div class="product-title">
                                                        <h4><a href="{{route('show.product.client', $product->slug )}}">{{$product->name }}</a></h4>
                                                    </div>
                                                    <div class="product-price" >
                                                        <div><span class="{{ $isOffer? 'oldprice' : '' }} price">{{$currency}}{{$product->offerPrice(false) }}</span></div>
                                                        @if($isOffer)
                                                            <span class="offer" >{{$currency}}{{$product->offerPrice()}}</span>
                                                        @endif
                                                    </div>
                                                </div>
                                                <div class="product-cart-categori">
                                                    <add_cart slug="{{$product->slug }}" tablist="true"></add_cart>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                @endforeach


                            </div>
                            <div class="row">
                                <div class="col-sm-6 col-sm-offset-5">
                                    @if(!empty($sort))
                                        {{$products->appends(['horizontal' => false,"keywords" => $sort['keywords'] ? $sort['keywords'] : false,"min" => $sort['min'],"max" => $sort['max'],"sort" => $sort['sort'],])->links() }}
                                    @else
                                        {{$products->appends(['horizontal' => false])->links() }}
                                    @endif
                                </div>
                            </div>
                        </div>

                        <div id="grid-5-col2" class="tab-pane fade {{ $horizontal ? 'active show' : '' }}">
                            <div class="row">


                                @foreach($products as $product)
                                    <div class="col-md-12 col-lg-12 col-xl-6">
                                        <div class="single-product single-product-list product-list-right-pr mb-40">
                                            <div class="product-img list-img-width">
                                                <a href="{{route('show.product.client', $product->slug )}}"><img height="270"  src="{{asset('storage/product/images/thumbnail/'.$product->main_image)}}" alt="{{$product->name }}"></a>
                                                <div class="product-action">
                                                    {{--                                            <a title="Quick View" data-toggle="modal" data-target="#exampleModal" class="animate-right" href="#"><i class="ion-ios-eye-outline"></i></a>--}}
                                                    <click_quick_view slugproduct="{{$product->slug_en}}"></click_quick_view>
                                                </div>
                                            </div>
                                            <div class="product-content-list">
                                                <div class="product-list-info">
                                                    <h4><a href="{{route('show.product.client', $product->slug )}}">{{ Str::limit($product->name , $limit = 50, $end = '...')}}</a></h4>
                                                    <div><span class="{{ $isOffer = $product->isOffer ? 'oldprice' : '' }} price">{{$currency}}{{$oldOffer =  $product->offerPrice(false) }}</span></div>
                                                    @if($isOffer)
                                                        <span class="offer2" >{{$currency}}{{ $product->offerPrice() }}</span>
                                                        <div class="offBox"><span>{{round(($oldOffer - $product->offerPrice()) / $oldOffer * 100) }}% Off</span></div>
                                                    @endif
                                                </div>
                                                <div class="product-list-cart-wishlist">
                                                    <add_cart slug="{{$product->slug }}" tablist="false"></add_cart>
                                                    <div class="product-list-wishlist">
                                                        <add_wishlist list="1" idproduct="{{$product->id}}"></add_wishlist>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                @endforeach

                            </div>
                            <div class="row">
                                <div class="col-sm-6 col-sm-offset-5">
                                    @if(!empty($sort))
                                        {{$products->appends(['horizontal' => true,"keywords" => $sort['keywords'] ? $sort['keywords'] : false,"min" => $sort['min'],"max" => $sort['max'],"sort" => $sort['sort'],])->links() }}
                                    @else
                                        {{$products->appends(['horizontal' => true])->links() }}
                                    @endif
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <quick_view locale="@if(app()->getLocale() == 'ar') 'ar' @endif" currencyprop="{{ Cookie::get('currency') }}"></quick_view>
    </div>
@endsection
@push('scripts')
    <script src="{{asset('GPU-Shop/js/products_page.js')}}"></script>
    <script>
        $(function() {

            $(".boton").wrapInner('<div class=botontext></div>');
            $(".botontext").clone().appendTo( $(".boton") );
            $(".boton").append('<span class="twist"></span><span class="twist"></span><span class="twist"></span><span class="twist"></span>');
            $(".twist").css("width", "25%").css("width", "+=3px");
        });
    </script>
@endpush
