<div class="product-collection-area pt-70 pb-50">
    @php $currency = Cookie::get('currency') == 'egp' ? '£' : '$'; @endphp
    <div class="container">
        <div class="section-title text-center mb-55">
            <h2>{{__('New Products')}}</h2>
        </div>
        <div class="row">
            @foreach($newProducts as $product)
                <div class="col-md-6 col-lg-4 col-xl-3">
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
<quick_view locale="@if(app()->getLocale() == 'ar') 'ar' @endif" currencyprop="{{ Cookie::get('currency') }}"></quick_view>
</div>