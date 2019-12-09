<?php

namespace Tests\Feature;

use App\Client;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;

class  LoginClientTest extends TestCase
{

    use DatabaseTransactions;

    public function setUp()  :void {
        parent::setUp();
        $this->client = create('App\Client');
    }

    public function test_can_user_see_home_page(){
        $response = $this->get(route('homepage'));
        $response->assertStatus(200);
    }
    public function test_can_user_see_login_page(){
        $response = $this->get(route('client.loginForm'));
        $response->assertStatus(200);
        $response->assertSee('login');
    }
    public function test_can_user_login(){
        $response = $this->post(route('client.login'), [
            'email' => $this->client->email,
            'password' => 'password'
        ]);
        $response->assertStatus(302);
        $response->assertRedirect('/home');
    }
    public function test_can_user_login_via_phone(){
        $response = $this->post(route('client.login'), [
            'email' => $this->client->phone_number,
            'password' => 'password'
        ]);
        $response->assertStatus(302);
        $response->assertRedirect('/home');
    }
    public function test_validate_user_login_via_phone(){
        $response = $this->post(route('client.login'), [
            'email' => $this->client->phone_number.'0',
            'password' => 'password'
        ]);
        $response->assertSessionHasErrors();
        $this->assertGuest();
    }
    public function test_validate_user_login(){
        $response = $this->post(route('client.login'), [
            'email' => $this->client->email,
            'password' => 'p@ssword'
        ]);
        $response->assertSessionHasErrors();
        $this->assertGuest();
        $response = $this->post(route('client.login'), [
            'email' => 'invalid@exmple.com',
            'password' => 'p@ssword'
        ]);
        $response->assertSessionHasErrors();
        $this->assertGuest();
    }
    public function test_can_user_logout(){

        $response = $this->actingAs($this->client,'client')->post('/logout');
        $response->assertStatus(302);
        $this->assertGuest();

    }

}
