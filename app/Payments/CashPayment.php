<?php


namespace App\Payments;


class CashPayment implements PaymentsInterface
{

    public function checkout($order, $cart, $currency)
    {
        return null;
    }

    public function confirm($cart, $currency)
    {
        return null;
    }
}