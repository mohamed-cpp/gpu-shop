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
    private $request;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($product,$user,$request)
    {
        //
        $this->product = $product;
        $this->user = $user;
        $this->request = $request;
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
            'message' => $this->user->commentNotification($this->product),
            'path'    => route('show.product.client',[
                'product'   =>$this->product->slug,
                'page'      =>$this->request['currentPage']
            ]).$this->request['idComment'],
        ];
    }
}
