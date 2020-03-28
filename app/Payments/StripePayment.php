<?php


namespace App\Payments;


class StripePayment implements PaymentsInterface
{
    private $client;

    /**
     * StripePayment constructor.
     * @param $client
     */
    public function __construct($client)
    {
        $this->client = $client;
    }

    public function checkout($order,$cart,$input)
    {
        $client = $this->client;
        $totalPrice = $cart->couponTotalPrice ? $cart->couponTotalPrice : $cart->totalPrice;
        \Stripe\Stripe::setApiKey(config('stripe.STRIPE_SECRET_KEY'));

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

    }

    public function confirm($order, $request)
    {
        \Stripe\Stripe::setApiKey(config('stripe.STRIPE_SECRET_KEY'));
        $intent = \Stripe\PaymentIntent::retrieve($request['payment_intent']);

        try{
            $intent->confirm([
                'return_url' => route('confirm.checkout.client'),
            ]);
            $order->update([
                'order_provider_id'=>$intent->id,
                'status' => $intent->status == 'succeeded' ? 1 : 0,
                'status_provider'=> $intent->status,
            ]);
            return true;
        }catch (\Exception $ex){
            $order->update([
                'order_provider_id'=>$intent->id,
                'status' => 0,
                'status_provider'=> $ex->getMessage(),
            ]);
            return false;
        }
    }
}