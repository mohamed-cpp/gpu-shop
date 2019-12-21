@extends('client.app')
@push('styles')

    <style>
        [v-cloak] {
            display: none;
        }
        .oldprice{
            text-decoration-line: line-through;
            color: darkred !important;
            padding-right: 5px !important;
        }
        .offer2,
        .offer{
            color: red !important;
            font-size: 15px;
        }
        .price{
            color: rgba(0, 7, 255, 0.8) !important;
            font-size: 15px;
            font-weight: 550;
        }
        .breadcrumb-content h2 {
            color: #fff;
        }
        .breadcrumb-content li,
        .breadcrumb-content li a {
            color: #fff;
        }
        .breadcrumb-area{
            background-size: cover;
            height: 100%;
            background-attachment: fixed;
        }
        .page-item.active .page-link{
            background-color: rgb(84, 84, 84);
            border-color: #40000c;

        }
        .page-link{
            color: #0c5460;
        }
        .quick-view-tab-content .tab-pane > img{
            width: 320px;
        }

    </style>

@endpush
@section('content')
    <div id="appView">
    @php $subcategoryName = $subcategory->name ; $horizontal= request()->get('horizontal'); @endphp
    <div class="breadcrumb-area pt-205 pb-210 bg-img" style="background-image: url('{{asset($subcategory->image)}}')">
        <div class="container">
            <div class="breadcrumb-content">
                <h2>{{ $subcategoryName }}</h2>
                <ul>
                    <li><a href="/">home</a></li>
                    <li>{{ $subcategory->name }}</li>
                </ul>
            </div>
        </div>
    </div>

<div class="shop-page-wrapper hidden-items padding-filter">
        <div class="container-fluid">
            <div class="shop-filters-left">
                <div class="shop-sidebar">
                    <div class="sidebar-widget mb-50">
                        <h3 class="sidebar-title">Search Products</h3>
                        <div class="sidebar-search">
                            <form action="#">
                                <input placeholder="Search Products..." type="text">
                                <button><i class="ion-ios-search-strong"></i></button>
                            </form>
                        </div>
                    </div>


                    <div class="sidebar-widget mb-40">
                        <h3 class="sidebar-title">Filter by Price</h3>
                        <div class="price_filter">
                            <div id="slider-range"></div>
                            <div class="price_slider_amount">
                                <div class="label-input">
                                    <label>price : </label>
                                    <input type="text" id="amount" name="price"  placeholder="Add Your Price" />
                                </div>
                                <button type="button">Filter</button>
                            </div>
                        </div>
                    </div>

                    <div class="sidebar-widget mb-50">
                        <h3 class="sidebar-title">Top rated products</h3>
                        <div class="sidebar-top-rated-all">
                            <div class="sidebar-top-rated mb-30">
                                <div class="single-top-rated">
                                    <div class="top-rated-img">
                                        <a href="#"><img src="/assets/img/product/sidebar-product/1.jpg" alt=""></a>
                                    </div>
                                    <div class="top-rated-text">
                                        <h4><a href="#">Flying Drone</a></h4>
                                        <div class="top-rated-rating">
                                            <ul>
                                                <li><i class="reting-color ion-android-star"></i></li>
                                                <li><i class="reting-color ion-android-star"></i></li>
                                                <li><i class="ion-android-star-outline"></i></li>
                                                <li><i class="ion-android-star-outline"></i></li>
                                                <li><i class="ion-android-star-outline"></i></li>
                                            </ul>
                                        </div>
                                        <span>$140.00</span>
                                    </div>
                                </div>
                            </div>
                            <div class="sidebar-top-rated mb-30">
                                <div class="single-top-rated">
                                    <div class="top-rated-img">
                                        <a href="#"><img src="/assets/img/product/sidebar-product/2.jpg" alt=""></a>
                                    </div>
                                    <div class="top-rated-text">
                                        <h4><a href="#">Flying Drone</a></h4>
                                        <div class="top-rated-rating">
                                            <ul>
                                                <li><i class="reting-color ion-android-star"></i></li>
                                                <li><i class="reting-color ion-android-star"></i></li>
                                                <li><i class="ion-android-star-outline"></i></li>
                                                <li><i class="ion-android-star-outline"></i></li>
                                                <li><i class="ion-android-star-outline"></i></li>
                                            </ul>
                                        </div>
                                        <span>$140.00</span>
                                    </div>
                                </div>
                            </div>
                            <div class="sidebar-top-rated mb-30">
                                <div class="single-top-rated">
                                    <div class="top-rated-img">
                                        <a href="#"><img src="/assets/img/product/sidebar-product/3.jpg" alt=""></a>
                                    </div>
                                    <div class="top-rated-text">
                                        <h4><a href="#">Flying Drone</a></h4>
                                        <div class="top-rated-rating">
                                            <ul>
                                                <li><i class="reting-color ion-android-star"></i></li>
                                                <li><i class="reting-color ion-android-star"></i></li>
                                                <li><i class="ion-android-star-outline"></i></li>
                                                <li><i class="ion-android-star-outline"></i></li>
                                                <li><i class="ion-android-star-outline"></i></li>
                                            </ul>
                                        </div>
                                        <span>$140.00</span>
                                    </div>
                                </div>
                            </div>
                            <div class="sidebar-top-rated mb-30">
                                <div class="single-top-rated">
                                    <div class="top-rated-img">
                                        <a href="#"><img src="/assets/img/product/sidebar-product/4.jpg" alt=""></a>
                                    </div>
                                    <div class="top-rated-text">
                                        <h4><a href="#">Flying Drone</a></h4>
                                        <div class="top-rated-rating">
                                            <ul>
                                                <li><i class="reting-color ion-android-star"></i></li>
                                                <li><i class="reting-color ion-android-star"></i></li>
                                                <li><i class="ion-android-star-outline"></i></li>
                                                <li><i class="ion-android-star-outline"></i></li>
                                                <li><i class="ion-android-star-outline"></i></li>
                                            </ul>
                                        </div>
                                        <span>$140.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="shop-filters-right">
                <div class="shop-bar-area pb-60">
                    <div class="shop-bar">
                        <div class="shop-found-selector">
                            <div class="shop-selector">
                                <label>Sort By : </label>
                                <select name="select">
                                    <option value="">Default</option>
                                    <option value="">A to Z</option>
                                    <option value=""> Z to A</option>
                                    <option value="">Low to High</option>
                                    <option value="">High to Low</option>
                                </select>
                            </div>
                        </div>
                        <div class="shop-filter-tab">
                            <div class="shop-filter">
                                <a class="shop-filter-active" href="#">Filters <i class="ion-android-options"></i></a>
                            </div>
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
                    @php $currency = Cookie::get('currency') == 'EGP' ? '£' : '$' @endphp
                    <div id="grid-5-col1" class="tab-pane fade  {{ $horizontal ? '' : 'active show'  }}">
                        <div class="row custom-row">
                            @foreach($products as $product)
                                @if($product->productable)
                                <div class="custom-col-5 custom-col-style">
                                <div class="single-product mb-35">
                                    <div class="product-img">
                                        <a href="{{route('show.product.client', $product->productable->slug)}}"><img height="270" src="{{asset('storage/product/images/thumbnail/'.$product->productable->main_image)}}" alt="{{$product->productable->name}}"></a>
                                        @if($isOffer = $product->productable->isOffer == true) <span>sale</span> @endif
                                        <div class="product-action">
                                            <a title="Wishlist" class="animate-left" href="#"><i class="ion-ios-heart-outline"></i></a>
                                            <click_quick_view idproduct="{{$product->productable->slug_en}}"></click_quick_view>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <div class="product-title-price">
                                            <div class="product-title">
                                                <h4><a href="{{route('show.product.client', $product->productable->slug)}}">{{$product->productable->name}}</a></h4>
                                            </div>
                                            <div class="product-price">
                                                <div><span class="{{ $isOffer? 'oldprice' : '' }} price">{{$currency}}{{$product->productable->offerPrice(false)}}</span></div>
                                                @if($isOffer)<span class="offer" >{{$currency}}{{$product->productable->offerPrice()}}</span>@endif
                                            </div>
                                        </div>
                                        <div class="product-cart-categori">
                                            <div class="product-cart">
                                                <span>{{$subcategoryName}}</span>
                                            </div>
                                            <div class="product-categori">
                                                <a href="#"><i class="ion-bag"></i> Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             @endif
                            @endforeach


                        </div>
                        <div class="row">
                            <div class="col-sm-6 col-sm-offset-5">
                                {{$products->appends(['horizontal' => false])->links() }}
                            </div>
                        </div>
                    </div>

                    <div id="grid-5-col2" class="tab-pane fade {{ $horizontal ? 'active show' : '' }}">
                        <div class="row">


                            @foreach($products as $product)
                                @if($product->productable)
                                <div class="col-md-12 col-lg-12 col-xl-6">
                                <div class="single-product single-product-list product-list-right-pr mb-40">
                                    <div class="product-img list-img-width">
                                        <a href="{{route('show.product.client', $product->productable->slug)}}"><img height="270"  src="{{asset('storage/product/images/thumbnail/'.$product->productable->main_image)}}" alt="{{$product->productable->name}}"></a>
                                        <div class="product-action">
{{--                                            <a title="Quick View" data-toggle="modal" data-target="#exampleModal" class="animate-right" href="#"><i class="ion-ios-eye-outline"></i></a>--}}
                                            <click_quick_view idproduct="{{$product->productable->slug_en}}"></click_quick_view>
                                        </div>
                                    </div>

                                    <div class="product-content-list">
                                        <div class="product-list-info">
                                            <h4><a href="{{route('show.product.client', $product->productable->slug)}}">{{ Str::limit($product->productable->name, $limit = 50, $end = '...')}}</a></h4>
                                            <div><span class="{{ $isOffer = $product->productable->isOffer ? 'oldprice' : '' }} price">{{$currency}}{{$product->productable->offerPrice(false)}}</span></div>
                                            @if($isOffer)<span class="offer2" >{{$currency}}{{$product->productable->offerPrice()}}</span>@endif
                                            <p>{!! Str::limit($product->productable->description, $limit = 70, $end = '...') !!}</p>
                                        </div>
                                        <div class="product-list-cart-wishlist">
                                            <div class="product-list-cart">
                                                <a class="btn-hover list-btn-style" href="#">add to cart</a>
                                            </div>
                                            <div class="product-list-wishlist">
                                                <a class="btn-hover list-btn-wishlist" href="#"><i class="ion-ios-heart-outline"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                @endif
                            @endforeach

                        </div>
                        <div class="row">
                            <div class="col-sm-6 col-sm-offset-5">
                                {{ $products->appends(['horizontal' => true])->links() }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <quick_view locale="@if(app()->getLocale() == 'ar') 'ar' @endif" currencyprop="{{ Cookie::get('currency') }}"></quick_view>
    </div>
    <script src="{{asset('GPU-Shop/js/vueQuickView.js')}}"></script>
@endsection
@push('includes')

{{--    @include('client.layout._quickView')--}}
@endpush
@push('scripts')
    <script>
        $(document).ready(function(){
            $(function animateByMe(time = 500) {
                $('.offer').animate({
                    fontWeight:'300',
                    fontSize:'15px',
                },time, function () {
                    $(this).animate({
                        fontWeight:'1000',
                        fontSize:'16px',
                    },time);
                });
                setTimeout(animateByMe, 200);
            }());

        });
    </script>
@endpush

