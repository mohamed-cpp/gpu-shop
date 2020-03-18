<?php

namespace App\Notifications;

use App\Channels\TwilioSMS;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class SMSClient extends Notification
{
    use Queueable;
    private $body;
    private $phone;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($body,$phone)
    {
        $this->body = $body;
        $this->phone = $phone;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return [TwilioSMS::class];
    }


    public function toTwilioSMS($notifiable)
    {
        $client = new \Twilio\Rest\Client(config('twilio.accounts.TWILIO_SID'), config('twilio.accounts.TWILIO_AUTH_TOKEN'));
        $phone = $this->phone;
        try {
            $client->messages->create(
                $phone,
                array(
                    'from' => config('twilio.accounts.TWILIO_NUMBER'),
                    'body' => $this->body
                )
            );
        } catch (\Exception $e){

        }
    }

}
