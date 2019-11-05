<?php

namespace App\Notifications;

use App\Client;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class SendClientVerificationEmailNotification extends Notification
{
    use Queueable;

    /** @var $user Client */
    public $client;

    /**
     * Create a new notification instance.
     * @return void
     */
    public function __construct($client)
    {
        $this->client = $client;
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
        $token = md5($this->client->created_at . $this->client->email . $this->client->username);
        return (new MailMessage)
            ->line("Welcome Mr/Ms {$this->client->name},")
            ->line('Thanks for signing up GPU-Shop, please click the link to verify your account!')
            ->action('Verify Email', route("client.email.verifyForm", [
                "email" => $this->client->email,
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
