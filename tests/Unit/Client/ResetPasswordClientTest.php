<?php


namespace Tests\Feature;

use App\Notifications\ClientResetPasswordNotification;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Password;
use Tests\TestCase;

class ResetPasswordClientTest extends TestCase
{

    use DatabaseTransactions;


    public function test_password_reset_displayed()
    {
        $response = $this->get(route('client.password.request'));
        $response->assertStatus(200);
    }

    public function test_send_reset_link_email(){

        Notification::fake();
        $client = create('App\Client');
        //dd($client->email);
        $this->post(route('client.password.email'), [
            'email' => $client->email,
        ]);
        Notification::assertSentTo([$client],ClientResetPasswordNotification::class);
    }

    public function test_validate_send_reset_link_email(){
        Notification::fake();
        $client = create('App\Client',['email_verified_at'=> null ]);
        $this->post(route('client.password.email'), [
            'email' => $client->email,
        ]);
        Notification::assertNotSentTo([$client],ClientResetPasswordNotification::class);
    }
    public function test_password_reset_form()
    {
        $client = create('App\Client');
        $token = Password::createToken($client);
        $response = $this->get(route('client.password.reset', [
                'token' => $token,
                'email' => $client->email
            ]));
        $response->assertStatus(200);
    }
    public function test_password_reset_dform()
    {
        $client = create('App\Client');
        $token = Password::createToken($client);
        $response = $this->post(route('client.password.update', [
            'token' => $token,
            'email' => $client->email,
            'password' => 'password',
            'password_confirmation' => 'password'

        ]));
        $this->assertTrue(Hash::check('password', $client->fresh()->password));
    }

}
