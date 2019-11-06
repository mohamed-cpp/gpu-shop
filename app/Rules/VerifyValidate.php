<?php

namespace App\Rules;

use App\Client;
use Illuminate\Contracts\Validation\Rule;

class VerifyValidate implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $client = Client::where($attribute,$value)->pluck('email_verified_at')->first();
        return !! $client;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return trans('validation.verifyvalidate');
    }
}
