<?php

namespace App\Jobs;

use App\Product;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProductRating implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    private $product;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($product)
    {
        $this->product = $product;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $rating = Product::whereId($this->product)->with('rating')->first();
        $sum = $rating->rating->sum('rating');
        $count = count($rating->rating);
        if($sum != 0){
            $round = round($sum / $count);
            $rating->update([
                'rating_of_product' => $round,
                'count_rating' => $count,
            ]);
        }

    }
}
