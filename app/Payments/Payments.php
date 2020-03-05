<?php


namespace App\Payments;


use App\BalanceWebsite;
use App\Events\NewOrder;
use App\ProductSubDetails;
use App\Seller;

class Payments
{

    /**
     * @var PaymentsInterface
     */
    public $payments;

    public function __construct(PaymentsInterface $payments)
    {

        $this->payments = $payments;
    }

    public function checkoutPayment($order,$cart,$currency){
        return $this->payments->checkout($order,$cart,$currency);
    }

    public function confirmPayment($order,$request){
        return $this->payments->confirm($order,$request);
    }

    public function create_product_orders($order,$cart,$client){
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
                $productOrder = $order->productOrder()->save(new \App\ProductOrder($itemArray));
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
            $seller = Seller::whereId($id)->first();
            $seller->update([
                "balance_{$cart->cookie}" => $balance + $seller["balance_{$cart->cookie}"],
            ]);
        }

        session()->put('newCart',null);
        $sellerIds = \Arr::pluck($cart->items, 'item.seller_id');
        event(new NewOrder($order,$sellerIds,$client));

    }

    protected function decreaseQty($product,$qty){
        if ($product->isOffer()){
            if (($product->quantity_offer - $qty) == 0){
                $product->update([
                    'offer_end_at' => now(),
                    'quantity_offer' => $product->quantity_offer - $qty
                ]);
            }else{
                $product->update(['quantity_offer' => $product->quantity_offer - $qty]);
            }
        }else{
            $product->update(['quantity' => $product->quantity - $qty]);
        }
    }

}