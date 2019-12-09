<?php

namespace App\Notifications;

use App\Client;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ClientResetPasswordNotification extends Notification
{
    use Queueable;

    /** @var $client Client */
    public $client;
    /** @var $token string */
    public $token;

    /**
     * Create a new notification instance.
     * @param Client $client
     * @param $token
     */
    public function __construct(Client $client, $token)
    {
        $this->client = $client;
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
            ->action(__('Reset Password'), route('client.password.reset', [
                'token' => $this->token,
                'email' => $this->client->email
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
