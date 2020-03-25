<?php


namespace Tests\Feature\Client;

use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;

class ClientOrderTest extends TestCase
{

    use DatabaseTransactions;


    public function setUp()  :void {
        parent::setUp();
        $this->client = create('App\Client');
        $this->product = create('App\Product');
    }

    public function test_checkout_with_empty_cart(){
        $this->actingAs($this->client,'client');
        $this->get(route('checkout.client'))
            ->assertSee('Your cart is empty')
            ->assertViewIs('client.pages.sorry');
    }

    public function test_checkout_with_cart(){
        $this->actingAs($this->client,'client');
        $this->post('/cart/add/'.$this->product->slug );
        $this->get(route('checkout.client'))
            ->assertViewIs('client.products.checkout');
    }

    public function test_validation_checkout_cash(){

        $this->actingAs($this->client,'client');
        $this->post('/cart/add/'.$this->product->slug );
        $this->post('/checkout',[
            'first_name' => 'first',
            'last_name' => 'last',
            'address' => 'place in egypt',
            'city' => 'cairo',
            'country' => 'egypt',
            'phone' => '+2010007549720',
            'pay' => 'cashs',
        ])
            ->assertSee('Sorry try again or message us, we will be happy to help you')
            ->assertViewIs('client.pages.sorry');
    }

}
