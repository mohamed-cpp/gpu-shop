<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OptionsProductOrder extends Model
{
    protected $fillable = [
        'product_order_id', 'product_id', 'option', 'option_id', 'sub_option', 'sub_option_id',
    ];
}
