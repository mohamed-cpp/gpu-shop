@extends('client.app')
@section('title', $product->name)
@push('styles')
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="{{asset('GPU-Shop/css/product_page.css')}}" rel="stylesheet">
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
    <div id="app">
    <div class="product-details ptb-100 pb-90">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="product-details-btn">
                        <a class="active" href="{{ URL::previous() }}"><i class="ion-arrow-left-c"></i></a>
                    </div>
                </div>
                <client_product wishlistadded="{{$addedWishlist}}"
                                :product="{{ json_encode($product) }}"
                                :price="{{ json_encode($price) }}"
                                currencyprop="{{ Cookie::get('currency') }}"
                                reviews="{{ $ratings['count'] }}">
                </client_product>
        </div>
    </div>
    <div class="product-description-review-area pb-100 pt-10">
        <div class="container">
            <div class="reviews-container">
                <h2>Reviews</h2>
                <div class="review">
                    <span class="icon-container">5 <i class="fa fa-star"></i></span>
                    <div class="progress">
                        <div class="progress-done" data-done="{{$ratings[5]}}"></div>
                    </div>
                    <span class="percent">{{$ratings[5]}}%</span>
                </div>
                <div class="review">
                    <span class="icon-container">4 <i class="fa fa-star"></i></span>
                    <div class="progress">
                        <div class="progress-done" data-done="{{$ratings[4]}}"></div>
                    </div>
                    <span class="percent">{{$ratings[4]}}%</span>
                </div>
                <div class="review">
                    <span class="icon-container">3 <i class="fa fa-star"></i></span>
                    <div class="progress">
                        <div class="progress-done" data-done="{{$ratings[3]}}"></div>
                    </div>
                    <span class="percent">{{$ratings[3]}}%</span>
                </div>
                <div class="review">
                    <span class="icon-container">2 <i class="fa fa-star"></i></span>
                    <div class="progress">
                        <div class="progress-done" data-done="{{$ratings[2]}}"></div>
                    </div>
                    <span class="percent">{{$ratings[2]}}%</span>
                </div>
                <div class="review">
                    <span class="icon-container">1 <i class="fa fa-star"></i></span>
                    <div class="progress">
                        <div class="progress-done" data-done="{{$ratings[1]}}"></div>
                    </div>
                    <span class="percent">{{$ratings[1]}}%</span>
                </div>
            </div>
            <div class="product-description-review text-center">
                <div class="description-review-title nav" role=tablist>
                    <a class="active" href="#pro-dec" data-toggle="tab" role="tab" aria-selected="true">
                        Description
                    </a>
                    <a href="#pro-review" data-toggle="tab" role="tab" aria-selected="false">
                        Comments
                    </a>
                </div>
                <div class="description-review-text tab-content">
                    <div class="tab-pane active show fade" id="pro-dec" role="tabpanel">
                        {!! $product->description !!}
                    </div>
                    <div class="tab-pane fade" id="pro-review" role="tabpanel">
                        <comment
                                :comments="{{ json_encode($comments->items()) }}"
                                :product="{{ json_encode($product) }}"
                        >
                        </comment>
                        {{ $comments->links() }}
                    </div>
                </div>
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
            <div class="row" id="appView">
                <div class="new-collection-slider owl-carousel">
                    @php $currency = Cookie::get('currency') == 'egp' ? '£' : '$' @endphp
                    @foreach($relatedProducts as $relatedProduct)
                        <div class="col-md-3 col-lg-3 col-sm-4 col-xs-12">
                        <div class="single-product mb-35">
                            <div class="product-img">
                                <a href="{{route('show.product.client', $relatedProduct->slug)}}"><img src="{{asset('storage/product/images/thumbnail/'.$relatedProduct->main_image)}}" height="270" alt="{{$relatedProduct->name}}"></a>
                                @if($isOffer = $relatedProduct->isOffer == true) <span>sale</span> @endif
                                <div class="product-action">
                                    <add_wishlist idproduct="{{$relatedProduct->id}}"></add_wishlist>
                                    <click_quick_view slugproduct="{{$relatedProduct->slug_en}}"></click_quick_view>
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
                                    <add_cart slug="{{$relatedProduct->slug}}" tablist="true"></add_cart>
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

@endsection
@push('scripts')
    <script src="{{asset('GPU-Shop/js/product_page.js')}}"></script>
    <script>
        const progressDone = document.querySelectorAll('.progress-done');
        progressDone.forEach(progress => {
            progress.style.width = progress.getAttribute('data-done') + '%';
        });

        $('.star-input').click(function() {
            $(this).parent()[0].reset();
            let prevStars = $(this).prevAll();
            let nextStars = $(this).nextAll();
            prevStars.attr('checked',true);
            nextStars.attr('checked',false);
            $(this).attr('checked',true);
        });
        let star = $('.star-input-label');
        star.on('mouseover',function() {
            let prevStars = $(this).prevAll();
            prevStars.addClass('hovered');
        });
        star.on('mouseout',function(){
            let prevStars = $(this).prevAll();
            prevStars.removeClass('hovered');
        });

        let i = 1;
        let status = {{$ratings['rating']}} ;
        $(".rating-widget input").each((index,element) =>{
            if(status >= i){
                $(element).attr('checked',true);
            }
            i++;
        });
    </script>
@endpush

