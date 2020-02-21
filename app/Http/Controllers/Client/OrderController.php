<?php

namespace App\Http\Controllers\Client;

use App\BalanceWebsite;
use App\Cart;
use App\Http\Controllers\Controller;
use App\Http\Requests\CheckoutClient;
use App\Jobs\NewOrder;
use App\Order;
use App\ProductSubDetails;
use App\Seller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use PayPal\Api\Item;
use PayPal\Api\Payer;
use PayPal\Api\Amount;
use PayPal\Api\Payment;
use PayPal\Api\ItemList;
use PayPal\Api\Transaction;
use PayPal\Api\RedirectUrls;
use PayPal\Api\PaymentExecution;

class OrderController extends Controller
{
    public function index(){
        $orders = auth('client')->user()
            ->orders()
            ->where('status','!=',0)
            ->orderBy('updated_at','desc')
            ->paginate(15);
        return view('client.products.orders')
            ->with(['orders'=>$orders]);
    }

    public function show($order){
        $order = auth('client')->user()
            ->orders()
            ->with('productOrder')
            ->findOrFail($order);
        if ($order->seen_notes){
            $order->update([ 'seen_notes' => 0]);
        }
        return view('client.products.anOrder')
            ->with(['order'=>$order]);

    }
    public function delivered(Request $request){
        $order = auth('client')->user()
            ->orders()
            ->findOrFail($request->id);
        $order->update([
            'status' => 4,
            'delivered_at' => now()
        ]);
        return redirect()->route('order.client',$request->id);
    }

    public function create(){
        $oldCart = Session::has('cart') ? Session::get('cart') : null;
        $cart = new Cart($oldCart);
        $removedItems =  $cart->updateItems($oldCart->cookie);
        session()->put('cart',$cart);
        if($removedItems){
            return redirect()->route('cart.client')->with(['removedItems' => $removedItems]);
        } elseif(isset($cart->items)){
            return view('client.products.checkout',[
                'cart' => $cart,
            ]);
        }
        return view('client.pages.sorry')
            ->with(['message'=> 'Your Cart is Empty']);
    }

    public function store(CheckoutClient $request){
        $input = $request->all();
        $cartOld = Session::get('cart');
        session()->put('cart',null);
        session()->put('newCart',$cartOld);
        $cart = $cartOld;

        $client = auth('client')->user();

        $input['client_id'] = $client->id;
        $input['client_username'] = $client->username;
        $input['total'] = $cart->totalPrice;
        $input['currency'] = $cart->cookie;
        $input['ip'] = $request->ip();
        if($cart->coupon){
            $input['total_after_discount'] = $cart->couponTotalPrice;
            $input['coupon'] = $cart->coupon->code;
            if ( $cart->coupon->validateCart() === true){
                $cart->coupon->appliedCoupon()->create([
                    'client_id' => $client->id,
                    'coupon_id' => $cart->coupon->id,
                ]);
                $cart->coupon->update([
                    'uses' => $cart->coupon->uses + 1,
                ]);
            }else{
                return view('client.pages.sorry')
                    ->with(['message'=> $cart->coupon->validateCart()]);
            }
        }

        switch ($input['pay']) {
            case "cash":
                $order_id_or_url = $this->cash($cart,$client,$input);
                break;
            case "paypal":
                $order_id_Paypal = $this->paypal($cart,$input);
                if (!is_numeric($order_id_Paypal)){
                    return redirect($order_id_Paypal);
                }else{
                    return view('client.pages.sorry')
                        ->with([
                            'message'=> 'sorry try again or message us, we will be happy to help you',
                            'id' => $order_id_Paypal
                        ]);
                }
                break;
            case "cards":
                $order_id_or_url = $this->cards($cart,$client,$input);
                if (!$order_id_or_url['error'] && !is_numeric($order_id_or_url['message'] )){
                    return redirect($order_id_or_url['message']);
                }elseif ($order_id_or_url['error']){
                    return view('client.pages.sorry')
                        ->with([
                            'message'=> 'sorry try again or message us, we will be happy to help you',
                            'id' => $order_id_or_url['message']
                        ]);
                }
                $order_id_or_url = $order_id_or_url['message'];
                break;
            default:
                return view('client.pages.sorry')
                    ->with([
                        'message'=> 'sorry try again or message us, we will be happy to help you'
                    ]);
        }

        return view('client.pages.thank_you')
            ->with(['id'=> $order_id_or_url]);
    }

    public function confirm(Request $request){

        $order = session()->get('order');
        \Stripe\Stripe::setApiKey(env('STRIPE_SECRET_KEY'));
        $intent = \Stripe\PaymentIntent::retrieve($request->payment_intent);
        session()->put('order',null);
        $client = auth('client')->user();
        $cart = session()->get('newCart');

        try {
            $intent->confirm([
                'return_url' => route('confirm.checkout.client'),
            ]);
            $order->update([
                'order_provider_id'=>$intent->id,
                'status' => $intent->status == 'succeeded' ? 1 : 0,
                'status_provider'=> $intent->status,
            ]);
            $this->create_product_orders($cart,$client,$order);
            return view('client.pages.thank_you')
                ->with(['id'=> $order->id]);

        } catch (\Exception $ex) {
            $order->update([
                'order_provider_id'=>$intent->id,
                'status' => 0,
                'status_provider'=> $ex->getMessage(),
            ]);
            return view('client.pages.sorry')
                ->with([
                    'message'=> 'there is something wrong please contact with your bank',
                    'id'=> $order->id
                ]);
        }

    }

    public function paypalCheckout(Request $request){
        $apiContext = new \PayPal\Rest\ApiContext(
            new \PayPal\Auth\OAuthTokenCredential(
                config('paypal.accounts.client_id'),
                config('paypal.accounts.secret_client')
            )
        );
        $order = session()->get('order');

        $paymentId = $request->paymentId;
        $payment = Payment::get($paymentId, $apiContext);

        $execution = new PaymentExecution();
        $execution->setPayerId($request->PayerID);

        try {
            $result = $payment->execute($execution, $apiContext);

            $client = auth('client')->user();
            $cart = session()->get('newCart');
            $order->update([
                'status' => $result->state == 'approved' ? 1 : 0,
                'status_provider'=> $result->state,
            ]);
            $this->create_product_orders($cart,$client,$order);
            session()->put('order',null);
        } catch (\Exception $ex) {
            $order->update([
                'order_provider_id'=>$ex->getCode().'(Error)',
                'status' => 0,
                'status_provider'=> $ex->getMessage(),
            ]);
            return view('client.pages.sorry')
                ->with([
                    'message'=> 'sorry try again or message us, we will be happy to help you',
                    'id' => $order->id
                ]);
        }

        return view('client.pages.thank_you')
            ->with(['id'=> $order->id]);
    }

    public function paypalCancel(Request $request){

        $order = session()->get('order');
        $order->update([
            'status' => 0,
            'status_provider'=> $request->token.'(canceled by client)',
        ]);
        session()->put('order',null);
        return view('client.pages.sorry')
            ->with(['message'=> "I hope there are not something wrong,\n If you have problem or feedback please contact us we love listen",
                'id'=>$order->id,
            ]);
    }

    protected function cash($cart,$client,$input){
        $input['pay_by'] = 'Cash';
        $input['status'] = 1;
        $order = Order::create($input);
        $this->create_product_orders($cart,$client,$order);
        return $order->id;
    }

    protected function paypal($cart,$input){
        $input['pay_by'] = 'PayPal';
        $order = Order::create($input);
        $currency = $cart->cookie;
        $apiContext = new \PayPal\Rest\ApiContext(
            new \PayPal\Auth\OAuthTokenCredential(
                config('paypal.accounts.client_id'),
                config('paypal.accounts.secret_client')
            )
        );
        $apiContext->setConfig(config('paypal.setting'));
        $payer = new Payer();
        $payer->setPaymentMethod("paypal");

        $item_list_PayPal = [];
        foreach ($cart->items as $item){
            $price = $item['couponPrice'] ? $item['couponPrice'] : $item['price'];
            $itemPaypal = new Item();
            $itemPaypal->setName($item['name'])
                ->setCurrency(strtoupper($currency))
                ->setQuantity($item['qty'])
                ->setSku($item['item']->id)
                ->setPrice($price);
            $item_list_PayPal[] = $itemPaypal;
        }

        $itemList = new ItemList();
        $itemList->setItems($item_list_PayPal);

        $totalPrice = $cart->couponTotalPrice ? $cart->couponTotalPrice : $cart->totalPrice;

        $amount = new Amount();
        $amount->setCurrency(strtoupper($currency))
            ->setTotal($totalPrice);

        $transaction = new Transaction();
        $transaction->setAmount($amount)
            ->setItemList($itemList)
            ->setDescription("Order")
            ->setInvoiceNumber(uniqid());

        $redirectUrls = new RedirectUrls();
        $redirectUrls->setReturnUrl(route('checkout.paypal.client'))
            ->setCancelUrl(route('cancel.paypal.client'));

        $payment = new Payment();
        $payment->setIntent("sale")
            ->setPayer($payer)
            ->setRedirectUrls($redirectUrls)
            ->setTransactions(array($transaction));

        try {
            $payment->create($apiContext);
            $order->update([
                'order_provider_id'=>$payment->id,
                'status' => 0,
                'status_provider'=> $payment->status,
            ]);
            session()->put('order',$order);
        } catch (\Exception $ex) {
            $order->update([
                'order_provider_id'=>$ex->getCode().'(Error)',
                'status' => 0,
                'status_provider'=> $ex->getMessage(),
            ]);
            return $order->id;
        }

        return $payment->getApprovalLink();
    }

    protected function cards($cart,$client,$input){
        $input['pay_by'] = 'Credit Cards';
        $order = Order::create($input);
        $totalPrice = $cart->couponTotalPrice ? $cart->couponTotalPrice : $cart->totalPrice;
        \Stripe\Stripe::setApiKey(env('STRIPE_SECRET_KEY'));
        try {
            $intent = \Stripe\PaymentIntent::create([
                'payment_method' => $input['stripeToken'],
                'amount' => $totalPrice * 100,
                'currency' => $cart->cookie,
                'confirmation_method' => 'manual',
                'confirm' => true,
                'description' => 'Order',
                'return_url' => route('confirm.checkout.client'),
                'metadata' => [
                    'order_id' => $order->id,
                    'username' => $client->username,
                ],
            ]);
            if($intent->next_action){
                $order->update([
                    'order_provider_id'=>$intent->id,
                    'status_provider'=> $intent->status,
                ]);
                session()->put('order',$order);
                return ['error'=>false,'message'=> $intent->next_action->redirect_to_url->url];
            }
            $order->update([
                'order_provider_id'=>$intent->id,
                'status' => 1,
                'status_provider'=> $intent->status,
            ]);
            $this->create_product_orders($cart,$client,$order);
            return ['error'=>false,'message'=>$order->id];
        } catch (\Exception $ex) {
            $order->update([
                'order_provider_id'=>$ex->getCode().'(Error)',
                'status' => 0,
                'status_provider'=> $ex->getMessage(),
            ]);
            return ['error'=>true,'message'=>$order->id];
        }
    }

    protected function create_product_orders($cart,$client,$order){
        $products = [];
        $balanceSellers = [];
        $balanceWebsiteDB = BalanceWebsite::latest()
            ->first()
            ->setHidden(['deleted_at','created_at','updated_at'])
            ->toArray();
        $website_balance = [
            "available_balance_{$cart->cookie}"
            => $cart->totalPrice + $balanceWebsiteDB["available_balance_{$cart->cookie}"],
            "balance_{$cart->cookie}"
            => $cart->totalPrice + $balanceWebsiteDB["balance_{$cart->cookie}"],
            "fee_{$cart->cookie}"
            => $balanceWebsiteDB["fee_{$cart->cookie}"] ,
        ];
        foreach ($cart->items as $item){
            if ($item['item']->isOffer()){
                $fee = $item['item']["offer_fee_{$cart->cookie}"] * $item['qty'];
            }else{
                $fee = $item['item']["fee_{$cart->cookie}"] * $item['qty'];
            }
            $itemArray = [
                'client_id' => $client->id,
                'seller_id' => $item['item']->seller_id,
                'product_id' => $item['item']->id,
                'for' => $item['for'],
                'qty' => $item['qty'],
                'price' => $item['totalPriceQty'],
                'fee' => $fee,
                'currency' => $cart->cookie,
            ];
            if($cart->coupon && $item['couponTotalPrice']){
                $itemArray['coupon'] = 1;
                $itemArray['price_after_discount'] = $item['couponTotalPrice'];
            }
            $product = $item['item'];
            if ($item['options']){
                $productOrder =  $order->productOrder()->save(new \App\ProductOrder($itemArray));
                $options = [];
                $decrease = true;
                foreach ($item['options'] as $key => $option ){
                    $options[] = new \App\OptionsProductOrder([
                        'product_id' => $item['item']->id,
                        'option' => $key,
                        'option_id' => $option['id_option'],
                        'sub_option' => $option['name'],
                        'sub_option_id' => $option['id'],
                    ]);
                    $option = ProductSubDetails::find($option['id']);
                    if ( $option->quantity != 0 ){
                        $option->update(['quantity' => $option->quantity - $item['qty'] ]);
                    }elseif ($option->quantity === 0 && $decrease === true){
                        $this->decreaseQty($product,$item['qty']);
                        $decrease = false;
                    }
                }
                $productOrder->optionsProductOrder()->saveMany($options);
            }else{
                $this->decreaseQty($product,$item['qty']);
                $products[] = new \App\ProductOrder($itemArray);
            }
            $website_balance["fee_{$cart->cookie}"] += $fee;

            if(array_key_exists($item['item']->seller_id,$balanceSellers)){
                $balanceSellers[$item['item']->seller_id] =
                    ($item['totalPriceQty'] - $fee) +
                    $balanceSellers[$item['item']->seller_id];
            }else{
                $balanceSellers[$item['item']->seller_id] = $item['totalPriceQty'] - $fee;
            }
        }
        $order->productOrder()->saveMany($products);
        $order->balanceWebsite()
            ->save(new \App\BalanceWebsite(array_merge($balanceWebsiteDB,$website_balance)));
        foreach ($balanceSellers as $id => $balance){
            Seller::whereId($id)->update([
                "balance_{$cart->cookie}" => $balance,
            ]);
        }
        session()->put('newCart',null);
        $sellerIds = \Arr::pluck($cart->items, 'item.seller_id');
        NewOrder::dispatch($order,$sellerIds,$client)
            ->onQueue('medium');
    }

    protected function decreaseQty($product,$qty){
        if ($product->isOffer()){
            $product->update(['quantity_offer' => $product->quantity_offer -= $qty]);
            if ($product->quantity_offer == 0){
                $product->update(['offer_end_at' => now()]);
            }
        }else{
            $product->update(['quantity' => $product->quantity -= $qty]);
        }
    }

}
