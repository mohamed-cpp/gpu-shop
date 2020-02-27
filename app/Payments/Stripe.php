<?php


namespace App\Payments;


trait Stripe
{
    public function stripe($cart,$input,$client){

        $totalPrice = $cart->couponTotalPrice ? $cart->couponTotalPrice : $cart->totalPrice;
        \Stripe\Stripe::setApiKey(env('STRIPE_SECRET_KEY'));

        $intent = \Stripe\PaymentIntent::create([
            'payment_method' => $input['stripeToken'],
            'amount' => $totalPrice * 100,
            'currency' => $cart->cookie,
            'confirmation_method' => 'manual',
            'confirm' => true,
            'description' => 'Order',
            'return_url' => route('confirm.checkout.client'),
            'metadata' => [
                'order_id' => $this->id,
                'username' => $client->username,
            ],
        ]);

        if($intent->next_action){
            $this->update([
                'order_provider_id'=>$intent->id,
                'status_provider'=> $intent->status,
            ]);
            session()->put('order',$this);
            return ['error'=>false,'message'=> $intent->next_action->redirect_to_url->url];
        }
        $this->update([
            'order_provider_id'=>$intent->id,
            'status' => 1,
            'status_provider'=> $intent->status,
        ]);


    }

    public function confirmStripe($request){
        \Stripe\Stripe::setApiKey(env('STRIPE_SECRET_KEY'));
        $intent = \Stripe\PaymentIntent::retrieve($request['payment_intent']);

        try{
            $intent->confirm([
                'return_url' => route('confirm.checkout.client'),
            ]);
            $this->update([
                'order_provider_id'=>$intent->id,
                'status' => $intent->status == 'succeeded' ? 1 : 0,
                'status_provider'=> $intent->status,
            ]);
            return true;
        }catch (\Exception $ex){
            $this->update([
                'order_provider_id'=>$intent->id,
                'status' => 0,
                'status_provider'=> $ex->getMessage(),
            ]);
            return false;
        }


    }
}