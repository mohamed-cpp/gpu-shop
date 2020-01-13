<?php


namespace Tests\Feature;

use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;

class ClientWishlistTest extends TestCase
{

    use DatabaseTransactions;

    public function setUp()  :void {
        parent::setUp();
        $this->client = create('App\Client');
        $this->product = create('App\Product');
    }

    public function test_client_can_see_wishlist(){
        $this->actingAs($this->client,'client');
        $this->get(route('show.wishlist.client'))
            ->assertStatus(200)
            ->assertViewIs('client.products.wishlist');
    }

    public function test_client_or_guest_can_see_another_wishlist(){
//        $this->withoutExceptionHandling();
        $this->get("/wishlists/{$this->client->username}")
            ->assertStatus(200)
            ->assertViewIs('client.products.wishlist_guest');

    }

    public function test_client_can_add_product_to_wishlist(){
        $this->actingAs($this->client,'client');
        $this->get('/wishlist/'.$this->product->id)
            ->assertStatus(204);
        $this->assertDatabaseHas('wishlists',['client_id' => $this->client->id]);
    }

    public function test_client_can_change_vcisibility_wishlist(){
        $this->actingAs($this->client,'client');
        $wishlist = create('App\Wishlist',[
            'product_id'=>$this->product->id,
            'client_id'=>$this->client->id,
            'sort'=>1,
            ]);
        $this->postJson('/vcisibility/'.$wishlist->id)
            ->assertStatus(204);
        $this->assertEquals($wishlist->fresh()->public,true);
    }

    public function test_client_can_change_sort_wishlist(){
        $this->actingAs($this->client,'client');
        $product = create('App\Product');

        $wishlist = create('App\Wishlist',[
            'product_id'=>$this->product->id,
            'client_id'=>$this->client->id,
            'sort'=>1,
            ]);
        $wishlist2 = create('App\Wishlist',[
            'product_id'=>$product->id,
            'client_id'=>$this->client->id,
            'sort'=>2,
            ]);
        $this->postJson("/wishlist/move/{$wishlist->id}/{$wishlist2->id}/true")
            ->assertStatus(204);
        $this->assertEquals($wishlist->fresh()->sort,2);
    }
    public function test_client_can_change_push_up_wishlist(){
        $this->actingAs($this->client,'client');
        $product = create('App\Product');

        $wishlist = create('App\Wishlist',[
            'product_id'=>$this->product->id,
            'client_id'=>$this->client->id,
            'sort'=>1,
        ]);
        create('App\Wishlist',[
            'product_id'=>$product->id,
            'client_id'=>$this->client->id,
            'sort'=>2,
        ]);
        $this->postJson("/wishlist/move/{$wishlist->id}/true")
            ->assertStatus(204);
        $this->assertEquals($wishlist->fresh()->sort,3);
    }

    public function test_client_can_delete_wishlist(){
        $this->actingAs($this->client,'client');
        $wishlist = create('App\Wishlist',[
            'product_id'=>$this->product->id,
            'client_id'=>$this->client->id,
            'sort'=>1,
        ]);
        $this->delete("/wishlist/page/{$wishlist->id}")
            ->assertStatus(204);
        $this->assertDatabaseMissing('wishlists',['id' => $wishlist->id]);

    }

}
