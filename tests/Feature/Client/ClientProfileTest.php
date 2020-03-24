<?php 

namespace Tests\Feature\Client;

use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;

class ClientProfileTest extends TestCase
{

    use DatabaseTransactions;

    public function setUp()  :void {
        parent::setUp();
        $this->client = create('App\Client');
    }

    public function test_show_profile_redirect_client(){
        $this->get(route('client.profile'))
                    ->assertStatus(302)
                    ->assertRedirect('/login');
        $this->assertGuest();

    }

    public function test_show_profile_client(){
        $this->actingAs($this->client,'client');
        $this->get(route('client.profile'))
            ->assertStatus(200)
            ->assertViewIs('client.profile.profile');
    }

    public function test_update_profile_client(){
        $this->actingAs($this->client,'client');
        $input = [
            'username' => 'New Username',
            'name' => 'New name',
            'phone_number' => '0112479050',
            'old_password' => null,
            'email' => null,
            ];
        $this->put(route('update.client.profile'),$input)
            ->assertStatus(302)
            ->assertRedirect(route('client.profile'));
        $this->assertDatabaseHas('clients',['username' => 'New Username']);

    }

    public function test_update_validate_profile_client(){
        $this->actingAs($this->client,'client');
        $input = [
            'username' => 'New Username',
            'name' => 'New name',
            'phone_number' => 'string',
            'old_password' => null,
            'email' => null,
            ];
        $this->put(route('update.client.profile'),$input)
            ->assertSessionHasErrors();
        $this->assertDatabaseMissing('clients',['username' => 'New Username']);

    }

    public function test_show_guest_profile_client(){

        $this->get(route('view.profile',['username'=>$this->client->username]))
            ->assertStatus(200)
            ->assertSee($this->client->name)
            ->assertViewIs('client.profile.profileClient');
    }

    public function test_show_guest_profile_seller(){
        $this->withoutExceptionHandling();
        $seller = create('App\Seller');
        $this->get(route('view.profile',['username'=>$seller->username]))
            ->assertStatus(200)
            ->assertSee('Seller')
            ->assertViewIs('client.profile.profileSeller');
    }

    public function test_show_guest_profile_admin(){
        $admin = create('App\Admin');
        $this->get(route('view.profile',['username'=>$admin->username]))
            ->assertStatus(200)
            ->assertSee('Administrator')
            ->assertViewIs('client.profile.profileAdmin');
    }


}
