<?php

namespace Tests\Feature;

use App\Client;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Support\Facades\Notification;
use Tests\TestCase;
use App\Notifications\SendClientVerificationEmailNotification;

class VerifyRegisterClientTest extends TestCase
{

    use DatabaseTransactions;


    function test_email_register_client()
    {
        $this->withoutExceptionHandling();
        Notification::fake();
        $client = make('App\Client');
        $this->post(route('client.register'), [
            'name' => 'JohnDeo123',
            'username' => 'JohnDeo123',
            'phone_number' => '01314759745',
            'email' => $client->email,
            'password' => 'password',
            'password_confirmation' => 'password',
            'agree' => 'on',
        ]);
        $client = Client::where('username','JohnDeo123')->first();
        Notification::assertSentTo([$client],SendClientVerificationEmailNotification::class);
    }
    function test_verify_email_client()
    {
        $this->withoutExceptionHandling();
        $client = create('App\Client',['email_verified_at'=> null ]);
        $this->assertNull($client->email_verified_at);
        $token = md5($client->created_at . $client->email . $client->username);

        $this
            ->get(route('client.email.verifyForm', [
                "email" => $client->email,
                "token" => $token
            ]))->assertRedirect(route('homepage'));

        tap($client->fresh(), function ($user) {
            $this->assertNotNull($user->email_verified_at);
        });
    }
    function test_validate_verify_email_client()
    {
        $client = create('App\Client',['email_verified_at'=> null ]);
        $this->assertNull($client->email_verified_at);
        $token = md5($client->created_at . $client->email );

        $this->get(route('client.email.verifyForm', [
            "email" => $client->email,
            "token" => $token
        ]))->assertRedirect(route('homepage'));

        tap($client->fresh(), function ($user) {
            $this->assertNull($user->email_verified_at);
        });
    }
    function test_resend_email_verify_client()
    {
        Notification::fake();
        $user = create('App\Client',['email_verified_at'=> null ]);
        $this->actingAs($user,'client');
        $this->get(route('client.email.verifyResend'))
        ->assertRedirect(route('homepage'));
        Notification::assertSentTo([auth('client')->user()],SendClientVerificationEmailNotification::class);
    }

}
