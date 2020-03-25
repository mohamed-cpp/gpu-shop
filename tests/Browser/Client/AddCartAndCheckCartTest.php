<?php

namespace Tests\Browser\Client;

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
                ->click('@add-cart-product')
                ->pause(2000)
                ->click('.sidebar-trigger')
                ->pause(400)
                ->whenAvailable('.onepage-sidebar-area', function ($modal) use ($product1) {
                    $modal->assertSeeIn('.cart-title span', $product1->offerPrice(false))
                            ->assertSeeIn('.cart-total h4 span', $product1->offerPrice(false));
                });

            $second->loginAs($client,'client')
                ->visit(route('show.product.client',$product2->slug))
                ->click('@add-cart-product')
                ->pause(2000)
                ->click('.sidebar-trigger')
                ->pause(400)
                ->whenAvailable('.onepage-sidebar-area', function ($modal) use ($product2) {
                    $modal->assertSeeIn('.cart-title span', $product2->offerPrice(false))
                        ->assertSeeIn('.cart-total h4 span', $product2->offerPrice(false));
                });

        });
    }
}
