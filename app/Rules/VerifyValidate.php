<?php

namespace App\Rules;

use App\Client;
use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\Session;

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
        $client = Client::where($attribute ,$attribute == 'email' ? $value : 'like', "%$value")->first();
        if($client){
            $verified =  $attribute == 'email' ? $client->email_verified_at : $client->phone_verified_at;
            $attribute = $attribute == 'email' ? 'email' : 'phone number';
            Session::flash('error',"The $attribute is not validation please connect us.");
            return !! $verified;
        }
        Session::flash('error',"These credentials do not match our records.");
        return false;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
    }
}
