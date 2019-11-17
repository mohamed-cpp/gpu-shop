<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\DB;

class VerifyValidateSellerAndAdmin implements Rule
{

    protected $findOrNot = true;
    /**
     * Create a new rule instance.
     *
     * @param $customGuard
     */
    public function __construct($customGuard)
    {
        $this->customGuard = $customGuard;
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
        $user = DB::table($this->customGuard)->where($attribute, $value)
            ->select('username','email_verified_at')
            ->first();
        if(!$user){
            return $this->findOrNot = false;
        }elseif(!$user->email_verified_at){
            return false;
        }
        return true;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        if($this->findOrNot){
            return "Sorry the :attribute is not validation please connect us.";
        }else{
            return 'Sorry the :attribute does not match our records.';

        }
    }
}
