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
        } else {
            throw new AuthenticationException('Unauthenticated.');
        }
    }
}
