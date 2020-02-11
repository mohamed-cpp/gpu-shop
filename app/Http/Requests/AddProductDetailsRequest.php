<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AddProductDetailsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "main_name_en_details" => 'required|string',
            "main_name_ar_details"=> 'required|string',
            "name_en_details.*"=> 'required|string',
            "name_ar_details.*"=> 'required|string',
            "price_egp_details.*"=> 'sometimes',
            "price_usd_details.*"=> 'sometimes',
            "quantity_details.*"=> 'sometimes',
        ];
    }
}
