<?php

namespace Tests\Browser\Client;

use App\Client;
use Facebook\WebDriver\WebDriverBy;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Notifications\DatabaseNotification;
use Laravel\Dusk\Browser;
use Tests\Browser\Pages\HomePage;
use Tests\DuskTestCase;

class ClientHomePageNavBarTest extends DuskTestCase
{

    use DatabaseTransactions;

    /**
     * A Dusk test example.
     *
     * @return void
     * @throws \Throwable
     */
    public function testCart()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit(New HomePage())
                    ->click('.header-cart .sidebar-trigger')
                    ->whenAvailable('.onepage-sidebar-area', function ($modal) {
                        $modal->assertSee('You need to login to view your cart');
                    });
        });
    }

    /**
     * A Dusk test example.
     *
     * @return void
     * @throws \Throwable
     */
    public function testCartWithAuth()
    {
        $client = Client::find(1) ?: create('App\Client');
        $this->browse(function (Browser $browser) use ($client) {
            $browser->loginAs($client,'client')
                    ->visit(New HomePage())
                    ->click('.header-cart .sidebar-trigger')
                    ->whenAvailable('.onepage-sidebar-area', function ($modal) {
                        $modal->assertSee('Your cart is empty');
                    });
        });
    }

    /**
     * A Dusk test example.
     *
     * @return void
     * @throws \Throwable
     */
    public function testNotification()
    {
        $client = Client::find(1) ?: create('App\Client');
        $notification = create(DatabaseNotification::class, ['notifiable_id'=>$client->id],15);
        $this->browse(function (Browser $browser) use  ($client,$notification) {
            $browser->loginAs($client,'client')
                ->visit(New HomePage())
                ->click('.top-head-dropdown a')
                ->click('.top-head-dropdown a')
                ->whenAvailable('.dropdown-menu-right', function ($modal) {
                    $modal->script('document.getElementById("dropdown-menu").scroll(0,2000);');
                });
            $before = $browser->driver->findElements(WebDriverBy::cssSelector('#dropdown-menu li'));
            $browser->pause(1000);
            $after = $browser->driver->findElements(WebDriverBy::cssSelector('#dropdown-menu li'));
            $this->assertNotEquals(count($before),count($after));
            //check make as read
            $browser->assertMissing('li .loader-topbar')
                ->click('.makeAsRead')
                ->pause(1000);
            $this->assertNotEquals($client->notifications()->find($notification[0]->id),null);
        });
    }
}
