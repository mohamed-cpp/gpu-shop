<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Auth\AuthenticationException;

class SellerMiddlewareAuth
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     * @throws AuthenticationException
     */
    public function handle($request, Closure $next)
    {
        if (! $request->expectsJson()) {
            if (auth("seller")->check()) {
                return $next($request);
            }

            return redirect(route('seller.loginForm'));
        } else {
            throw new AuthenticationException('Unauthenticated.');
        }
    }
}
