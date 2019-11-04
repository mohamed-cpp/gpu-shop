<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ClientsHomePageController extends Controller
{
    public function homepage()
    {
        return view('client.main');
    }
}
