<?php

namespace App\Jobs;

use App\Mail\SendMailOrderToSeller;
use App\Seller;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class NewOrder implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    public $order;
    public $sellerIds;
    public $client;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($order,$sellerIds,$client)
    {
        //
        $this->order = $order;
        $this->sellerIds = $sellerIds;
        $this->client = $client;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $emails = Seller::findMany($this->sellerIds)->pluck('email');
        Mail::to($emails)->send(new SendMailOrderToSeller($this->order->id));
        $body = "Thank you For Using GPU-Shop.\nYour order ID is {$this->order->id}.\nPlease Message Us if you have problem.";
        $this->client->twilioSMS($body, $this->client->phone_number);
    }

    public function failed(\Exception $exception)
    {
        // Send user notification of failure, etc...
    }
}
