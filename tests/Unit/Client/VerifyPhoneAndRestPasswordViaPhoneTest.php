<?php


namespace Tests\Feature;

use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class VerifyPhoneAndRestPasswordViaPhoneTest extends TestCase
{

    use DatabaseTransactions;

    public function test_user_can_see_verify_page(){
        $client = create('App\Client');
        $this->actingAs($client,'client');
        $this->get(route('verify.phone.client'))
            ->assertStatus(200)
            ->assertViewIs('client.auth.verify_phone');
        
    }

    public function test_redirect_if_user_have_valid_code(){
        $client = create('App\Client',[
            'code' => '111111',
            'create_code_at' => \Carbon\Carbon::now(),
        ]);
        //dd($client);
        $this->actingAs($client,'client')
            ->get(route('verify.phone.client'))
            ->assertStatus(302)
            ->assertRedirect(route('verify.page.client'));

    }

    public function test_redirect_if_user_have_not_valid_code(){
        $client = create('App\Client',[
            'code' => '111111',
            'create_code_at' => \Carbon\Carbon::now()->subMinute(15),
        ]);
        $this->actingAs($client,'client')
            ->get(route('verify.phone.client'))
            ->assertStatus(200)
            ->assertViewIs('client.auth.verify_phone');

    }

    public function test_create_code(){
        $client = create('App\Client');
        $this->actingAs($client,'client')
            ->post(route('verify.phone.client',['message'=>'whatsapp']))
            ->assertStatus(302)
            ->assertRedirect(route('verify.page.client'));
        $this->assertDatabaseHas('clients',[
            'code'=> $client->code,
            'create_code_at' => $client->create_code_at
        ]);
    }

    public function test_user_can_see_verify_code_page(){
        $client = create('App\Client',[
            'code' => '111111',
            'create_code_at' => \Carbon\Carbon::now(),
        ]);
        $this->actingAs($client,'client')
            ->get(route('verify.page.client'))
            ->assertViewIs('client.auth.code_phone');

    }

    public function test_code_if_valid(){
        $client = create('App\Client',[
            'code' => '111111',
            'create_code_at' => \Carbon\Carbon::now(),
            'phone_verified_at' => null
        ]);
        $this->actingAs($client,'client')
            ->post(route('verify.code.client'),['code'=>'111111'])
            ->assertRedirect(route('client.profile'));
        $this->assertDatabaseHas('clients',[
            'code'=> null,
            'create_code_at' => null,
            'phone_verified_at' => $client->phone_verified_at,
        ]);
    }

    public function test_if_not_right_code(){
        $client = create('App\Client',[
            'code' => '111111',
            'create_code_at' => \Carbon\Carbon::now(),
            'phone_verified_at' => null
        ]);
        $this->actingAs($client,'client')
            ->post(route('verify.code.client'),['code'=>'111110'])
            ->assertSessionHas('error',"Sorry code 111110 not correct, Try again");

        $this->assertDatabaseHas('clients',[
            'code'=> $client->code,
            'create_code_at' => $client->create_code_at,
            'phone_verified_at' => null,
        ]);
    }

    public function test_validate_code_if_valid(){
        $client = create('App\Client',[
            'code' => '111111',
            'create_code_at' => \Carbon\Carbon::now()->subMinute(15),
        ]);
        $this->actingAs($client,'client')
            ->post(route('verify.code.client'),['code'=>'111111'])
            ->assertViewIs('client.errors.error')
            ->assertSee('403');
    }
    //reset password
    public function test_redirect_to_reset_password_via_phone(){
        $client = create('App\Client',['phone_number'=>'+20123456789']);
        $this->post(route('client.password.email'),['email'=>'+20123456789'])
            ->assertRedirect(route('client.password.reset.phone',['phone'=>$client->phone_number]));
    }
    public function test_validate_reset_password_via_phone(){
        create('App\Client',['phone_number'=>'+20123456789']);
        $this->post(route('client.password.email'),['email'=>'0123456781'])
            ->assertSessionHasErrors();
    }
    public function test_validate_reset_password_not_verified_phone(){
        create('App\Client',[
            'phone_number'=>'+20123456789',
            'phone_verified_at' => null,
        ]);
        $this->post(route('client.password.email'),['email'=>'+20123456789'])
            ->assertSessionHasErrors();
    }
    public function test_reset_password(){
        $client = create('App\Client',[
            'phone_number'=>'+20123456789',
        ]);
        $this->post(route('client.send.reset.password',['phone'=>'0123456789']),['message'=>'whatsapp'])
            ->assertRedirect(route('client.check.code.password',['phone'=>$client->phone_number]));
        $this->assertNotEquals(null, $client->fresh()->code);
        $this->assertNotEquals(null, $client->fresh()->create_code_at);
    }
    public function test_form_code(){
        $client = create('App\Client',[
            'phone_number'=>'+20123456789',
        ]);
        $this->get(route('client.check.code.password',['phone'=>$client->phone_number]))
            ->assertStatus(200)
            ->assertViewIs('client.auth.passwords.code_phone');
    }
    public function test_check_code(){
        $client = create('App\Client',[
            'phone_number'=>'+20123456789',
            'code' => '111111',
            'create_code_at' => \Carbon\Carbon::now(),
        ]);
        $this->post(route('client.code.password'),[
            'phone'=>$client->phone_number,
            'code'=>$client->code
        ])
            ->assertRedirect(route('client.change.password.form',
                ['phone'=> $client->phone_number, 'code'=>$client->code]
            ));
    }

    public function test_validate_check_code(){
        $client = create('App\Client',[
            'phone_number'=>'+20123456789',
            'code' => '111111',
            'create_code_at' => \Carbon\Carbon::now(),
        ]);
        $this->post(route('client.code.password'),[
            'phone'=>$client->phone_number,
            'code'=>'111110'
        ])->assertSessionHas('error',"Sorry code 111110 not correct, Try again");
    }
    public function test_validate_timeout_check_code(){
        $client = create('App\Client',[
            'phone_number'=>'+20123456789',
            'code' => '111111',
            'create_code_at' => \Carbon\Carbon::now()->subMinute(15),
        ]);
        $this->post(route('client.code.password'),[
            'phone'=>$client->phone_number,
            'code'=>'111111'
        ])
            ->assertViewIs('client.errors.error')
            ->assertSee('403');

    }
    public function test_form_reset_password(){
        $client = create('App\Client',[
            'phone_number'=>'+20123456789',
            'code' => '111111',
        ]);
        $this->get(route('client.change.password.form',[
            'phone'=> $client->phone_number,
            'code'=>$client->code
        ]))
            ->assertStatus(200)
            ->assertViewIs('client.auth.passwords.resetViaPhone');
    }

    public function test_change_password(){
        $client = create('App\Client',[
            'phone_number'=>'+20123456789',
            'code' => '111111',
        ]);
        $this->post(route('client.change.password.phone'),[
            'phone'=> $client->phone_number,
            'code'=>$client->code,
            'password' => 'p@ssword',
            'password_confirmation' => 'p@ssword'
        ])
            ->assertRedirect(route('homepage'));
        $this->assertTrue(Hash::check('p@ssword', $client->fresh()->password));
        $this->assertEquals(null, $client->fresh()->code);
        $this->assertEquals(null, $client->fresh()->create_code_at);
    }

    public function test_validate_change_password(){
        $client = create('App\Client',[
            'phone_number'=>'+20123456789',
            'code' => '111111',
        ]);
        $this->post(route('client.change.password.phone'),[
            'phone'=> $client->phone_number,
            'code'=>$client->code,
            'password' => 'p@ssword',
            'password_confirmation' => 'password'
        ])->assertSessionHasErrors();

        $this->post(route('client.change.password.phone'),[
            'phone'=> $client->phone_number,
            'code'=>'111110',
            'password' => 'p@ssword',
            'password_confirmation' => 'p@ssword'
        ])
            ->assertViewIs('client.errors.error')
            ->assertSee('500');
    }

}
