<?php

namespace App\Notifications;

use App\Seller;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class SendSellerVerificationEmailNotification extends Notification
{
    use Queueable;

    /** @var $user Seller */
    public $seller;

    /**
     * Create a new notification instance.
     * @param $seller
     */
    public function __construct($seller)
    {
        $this->seller = $seller;
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
        $token = md5($this->seller->created_at . $this->seller->email . $this->seller->username);
        return (new MailMessage)
            ->line("Welcome Mr/Ms {$this->seller->name},")
            ->line('Thanks for signing up GPU-Shop, please click the link to verify your account!')
            ->action('Verify Email', route("client.email.verifyForm", [
                "email" => $this->seller->email,
                "token" => $token
            ]));

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
