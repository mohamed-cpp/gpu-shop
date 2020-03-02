<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Request;

class ClientMiddleware
{
    /**
     * Handle an incoming request.
     * @param Request $request
     * @param Closure                  $next
     * @return mixed
     * @throws AuthenticationException
     */
    public function handle($request, Closure $next)
    {
        if (! $request->expectsJson()) {
            if (auth("client")->check()) {
                return $next($request);
            }

            return redirect(route('client.loginForm'));
        }else if($request->expectsJson() && auth("client")->check()){
            return $next($request);

        }elseif(($request->expectsJson() && auth("seller")->check()) ||
                ($request->expectsJson() && auth("web")->check())) {
            return $next($request);
        }
        else {
            throw new AuthenticationException('Unauthenticated.');
        }
    }
}
