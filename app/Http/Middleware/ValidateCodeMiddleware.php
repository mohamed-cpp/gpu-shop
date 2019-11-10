<?php

namespace App\Http\Middleware;

use App\Client;
use Closure;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Request;

class ValidateCodeMiddleware
{
    /**
     * Handle an incoming request.
     * @param Request $request
     * @param Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $client = $request->user('client');
        $now = $client->create_code_at;
        if($now){
            if($now->diffInMinutes() < 15){
                return $next($request);
            }else{
                $client->update([
                    'code' => null,
                    'create_code_at' => null,
                ]);
                $client->save();

                return response()->view('client.errors.error',['errorCode' => 403,
                    'errorMessage'=>'Sorry one hour passed, Return to profile and generate new code.']);
            }
        }else{
            return response()->view('client.errors.error',['errorCode' => 403,
                'errorMessage'=>'Sorry you need to generate code or login.']);
        }


    }
}
