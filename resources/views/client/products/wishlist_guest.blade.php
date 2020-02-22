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
            color: #ff3243;
            cursor: pointer;
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
            color: red;
            font-weight: 700;
        }
        .removeButton{
            border: none;
            cursor: pointer;
        }

        /*Search Bar*/
        input[type=text] {
            position: relative;
            padding: 15px 40px 15px 20px;
            width: 300px;
            color: #242424;
            font-size: 16px;
            font-weight: 100;
            letter-spacing: 2px;
            border: 1px solid;
            border-radius: 5px;
            /*background: linear-gradient(to right, #fff 0%, #464747 #f9f9f9 100%);*/
            transition: width 0.4s ease;
            outline: none;
        }
        input[type=text]:hover,
        input[type=text]:focus {
            border-color: rgba(255, 50, 67, 0.6);

        }
        .fa-search {
            position: relative;
            left: -47px;
            top: 4px;
        }
        .product-card {
            width: 28%;
        }
        .product-card .cart-checkout-btn a{
            border: 1px solid rgba(0, 0, 0, 0.55);
        }
        a:hover{
            color: #fff !important;
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
                    <h1 class="cart-heading">wishlist</h1>
                    <form action="{{route('show.wishlist.guest', app()->runningUnitTests() ?  'phpunit' : request()->segment(3) )}}" method="get">
                        <input placeholder='Search...' class='js-search' name="keywords" type="text">
                        <button type="submit" class="removeButton"><i class="fa fa-search"></i></button>
                    </form>
                        <div class="table-content table-responsive" id="appView">
                            <table>
                                <thead>
                                <tr>
                                    <th class="product-price">images</th>
                                    <th class="product-name">name</th>
                                    <th class="product-price">Price</th>
                                    <th>Cart</th>
                                </tr>
                                </thead>
                                @php $currency = Cookie::get('currency') == 'EGP' ? '£' : '$'@endphp
                                @foreach($wishlistProducts as $wishlistProduct)
                                    @if($wishlistProduct->products)
                                <tbody>
                                <tr>
                                    <td class="product-thumbnail">
                                        @if($wishlistProduct->products->status == false || $wishlistProduct->products->approved != 1)
                                            <i class="fa fa-times-circle" style="font-size: 47px;"></i>
                                        @else
                                            <a href="{{$wishlistProduct->products->slug}}">
                                                <img width="80" height="80" src="{{asset('storage/product/images/thumbnail/'.$wishlistProduct->products->main_image)}}" alt="">
                                            </a>
                                        @endif
                                    </td>
                                    <td class="product-name">
                                        @if($wishlistProduct->products->status == false || $wishlistProduct->products->approved != 1)
                                            <span class="statusProduct">
                                                {{$wishlistProduct->products->name}}
                                            </span>
                                            <p>Sorry The Product Out of Stock</p>
                                        @else
                                            <a href="{{$wishlistProduct->products->slug}}">
                                                {{$wishlistProduct->products->name}}
                                            </a>
                                        @endif
                                    </td>
                                    <td class="product-price">
                                        <span class="{{$isOffer = $wishlistProduct->products->isOffer ? 'oldprice' : '' }} amount">{{$currency}}{{$wishlistProduct->products->offerPrice(false) }}</span>
                                        @if($isOffer)
                                            <span class="offer" >{{$currency}}{{$wishlistProduct->products->offerPrice()}}</span>
                                        @endif
                                    </td>
                                    <td class="product-card ">
                                        <cart_wishlist username="{{request()->segment(3)}}" slug="{{$wishlistProduct->products->slug}}" ></cart_wishlist>
                                    </td>
                                </tbody>
                                    @endif
                                @endforeach
                            </table>
                        </div>
                </div>
            </div>
        </div>
    </div>
    <!-- shopping-cart-area end -->
@endsection

