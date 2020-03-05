<?php


namespace App\Payments;


interface PaymentsInterface
{
    public function checkout($order,$cart,$currency);

    public function confirm($cart,$currency);
}