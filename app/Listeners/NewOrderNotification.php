<?php

namespace App\Listeners;

use App\Client;
use App\Events\NewOrder;
use App\Notifications\ClientNotificationNewOrder;
use App\Notifications\SellerNotificationNewOrder;
use App\Seller;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Notification;
use Str;

class NewOrderNotification implements ShouldQueue
{
    /**
     * The name of the queue the job should be sent to.
     *
     * @var string|null
     */
    public $queue = 'medium';

    /**
     * Handle the event.
     *
     * @param  NewOrder  $event
     * @return void
     */
    public function handle(NewOrder $event)
    {
        $sellers = Seller::findMany($event->sellerIds);
        Notification::send($sellers, new SellerNotificationNewOrder($event->order));

        $event->client->notify(new ClientNotificationNewOrder($event->order));
    }

    public function failed(NewOrder $event, $exception)
    {

    }
}
