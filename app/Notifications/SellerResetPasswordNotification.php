<?php

namespace App\Notifications;

use App\Seller;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class SellerResetPasswordNotification extends Notification
{
    use Queueable;

    /** @var $client Seller */
    public $seller;
    /** @var $token string */
    public $token;

    /**
     * Create a new notification instance.
     * @param Seller $client
     * @param $token
     */
    public function __construct(Seller $client, $token)
    {
        $this->seller = $client;
        $this->token = $token;
    }

    /**
     * Get the notification's delivery channels.
     * @param mixed $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     * @param mixed $notifiable
     * @return MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->line(__('Please reset your password from the link bellow.'))
            ->action(__('Reset Password'), route('seller.password.reset', [
                'token' => $this->token,
                'email' => $this->seller->email
            ]))
            ->line(__('Thank you for using GPU-Shop!'));
    }

    /**
     * Get the array representation of the notification.
     * @param mixed $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
