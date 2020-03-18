<?php

namespace App\Listeners;

use App\Events\NewOrder;
use App\Mail\SendMailOrderToSeller;
use App\Notifications\SMSClient;
use App\Notifications\SMSClientNewOrder;
use App\Seller;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Mail;
use Illuminate\Queue\InteractsWithQueue;

class NewOrderMessage implements ShouldQueue
{

    /**
     * The name of the queue the job should be sent to.
     *
     * @var string|null
     */
    public $queue = 'low';

    /**
     * Handle the event.
     *
     * @param  NewOrder  $event
     * @return void
     */
    public function handle(NewOrder $event)
    {

        $emails = Seller::findMany($event->sellerIds)->pluck('email');
        Mail::to($emails)->send(new SendMailOrderToSeller($event->order->id));

        $body = "Thank you For Using GPU-Shop.\nYour order ID is {$event->order->id}.\nPlease Message Us if you have problem.";
        $event->client->notify(new SMSClient($body,$event->client->phone_number));

    }

    public function failed(NewOrder $event, $exception)
    {

    }
}


