@extends('client.app')
@section('title', $product->name)
@push('styles')
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
            <div id="app">
                <client_product  :product="{{ json_encode($product) }}" locale="@if(app()->getLocale() == 'ar') 'ar' @endif" :price="{{ json_encode($price) }}" currencyprop="{{ Cookie::get('currency') }}"></client_product>
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
                    @php $currency = Cookie::get('currency') == 'EGP' ? '£' : '$' @endphp
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

    <script src="{{asset('GPU-Shop/js/vueProduct.js')}}"></script>
@endsection
@push('includes')
    @include('client.layout._quickView')
@endpush
@push('scripts')
@endpush

