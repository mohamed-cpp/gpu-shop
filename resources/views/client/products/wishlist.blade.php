@extends('client.app')
@push('styles')
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <style>
        .product-sort{
            width: 20%;
        }
        .product-sort div{
            margin-bottom: 5px;
        }
        .fa{
            font-size: 25px;
            margin-left: 5px;
        }
        .fa:hover{
            /*color: orangered;*/
            /*cursor: pointer;*/
        }

        .oldprice{
            text-decoration-line: line-through;
            padding-right: 5px !important;
        }
        .statusProduct{
            text-decoration-line: line-through;
        }
        .offer{
            display: block;
            font-size: 16px;
        }
        .removeButton{
            border: none;
            cursor: pointer;
        }
    </style>
@endpush
@section('content')
    <div class="breadcrumb-area pt-205 pb-210" style="background-image: url(/assets/img/bg/breadcrumb.jpg)">
        <div class="container">
            <div class="breadcrumb-content">
                <h2>wishlist</h2>
                <ul>
                    <li><a href="#">home</a></li>
                    <li> wishlist </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- shopping-cart-area start -->
    <div class="cart-main-area pt-95 pb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h1 class="cart-heading">Wishlist</h1>
                    <div id="wishlist">
                        <wishlist currencyprop="{{ Cookie::get('currency') }}" locale="@if(app()->getLocale() == 'ar') 'ar' @endif" :wishlists="{{ json_encode($wishlistProducts->getCollection())}}"></wishlist>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- shopping-cart-area end -->
    <script src="{{asset('GPU-Shop/js/vueWishlist.js')}}"></script>
@endsection

