<?php


namespace Tests\Feature;

use App\Notifications\ClientResetPasswordNotification;
use App\Notifications\SellerResetPasswordNotification;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Password;
use Tests\TestCase;

class ResetPasswordSellerTest extends TestCase
{

    use DatabaseTransactions;


    public function test_password_reset_displayed()
    {
        $response = $this->get(route('seller.password.request'));
        $response->assertStatus(200);
    }

    public function test_send_reset_link_email(){

        Notification::fake();
        $seller = create('App\Seller');
        //dd($client->email);
        $this->post(route('seller.password.email'), [
            'email' => $seller->email,
        ]);
        Notification::assertSentTo([$seller],SellerResetPasswordNotification::class);
    }

    public function test_validate_send_reset_link_email(){
        Notification::fake();
        $seller = create('App\Seller',['email_verified_at'=> null ]);
        $this->post(route('seller.password.email'), [
            'email' => $seller->email,
        ]);
        Notification::assertNotSentTo([$seller],SellerResetPasswordNotification::class);
    }
    public function test_password_reset_form()
    {
        $seller = create('App\Seller');
        $token = Password::createToken($seller);
        $response = $this->get(route('seller.password.reset', [
            'token' => $token,
            'email' => $seller->email
        ]));
        $response->assertStatus(200);
    }
    public function test_change_password()
    {
        $seller = create('App\Seller');
        $token = Password::createToken($seller);
        $response = $this->post(route('seller.password.update', [
            'token' => $token,
            'email' => $seller->email,
            'password' => 'password',
            'password_confirmation' => 'password'

        ]));
        $this->assertTrue(Hash::check('password', $seller->fresh()->password));
    }


}
