@extends('client.app')

@push('styles')
    <style>
        .product-details-small.main-product-details a > img {
            width: 132px;
        }
    </style>
@endpush
@section('content')
    <div class="breadcrumb-area bg-img border-top-1 pt-55">
        <div class="container">
            <div class="breadcrumb-content-2">
                <ul>
                    <li><a class="active" href="#">home</a></li>
                    <li><a class="active" href="#">Shop </a></li>
                    <li>Product Name</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="product-details ptb-100 pb-90">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="product-details-btn">
                        <a href="#"><i class="ion-arrow-left-c"></i></a>
                        <a class="active" href="#"><i class="ion-arrow-right-c"></i></a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-lg-7 col-12">
                    <div class="product-details-img-content">
                        <div class="product-details-tab mr-70">
                            <div class="product-details-large tab-content">
                                <div class="tab-pane active show fade" id="pro-details1" role="tabpanel">
                                    <div class="easyzoom easyzoom--overlay">
                                        <a href="{{asset('storage/product/images/00a895f5e1312ea97fcb3db219fefb75.jpg')}}">
                                            <img src="{{asset('storage/product/images/00a895f5e1312ea97fcb3db219fefb75.jpg')}}" alt="">
                                        </a>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pro-details2" role="tabpanel">
                                    <div class="easyzoom easyzoom--overlay">
                                        <a href="/assets/img/product-details/bl2.jpg">
                                            <img src="/assets/img/product-details/l2.jpg" alt="">
                                        </a>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pro-details3" role="tabpanel">
                                    <div class="easyzoom easyzoom--overlay">
                                        <a href="/assets/img/product-details/bl3.jpg">
                                            <img src="/assets/img/product-details/l3.jpg" alt="">
                                        </a>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pro-details4" role="tabpanel">
                                    <div class="easyzoom easyzoom--overlay">
                                        <a href="/assets/img/product-details/bl4.jpg">
                                            <img src="/assets/img/product-details/l4.jpg" alt="">
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="product-details-small nav mt-12 main-product-details" role=tablist>
                                <a class="active mr-12" href="#pro-details1" data-toggle="tab" role="tab" aria-selected="true">
                                    <img src="{{asset('storage/product/images/00a895f5e1312ea97fcb3db219fefb75.jpg')}}" alt="">
                                </a>
                                <a class="mr-12" href="#pro-details2" data-toggle="tab" role="tab" aria-selected="true">
                                    <img src="/assets/img/product-details/s2.jpg" alt="">
                                </a>
                                <a class="mr-12" href="#pro-details3" data-toggle="tab" role="tab" aria-selected="true">
                                    <img src="/assets/img/product-details/s3.jpg" alt="">
                                </a>
                                <a class="mr-12" href="#pro-details4" data-toggle="tab" role="tab" aria-selected="true">
                                    <img src="/assets/img/product-details/s4.jpg" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-lg-5 col-12">
                    <div class="product-details-content">
                        <h3>Handcrafted Supper Mug</h3>
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
                            <span>$120.00</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmol tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veni quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
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
                                <input type="text" value="02" name="qtybutton" class="cart-plus-minus-box">
                            </div>
                            <div class="quickview-btn-cart">
                                <a class="btn-hover-black" href="#">add to cart</a>
                            </div>
                            <div class="quickview-btn-wishlist">
                                <a class="btn-hover" href="#"><i class="ion-ios-heart-outline"></i></a>
                            </div>
                        </div>
                        <div class="product-categories product-cat-tag">
                            <ul>
                                <li class="categories-title">Categories :</li>
                                <li><a href="#">fashion</a></li>
                                <li><a href="#">electronics</a></li>
                                <li><a href="#">toys</a></li>
                                <li><a href="#">food</a></li>
                                <li><a href="#">jewellery</a></li>
                            </ul>
                        </div>
                        <div class="product-tags product-cat-tag">
                            <ul>
                                <li class="categories-title">Tags :</li>
                                <li><a href="#">fashion</a></li>
                                <li><a href="#">electronics</a></li>
                                <li><a href="#">toys</a></li>
                                <li><a href="#">food</a></li>
                                <li><a href="#">jewellery</a></li>
                            </ul>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
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
                    <div class="col-md-3 col-lg-3 col-sm-4 col-xs-12">
                        <div class="single-product mb-35">
                            <div class="product-img">
                                <a href="#"><img src="/assets/img/shop/shop-grid-1/1.jpg" alt=""></a>
                                <span>sale</span>
                                <div class="product-action">
                                    <a title="Wishlist" class="animate-left" href="#"><i class="ion-ios-heart-outline"></i></a>
                                    <a title="Quick View" data-toggle="modal" data-target="#exampleModal" class="animate-right" href="#"><i class="ion-ios-eye-outline"></i></a>
                                </div>
                            </div>
                            <div class="product-content">
                                <div class="product-title-price">
                                    <div class="product-title">
                                        <h4><a href="product-details-6.html">WOODEN FURNITURE</a></h4>
                                    </div>
                                    <div class="product-price">
                                        <span>$110.00</span>
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
                    <div class="col-md-3 col-lg-3 col-sm-4 col-xs-12">
                        <div class="single-product mb-35">
                            <div class="product-img">
                                <a href="#"><img src="/assets/img/shop/shop-grid-1/7.jpg" alt=""></a>
                                <div class="product-action">
                                    <a title="Wishlist" class="animate-left" href="#"><i class="ion-ios-heart-outline"></i></a>
                                    <a title="Quick View" data-toggle="modal" data-target="#exampleModal" class="animate-right" href="#"><i class="ion-ios-eye-outline"></i></a>
                                </div>
                            </div>
                            <div class="product-content">
                                <div class="product-title-price">
                                    <div class="product-title">
                                        <h4><a href="product-details-6.html">WOODEN FURNITURE</a></h4>
                                    </div>
                                    <div class="product-price">
                                        <span>$120.00</span>
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
                    <div class="col-md-3 col-lg-3 col-sm-4 col-xs-12">
                        <div class="single-product mb-35">
                            <div class="product-img">
                                <a href="#"><img src="/assets/img/shop/shop-grid-1/14.jpg" alt=""></a>
                                <span>sale</span>
                                <div class="product-action">
                                    <a title="Wishlist" class="animate-left" href="#"><i class="ion-ios-heart-outline"></i></a>
                                    <a title="Quick View" data-toggle="modal" data-target="#exampleModal" class="animate-right" href="#"><i class="ion-ios-eye-outline"></i></a>
                                </div>
                            </div>
                            <div class="product-content">
                                <div class="product-title-price">
                                    <div class="product-title">
                                        <h4><a href="product-details-6.html">HANDCRAFTED MUG</a></h4>
                                    </div>
                                    <div class="product-price">
                                        <span>$130.00</span>
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
                    <div class="col-md-3 col-lg-3 col-sm-4 col-xs-12">
                        <div class="single-product mb-35">
                            <div class="product-img">
                                <a href="#"><img src="/assets/img/shop/shop-grid-1/11.jpg" alt=""></a>
                                <div class="product-action">
                                    <a title="Wishlist" class="animate-left" href="#"><i class="ion-ios-heart-outline"></i></a>
                                    <a title="Quick View" data-toggle="modal" data-target="#exampleModal" class="animate-right" href="#"><i class="ion-ios-eye-outline"></i></a>
                                </div>
                            </div>
                            <div class="product-content">
                                <div class="product-title-price">
                                    <div class="product-title">
                                        <h4><a href="product-details-6.html">HANDCRAFTED MUG</a></h4>
                                    </div>
                                    <div class="product-price">
                                        <span>$140.00</span>
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
                </div>
            </div>
        </div>
    </div>


@endsection
@push('includes')
    @include('client.layout._quickView')
@endpush

