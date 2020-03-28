@extends('client.app')
@section('title', __('Checkout'))
@push('styles')
    <style>
        .oldprice{
            text-decoration-line: line-through;
            padding-right: 5px !important;
        }
        .offer{
            display: block;
            font-size: 16px;
            color: red !important;
            font-weight: 600;
        }
        .checkout-area .btn {
            box-sizing: border-box;
            appearance: none;
            background-color: transparent;
            border: 2px solid #e74c3c;
            border-radius: 0.6em;
            color: #e74c3c;
            cursor: pointer;
            display: flex;
            align-self: center;
            font-size: 1rem;
            font-weight: 400;
            line-height: 0;
            margin: 20px;
            padding: 1.2em 2.8em;
            text-decoration: none;
            text-align: center;
            text-transform: uppercase;
            font-family: 'Montserrat', sans-serif;

        }
        .btn:hover, .btn:focus {
            color: #fff;
            outline: 0;
        }
        .first {
            transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
        }
        .first:hover {
            box-shadow: 0 0 40px 40px #e74c3c inset;
        }
        .third {
            border-color: #e74c3c;
            color: #fff !important;
            box-shadow: 0 0 40px 40px #e74c3c inset, 0 0 0 0 #e74c3c;
            transition: all 150ms ease-in-out;
        }
        .third:hover {
            box-shadow: 0 0 10px 0 #e74c3c inset, 0 0 10px 4px #e74c3c;
            color: #404040 !important;
        }
        .invalid-feedback{
            display: block !important;
        }
        .StripeElement {
            height: 40px;
            padding: 10px 12px;
            width: 100%;
            color: #32325d;
            background-color: white;
            border: 1px solid transparent;
            border-radius: 4px;

            box-shadow: 0 1px 3px 0 #e6ebf1;
            -webkit-transition: box-shadow 150ms ease;
            transition: box-shadow 150ms ease;
        }

        .StripeElement--focus {
            box-shadow: 0 1px 3px 0 #cfd7df;
        }

        .StripeElement--invalid {
            border-color: #fa755a;
        }

        .StripeElement--webkit-autofill {
            background-color: #fefde5 !important;
        }
    </style>
    <script src="https://js.stripe.com/v3/"></script>
@endpush
@section('content')
    <div class="breadcrumb-area pt-205 pb-210" style="background-image: url({{checkoutImage()}})">
        <div class="container">
            <div class="breadcrumb-content">
                <h2>@lang('Checkout')</h2>
                <ul>
                    <li><a href="/">@lang('Home')</a></li>
                    <li> @lang('Checkout') </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- checkout-area start -->
    <div class="checkout-area ptb-100">
        <div class="container">
            @php $currency =  $cart->cookie == 'usd' ? '$' : '£'  @endphp
            <form id='payment-form' action="{{route('create.checkout.client')}}" method="post">
                @csrf
            <div class="row">
                <div class="col-lg-6 col-md-12 col-12">
                        <div class="checkbox-form">
                            <h3>@lang('Billing Details')</h3>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="checkout-form-list">
                                        <label>@lang('First Name') <span class="required">*</span></label>
                                        <input type="text" id="first_name" name="first_name" value="{{old('first_name')}}" required />
                                        @error('first_name')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="checkout-form-list">
                                        <label>@lang('Last Name') <span class="required">*</span></label>
                                        <input type="text" id="last_name" name="last_name" value="{{old('last_name')}}" required />
                                        @error('last_name')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="checkout-form-list">
                                        <label>@lang('Address') <span class="required">*</span></label>
                                        <input type="text" id="address" name="address" value="{{old('address')}}" placeholder="Street address" required/>
                                        @error('address')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="checkout-form-list">
                                        <label>@lang('Town / City') <span class="required">*</span></label>
                                        <input type="text" id="city" name="city" value="{{old('city')}}" required/>
                                        @error('city')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="checkout-form-list">
                                        <label>@lang('State / County') <span class="required">*</span></label>
                                        <input type="text" id="country" placeholder="" value="{{old('country')}}" name="country" required />
                                        @error('country')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="checkout-form-list">
                                        <label>@lang('Postcode / Zip')</label>
                                        <input type="text" name="zip" value="{{old('zip')}}" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="checkout-form-list">
                                        <label>@lang('Email Address')</label>
                                        <input type="email" name="e-mail" value="{{old('e-mail') ? old('e-mail') : auth('client')->user()->email}}" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="checkout-form-list">
                                        <label>@lang('Phone Number') <span class="required">*</span></label>
                                        <input type="text" id="phone" name="phone" required value="{{old('phone') ? old('phone') :auth('client')->user()->phone_number}}" />
                                        @error('phone')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                </div>
                            </div>
                            <div class="order-notes">
                                <div class="checkout-form-list mrg-nn">
                                    <label>@lang('Order Notes')</label>
                                    <textarea id="checkout-mess" name="client_note" value="{{old('client_note')}}" cols="30" rows="10" placeholder="@lang('Notes about your order, e.g. special notes for delivery.')" ></textarea>
                                </div>
                            </div>
                        </div>
                </div>
                <div class="col-lg-6 col-md-12 col-12">
                    <div class="your-order">
                        <h3>@lang('Your order')</h3>
                        <div class="your-order-table table-responsive">
                            <table>
                                <thead>
                                <tr>
                                    <th class="product-name">@lang('Products')</th>
                                    <th class="product-total">@lang('Total')</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($cart->items as $item)
                                <tr class="cart_item">
                                    <td class="product-name">
                                        {{$item['name']}} <strong class="product-quantity"> × {{$item['qty']}}</strong>
                                        @if($item['for'])
                                            <p>for {{ '@'.$item['for'] }}</p>
                                        @endif
                                    </td>
                                    <td class="product-total">
                                        @if($item['couponTotalPrice'])
                                            <span class="amount oldprice">{{$currency}}{{$item['totalPriceQty']}}</span>
                                            <span class="amount offer">{{$currency}}{{$item['couponTotalPrice']}}</span>
                                        @else
                                            <span class="amount">{{$currency}}{{$item['totalPriceQty']}}</span>
                                        @endif
                                    </td>
                                </tr>
                                @endforeach
                                </tbody>

                                <tfoot>
                                <tr class="order-total">
                                    <th>@lang('Order Total')</th>
                                    @if($cart->coupon)
                                        <td>
                                        <strong><span class="amount oldprice">{{$currency}}{{$cart->totalPrice}}</span></strong>
                                        <strong><span class="amount offer">{{$currency}}{{$cart->couponTotalPrice}}</span></strong>
                                    @else
                                        <td><strong><span class="amount">{{$currency}}{{$cart->totalPrice}}</span></strong>
                                    @endif
                                    </td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div class="payment-method">
                            <div class="payment-accordion">
                                <div class="panel-group" id="faq">
                                    @if(cashPayment())
                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h5 class="panel-title"><a data-toggle="collapse" aria-expanded="true" class="slideToggle" data-slide="cash"  href="#cash">@lang('Cash').</a></h5>
                                        </div>
                                        <div id="cash" class="panel-collapse collapse show">
                                            <div class="panel-body">
                                                <button type="submit" class="btn third checkout-button" id="cash">@lang('Buy Now')</button>
                                            </div>
                                        </div>
                                    </div>
                                    @endif
                                    @if(creditCardPayment())
                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h5 class="panel-title"><a class="collapsed slideToggle" data-toggle="collapse" aria-expanded="false" data-slide="cards"  href="#cards">@lang('Credit Card')</a></h5>
                                        </div>
                                        <div id="cards" class="panel-collapse collapse">
                                            <div class="panel-body">
                                                <p>@lang('Pay by Credit Cards or Debit Cards')</p>
                                                <div id="card-element"></div>
                                                <button type="submit" class="btn first checkout-button" id="cards_submit" value="cards_submit">@lang('Buy Now')</button>
                                            </div>
                                        </div>
                                    </div>
                                    @endif
                                    @if(PayPalPayment())
                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h5 class="panel-title"><a class="collapsed slideToggle" data-toggle="collapse" aria-expanded="false" data-slide="paypal" href="#paypal">@lang('PayPal')</a></h5>
                                        </div>
                                        <div id="paypal" class="panel-collapse collapse checkout-button">
                                            <div class="panel-body">
                                                <p>@lang('Pay by PayPal').</p>
                                                <script src="https://www.paypalobjects.com/api/button.js?"
                                                        data-merchant="braintree"
                                                        data-id="paypal"
                                                        data-button="checkout"
                                                        data-color="gold"
                                                        data-size="medium"
                                                        data-shape="pill"
                                                        data-button_type="submit"
                                                        data-button_disabled="false"
                                                ></script>
                                            </div>
                                        </div>
                                    </div>
                                    @endif
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </div>
    </div>
    <!-- checkout-area end -->
@endsection
@push('scripts')
<script>
    $(".slideToggle").click(function(){
        $('.panel-collapse').slideUp(600);
        $("#"+$(this).attr('data-slide')).slideDown(600);
    });

    var stripe = Stripe('{{config('stripe.STRIPE_PUBLIC_KEY')}}');
    var elements = stripe.elements();
    var style = {
        base: {
            color: "#32325d",
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
                color: "#aab7c4"
            }
        },
        invalid: {
            color: "#fa755a",
            iconColor: "#fa755a"
        },
    };
    if(document.getElementById("card-element")){
        var cardElement = elements.create('card', {hidePostalCode: true,style: style});
        cardElement.mount('#card-element');
    }
    var form = document.getElementById('payment-form');

    $('#payment-form').on('submit', function(e) {
        e.preventDefault();
    });

    $('.checkout-button').on('click', function() {
        $('.checkout-button').prop('disabled',true);
        let id = $(this).attr('id');
        if(id === 'cards_submit'){
            stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
            }).then(function(result) {
                if(result.paymentMethod){
                    let hiddenInput = document.createElement('input');
                    hiddenInput.setAttribute('type', 'hidden');
                    hiddenInput.setAttribute('name', 'stripeToken');
                    hiddenInput.setAttribute('value', result.paymentMethod.id);
                    let hiddenInputCard = document.createElement('input');
                    hiddenInputCard.setAttribute('type', 'hidden');
                    hiddenInputCard.setAttribute('name', 'pay');
                    hiddenInputCard.setAttribute('value','cards');
                    form.appendChild(hiddenInput);
                    form.appendChild(hiddenInputCard);
                    form.submit();

                }
            });
        }else{
            let hiddenInputCard = document.createElement('input');
            hiddenInputCard.setAttribute('type', 'hidden');
            hiddenInputCard.setAttribute('name', 'pay');
            hiddenInputCard.setAttribute('value',id);
            form.appendChild(hiddenInputCard);
            form.submit();
        }
    });

</script>

@endpush
