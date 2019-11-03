<?php

namespace Tests\Feature;

use App\Client;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;

class LoginClientTest extends TestCase
{

    use DatabaseTransactions;

    public function test_can_user_login(){
        $client = factory('App\Client')->create();
        $response = $this->post(route('client.login'), [
            'email' => $client->email,
            'password' => 'password'
        ]);
        $response->assertStatus(302);
        $response->assertRedirect('/home');
    }


}
