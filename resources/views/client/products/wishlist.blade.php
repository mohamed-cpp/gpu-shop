@extends('client.app')
@section('title', __('Wishlist'))
@push('styles')
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

        /*Search Bar*/
        input[type=text] {
            position: relative;
            padding: 15px 40px 15px 20px;
            width: 300px;
            color: #242424;
            font-size: 16px;
            font-weight: 100;
            /*letter-spacing: 2px;*/
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
        #copyButton{
            width: 100px;
            border: 2px solid;
            border-radius: 5px;
            height: 30px;
        }
    </style>
@endpush
@section('content')
    <div class="breadcrumb-area pt-205 pb-210" style="background-image: url({{wishlistImage()}})">
        <div class="container">
            <div class="breadcrumb-content">
                <h2>@lang('Wishlist')</h2>
                <ul>
                    <li><a href="/">@lang('Home')</a></li>
                    <li> @lang('Wishlist') </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- shopping-cart-area start -->
    <div class="cart-main-area pt-95 pb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h1 class="cart-heading">@lang('Wishlist')</h1>
                    <form action="{{route('show.wishlist.client')}}" method="get" style="display: inline">
                        <input placeholder='@lang('Search')' class='js-search' name="keywords" type="text">
                        <button type="submit" class="removeButton"><i class="fa fa-search"></i></button>
                    </form>
                    <div id="wishlist">
                        <label for="inputCopy" >@lang('To Share Wishlist Copy Link and Share It With Your Friends'):</label>
                        <input type="text" value="gpu-shop.local/wishlists/{{auth('client')->user()->username}}" id="inputCopy">
                        <input type="button" onclick="copy()" id="copyButton" value="@lang('Copy Url')">
                        <wishlist currencyprop="{{ Cookie::get('currency') }}" locale="@if(app()->getLocale() == 'ar') 'ar' @endif" :wishlists="{{ json_encode($wishlistProducts->getCollection())}}"></wishlist>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- shopping-cart-area end -->
    <script>
        function copy() {
            var copyText = document.getElementById("inputCopy");
            copyText.select();
            copyText.setSelectionRange(0, 200);
            document.execCommand("copy");
            document.getElementById("copyButton").value = "Copied";
        }
    </script>
@endsection

