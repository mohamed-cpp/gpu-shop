@extends('client.app')
@section('title', $subcategory->name)
@section("SEO")
    <link rel="canonical" href="{{request()->fullUrl()}}" />
    <meta name="robots" content="index,follow">
    <meta property="og:locale" content="{{app()->getLocale()}}">
    <meta name="description" content="{{ $subcategory->description }}">
    <meta property="og:type" content="product"/>
    <meta property="og:title" content="{{ $subcategory->title }}"/>
    <meta property="og:description" content="{{ $subcategory->description }}"/>
    <meta property="og:image" content="{{asset($subcategory->image)}}"/>
    <meta property="og:url" content="{{ route('show.products',$subcategory->slug) }}"/>
    <meta property="og:site_name" content="{{ __("GPU_Shop") }}"/>
@endsection
@push('styles')
    <link href="{{asset('GPU-Shop/css/jquery-ui.min.css')}}" rel="stylesheet">
    <link href="{{mix('GPU-Shop/css/products_page.css')}}" rel="stylesheet">
@endpush
@section('content')
    <div id="appView">
    @php $horizontal= request()->get('horizontal'); @endphp
    <div class="breadcrumb-area pt-205 pb-210 bg-img" style="background-image: url('{{asset($subcategory->image)}}')">
        <div class="container">
            <div class="breadcrumb-content">
                <h1>{{ $subcategory->name  }}</h1>
                <ul>
                    <li><a href="/">home</a></li>
                    <li>{{ $subcategory->name }}</li>
                </ul>
            </div>
        </div>
    </div>
        @php $currency = Cookie::get('currency') == 'egp' ? '£' : '$'; $sortBlade =  !empty($sort) ? $sort : null @endphp
<div class="shop-page-wrapper hidden-items padding-filter">
        <div class="container-fluid">
            <div class="shop-filters-left overflowScroll">
                <div class="shop-sidebar">
                    <a href="{{route('offers.product.client',$subcategory)}}" class="boton">
                        Show ALL Offers &#128516;
                    </a>
                    <form action="{{route('filter.product.client', $subcategory)}}" method="GET">
                        <input type="hidden" name="offer" value="{{Request::is('*/offer/*') ? Request::is('*/offer/*') : Request::get('offer')}}">
                        <div class="sidebar-widget mb-50">
                            <h3 class="sidebar-title">Search Products</h3>
                            <div class="sidebar-search">
                                <div>
                                    <input name="keywords" value="{{$sortBlade?  $sortBlade['keywords'] : ''}}" placeholder="Search Products..." type="text">
                                    <button type="submit"><i class="ion-ios-search-strong"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="sidebar-widget mb-30">
                        <h3 class="sidebar-title">Filter by Price</h3>
                        <div class="filters_price">
                        <div id="slider-range" data-price-min="{{$priceMinMax['min_price']}}" data-price-max="{{$priceMinMax['max_price']}}"></div>
                        <p class="price-filters">
                            <label for="price-filter-min">{{$currency}}</label>
                            <input type="number" id="price-filter-min" name="min"  aria-label="Minimum price for filtering products" >
                            <label for="price-filter-max" aria-label="Maximum price for filtering products">{{$currency}}</label>
                            <input type="number" id="price-filter-max" name="max"  >
                        </p>
                        </div>
                    </div>
                        <div class="sidebar-widget mb-30">
                            <h3 class="sidebar-title">Sort By :</h3>
                            <section class="section_niitty section--niitty">
                                <div class="toggle-button toggle-button--niitty">
                                    <input id="toggleButton13" name="sort" value="D" type="radio" checked>
                                    <label for="toggleButton13">Default</label>
                                    <div class="toggle-button__icon"></div>
                                </div>
                                <div class="toggle-button toggle-button--niitty">
                                    <input id="toggleButton14" {{$sortBlade?  $sortBlade['sort'] == 'A' ? 'checked' :'' : ''}} name="sort" value="A" type="radio">
                                    <label for="toggleButton14">A to Z</label>
                                    <div class="toggle-button__icon"></div>
                                </div>
                                <div class="toggle-button toggle-button--niitty">
                                    <input id="toggleButton15" {{$sortBlade?  $sortBlade['sort'] == 'Z' ? 'checked' :'' : ''}} name="sort" value="Z" type="radio">
                                    <label for="toggleButton15">Z to A</label>
                                    <div class="toggle-button__icon"></div>
                                </div>
                                <div class="toggle-button toggle-button--niitty">
                                    <input id="toggleButton16" {{$sortBlade?  $sortBlade['sort'] == 'L' ? 'checked' :'' : ''}} name="sort" value="L" type="radio">
                                    <label for="toggleButton16">Low to High</label>
                                    <div class="toggle-button__icon"></div>
                                </div>
                                <div class="toggle-button toggle-button--niitty">
                                    <input id="toggleButton17" name="sort" {{$sortBlade?  $sortBlade['sort'] == 'H' ? 'checked' :'' : ''}} value="H" type="radio">
                                    <label for="toggleButton17">High to Low</label>
                                    <div class="toggle-button__icon"></div>
                                </div>
                            </section>
                        </div>
                    </form>
                    <div class="sidebar-widget mb-50">
                        <h3 class="sidebar-title">Top rated products</h3>
                        <div class="sidebar-top-rated-all">
                            @foreach($topRated as $product)
                            <div class="sidebar-top-rated mb-30">
                                <div class="single-top-rated">
                                    <div class="top-rated-img">
                                        <a href="{{route('show.product.client', $product->slug)}}">
                                            <img height="91" width="88" src="{{asset('storage/product/images/thumbnail/'.$product->main_image)}}" alt="">
                                        </a>
                                    </div>
                                    <div class="top-rated-text">
                                        <h4><a href="{{route('show.product.client', $product->slug)}}">
                                                {{ $product->name }}
                                            </a></h4>
                                        <div class="top-rated-rating">
                                            <ul>
                                                @for($x = 1; $x <= 5; $x++)
                                                    @if($x <= $product->rating_of_product)
                                                        <li><i class="reting-color ion-android-star"></i></li>
                                                    @else
                                                        <li><i class="ion-android-star-outline"></i></li>
                                                    @endif
                                                @endfor
                                            </ul>
                                            <span>({{$product->count_rating}}) Reviews</span>
                                        </div>
                                        <div><span class="{{ $product->isOffer? 'oldprice' : '' }} price">{{$currency}}{{$product->offerPrice(false) }}</span></div>
                                        @if($product->isOffer)
                                            <span class="offer" >{{$currency}}{{$product->offerPrice()}}</span>
                                        @endif
                                    </div>
                                </div>
                            </div>

                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
            @php $locale = app()->getLocale() @endphp
            <div class="shop-filters-right">
                <div class="shop-bar-area pb-60">
                    <div class="shop-bar">
                        <div class="shop-found-selector">
                            <div class="shop-found">
                                <p><span>{{$count[0][0]}}</span> Product Found of <span>{{$count[1][0]}}</span></p>
                            </div>
                        </div>
                        <div class="shop-filter-tab">
                            <div class="shop-filter">
                                <a class="shop-filter-active" href="#">Filters <i class="ion-android-options"></i></a>
                            </div>
                            <div class="shop-tab nav" role=tablist>
                                <a class="{{ $horizontal ? : 'active' }}" href="#grid-5-col1" aria-label="Products Style" data-toggle="tab" role="tab" aria-selected="false">
                                    <i class="ion-android-apps"></i>
                                </a>
                                <a class="{{ $horizontal ? 'active' : '' }}" href="#grid-5-col2" aria-label="Products Style" data-toggle="tab" role="tab" aria-selected="true">
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
                                        <a href="{{route('show.product.client', $product->slug)}}"><img src="{{asset('storage/product/images/thumbnail/'.$product->main_image)}}" alt="{{$product->name }}"></a>
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
                                        <a href="{{route('show.product.client', $product->slug )}}"><img src="{{asset('storage/product/images/thumbnail/'.$product->main_image)}}" alt="{{$product->name }}"></a>
                                        <div class="product-action">
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
    <script src="{{mix('GPU-Shop/js/products_page.js')}}"></script>
    <script>
        $(function() {
            var $slider = $("#slider-range");

            var priceMin = $slider.attr("data-price-min"),
                priceMax = $slider.attr("data-price-max");

            $("#price-filter-min, #price-filter-max").map(function(){
                $(this).attr({
                    "min": priceMin,
                    "max": priceMax
                });
            });
            $("#price-filter-min").attr({
                "placeholder": "min " + priceMin,
                "value": priceMin
            });
            $("#price-filter-max").attr({
                "placeholder": "max " + priceMax,
                "value": priceMax
            });

            $slider.slider({
                range: true,
                min: Math.max(priceMin, 0),
                max: priceMax,
                values: [priceMin, priceMax],
                slide: function(event, ui) {
                    $("#price-filter-min").val(ui.values[0]);
                    $("#price-filter-max").val(ui.values[1]);
                }
            });

            $("#price-filter-min, #price-filter-max").map(function(){
                $(this).on("input", function() {

                    updateSlider();
                });
            });
            function updateSlider(){
                $slider.slider("values", [$("#price-filter-min").val(), $("#price-filter-max").val()]);
            }
            @if($sortBlade)
                var minPrice = {{$sortBlade['min']}},
                    maxPrice = {{$sortBlade['max']}};
                $slider.slider("values", [minPrice, maxPrice]);
                $("#price-filter-min").attr({
                    "placeholder": "min " + minPrice,
                    "value": minPrice
                });
                $("#price-filter-max").attr({
                    "placeholder": "max " + maxPrice,
                    "value": maxPrice
                });
            @endif

            $(".boton").wrapInner('<div class=botontext></div>');
            $(".botontext").clone().appendTo( $(".boton") );
            $(".boton").append('<span class="twist"></span><span class="twist"></span><span class="twist"></span><span class="twist"></span>');
            $(".twist").css("width", "25%").css("width", "+=3px");
        });
    </script>
@endpush
