<?php
namespace App\Http\Middleware;
use Closure;
class RedirectIfEmailNotConfirmed
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @param string $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = 'client')
    {
        //dd($request->all());
        if (! $request->user($guard)->email_verified_at) {
            return redirect('/')
                ->with('flash', 'You must first confirm your email address.');
        }
        return $next($request);
    }
}