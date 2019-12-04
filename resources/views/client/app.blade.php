<!doctype html>
<html class="no-js" lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>@yield("title",__("GPU-Shop"))</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Favicon -->
    <link rel="shortcut icon" type="image/x-icon" href="">

    <!-- all css here -->
    <link rel="stylesheet" href="{{asset('GPU-Shop/css/main.css')}}">
    @stack('styles')
    <script src="{{asset('GPU-Shop/js/modernizr-2.8.3.min.js')}}"></script>
</head>
<body>
<!-- header start -->
<div class="wrapper">
    @include('client.layout._navBar')
    @yield('content')
    @include('client.layout._footer')
    @include('client.layout._sideBar')
    @stack('includes')
</div>
<!-- all js here -->
<script src="{{asset('GPU-Shop/js/app.js')}}"></script>
@stack('scripts')
@yield('extra-scripts')
</body>
</html>
