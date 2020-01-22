@extends('client.app')
@push('styles')
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <style>
        .removeButton{
            border: none;
            cursor: pointer;
        }
        .product-name a{
            font-size:17px !important
        }
        .coupon {
            float: right;
        }
        .oldprice{
            text-decoration-line: line-through;
            padding-right: 5px !important;
        }
        .offer{
            display: block;
            font-size: 16px;
            color: red;
            font-weight: 600;
        }
    </style>
@endpush
@section('content')
    <div class="breadcrumb-area pt-205 pb-210" style="background-image: url(/assets/img/bg/breadcrumb.jpg)">
        <div class="container">
            <div class="breadcrumb-content">
                <h2>cart</h2>
                <ul>
                    <li><a href="#">home</a></li>
                    <li> cart </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- shopping-cart-area start -->
    <div class="cart-main-area pt-95 pb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h1 class="cart-heading">cart</h1>
                    <div id="cart">
                        <cart-vue :cart_session="{{ $cart }}" ></cart-vue>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- shopping-cart-area end -->
    <script src="{{asset('GPU-Shop/js/vueCart.js')}}"></script>
@endsection

