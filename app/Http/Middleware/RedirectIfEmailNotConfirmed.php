<?php
namespace App\Http\Middleware;
use Closure;
class RedirectIfEmailNotConfirmed
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        //dd($request->all());
        if (! $request->user('client')->email_verified_at) {
            return redirect('/')
                ->with('flash', 'You must first confirm your email address.');
        }
        return $next($request);
    }
}