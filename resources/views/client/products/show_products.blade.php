@extends('client.app')
@push('styles')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css" integrity="sha256-rByPlHULObEjJ6XQxW/flG2r+22R5dKiAoef+aXWfik=" crossorigin="anonymous" />
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
            /*text-transform: uppercase;*/
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
            /*text-transform: uppercase;*/
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
        .offBox{
            padding: 0 6px;
            height: 20px;
            line-height: 20px;
            width: 62px;
            background-color: rgba(180, 0, 90, 0.89);
            color: #fff;
            font-size: 12px;
            border-radius: 3px;
            margin-top:5px;
        }
        .overflowScroll{
            overflow: auto;
            scroll-behavior: smooth;
        }
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
            /*margin-left: 55px;*/
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
        }
        .page-item.active .page-link{
            background-color: rgb(84, 84, 84);
            border-color: #40000c;

        }
        .page-link{
            color: #0c5460;
        }
    </style>
    <style>
        .ui-slider {
            font-size: 0.6em;
            width: calc(100% - 2.4em);
            margin-left: 1.2em;
            /*Slider-range darker*/
        }
        .ui-slider .ui-slider-handle {
            background-color: #ff3243;
            background-blend-mode: multiply;
            font-size: 2em;
            margin-top: -3px;
            border-radius: 1px;
            border-color: rgba(169, 169, 169, 0.65);
        }
        .ui-slider .ui-slider-range {
            background-color: #c6c6c6;
            background-blend-mode: multiply;
        }

        .filters_price .price-filters * {
            font-size: 1.4em;
            padding: 0.5em 0.7em;
        }
        .filters_price .price-filters input {
            border: 1px solid lightgray;
            padding-left: 1em;
            text-align: center;
            width: 49%;
        }
        .filters_price .price-filters label {
            position: absolute;
        }
        span.ui-slider-handle.ui-state-default.ui-corner-all:first-of-type {
            border-radius: 1px 50% 50% 1px;
        }
        span.ui-slider-handle.ui-state-default.ui-corner-all:last-of-type {
            border-radius: 50% 1px 1px 50%;
        }
        #slider-range{
            margin-bottom: 10px;
        }

    </style>
    <style>
        .section_niitty {
            height: 100%;
            margin: 0 auto;
        }
        .toggle-button--niitty label {
            margin-right: 50px;
            line-height: 20px; }

        .toggle-button--niitty input[type=radio]:checked ~ .toggle-button__icon {
            background: #d2d2d2; }
        .toggle-button--niitty input[type=radio]:checked ~ .toggle-button__icon:before, .toggle-button--niitty input[type=radio]:checked ~ .toggle-button__icon:after {
            opacity: 1; }

        .toggle-button--niitty .toggle-button__icon {
            display: inline-block;
            float: left;
            position: relative;
            width: 20px;
            height: 20px;
            transition: all 0.2s;
            margin-right: 10px;
            border: 2px solid rgba(171, 1, 0, 0.73);
            border-radius: 50%;
            box-shadow: 0 1px 0 rgba(255, 0, 37, 0.1);
            text-shadow: 0 1px 0 rgba(255, 0, 37, 0.1); }
        .toggle-button--niitty .toggle-button__icon:before, .toggle-button--niitty .toggle-button__icon:after {
            top: 5px;
            left: 2px;
            width: 12px;
            height: 2px;
            border-radius: 3px;
            background: rgba(225, 225, 225, 0.51);
            box-shadow: 0 1px 0 rgba(24, 138, 229, 0.1);
            top: 35%;
            background: rgba(0, 95, 255, 0.62);
            opacity: 0;
            transform-origin: left center; }
        .toggle-button--niitty .toggle-button__icon:before {
            transform: translate(0, 0) rotate(45deg) scale(0.6, 1); }
        .toggle-button--niitty .toggle-button__icon:after {
            transform: translate(4px, 6px) rotate(-45deg); }

        .toggle-button--niitty:hover input[type=radio]:not(:checked) ~ .toggle-button__icon {
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); }

    </style>
    <style>
        .boton {
            width: 200px;
            height: 50px;
            margin: 15px auto;
            display: block;
            position: relative;
        }

        .botontext {
            position: absolute;
            height: 100%;
            width: 100%;
            z-index: 1;
            text-align: center;
            line-height: 50px;
            font-family: 'Montserrat', sans-serif;
            font-size: 12px;
            text-transform: uppercase;
        }

        .twist {
            display: block;
            height: 100%;
            width: 25%;
            position: relative;
            float: left;
            margin-left: -4px;
        }

        .twist:before {
            content: "";
            width: 100%;
            height: 100%;
            background: #fed5a9;
            bottom: 100%;
            position: absolute;
            transform-origin: center bottom 0px;
            transform: matrix3d(1, 0, 0, 0,
            0, 0, -1, -0.003,
            0, 1, 0, 0,
            0, 0, 0, 1);

            -webkit-transition: all 500ms cubic-bezier(0.970, 0.000, 0.395, 0.995);
            -moz-transition: all 500ms cubic-bezier(0.970, 0.000, 0.395, 0.995);
            -o-transition: all 500ms cubic-bezier(0.970, 0.000, 0.395, 0.995);
            transition: all 500ms cubic-bezier(0.970, 0.000, 0.395, 0.995); /* custom */
        }

        .twist:after {
            content: "";
            position: absolute;
            width: 100%;
            top: 100%;
            height: 100%;
            background: rgb(96, 99, 94);
            transform-origin: center top 0px;
            transform: matrix3d(1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, -0.003,
            0, -50, 0, 1);

            -webkit-transition: all 500ms cubic-bezier(0.970, 0.000, 0.395, 0.995);
            -moz-transition: all 500ms cubic-bezier(0.970, 0.000, 0.395, 0.995);
            -o-transition: all 500ms cubic-bezier(0.970, 0.000, 0.395, 0.995);
            transition: all 500ms cubic-bezier(0.970, 0.000, 0.395, 0.995); /* custom */
        }

        .boton:hover .twist:before {
            background: #ff3243;
            transform: matrix3d(1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0.003,
            0, 50, 0, 1);
        }

        .boton:hover .twist:after {
            background: #50484d;
            transform: matrix3d(1, 0, 0, 0,
            0, 0, -1, 0.003,
            0, 1, 0, 0,
            0, 0, 0, 1);
        }

        .boton .twist:nth-of-type(1) {
            margin-left: 0;
        }

        .boton .twist:nth-of-type(1):before,
        .boton .twist:nth-of-type(1):after {
            transition-delay: 0s;
        }

        .boton .twist:nth-of-type(2):before,
        .boton .twist:nth-of-type(2):after {
            transition-delay: 0.1s;
        }

        .boton .twist:nth-of-type(3):before,
        .boton .twist:nth-of-type(3):after {
            transition-delay: 0.2s;
        }

        .boton .twist:nth-of-type(4):before,
        .boton .twist:nth-of-type(4):after {
            transition-delay: 0.3s;
        }

        .boton .botontext:nth-of-type(1) {
            color: #fff;
            bottom: 100%;
            transform-origin: center bottom 0px;
            transform: matrix3d(1, 0, 0, 0,
            0, 0, -1, -0.003,
            0, 1, 0, 0,
            0, 0, 0, 1);

            -webkit-transition: all 500ms cubic-bezier(0.970, 0.000, 0.395, 0.995);
            -moz-transition: all 500ms cubic-bezier(0.970, 0.000, 0.395, 0.995);
            -o-transition: all 500ms cubic-bezier(0.970, 0.000, 0.395, 0.995);
            transition: all 500ms cubic-bezier(0.970, 0.000, 0.395, 0.995); /* custom */
        }

        .boton:hover .botontext:nth-of-type(1) {
            transform: matrix3d(1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0.003,
            0, 50, 0, 1);
        }

        .boton .botontext:nth-of-type(2) {
            color: #fff;
            top: 100%;
            transform-origin: center top 0px;
            transform: matrix3d(1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, -0.003,
            0, -50, 0, 1);

            -webkit-transition: all 500ms cubic-bezier(0.970, 0.000, 0.395, 0.995);
            -moz-transition: all 500ms cubic-bezier(0.970, 0.000, 0.395, 0.995);
            -o-transition: all 500ms cubic-bezier(0.970, 0.000, 0.395, 0.995);
            transition: all 500ms cubic-bezier(0.970, 0.000, 0.395, 0.995); /* custom */
        }

        .boton:hover .botontext:nth-of-type(2) {
            transform: matrix3d(1, 0, 0, 0,
            0, 0, -1, 0.003,
            0, 1, 0, 0,
            0, 0, 0, 1);
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
                            <div class="shop-found">
                                <p><span>{{$count[0][0]}}</span> Product Found of <span>{{$count[1][0]}}</span></p>
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
                    <div id="grid-5-col1" class="tab-pane fade  {{ $horizontal ? '' : 'active show'  }}">
                        <div class="row custom-row">
                            @foreach($products as $product)
                                <div class="custom-col-5 custom-col-style">
                                <div class="single-product mb-35">
                                    <div class="product-img">
                                        <a href="{{route('show.product.client', $product->slug)}}"><img height="270" src="{{asset('storage/product/images/thumbnail/'.$product->main_image)}}" alt="{{$product->name}}"></a>
                                        @if($isOffer = $product->isOffer == true)
                                            <span>sale
                                                <span>{{round(($product->offerPriceold - $product->offerPrice) / $product->offerPriceold * 100) }}% Off</span>
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
                                                <h4><a href="{{route('show.product.client', $product->slug)}}">{{$product->name}}</a></h4>
                                            </div>
                                            <div class="product-price" >
                                                <div><span class="{{ $isOffer? 'oldprice' : '' }} price">{{$currency}}{{$product->offerPriceold }}</span></div>
                                                @if($isOffer)
                                                    <span class="offer" >{{$currency}}{{$product->offerPrice}}</span>
                                                @endif
                                            </div>
                                        </div>
                                        <div class="product-cart-categori">
                                            <div class="product-cart">
                                                <span>{{$subcategoryName}}</span>
                                            </div>
                                            <add_cart slug="{{$product->slug}}" tablist="true"></add_cart>
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
                                        <a href="{{route('show.product.client', $product->slug)}}"><img height="270"  src="{{asset('storage/product/images/thumbnail/'.$product->main_image)}}" alt="{{$product->name}}"></a>
                                        <div class="product-action">
{{--                                            <a title="Quick View" data-toggle="modal" data-target="#exampleModal" class="animate-right" href="#"><i class="ion-ios-eye-outline"></i></a>--}}
                                            <click_quick_view slugproduct="{{$product->slug_en}}"></click_quick_view>
                                        </div>
                                    </div>
                                    <div class="product-content-list">
                                        <div class="product-list-info">
                                            <h4><a href="{{route('show.product.client', $product->slug)}}">{{ Str::limit($product->name, $limit = 50, $end = '...')}}</a></h4>
                                            <div><span class="{{ $isOffer = $product->isOffer ? 'oldprice' : '' }} price">{{$currency}}{{$oldOffer =  $product->offerPriceold }}</span></div>
                                            @if($isOffer)
                                                <span class="offer2" >{{$currency}}{{$newOffer = $product->offerPrice }}</span>
                                                <div class="offBox"><span>{{round(($oldOffer - $newOffer) / $oldOffer * 100) }}% Off</span></div>
                                            @endif
                                            <p>{!! Str::limit($product->description, $limit = 70, $end = '...') !!}</p>
                                        </div>
                                        <div class="product-list-cart-wishlist">
                                            <add_cart slug="{{$product->slug}}" tablist="false"></add_cart>
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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" integrity="sha256-KM512VNnjElC30ehFwehXjx1YCHPiQkOPmqnrWtpccM=" crossorigin="anonymous"></script>
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
    <script>
        $(function() {
            var $slider = $("#slider-range");
            //Get min and max values
            var priceMin = $slider.attr("data-price-min"),
                priceMax = $slider.attr("data-price-max");

            //Set min and max values where relevant
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
                    // $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
                    $("#price-filter-min").val(ui.values[0]);
                    $("#price-filter-max").val(ui.values[1]);
                }
            });

            // Amount is a read only field for textual representation of the range
            //$("#amount").val("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));

            //this code was an attempt to stop entering wrong values - but I think this is better ux...
            // $("#price-filter-min, #price-filter-max").map(function(){
            // $(this).on("keypress", function(e) {
            // 	if ($(this).val() > priceMax && e.keyCode != 46 && e.keyCode != 8) {
            // 		// e.preventDefault();
            // 		$(this).val(priceMax);
            // 	} else if ($(this).val() < priceMin && e.keyCode != 46 && e.keyCode != 8) {
            // 		// e.preventDefault();
            // 		$(this).val(priceMin);
            // 	}
            // });
            // });

            $("#price-filter-min, #price-filter-max").map(function(){
                $(this).on("input", function() {
                    // let pmin = $("#price-filter-min").val(),
                    // 	 pmax = $("#price-filter-max").val();
                    // if(
                    // 	pmin >= priceMin //bigger than min
                    // 	&& pmin <= pmax && pmax <= priceMax //smaller than max
                    // ) {
                    // 	updateSlider();
                    // }
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
    </script>
@endpush
