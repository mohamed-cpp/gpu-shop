<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    protected function signIn($user = null ,$api = null){
        $user = $user ?: create('App\Client');
        $this->actingAs($user, $api ? $api: 'client' );
        return $this;
    }
}
