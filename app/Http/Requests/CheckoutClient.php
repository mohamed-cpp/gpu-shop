<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CheckoutClient extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth('client')->check() && session()->has('cart');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'address' => 'required|string',
            'city' => 'required|string',
            'country' => 'required|string',
            'zip' => 'sometimes|nullable|string',
            'e-mail' => 'sometimes|nullable|string',
            'phone' => 'required|string',
            'client_note' => 'sometimes|nullable|string',
            'pay' => 'required|string',
        ];
    }
}
