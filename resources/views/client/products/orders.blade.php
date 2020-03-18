@extends('client.app')
@section('title', __('Orders'))
@push('styles')
    <style>
        tbody span{
            font-size: 16px;
        }
        .btn-secondary{
            height: 38px;
            border-radius: 6px 6px 6px 6px;
        }
        .btn-secondary a {
            color: #fff;
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
    <div class="breadcrumb-area pt-205 pb-210" style="background-image: url({{orderImage()}})">
        <div class="container">
            <div class="breadcrumb-content">
                <h2>{{__('Orders')}}</h2>
                <ul>
                    <li><a href="/">{{__('Home')}}</a></li>
                    <li> {{__('Orders')}} </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="cart-main-area pt-95 pb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h1 class="cart-heading">{{__('Orders')}}</h1>
                        <div class="table-content table-responsive">
                            <table>
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>{{__('Price')}}</th>
                                    <th>{{__('Where Orders')}}</th>
                                    <th>{{__('Status')}}</th>
                                    <th>{{__('Order date')}}</th>
                                    <th>{{__('More Details')}}</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($orders as $order)
                                    @php $currency = $order->currency == 'usd' ? '$' : '£' @endphp
                                    <tr>
                                        <td><span>@lang('text.OrderNum',['id'=>$order->id])</span></td>
                                        <td>
                                            @if($order->total_after_discount)
                                                <span class="amount oldPrice">{{$currency}}{{$order->total}}</span>
                                                <span class="amount offer">{{$currency}}{{$order->total_after_discount}}</span>
                                            @else
                                                <span class="amount">{{$currency}}{{$order->total}}</span>
                                            @endif
                                        </td>
                                        <td>
                                            @if($order->where)
                                                <span>{{$order->where}}</span>
                                            @else
                                                <span>Pending</span>
                                            @endif
                                        </td>
                                        <td>
                                            <span><b>{{__($order->status_order)}}</b></span>
                                        </td>
                                        <td>
                                            <span>{{$order->created_at}}</span>
                                        </td>
                                        <td>
                                            @if($order->seen_notes)
                                                <p style="color: red">New Message From Seller</p>
                                            @endif
                                            <button type="button" class="btn btn-secondary">
                                                <a href="{{route('order.client',$order->id)}}">
                                                    {{__('Review Order')}}
                                                </a>
                                            </button>
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                        </div>
                    <div class="row">
                        <div class="col-sm-6 col-sm-offset-5">
                            {{$orders->links() }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@push('scripts')

@endpush
