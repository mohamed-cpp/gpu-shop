@extends('client.app')
@section('title', __('Orders'))
@push('styles')
    <style type="text/css">
        .list-group {
            border-color: #d0d5dc !important;
        }
        .list-group .list-group-item {
            border-color: #d0d5dc !important;
        }
        h1, h2, h3, h4, h5, h6 {
            font-weight: 500 !important;
        }
        a.account-card {
            text-decoration: none;
            color: unset;
        }
        a.account-card i.fa {
            font-size: 42px;
            width: 45px;
        }
        a.account-card .card {
            background: #f9fafb;
            border: 1px solid #d0d5dc;
        }
        a.account-card .card:hover {
            background: #fff;
        }
        a.account-card .card:active {
            background: #f0f2f5;
        }
        .bg-yellow {
            background: #f5d847;
            color: #222c3a;
        }
        .list-group-item-action {
            background: #f9fafb;
        }
        .list-group-item-action .fa {
            width: 22px;
        }
        .list-group-item-action .fa.fa-angle-right {
            font-size: 20px;
            position: absolute;
            right: 5px;
            top: 14px;
        }
        .coupon {
            background: #f9fafb;
            border: 2px dashed #d0d5dc !important;
        }
        .reward-status-box {
            position: relative;
            width: 100%;
            color: #fff;
            background: #1b8cb2;
            border: 2px solid #38b7e1;
            border-radius: 5px;
        }
        .reward-status-box .reward-status {
            width: 60%;
            background: #38b7e1;
            padding: 15px;
        }
        .reward-status-box .current-status {
            position: absolute;
            right: 15px;
            top: 15px;
            color: #fff;
        }
        .reward-status-box .current-status-2 {
            position: absolute;
            right: 15px;
            top: 41px;
            color: #fff;
        }
        .text-orange {
            color: #ec9532 !important;
        }
        .text-carbon {
            color: #222c3a !important;
        }
        .text-pebble {
            color: #79879a !important;
        }
        .text-gray {
            color: #a2abb9 !important;
        }
        .text-cloud {
            color: #d0d5dc !important;
        }
        .text-blue {
            color: #49aed0 !important;
        }
        .text-gray {
            color: #a2abb9 !important;
        }
        .text-pale-sky {
            color: #a2abb9 !important;
        }
        .bg-black {
            background: #111822 !important;
        }
        .bg-snow {
            background: #f9fafb !important;
        }
        .bg-fog {
            background: #f0f2f5 !important;
        }
        .bb1-cloud {
            border-bottom: 1px solid #d0d5dc;
        }
        .fs-14 {
            font-size: 14px !important;
        }
        .fs-22 {
            font-size: 22px !important;
        }
        .tanga-header .navbar-brand {
            margin-bottom: 5px;
        }
        .tanga-header .nav-link {
            color: #a2abb9;
        }
        .tanga-header .nav-link:hover {
            color: #fff;
        }
        .tanga-header .nav-link:active {
            color: #a2abb9;
        }
        .tanga-navbar {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            -ms-overflow-style: -ms-autohiding-scrollbar;
        }
        .tanga-navbar:-webkit-scrollbar {
            display: none;
        }
        .tanga-navbar .nav-link {
            white-space: nowrap;
            color: #79879a;
        }
        .tanga-navbar .nav-link:hover {
            color: #354050;
        }
        .tanga-navbar .nav-link:active {
            color: #79879a;
        }
        .btn-primary {
            background: #c62931;
            border-color: #c62931;
            cursor: pointer;
        }
        .btn-primary:hover {
            background: #d94950;
            border-color: #d94950;
        }
        .btn-secondary {
            background: #fff !important;
            color: #354050 !important;
            border-color: #d0d5dc !important;
            cursor: pointer;
        }
        .btn-secondary:hover {
            color: #354050 !important;
            background: #f9fafb !important;
        }
        .btn-secondary:active {
            color: #79879a !important;
            background: #f0f2f5 !important;
        }
        .btn-secondary:focus {
            color: #79879a !important;
            background: #f0f2f5 !important;
            outline: 0 !important;
        }
        .mobile-nav {
            position: fixed;
            bottom: 0;
            z-index: 50;
            display: block;
            width: 100%;
            background: #111822;
        }
        .mobile-nav a {
            text-decoration: none !important;
            cursor: pointer;
            color: #a2abb9;
            font-size: 12px;
            float: left;
            width: 20%;
            display: inline-block;
            text-align: center;
            margin: 0 !important;
            padding: 8px 0px 5px 0px;
        }
        .mobile-nav a.active {
            background: #222c3a;
            color: #fff;
        }
        .mobile-nav a i {
            font-size: 23px;
            display: block;
            margin: 0 auto;
            margin-bottom: 2px;
        }
        .fs-18 {
            font-size: 18px !important;
        }
        .fs-22 {
            font-size: 22px !important;
        }
        .bg-snow {
            background: #f9fafb !important;
        }
        .card {
            border-color: #d0d5dc !important;
        }
        .text-pebble {
            color: #79879a !important;
        }
        .text-charcoal {
            color: #354050 !important;
        }
        .bottom-drawer {
            position: fixed;
            bottom: 56px;
            width: 100%;
            border-top: 1px solid #d0d5dc;
        }
        .bg-white {
            background: #fff !important;
        }
        .list-group {
            border-color: #d0d5dc !important;
        }
        .list-group-item {
            border-color: #d0d5dc !important;
        }
        .text-red {
            color: #c62931 !important;
        }
        .text-green {
            color: #00a362 !important;
        }
        .text-link-blue {
            color: #3373cc !important;
        }
        .form-control {
            background: #f9fafb;
            border-color: #d0d5dc !important;
        }
        .bd-2-cloud {
            border: 2px dashed #d0d5dc;
        }
        .b-1-green {
            border: 2px solid #00a362 !important;
        }
        .br-8 {
            border-radius: 5px;
        }
        .address-radio .address-label {
            padding: 1rem;
            margin-bottom: 0 !important;
        }
        .address-radio [type="radio"]:checked, .address-radio [type="radio"]:not(:checked) {
            position: absolute;
            opacity: 0;
        }
        .address-radio [type="radio"]:checked + label, .address-radio [type="radio"]:not(:checked) + label {
            position: relative;
            padding-left: 50px;
            width: 100%;
            cursor: pointer;
            line-height: 20px;
            display: inline-block;
            color: #354050;
        }
        .address-radio [type="radio"]:checked + label:before, .address-radio [type="radio"]:not(:checked) + label:before {
            content: '';
            position: absolute;
            left: 1rem;
            top: 1rem;
            width: 20px;
            height: 20px;
            border: 2px solid #d0d5dc;
            border-radius: 50%;
            background: #fff;
        }
        .address-radio [type="radio"]:checked + label:after, .address-radio [type="radio"]:not(:checked) + label:after {
            content: '';
            width: 12px;
            height: 12px;
            background: #00a362;
            position: absolute;
            top: 20px;
            left: 20px;
            border-radius: 50%;
            transition: all 0.2s ease;
        }
        .address-radio [type="radio"]:not(:checked) + label:after {
            opacity: 0;
            transform: scale(0);
        }
        .address-radio [type="radio"]:checked + label:after {
            opacity: 1;
            transform: scale(1);
        }
        .address-radio [type="radio"]:not(:checked) ~ label p {
            display: none;
        }
        .address-radio [type="radio"]:checked ~ label p {
            display: unset;
        }

    </style>
    <style type="text/css">
        ol{
            margin-bottom: 30px !important;
        }
        ol.progtrckr {
            margin: 0;
            padding: 0;
            list-style-type none;
        }

        ol.progtrckr li {
            display: inline-block;
            text-align: center;
            line-height: 3.5em;
        }

        ol.progtrckr[data-progtrckr-steps="2"] li { width: 49%; }
        ol.progtrckr[data-progtrckr-steps="3"] li { width: 33%; }
        ol.progtrckr[data-progtrckr-steps="4"] li { width: 24%; }
        ol.progtrckr[data-progtrckr-steps="5"] li { width: 19%; }
        ol.progtrckr[data-progtrckr-steps="6"] li { width: 16%; }
        ol.progtrckr[data-progtrckr-steps="7"] li { width: 14%; }
        ol.progtrckr[data-progtrckr-steps="8"] li { width: 12%; }
        ol.progtrckr[data-progtrckr-steps="9"] li { width: 11%; }

        ol.progtrckr li.progtrckr-done {
            color: black;
            border-bottom: 4px solid yellowgreen;
        }
        ol.progtrckr li.progtrckr-todo {
            color: silver;
            border-bottom: 4px solid silver;
        }

        ol.progtrckr li:after {
            content: "\00a0\00a0";
        }
        ol.progtrckr li:before {
            position: relative;
            bottom: -2.5em;
            float: left;
            left: 50%;
            line-height: 1em;
        }
        ol.progtrckr li.progtrckr-done:before {
            content: "\2713";
            color: white;
            background-color: yellowgreen;
            height: 2.2em;
            width: 2.2em;
            line-height: 2.2em;
            border: none;
            border-radius: 2.2em;
        }
        ol.progtrckr li.progtrckr-todo:before {
            content: "\039F";
            color: silver;
            background-color: white;
            font-size: 2.2em;
            bottom: -1.2em;
        }

        @media (max-width:767px) {
            ol.progtrckr[data-progtrckr-steps="5"] li { width: 27%; }
        }
    </style>
    <style type="text/css">
        .details{
            line-height: 1.3;
        }

        .details-right{
            float: right;
        }

        .details b{
            color: #585858;
        }
        a:hover{
            color: #ee3333 !important;
        }
        .oldPrice{
            text-decoration-line: line-through;
            padding-right: 5px !important;
        }
        .offer{
            color: red !important;
            font-size: 15px;
        }
    </style>
@endpush
@section('content')

    <div class="cart-main-area">
        <div class="container">
            <ol class="progtrckr" data-progtrckr-steps="5">
                <li class="progtrckr-todo">@lang('Ordered')</li>
                <li class="progtrckr-todo">@lang('Processing')</li>
                <li class="progtrckr-todo">@lang('Packed')</li>
                <li class="progtrckr-todo">@lang('Shipped')</li>
                <li class="progtrckr-todo">@lang('Delivered')</li>
            </ol>
            @php $currency = $order->currency == 'usd' ? '$' : '£' @endphp
            <h2 class="text-charcoal hidden-sm-down">@lang('Your Details Orders')</h2>
            <div class="details details-right">
                <p><b>@lang('Order date'):</b> {{$order->created_at}}</p>
                <p><b>@lang('Payment'):</b> @lang($order->pay_by)</p>
            </div>
            <div class="details">
                <p><b>@lang('Consignee name'):</b> {{$order->first_name}} {{$order->last_name}}</p>
                <p><b>@lang('Contact telephone'):</b> {{$order->phone}}</p>
                <p><b>@lang('Receipt address'):</b> {{$order->address}}</p>
                <p><b>@lang('City'):</b> {{$order->city}}</p>
                <p><b>@lang('Country'):</b> {{$order->country}}</p>
                @if($order['e-mail'])
                    <p><b>@lang('Email Address'):</b> {{$order['e-mail']}}</p>
                @endif
                @if($order->zip)
                    <p><b>@lang('Postcode / Zip'):</b> {{$order->zip}}</p>
                @endif
                @if($order->client_note)
                    <p><b>@lang('Your Note'):</b> {{$order->client_note}}</p>
                @endif
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="list-group mb-5">
                        <div class="list-group-item p-3 bg-snow" style="position: relative;">
                            <div class="row w-100 no-gutters">
                                <div class="col-6 col-md">
                                    <h6 class="text-charcoal mb-0 w-100">@lang('Order Number')</h6>
                                    <span class="text-pebble mb-0 w-100 mb-2 mb-md-0">{{$order->id}}</span>
                                </div>
                                <div class="col-6 col-md">
                                    <h6 class="text-charcoal mb-0 w-100">@lang('Total')</h6>
                                    <p class="text-pebble mb-0 w-100 mb-2 mb-md-0">{{$currency}}{{$order->total_after_discount ? $order->total_after_discount :$order->total}}</p>
                                </div>
                                <div class="col-6 col-md">
                                    <h6 class="text-charcoal mb-0 w-100">@lang('Status')</h6>
                                    <span class="text-pebble mb-0 w-100 mb-2 mb-md-0">@lang($order->status_order)</span>
                                </div>
                                @if($order->where)
                                    <div class="col-6 col-md">
                                        <h6 class="text-charcoal mb-0 w-100">@lang("Where's the order")</h6>
                                        <p class="text-pebble mb-0 w-100 mb-2 mb-md-0">{{$order->where}}</p>
                                    </div>
                                @endif
                                @if($order->coupon)
                                    <div class="col-6 col-md">
                                        <h6 class="text-charcoal mb-0 w-100">@lang('Coupon Used')</h6>
                                        <p class="text-pebble mb-0 w-100 mb-2 mb-md-0">{{$order->coupon}}</p>
                                    </div>
                                @endif
                                @if($order->status == \App\Order::SHIPPED)
                                    <div class="col-12 col-md-3">
                                        <form method="post" action="{{route('delivered.client')}}">
                                            @csrf
                                            <input type="hidden" name="id" value="{{$order->id}}">
                                            <input class="btn btn-primary w-100" type="submit" value="@lang('Got Order?')">
                                        </form>
                                    </div>
                                @endif
                            </div>
                        </div>
                        <div class="list-group-item p-3 bg-white">
                            <div class="row no-gutters">
                                @if($order->shipped_at)
                                    <div class="col-12 col-md-13 pr-0 pr-md-3">
                                        <div class="alert p-2 alert-success w-100 mb-0">
                                            <h6 class="text-green mb-0"><b>@lang('Shipped')</b></h6>
                                            <p class="text-green hidden-sm-down mb-0">
                                                At {{$order->shipped_at->format('jS F Y h:i:s A')}}
                                            </p>
                                        </div>
                                    </div>
                                @endif

                                @foreach($order->productOrder as $product_order)
                                    <div class="row no-gutters mt-3">
                                            <div class="col-3 col-md-1">
                                                <a href="{{route('show.product.client', $product_order->product->slug)}}" class="text-charcoal">
                                                    <img width="1000" class="img-fluid pr-1" src="{{asset('storage/product/images/'.$product_order->product->main_image)}}" alt="">
                                                </a>
                                            </div>
                                            <div class="col-9 col-md-8 pr-0 pr-md-3">
                                                <h6 class="text-charcoal mb-2 mb-md-1">
                                                    {{$product_order->qty}} x
                                                    <a href="{{route('show.product.client', $product_order->product->slug)}}" class="text-charcoal">
                                                        {{$product_order->product->name}}
                                                    </a>
                                                </h6>
                                                @if(count($product_order->optionsProductOrder))
                                                    <ul class="list-unstyled text-pebble mb-2 small">
                                                        @foreach($product_order->optionsProductOrder as $option)
                                                            <li class="">
                                                                <b>{{$option->option}}:</b> {{$option->sub_option}}
                                                            </li>
                                                        @endforeach
                                                    </ul>
                                                @endif
                                                @if($product_order->for)
                                                <span>For:{{"@".$product_order->for}}</span>
                                                @endif

                                                @if($product_order->price_after_discount)
                                                    <h6 class="text-charcoal text-left mb-0 mb-md-2 oldPrice"><b>{{$currency}}{{$product_order->price}}</b></h6>
                                                    <h6 class="text-charcoal text-left mb-0 mb-md-2 offer"><b>{{$currency}}{{$product_order->price_after_discount}}</b></h6>
                                                @else
                                                    <h6 class="text-charcoal text-left mb-0 mb-md-2"><b>{{$currency}}{{$product_order->price}}</b></h6>
                                                @endif
                                            </div>
                                            @if($product_order->seller_note)
                                                <div class="col-12 col-md-3 hidden-sm-down">
                                                    <h5>Message From Seller</h5>
                                                    <span>{{$product_order->seller_note}}</span>
                                                </div>
                                            @endif
                                        </div>
                                @endforeach

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

@endsection
@push('scripts')
    <script>
        let i = 0;
        let status = {{$order->status}};
        $(".progtrckr li").each((index,element) =>{
            if(status >= i){
                $(element).attr('class', 'progtrckr-done');
            }else {
                $(element).attr('class', 'progtrckr-todo');
            }
            i++;
        });
    </script>
@endpush
