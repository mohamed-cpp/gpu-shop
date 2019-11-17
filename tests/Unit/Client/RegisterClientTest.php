<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;

class  RegisterClientTest extends TestCase
{

    use DatabaseTransactions;

    public function setUp()  :void {
        parent::setUp();
        $this->client = make('App\Client');
    }

    /**
     * The registration form can be displayed.
     *
     * @return void
     */
    public function test_register_form_displayed()
    {
        $response = $this->get('/register');
        $response->assertStatus(200);
    }
    /**
     * A valid user can be registered.
     *
     * @return void
     */
    public function test_a_user_can_register()
    {
        //$this->withoutExceptionHandling();
        $response = $this->post(route('client.register'), [

            'name' => $this->client->name,
            'username' => $this->client->username,
            'phone_number' => '+201100754972',
            'email' => $this->client->email,
            'password' => 'password',
            'password_confirmation' => 'password'
        ]);
        $response->assertStatus(302);
        $this->assertDatabaseHas('clients', [ 'username' => $this->client->username ]);
        $response->assertRedirect('/home');


    }
    /**
     * An invalid user is not registered.
     *
     * @return void
     */
    public function test_validate_user_register()
    {

        $response = $this->post('register', [
            'name' => $this->client->name,
            'username' => $this->client->username,
            'phone_number' => $this->client->phone_number,
            'email' => $this->client->email,
            'password' => 'password',
            'password_confirmation' => 'invalid'
        ]);
        $response->assertSessionHasErrors();
        $this->assertGuest();
    }
}
