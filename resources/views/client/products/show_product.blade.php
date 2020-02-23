@extends('client.app')
@section('title', $product->name)
@push('styles')
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <style>
        @import url(https://fonts.googleapis.com/css?family=Raleway:400,500,700);
        *, *::after, *::before {
            box-sizing: border-box; }

        .section {
            text-align: center;
            height: 100%;
            margin: 0 auto;
            padding: 6em 0; }
        .section__title {
            font-size: 1.1em;
            text-transform: uppercase;
            letter-spacing: 4px;
            color: #fff;
            margin-bottom: 3em; }

        .toggle-button {
            position: relative;
            display: inline-block;
            color: #fff;
            margin: 0 20px; }
        .toggle-button label {
            display: inline-block;
            text-transform: uppercase;
            cursor: pointer;
            text-align: left; }
        .toggle-button input {
            display: none; }
        .toggle-button__icon {
            cursor: pointer;
            pointer-events: none; }
        .toggle-button__icon:before, .toggle-button__icon:after {
            content: "";
            position: absolute;
            transition: 0.2s ease-out; }

        @media only screen and (max-width: 480px) {
            .toggle-button--valo {
                display: block;
                width: 110px;
                margin: 0 auto 10px auto; } }

        .toggle-button--nummi label {
            width: 80px;
            height: 20px;
            line-height: 20px;
            transition: all 0.2s; }
        .toggle-button--nummi label:before, .toggle-button--nummi label:after {
            position: absolute;
            top: 0;
            left: 30px;
            width: 110px;
            transition: all 0.2s .1s ease-out; }
        .toggle-button--nummi label:before {
            content: attr(data-text); }

        .toggle-button--nummi input:checked ~ .toggle-button__icon {
            animation: wiggle .2s ease-out; }
        .toggle-button--nummi input:checked ~ .toggle-button__icon:after {
            animation: flyInRight .4s;
            transform: translate(0); }

        .toggle-button--nummi .toggle-button__icon {
            position: absolute;
            left: 0;
            top: 0;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: #0000009e;
            overflow: hidden;
            box-shadow: inset 1px 1px 10px rgba(0, 0, 0, 0.15); }
        .toggle-button--nummi .toggle-button__icon:before, .toggle-button--nummi .toggle-button__icon:after {
            border-radius: 50%; }
        .toggle-button--nummi .toggle-button__icon:before {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.8); }
        .toggle-button--nummi .toggle-button__icon:after {
            top: 4px;
            left: 4px;
            width: 60%;
            height: 60%;
            background: #ee3333;
            transition: none;
            transform: translate(200%);
            animation: flyOutLeft .4s; }

        .toggle-button--nummi:hover input:not(:checked) ~ .toggle-button__icon {
            animation: hover .2s; }

        .toggle-button--nummi:hover input:not(:checked) ~ label:before {
            text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2); }

        @keyframes flyInRight {
            0% {
                transform: translate(200%); }
            50% {
                transform: translate(200%); }
            70% {
                transform: translate(-50%); }
            100% {
                transform: translate(0); } }

        @keyframes flyOutLeft {
            0% {
                transform: translate(0); }
            70% {
                transform: translate(0); }
            100% {
                transform: translate(-200%); } }

        @keyframes wiggle {
            0% {
                transform: translate(0); }
            80% {
                transform: translate(5px); }
            100% {
                transform: translate(0); } }

        @keyframes hover {
            0% {
                transform: scale(1); }
            30% {
                transform: scale(1.1); }
            100% {
                transform: scale(1); } }

        @media only screen and (max-width: 480px) {
            .toggle-button--meri {
                display: block;
                width: 110px;
                margin: 0 auto 10px auto; } }

    </style>
    <style>
        .btn-outline {
            color: #336deed1;
            background-color: #ffffff;
            border-color: #336deed1;
            font-weight: bold;
            letter-spacing: 0.05em;
        }
        .btn-outline {
            color: #336deed1;
            background-color: #ffffff;
            border-color: #336deed1;
            font-weight: bold;
            border-radius: 0;
        }
        .btn-outline:hover,
        .btn-outline:active,
        .btn-outline:focus,
        .btn-outline.active {
            background: #336deed1;
            color: #ffffff;
            border-color: #336deed1;

        }
    </style>
    <style>
        .detail{
            margin-bottom: 20px;
        }
        .product-share{
            margin-top: 25px;
        }
        .space{
            margin-left: 5px;
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
            width: 129px;
        }
        .oldprice{
            text-decoration-line: line-through;
            padding-right: 5px !important;
        }
        .offer{
            color: red !important;
            font-size: 15px;
        }
        .price{
            font-size: 15px;
            font-weight: 550;
        }
        .input-number {
            width: 80px;
            padding: 0 12px;
            vertical-align: top;
            text-align: center;
            outline: none;
        }

        .input-number,
        .input-number-decrement,
        .input-number-increment {
            border: 1px solid #ccc;
            height: 40px;
            user-select: none;
        }

        .input-number-decrement,
        .input-number-increment {
            display: inline-block;
            width: 30px;
            line-height: 38px;
            background: #f1f1f1;
            color: #444;
            text-align: center;
            font-weight: bold;
            cursor: pointer;
        }
        .input-number-decrement:active,
        .input-number-increment:active {
            background: #ddd;
        }

        .input-number-decrement {
            border-right: none;
            border-radius: 4px 0 0 4px;
        }

        .input-number-increment {
            border-left: none;
            border-radius: 0 4px 4px 0;
        }

    </style>
    <style>
        .reviews-container {
            background-color: #fffcfc;
            border-radius: 5px;
            box-shadow: 0 5px 9px -4px rgb(0, 0, 0);
            padding: 20px;
            width: 30%;
            }

            .review {
                border: 1px solid transparent;
                border-radius: 5px;
                color: #777;
                display: flex;
                font-size: 12px;
                align-items: center;
                padding: 10px;
                margin: 5px 0;
            }

            .review:hover {
                border: 1px solid #ddd;
                box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 0.7);

            }

            .review i{
                font-size: 13px ;
            }

            .progress {
                background-color: rgba(100, 100, 100, 0.2);
                border-radius: 5px;
                position: relative;
                margin: 0 10px;
                height: 10px;
                width:  190px;
            }

            .progress-done {
                background: linear-gradient(to left, rgb(242, 112, 156), rgb(255, 148, 114));
                box-shadow: 0 3px 3px -5px rgb(242, 112, 156), 0 2px 5px rgb(242, 112, 156);
                border-radius: 5px;
                height: 10px;
                width: 0;
                transition: width 1s ease 0.3s;
            }

            .percent {
                color: #333;
            }

            /* SOCIAL PANEL CSS */
        .social-panel-container {
            position: fixed;
            right: 0;
            bottom: 80px;
            transform: translateX(100%);
            transition: transform 0.4s ease-in-out;
        }

        .social-panel-container.visible {
            transform: translateX(-10px);
        }

        .social-panel {
            background-color: #fff;
            border-radius: 16px;
            box-shadow: 0 16px 31px -17px rgba(0,31,97,0.6);
            border: 5px solid #001F61;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-family: 'Muli';
            position: relative;
            height: 169px;
            width: 370px;
            max-width: calc(100% - 10px);
        }

        .social-panel button.close-btn {
            border: 0;
            color: #97A5CE;
            cursor: pointer;
            font-size: 20px;
            position: absolute;
            top: 5px;
            right: 5px;
        }

        .social-panel button.close-btn:focus {
            outline: none;
        }

        .social-panel p {
            background-color: #001F61;
            border-radius: 0 0 10px 10px;
            color: #fff;
            font-size: 14px;
            line-height: 18px;
            padding: 2px 17px 6px;
            position: absolute;
            top: 0;
            left: 50%;
            margin: 0;
            transform: translateX(-50%);
            text-align: center;
            width: 235px;
        }

        .social-panel p i {
            margin: 0 5px;
        }

        .social-panel p a {
            color: #FF7500;
            text-decoration: none;
        }

        .social-panel h4 {
            margin: 20px 0;
            color: #97A5CE;
            font-family: 'Muli';
            font-size: 14px;
            line-height: 18px;
            text-transform: uppercase;
        }

        .social-panel ul {
            display: flex;
            list-style-type: none;
            padding: 0;
            margin: 0;
        }

        .social-panel ul li {
            margin: 0 10px;
        }

        .social-panel ul li a {
            border: 1px solid #DCE1F2;
            border-radius: 50%;
            color: #001F61;
            font-size: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 50px;
            width: 50px;
            text-decoration: none;
        }

        .social-panel ul li a:hover {
            border-color: #FF6A00;
            box-shadow: 0 9px 12px -9px #FF6A00;
        }

        .floating-btn {
            border-radius: 26.5px;
            background-color: #001F61;
            border: 1px solid #001F61;
            box-shadow: 0 16px 22px -17px #03153B;
            color: #fff;
            cursor: pointer;
            font-size: 16px;
            line-height: 20px;
            padding: 12px 20px;
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 999;
        }

        .floating-btn:hover {
            background-color: #ffffff;
            color: #001F61;
        }

        .floating-btn:focus {
            outline: none;
        }

        .floating-text {
            background-color: #001F61;
            border-radius: 10px 10px 0 0;
            color: #fff;
            font-family: 'Muli';
            padding: 7px 15px;
            position: fixed;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
            z-index: 998;
        }

        .floating-text a {
            color: #FF7500;
            text-decoration: none;
        }
        @media screen and (max-width: 767px) {
            .reviews-container {
                width: 70%;
            }
        }
        @media screen and (max-width: 480px) {
            .social-panel-container.visible {
                transform: translateX(0px);
            }
            .floating-btn {
                right: 10px;
            }
        }
    </style>
    <style>
        .rating-widget {
            max-width: 500px;
            text-align: center;
        }
        .rating-widget .star-input {
            width: 0;
            height: 0;
            position: absolute;
            left: -5000px;
        }
        .rating-widget .star-input:checked + .star-input-label .orange {
            animation: enlarge 0.5s ease-in-out forwards;
        }
        .rating-widget .star-input:checked + .star-input-label:nth-of-type(2) .orange {
            animation-delay: 0.1s;
        }
        .rating-widget .star-input:checked + .star-input-label:nth-of-type(3) .orange {
            animation-delay: 0.2s;
        }
        .rating-widget .star-input:checked + .star-input-label:nth-of-type(4) .orange {
            animation-delay: 0.3s;
        }
        .rating-widget .star-input:checked + .star-input-label:nth-of-type(5) .orange {
            animation-delay: 0.4s;
        }
        .rating-widget .star-input-label {
            display: inline-block;
            padding: 8px 2px;
            text-indent: -5000px;
            line-height: 0;
            color: #dcdcdc;
            position: relative;
            cursor: pointer;
        }
        .rating-widget .star-input-label:hover, .rating-widget .star-input-label.hovered {
            color: #a7a7a7;
        }
        .rating-widget .star-input-label i {
            display: block;
            font-size: 20px;
            line-height: 20px;
            text-indent: 0;
        }
        .rating-widget .star-input-label i.orange {
            position: absolute;
            display: block;
            padding: 8px 2px;
            top: 0;
            left: 0;
            text-align: center;
            width: 100%;
            color: orange;
            transform: scale(0);
        }
        @keyframes enlarge {
            0% {
                transform: scale(0);
            }
            70% {
                transform: scale(1.25);
            }
            100% {
                transform: scale(1);
            }
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
            <div id="app">
                <client_product wishlistadded="{{$addedWishlist}}"
                                :product="{{ json_encode($product) }}"
                                :price="{{ json_encode($price) }}"
                                currencyprop="{{ Cookie::get('currency') }}"
                                reviews="{{ $ratings['count'] }}">
                </client_product>
            </div>
        </div>
    </div>
    <div class="product-description-review-area pb-100 pt-30">
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
                        Comments (0)
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
                                    <div class="product-cart">
                                        <span>Furniter</span>
                                    </div>
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
    <script>
        (function() {

            window.inputNumber = function(el) {

                var min = el.attr('min') || false;
                var max = el.attr('max') || false;

                var els = {};

                els.dec = el.prev();
                els.inc = el.next();

                el.each(function() {
                    init($(this));
                });

                function init(el) {

                    els.dec.on('click', decrement);
                    els.inc.on('click', increment);

                    function decrement() {
                        var value = el[0].value;
                        value--;
                        if(!min || value >= min) {
                            el[0].value = value;
                        }
                    }

                    function increment() {
                        var value = el[0].value;
                        value++;
                        if(!max || value <= max) {
                            el[0].value = value++;
                        }
                    }
                }
            }
        })();

        inputNumber($('.input-number'));


        const progressDone = document.querySelectorAll('.progress-done');

        progressDone.forEach(progress => {
            progress.style.width = progress.getAttribute('data-done') + '%';
        });


        ////////////

        $('.star-input').click(function() {
            $(this).parent()[0].reset();
            let prevStars = $(this).prevAll();
            let nextStars = $(this).nextAll();
            prevStars.attr('checked',true);
            nextStars.attr('checked',false);
            $(this).attr('checked',true);
        });

        $('.star-input-label').on('mouseover',function() {
            let prevStars = $(this).prevAll();
            prevStars.addClass('hovered');
        });
        $('.star-input-label').on('mouseout',function(){
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

