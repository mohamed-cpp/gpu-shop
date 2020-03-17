<div id="appView">
    @php $currency = Cookie::get('currency') == 'egp' ? '£' : '$'; @endphp
<div class="product-area pt-80">
    <div class="container">
        <div class="section-title text-center mb-35">
            <h2>{{__('Featured Products')}}</h2>
        </div>
        <div class="product-style">
            <div class="product-tab-list text-center mb-45 nav product-menu-mrg" role="tablist">
                <a class="active" href="#home2" data-toggle="tab" role="tab" aria-selected="false" aria-controls="home2">
                    <h4>{{__('On Sale')}}</h4>
                </a>
                <a href="#home3" data-toggle="tab" role="tab" aria-selected="false" aria-controls="home3">
                    <h4>{{__('Bestsellers')}}</h4>
                </a>
                <a href="#home4" data-toggle="tab" role="tab" aria-selected="false" aria-controls="home4">
                    <h4>{{__('HIGHEST RATING')}}</h4>
                </a>
                <a href="#home5" data-toggle="tab" role="tab" aria-selected="false" aria-controls="home5">
                    <h4>{{__('Random products')}}</h4>
                </a>
            </div>
            <div class="tab-content jump">
                <div class="tab-pane active show fade" id="home2" role="tabpanel">
                    <div class="row">
                        <div class="product-slider-active owl-carousel">
                            @foreach($offerProducts as $product)
                                <div class="col-md-3 col-lg-3 col-sm-4">
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
                    </div>
                </div>
                <div class="tab-pane fade" id="home3" role="tabpanel">
                    <div class="row">
                        <div class="product-slider-active owl-carousel">
                            @foreach($bestsellers as $product)
                                <div class="col-md-3 col-lg-3 col-sm-4">
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
                    </div>
                </div>
                <div class="tab-pane fade" id="home4" role="tabpanel">
                    <div class="row">
                        <div class="product-slider-active owl-carousel">
                            @foreach($highestRatings as $product)
                                <div class="col-md-3 col-lg-3 col-sm-4">
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
                    </div>
                </div>
                <div class="tab-pane fade" id="home5" role="tabpanel">
                    <div class="row">
                        <div class="product-slider-active owl-carousel">
                            @foreach($randomProducts as $product)
                                <div class="col-md-3 col-lg-3 col-sm-4">
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>