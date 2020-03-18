<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class SellerNotificationCommentProduct extends Notification
{
    use Queueable;
    private $product;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($product)
    {
        //
        $this->product = $product;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database'];
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        $notifiable->notifications()
            ->where('type','App\Notifications\SellerNotificationCommentProduct')
            ->where('data','like', "%{$this->product->id}%")
            ->forceDelete();
        return [
            'product' => $this->product->id,
            'message' => "Someone Added Vomment or Reply on ".$this->product->name,
            'path'    => route('show.product.client',$this->product->name),
        ];
    }
}
