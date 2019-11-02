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


    @include('client.layout._slider-area')
    @include('client.layout._banner-area')
    @include('client.layout._featured_products')
    @include('client.layout._limited_edition')
    @include('client.layout._new_collection')
    @include('client.layout.top_stories')

    @include('client.layout._footer')
    @include('client.layout._sideBar')

    @include('client.layout._quickView')

</div>
<!-- all js here -->
<script src="{{asset('GPU-Shop/js/app.js')}}"></script>
@stack('scripts')
@yield('extra-scripts')
</body>
</html>
