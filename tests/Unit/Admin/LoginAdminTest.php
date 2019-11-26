<?php


namespace Tests\Feature;

use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;

class LoginAdminTest extends TestCase
{

    use DatabaseTransactions;


    public function setUp()  :void {
        parent::setUp();
        $this->admin = create('App\Admin');
    }

    public function test_can_user_see_home_page(){
        $response = $this->actingAs($this->admin,'web')->get(route('admin.home'));
        $response->assertStatus(200);
    }
    public function test_can_user_need_to_auth_see_home_page(){
        $response = $this->get(route('admin.home'));
        $response->assertStatus(302);
        $this->assertGuest();
    }
    public function test_can_user_see_login_page(){
        $response = $this->get(route('admin.loginForm'));
        $response->assertStatus(200);
        $response->assertSee('login');
    }
    public function test_can_user_login(){
        $response = $this->post(route('admin.login'), [
            'email' => $this->admin->email,
            'password' => 'password'
        ]);
        $response->assertStatus(302);
        $response->assertRedirect(route('admin.home'));
    }
    public function test_validate_user_login(){
        $response = $this->post(route('admin.login'), [
            'email' => $this->admin->email,
            'password' => 'p@ssword'
        ]);
        $response->assertSessionHasErrors();
        $this->assertGuest();
        $response = $this->post(route('admin.login'), [
            'email' => 'invalid@exmple.com',
            'password' => 'p@ssword'
        ]);
        $response->assertSessionHasErrors();
        $this->assertGuest();
    }
    public function test_user_not_enable_cannot_login(){
        $admin = create('App\Admin',['enable'=>0]);
        $response = $this->post(route('admin.login'), [
            'email' => $admin->email,
            'password' => 'password'
        ]);
        $response->assertSessionHasErrors();
        $this->assertGuest();
    }
    public function test_can_user_logout(){
        $response = $this->actingAs($this->admin,'web')->post(route('admin.logout'));
        $response->assertStatus(302);
        $this->assertGuest();
    }

}
