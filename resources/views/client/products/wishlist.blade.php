@extends('client.app')
@push('styles')
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <style>

    </style>
@endpush
@section('content')
    <div class="breadcrumb-area pt-205 pb-210" style="background-image: url(assets/img/bg/breadcrumb.jpg)">
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
                    <h1 class="cart-heading">wishlist</h1>
                    <form action="#">
                        <div class="table-content table-responsive">
                            <table>
                                <thead>
                                <tr>
                                    <th class="product-name">remove</th>
                                    <th class="product-price">images</th>
                                    <th class="product-name">Product</th>
                                    <th class="product-price">Price</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td class="product-remove"><a href="#"><i class="ion-android-close"></i></a></td>
                                    <td class="product-thumbnail">
                                        <a href="#">
{{--                                            <img class="overlay" src="/assets/img/cart/1.jpg" alt="">--}}
                                            <i class="fa fa-times-circle" style="font-size: 47px;"></i>
                                        </a>
                                    </td>
                                    <td class="product-name"><a href="#">Wooden Furniture </a></td>
                                    <td class="product-price"><span class="amount">$165.00</span></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- shopping-cart-area end -->
@endsection

