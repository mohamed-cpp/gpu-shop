<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;

class LoginSellerTest extends TestCase
{

    use DatabaseTransactions;


    public function setUp()  :void {
        parent::setUp();
        $this->seller = create('App\Seller');
    }

    public function test_can_user_see_home_page(){
        $response = $this->get(route('home.seller'));
        $response->assertStatus(302);
    }
    public function test_can_user_see_login_page(){
        $response = $this->get(route('seller.loginForm'));
        $response->assertStatus(200);
        $response->assertSee('login');
    }
    public function test_can_user_login(){
        $response = $this->post(route('seller.login'), [
            'email' => $this->seller->email,
            'password' => 'password'
        ]);
        $response->assertStatus(302);
        $response->assertRedirect('/');
    }
    public function test_validate_user_login(){
        $response = $this->post(route('seller.login'), [
            'email' => $this->seller->email,
            'password' => 'p@ssword'
        ]);
        $response->assertSessionHasErrors();
        $this->assertGuest();
        $response = $this->post(route('seller.login'), [
            'email' => 'invalid@exmple.com',
            'password' => 'p@ssword'
        ]);
        $response->assertSessionHasErrors();
        $this->assertGuest();
    }
    public function test_user_not_approved_cannot_login(){
        $seller = create('App\Seller',['approved'=>0]);
        $response = $this->post(route('seller.login'), [
            'email' => $seller->email,
            'password' => 'password'
        ]);
        $response->assertSessionHasErrors();
        $this->assertGuest();
    }
    public function test_can_user_logout(){
        $response = $this->actingAs($this->seller,'seller')->post(route('seller.logout'));
        $response->assertStatus(302);
        $this->assertGuest();
    }


}
