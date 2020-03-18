<?php

namespace App\Jobs;

use App\Client;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class MessageClient implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    public $body;
    public $user;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($body,$user)
    {
        $this->body = $body;
        $this->user = $user;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $this->user->twilioSMS($this->body,$this->user->phone_number);
        $this->user->twilioWhatsApp($this->body,$this->user->phone_number);
    }
    public function failed(\Exception $exception)
    {
        //dd($exception);
    }
}
