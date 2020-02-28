<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateClient extends FormRequest
{
    private $id;
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        if (auth('client')->check()){
            $this->id = auth('client')->user()->id;
            return true;
        }
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'                      => 'required|string|max:20',
            'username'                  => ['required', 'string', 'max:20','unique:sellers','unique:admins', "unique:clients,username,{$this->id}"],
            'email'                     => ['sometimes','nullable' ,'string', 'email', 'max:255', 'unique:sellers','unique:admins', "unique:clients,email,{$this->id}"],
            'phone_number'              => ['required', 'numeric', 'regex:/^[0-9-+ ]{7,15}$/' ,'unique:sellers','unique:admins', "unique:clients,phone_number,{$this->id}"],
            'address'                   => 'sometimes|nullable|string',
            'city'                      => 'required_with:address|nullable|string',
            'country'                   => 'required_with:address|nullable|string',
            'zip'                       => 'required_with:address|nullable|string',
            'old_password'              => 'sometimes|nullable',
            'new_password'              => 'required_with:old_password|nullable|min:8|confirmed|different:old_password',
            'new_password_confirmation' => 'required_with:old_password|nullable|min:8',
            'image'                     => 'sometimes|mimes:jpeg,png,jpg',
        ];
    }
}
