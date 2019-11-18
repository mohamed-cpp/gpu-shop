<?php


namespace Tests\Feature;

use App\Seller;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class RegisterSellerTest extends TestCase
{

    use DatabaseTransactions;
    /**
     * The registration form can be displayed.
     *
     * @return void
     */
    public function test_register_form_displayed()
    {
        $response = $this->get(route('seller.registerForm'));
        $response->assertStatus(200);
    }
    /**
     * A valid user can be registered.
     *
     * @return void
     */
    public function test_a_user_can_register()
    {
        $file = UploadedFile::fake()->image('avatar.jpg');
        $response = $this->post(route('seller.register'),[
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
        $response->assertStatus(302);
        $response->assertRedirect('/');
        $name = Seller::where('username','johnDeo456')->first()->id_or_passport;
        $exist =  file_exists(public_path().'/'. $name);
        $this->assertEquals($exist,true);
    }
    /**
     * An invalid user is not registered.
     *
     * @return void
     */
    public function test_validate_user_register()
    {

        $file = UploadedFile::fake()->create('document.pdf');

        $response = $this->post(route('seller.register'),[
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

        $response->assertSessionHasErrors();
        $this->assertDatabaseMissing('sellers', [
            'username' => 'johnDeo456',
        ]);
    }


}
