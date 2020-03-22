<?php

namespace Tests\Browser;

use App\Client;
use App\Product;
use Facebook\WebDriver\WebDriverBy;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Notifications\DatabaseNotification;
use Laravel\Dusk\Browser;
use Tests\Browser\Pages\HomePage;
use Tests\DuskTestCase;

class AddCartAndCheckCartTest extends DuskTestCase
{

    use DatabaseTransactions;

    /**
     * A Dusk test example.
     *
     * @return void
     * @throws \Throwable
     */
    public function testCartOnProduct()
    {
        $client = Client::find(1) ?: create('App\Client');
        $product1 = Product::find(1) ?: create('App\Product');
        $product2 = Product::find(2) ?: create('App\Product');

        $this->browse(function ($first, $second) use ($client,$product1,$product2) {


            $first->loginAs($client,'client')
                ->visit(route('show.product.client',$product1->slug))
                ->click('@task-submit')
                ->press('@task-submit')
                ->screenshot('asd1')
            ;


//            $second->loginAs($client,'client')
//                ->visit(route('show.product.client',$product2->slug))
//                ->pause(2000)
//                ->script('document.querySelector(".quickview-btn-cart > a").click();');
//            $second->pause(1000)
//                ->screenshot('asd2');

        });
    }
}
