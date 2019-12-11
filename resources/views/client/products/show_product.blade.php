@extends('client.app')
@section('title', $product->name)
@push('styles')
    <style>
        .product-share{
            margin-top: 25px;
        }

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        input[type=number] {
            -moz-appearance:textfield;
        }

        .product-details-small.main-product-details a > img {
            width: 132px;
        }
        .oldprice{
            text-decoration-line: line-through;
            color: darkred !important;
            padding-right: 5px !important;
        }
        .offer{
            color: red !important;
            font-size: 15px;
        }
        .price{
            color: rgba(255, 0, 36, 0.8) !important;
            font-size: 15px;
            font-weight: 550;
        }
    </style>
@endpush
@section('content')
    <div class="breadcrumb-area bg-img border-top-1 pt-55">
        <div class="container">
            <div class="breadcrumb-content-2">
                <ul>
                    <li><a class="active" href="/">home</a></li>
                    <li>{{$product->name}}</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="product-details ptb-100 pb-90">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="product-details-btn">
                        <a class="active" href="{{ URL::previous() }}"><i class="ion-arrow-left-c"></i></a>
                    </div>
                </div>
            </div>


            <div class="row">
                <div class="col-md-12 col-lg-7 col-12">
                    <div class="product-details-img-content">
                        <div class="product-details-tab mr-70">



                            <div class="product-details-large tab-content">

                                <div class="tab-pane active show fade" id="pro-details99" role="tabpanel">
                                    <div class="easyzoom easyzoom--overlay">
                                        <a href="{{asset('storage/product/images/'.$product->main_image)}}">
                                            <img height="570" width="665" src="{{asset('storage/product/images/'.$product->main_image)}}" alt="">
                                        </a>
                                    </div>
                                </div>
                            @foreach($product->images as $x => $val)

                                    <div class="tab-pane fade" id="pro-details{{$x}}" role="tabpanel">
                                        <div class="easyzoom easyzoom--overlay">
                                            <a href="{{asset('storage/product/images/'.$val->path)}}">
                                                <img height="570" width="665" src="{{asset('storage/product/images/'.$val->path)}}" alt="">
                                            </a>
                                        </div>
                                    </div>
                            @endforeach

                            </div>


                            <div class="product-details-small nav mt-12 main-product-details" role=tablist>


                                <a class="active mr-12" href="#pro-details99" data-toggle="tab" role="tab" aria-selected="true">
                                    <img src="{{asset('storage/product/images/thumbnail/'.$product->main_image)}}" alt="">
                                </a>

                                @foreach($product->images as $x => $val)

                                    <a class="mr-12" href="#pro-details{{$x}}" data-toggle="tab" role="tab" aria-selected="true">
                                        <img src="{{asset('storage/product/images/thumbnail/'.$val->path)}}" alt="">
                                    </a>

                                @endforeach




                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-lg-5 col-12">
                    <div class="product-details-content">
                        <h3>{{$product->name}}</h3>
                        <div class="rating-number">
                            <div class="quick-view-rating">
                                <i class="ion-ios-star red-star"></i>
                                <i class="ion-ios-star red-star"></i>
                                <i class="ion-android-star-outline"></i>
                                <i class="ion-android-star-outline"></i>
                                <i class="ion-android-star-outline"></i>
                            </div>
                            <div class="quick-view-number">
                                <span>2 Ratting (S)</span>
                            </div>
                        </div>
                        <div class="details-price">
                            @php $currency = Cookie::get('currency') == 'EGP' ? '£' : '$' @endphp
                            <div><span class="{{ $isOffer = $product->isOffer ? 'oldprice' : '' }} price">{{$currency}}{{$product->offerPrice(false)}}</span></div>
                            @if($isOffer)<span class="offer" >{{$currency}}{{$product->offerPrice()}}</span>@endif
                        </div>
                        <div class="quick-view-select">
                            <div class="select-option-part">
                                <label>Size*</label>
                                <select class="select">
                                    <option value="">- Please Select -</option>
                                    <option value="">xl</option>
                                    <option value="">ml</option>
                                    <option value="">m</option>
                                    <option value="">sl</option>
                                </select>
                            </div>
                            <div class="select-option-part">
                                <label>Color*</label>
                                <select class="select">
                                    <option value="">- Please Select -</option>
                                    <option value="">orange</option>
                                    <option value="">pink</option>
                                    <option value="">yellow</option>
                                </select>
                            </div>
                        </div>
                        <div class="quickview-plus-minus">
                            <div class="cart-plus-minus">
                                <input type="number" value="1" class="cart-plus-minus-box">
                            </div>
                            <div class="quickview-btn-cart">
                                <a class="btn-hover-black" href="#">add to cart</a>
                            </div>
                            <div class="quickview-btn-wishlist">
                                <a class="btn-hover" href="#"><i class="ion-ios-heart-outline"></i></a>
                            </div>
                        </div>

                        <div class="product-share">
                            <ul>
                                <li class="categories-title">Share :</li>
                                <li>
                                    <a href="#">
                                        <i class="ion-social-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="ion-social-tumblr"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="ion-social-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="ion-social-instagram-outline"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="product-description-review-area pb-100">
        <div class="container">
            <div class="product-description-review text-center">
                <div class="description-review-title nav" role=tablist>
                    <a class="active" href="#pro-dec" data-toggle="tab" role="tab" aria-selected="true">
                        Description
                    </a>
                    <a href="#pro-review" data-toggle="tab" role="tab" aria-selected="false">
                        Reviews (0)
                    </a>
                </div>
                <div class="description-review-text tab-content">
                    <div class="tab-pane active show fade" id="pro-dec" role="tabpanel">
                        {!! $product->description !!}
                    </div>
                    <div class="tab-pane fade" id="pro-review" role="tabpanel">
                        <a href="#">Be the first to write your review!</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="product-collection-area pb-60">
        <div class="container">
            <div class="section-title text-center mb-55">
                <h2>Related products</h2>
            </div>
            <div class="row">
                <div class="new-collection-slider owl-carousel">

                    @foreach($relatedProducts as $relatedProduct)
                    <div class="col-md-3 col-lg-3 col-sm-4 col-xs-12">
                        <div class="single-product mb-35">
                            <div class="product-img">
                                <a href="{{route('show.product.client', $relatedProduct->slug)}}"><img src="{{asset('storage/product/images/thumbnail/'.$relatedProduct->main_image)}}" height="270" alt="{{$relatedProduct->name}}"></a>
                                @if($isOffer = $relatedProduct->isOffer == true) <span>sale</span> @endif
                                <div class="product-action">
                                    <a title="Wishlist" class="animate-left" href="#"><i class="ion-ios-heart-outline"></i></a>
                                    <a title="Quick View" data-toggle="modal" data-target="#exampleModal" class="animate-right" href="#"><i class="ion-ios-eye-outline"></i></a>
                                </div>
                            </div>
                            <div class="product-content">
                                <div class="product-title-price">
                                    <div class="product-title">
                                        <h4><a href="{{route('show.product.client', $relatedProduct->slug)}}">{{$relatedProduct->name}}</a></h4>
                                    </div>
                                    <div class="product-price">
                                        <div><span class="{{ $isOffer? 'oldprice' : '' }} price">{{$currency}}{{$relatedProduct->offerPrice(false)}}</span></div>
                                        @if($isOffer)<span class="offer" >{{$currency}}{{$relatedProduct->offerPrice()}}</span>@endif
                                    </div>
                                </div>
                                <div class="product-cart-categori">
                                    <div class="product-cart">
                                        <span>Furniter</span>
                                    </div>
                                    <div class="product-categori">
                                        <a href="#"><i class="ion-bag"></i> Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    @endforeach


                </div>
            </div>
        </div>
    </div>


@endsection
@push('includes')
    @include('client.layout._quickView')
@endpush

