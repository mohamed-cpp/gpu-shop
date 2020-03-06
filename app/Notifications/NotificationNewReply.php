<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class NotificationNewReply extends Notification
{
    use Queueable;
    private $product;
    private $user;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($product,$user)
    {
        //
        $this->product = $product;
        $this->user = $user;
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
        return [
            'message' => $this->user->commentNotification($this->product->name),
            'path'    => route('show.product.client',$this->product->slug),
        ];
    }
}
