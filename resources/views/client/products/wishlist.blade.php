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
                    <h1 class="cart-heading">wishlist</h1>
                    <form action="#">
                        <div class="table-content table-responsive">
                            <table>
                                <thead>
                                <tr>
                                    <th class="product-name">remove</th>
                                    <th class="product-price">images</th>
                                    <th class="product-name">name</th>
                                    <th class="product-price">Price</th>
                                    <th class="product-price">Visibility</th>
                                    <th class="product-sort">sort</th>
                                </tr>
                                </thead>
                                @php $currency = Cookie::get('currency') == 'EGP' ? '£' : '$'@endphp
                                @foreach($wishlistProducts as $wishlistProduct)
                                <tbody>
                                <tr>
                                    <td class="product-remove">
                                        <form class="d-inline" method="post" action="{{route('destroy.wishlist.client',$wishlistProduct)}}">
                                            @method('DELETE')
                                            @csrf
                                            <button type="submit" class="removeButton">
                                                <i class="ion-android-close"></i>
                                            </button>
                                        </form>
                                    </td>
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
                                    <td>
                                        <a href="{{route('wishlist.visibility.client',$wishlistProduct)}}">
                                            @if($wishlistProduct->public)
                                                <i class="fa fa-globe"></i>
                                            @else
                                                <i class="fa fa-user"></i>
                                            @endif
                                        </a>
                                    </td>
                                    <td class="product-sort">
                                        <div>
                                            <i class="fa fa-arrow-up"></i>
                                            <i class="fa fa-angle-double-up"></i>
                                        </div>
                                        <div>
                                            <i class="fa fa-arrow-down"></i>
                                            <i class="fa fa-angle-double-down"></i>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                                @endforeach
                            </table>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- shopping-cart-area end -->
@endsection

