<?php


namespace App\Payments;


use PayPal\Api\Amount;
use PayPal\Api\Item;
use PayPal\Api\ItemList;
use PayPal\Api\Payer;
use PayPal\Api\Payment;
use PayPal\Api\PaymentExecution;
use PayPal\Api\RedirectUrls;
use PayPal\Api\Transaction;

class PayPalPayment implements PaymentsInterface
{
    
    public function checkout($order, $cart, $currency)
    {
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
            return $payment->getApprovalLink();
        } catch (\Exception $ex) {
            $order->update([
                'order_provider_id'=>$ex->getCode().'(Error)',
                'status' => 0,
                'status_provider'=> $ex->getMessage(),
            ]);
            return $order->id;
        }
    }

    public function confirm($order, $request)
    {
        $apiContext = new \PayPal\Rest\ApiContext(
            new \PayPal\Auth\OAuthTokenCredential(
                config('paypal.accounts.client_id'),
                config('paypal.accounts.secret_client')
            )
        );

        $paymentId = $request['paymentId'];
        $payment = Payment::get($paymentId, $apiContext);

        $execution = new PaymentExecution();
        $execution->setPayerId($request['PayerID']);

        $result =$payment->execute($execution, $apiContext);
        $order->update([
            'status' => $result->state == 'approved' ? 1 : 0,
            'status_provider'=> $result->state,
        ]);

    }
}