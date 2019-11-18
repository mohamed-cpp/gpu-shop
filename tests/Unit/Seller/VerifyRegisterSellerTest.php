<?php


namespace Tests\Feature;

use App\Seller;
use App\Notifications\SendSellerVerificationEmailNotification;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Notification;
use Tests\TestCase;

class VerifyRegisterSellerTest extends TestCase
{

    use DatabaseTransactions;

    function test_email_register_client()
    {
        $this->withoutExceptionHandling();
        Notification::fake();
        $file = UploadedFile::fake()->image('avatar.jpg');
        $this->post(route('seller.register'), [
            'company_or_individual' => 'true',
            'name' => 'johnDeo456',
            'username' => 'johnDeo456',
            'phone_number' => '+201100754973',
            'email' => 'hello@gpu_shop.com',
            'password' => 'passworD123',
            'password_confirmation' => 'passworD123',
            'agree' => 'on',
            'passport_or_id' => $file,
        ]);
        $seller = Seller::where('username','johnDeo456')->first();
        Notification::assertSentTo([$seller],SendSellerVerificationEmailNotification::class);
    }
    function test_verify_email_client()
    {
        $this->withoutExceptionHandling();
        $seller = create('App\Seller',['email_verified_at'=> null ]);
        $this->assertNull($seller->email_verified_at);
        $token = md5($seller->created_at . $seller->email . $seller->username);

        $this
            ->get(route('seller.email.verifyForm', [
                "email" => $seller->email,
                "token" => $token
            ]))->assertRedirect(route('home.seller'));

        tap($seller->fresh(), function ($user) {
            $this->assertNotNull($user->email_verified_at);
        });
    }
    function test_validate_verify_email_client()
    {
        $seller = create('App\Seller',['email_verified_at'=> null ]);
        $this->assertNull($seller->email_verified_at);
        $token = md5($seller->created_at . $seller->email );

        $this->get(route('seller.email.verifyForm', [
            "email" => $seller->email,
            "token" => $token
        ]))->assertRedirect(route('home.seller'));

        tap($seller->fresh(), function ($user) {
            $this->assertNull($user->email_verified_at);
        });
    }
    function test_resend_email_verify_client()
    {
        Notification::fake();
        $user = create('App\Seller',['email_verified_at'=> null ]);
        $this->actingAs($user,'seller');
        $this->get(route('seller.email.verifyResend'))
            ->assertRedirect(route('home.seller'));
        Notification::assertSentTo([auth('seller')->user()],SendSellerVerificationEmailNotification::class);
    }


}
