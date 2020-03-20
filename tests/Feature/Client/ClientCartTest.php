<?php


namespace Tests\Feature\Client;

use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Support\Facades\Request;
use Tests\TestCase;

class ClientCartTest extends TestCase
{

    use DatabaseTransactions;

    public function setUp()  :void {
        parent::setUp();
        $this->client = create('App\Client');
        $this->product = create('App\Product');
    }


    public function test_show_cart_redirect_client(){
        $this->get(route('cart.client'))
            ->assertStatus(302)
            ->assertRedirect('/login');
        $this->assertGuest();
    }

    public function test_show_empty_cart_client(){
        $this->withoutExceptionHandling();
        $this->actingAs($this->client,'client');
        $this->get(route('cart.client'))
            ->assertStatus(200)
            ->assertSee('Your cart is empty')
            ->assertViewIs('client.products.cart');
    }
    public function test_show_cart_client(){
        $this->actingAs($this->client,'client');
        $this->post('/cart/add/'.$this->product->slug );
        $this->get(route('cart.client'))
            ->assertStatus(200)
            ->assertSee($this->product->name)
            ->assertViewIs('client.products.cart');
    }
    public function test_add_cart_client(){
        $this->actingAs($this->client,'client');
        $this->post('/cart/add/'.$this->product->slug );
        $this->assertEquals(session()->get('cart')->totalPrice, $this->product->price_usd );
    }

    public function test_add_cart_at_product_page_client(){
        $this->actingAs($this->client,'client');
        $this->post('/cart/page/'.$this->product->slug,[
            'options' => [],
            'qty' => 5,
            'string' => ''
        ] );
        $this->assertEquals(session()->get('cart')->totalPrice, $this->product->price_usd * 5 );
    }

    public function test_qty_at_cart_page_client(){
        $this->actingAs($this->client,'client');
        $this->post('/cart/add/'.$this->product->slug );
        $key = array_keys(session()->get('cart')->items)[0];
        $this->post('/cart/qty/'.$key.'/'. 5 );
        $qty = session()->get('cart')->items[$key]['qty'];

        $this->assertEquals($qty,  5 );
    }

    public function test_add_and_remove_coupon_client(){
        $this->actingAs($this->client,'client');
        $coupon = create('App\Coupon');
        $this->post('/cart/add/'.$this->product->slug );
        $this->post('/cart/coupon/'.$coupon->code );
        $this->assertTrue( !! session()->get('cart')->coupon );
        $this->delete('/cart/remove/coupon' );
        $this->assertTrue( ! session()->get('cart')->coupon );
    }

    public function test_remove_product_from_cart_client(){
        $this->actingAs($this->client,'client');
        $productTwo = create('App\Product');
        $this->post('/cart/add/'.$this->product->slug );
        $this->post('/cart/add/'.$productTwo->slug );
        $this->assertEquals(count(session()->get('cart')->items), 2);
        $key = array_keys(session()->get('cart')->items)[0];
        $this->delete('/cart/remove/'.$key );
        $this->assertEquals(count(session()->get('cart')->items), 1);

    }


}
