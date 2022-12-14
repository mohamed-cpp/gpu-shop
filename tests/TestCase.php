<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    protected function signIn($user = null ,$api = 'client'){
        $user = $user ?: create('App\Client');
        $this->actingAs($user, $api);
        return $this;
    }
}
