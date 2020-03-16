<!doctype html>
<html class="no-js" lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>@yield("title",__("GPU-Shop"))</title>
    <link rel="icon" href="{{asset('assets\img\icon-img\iconLogo.png')}}">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="canonical" href="{{request()->fullUrl()}}" />
    <meta name="robots" content="index,follow">
    <meta property="og:locale" content="{{app()->getLocale()}}">
    <meta name="description" content="{{ SEODescription() }}">
    <meta property="og:type" content="product"/>
    <meta property="og:title" content="{{ __("GPU_Shop") }}"/>
    <meta property="og:description" content="{{ SEODescription() }}"/>
    <meta property="og:image" content="{{asset('assets\img\icon-img\iconLogo.png')}}"/>
    <meta property="og:url" content="{{ route('homepage') }}"/>
    <meta property="og:site_name" content="{{ __("GPU_Shop") }}"/>

    <link rel="stylesheet" href="{{mix('GPU-Shop/css/main.css')}}">
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="{{mix('GPU-Shop/css/products_page.css')}}" rel="stylesheet">
    @stack('styles')
    <script src="{{mix('GPU-Shop/js/modernizr-2.8.3.min.js')}}"></script>
    <script>
        @if(auth('client')->check())
                @php $user = auth('client')->user(); @endphp
                @elseif(auth('seller')->check())
                @php $user = auth('seller')->user(); $signedIn = true @endphp
                @elseif(auth('web')->check())
                @php $user = auth('web')->user(); $signedIn = true @endphp
                @endif
            window.App = {!! json_encode(['lang'=> app()->getLocale() ,'csrfToken' => csrf_token(),'user' => isset($user) ? $user : null, 'username' => isset($user) ? $user->username : null ]) !!};
        window.signed = {!! json_encode(['signedIn' => auth('client')->check(),'signedInAGuard' => isset($signedIn) ? $signedIn : null  ]) !!};
    </script>
</head>
<body>
<!-- header start -->
<div class="wrapper">
    @include('client.layout._navBar')


    @include('client.layout._slider-area')
    @include('client.layout._featured_products')
    @include('client.layout._new_collection')

    @include('client.layout._footer')
    @include('client.layout._sideBar')


</div>
<!-- all js here -->
<script src="{{mix('GPU-Shop/js/vue.js')}}"></script>
<script src="{{mix('GPU-Shop/js/app.js')}}"></script>
<script src="{{mix('GPU-Shop/js/products_page.js')}}"></script>
@stack('scripts')
@yield('extra-scripts')
</body>
</html>
