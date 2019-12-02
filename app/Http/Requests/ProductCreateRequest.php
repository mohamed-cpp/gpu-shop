<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductCreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth('seller')->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name_en' => 'required|string',
            'description_en' => 'required|string',
            'slug_en'=> 'required|string',
            'title_meta_en'=> 'sometimes',
            'description_meta_en'=> 'sometimes',
            'name_ar' => 'required|string',
            'description_ar' => 'required|string',
            'slug_ar' => 'required|string',
            'title_meta_ar' => 'sometimes',
            'description_meta_ar' => 'sometimes',
            'price_egp' => 'required|numeric|min:0',
            'price_usd' => 'required|numeric|min:0',
            'quantity' => 'required|numeric|min:0',
            "offer_start_at" => 'nullable|date|after_or_equal:today',
            "offer_end_at" => 'nullable|date|after_or_equal:offer_start_at',
            "offer_price_egp" => 'sometimes|min:0',
            "offer_price_usd" => 'sometimes|min:0',
            'status'  => 'required|boolean',
            'main_image'   => 'required|mimes:jpeg,png,jpg',
            'images.*'  => 'required|mimes:jpeg,png,jpg',
            'subcategories.*' => 'required|numeric',
        ];
    }
}
