<?php

namespace App\Http;

use App\Http\Middleware\AdminMiddlewareAuth;
use App\Http\Middleware\SellerMiddlewareAuth;
use Illuminate\Foundation\Http\Kernel as HttpKernel;
use App\Http\Middleware\ClientMiddleware;

class Kernel extends HttpKernel
{
    /**
     * The application's global HTTP middleware stack.
     *
     * These middleware are run during every request to your application.
     *
     * @var array
     */
    protected $middleware = [
        \App\Http\Middleware\TrustProxies::class,
        \App\Http\Middleware\CheckForMaintenanceMode::class,
        \Illuminate\Foundation\Http\Middleware\ValidatePostSize::class,
        \App\Http\Middleware\TrimStrings::class,
        \Illuminate\Foundation\Http\Middleware\ConvertEmptyStringsToNull::class,
    ];

    /**
     * The application's route middleware groups.
     *
     * @var array
     */
    protected $middlewareGroups = [
        'web' => [
            \App\Http\Middleware\EncryptCookies::class,
            \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
            \App\Http\Middleware\ChangeSlugMiddleware::class,
            \Illuminate\Session\Middleware\StartSession::class,
            // \Illuminate\Session\Middleware\AuthenticateSession::class,
            \Illuminate\View\Middleware\ShareErrorsFromSession::class,
            \App\Http\Middleware\VerifyCsrfToken::class,
            \Illuminate\Routing\Middleware\SubstituteBindings::class,

            \Mcamara\LaravelLocalization\Middleware\LaravelLocalizationRedirectFilter::class,
            \Mcamara\LaravelLocalization\Middleware\LaravelLocalizationRoutes::class,
            \Mcamara\LaravelLocalization\Middleware\LaravelLocalizationViewPath::class,
            \Mcamara\LaravelLocalization\Middleware\LocaleSessionRedirect::class,

            \App\Http\Middleware\HttpsProtocolMiddleware::class,
            \App\Http\Middleware\ChangeLocaleMiddleware::class,
//            \App\Http\Middleware\OptimizeMiddleware::class, // from stack overflow

           // \RenatoMarinho\LaravelPageSpeed\Middleware\InlineCss::class,
            \RenatoMarinho\LaravelPageSpeed\Middleware\ElideAttributes::class,
            \RenatoMarinho\LaravelPageSpeed\Middleware\InsertDNSPrefetch::class,
            \RenatoMarinho\LaravelPageSpeed\Middleware\RemoveComments::class,
            \RenatoMarinho\LaravelPageSpeed\Middleware\TrimUrls::class,
            \RenatoMarinho\LaravelPageSpeed\Middleware\RemoveQuotes::class,
            \RenatoMarinho\LaravelPageSpeed\Middleware\CollapseWhitespace::class,
        ],

        'api' => [
            'throttle:60,1',
            'bindings',
        ],
    ];

    /**
     * The application's route middleware.
     *
     * These middleware may be assigned to groups or used individually.
     *
     * @var array
     */
    protected $routeMiddleware = [
        'auth' => \App\Http\Middleware\Authenticate::class,
        'auth.basic' => \Illuminate\Auth\Middleware\AuthenticateWithBasicAuth::class,
        'bindings' => \Illuminate\Routing\Middleware\SubstituteBindings::class,
        'cache.headers' => \Illuminate\Http\Middleware\SetCacheHeaders::class,
        'can' => \Illuminate\Auth\Middleware\Authorize::class,
        'client'        => ClientMiddleware::class,
        'admin'         => AdminMiddlewareAuth::class,
        'seller'         => SellerMiddlewareAuth::class,
        'guest' => \App\Http\Middleware\RedirectIfAuthenticated::class,
        'password.confirm' => \Illuminate\Auth\Middleware\RequirePassword::class,
        'signed' => \Illuminate\Routing\Middleware\ValidateSignature::class,
        'throttle' => \Illuminate\Routing\Middleware\ThrottleRequests::class,
        'verified' => \Illuminate\Auth\Middleware\EnsureEmailIsVerified::class,
        'email_verified' => \App\Http\Middleware\RedirectIfEmailNotConfirmed::class,
        'is_code_valid' => \App\Http\Middleware\ValidateCodeMiddleware::class,
        'role' => \Spatie\Permission\Middlewares\RoleMiddleware::class,
        'permission' => \Spatie\Permission\Middlewares\PermissionMiddleware::class,
        'role_or_permission' => \Spatie\Permission\Middlewares\RoleOrPermissionMiddleware::class,
    ];

    /**
     * The priority-sorted list of middleware.
     *
     * This forces non-global middleware to always be in the given order.
     *
     * @var array
     */
    protected $middlewarePriority = [
        \Illuminate\Session\Middleware\StartSession::class,
        \Illuminate\View\Middleware\ShareErrorsFromSession::class,
        \App\Http\Middleware\Authenticate::class,
        \Illuminate\Routing\Middleware\ThrottleRequests::class,
        \Illuminate\Session\Middleware\AuthenticateSession::class,
        \Illuminate\Routing\Middleware\SubstituteBindings::class,
        \Illuminate\Auth\Middleware\Authorize::class,
    ];
}
