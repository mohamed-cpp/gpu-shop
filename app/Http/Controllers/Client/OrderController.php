<?php

namespace App\Http\Controllers\Client;

use App\BalanceWebsite;
use App\Cart;
use App\Client;
use App\Http\Controllers\Controller;
use App\Http\Requests\CheckoutClient;
use App\Jobs\NewOrder;
use App\Order;
use App\ProductSubDetails;
use App\Seller;
use Illuminate\Contracts\Auth\Access\Gate;
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

    public function show(Order $order){
        $this->authorizeForUser(auth('client')->user(), 'view', $order);

        if ($order->seen_notes){
            $order->update([ 'seen_notes' => 0]);
        }
        return view('client.products.anOrder')
            ->with(['order'=>$order]);

    }
    public function delivered(Request $request){
        $order = Order::find($request->id);
        $this->authorizeForUser(auth('client')->user(), 'view', $order);
        $order->update([
            'status' => 4,
            'delivered_at' => now()
        ]);
        return redirect()->route('order.client',$order->id);
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
        $cart = session()->get('cart');
        session()->put('cart',null);
        session()->put('newCart',$cart);
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
                $order_id_or_url = $this->paypal($cart,$input);
                if (!is_numeric($order_id_or_url)){
                    break;
                }
            case "cards":
                $order = $this->cards($cart,$client,$input);
                $order_id_or_url = $order['message'];
                if (!$order['error']){
                    break;
                }
            default:
                return view('client.pages.sorry')
                    ->with([
                        'message'=> 'sorry try again or message us, we will be happy to help you',
                        'id' => $order_id_or_url ? $order_id_or_url : null,
                    ]);
        }

        if (!is_numeric($order_id_or_url)){
            return redirect($order_id_or_url);
        }
        return view('client.pages.thank_you')
            ->with(['id'=> $order_id_or_url]);
    }

    public function confirm(Request $request){

        $order = session()->get('order');
        if($order){
            session()->put('order',null);
            $client = auth('client')->user();
            $cart = session()->get('newCart');
            $confirmed = $order->confirmStripe($request->all());

            if($confirmed){
                $order->create_product_orders($cart,$client,$order);
                return view('client.pages.thank_you')
                    ->with(['id'=> $order->id]);
            }

            return view('client.pages.sorry')
                ->with([
                    'message'=> 'there is something wrong please contact with your bank',
                    'id'=> $order->id
                ]);
        }
        abort(404);
    }

    public function paypalCheckout(Request $request){
        $order = session()->get('order');
        if ($order){
            try {
                $order->confirmPaypal($request->all());
                $client = auth('client')->user();
                $cart = session()->get('newCart');
                $order->create_product_orders($cart,$client,$order);
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
        abort(404);
    }

    public function paypalCancel(Request $request){

        $order = session()->get('order');
        if($order){
            $order->update([
                'status' => 0,
                'status_provider'=> $request->token.'(canceled by client)',
            ]);
            session()->put('order',null);
            return view('client.pages.sorry')
                ->with(['message'=> `I hope there are not something wrong,
             If you have problem or feedback please contact us we love listen`,
                    'id'=>$order->id,
                ]);
        }
        abort(404);
    }

    protected function cash($cart,$client,$input){
        $input['pay_by'] = 'Cash';
        $order = Order::create($input);
        $order->create_product_orders($cart,$client,$order);
        $order->update([
            'status' => 1,
        ]);
        return $order->id;
    }

    protected function paypal($cart,$input){
        $input['pay_by'] = 'PayPal';
        $order = Order::create($input);
        $currency = $cart->cookie;
        $payment = $order->paypal($cart,$currency);
        return $payment;
    }

    protected function cards($cart,$client,$input){
        $input['pay_by'] = 'Credit Card';
        $order = Order::create($input);

        try {
            $next_action = $order->stripe($cart,$input,$client);
            if($next_action){
                return $next_action;
            }
            $order->create_product_orders($cart,$client,$order);
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

}
