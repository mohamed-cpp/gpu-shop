<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>@yield("title",__("GPU-Shop - Seller Dashboard"))</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" integrity="sha256-+N4/V/SbAFiW1MPBCXnfnP9QSN3+Keu+NlB+0ev/YKQ=" crossorigin="anonymous" />

    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

    <link rel="stylesheet" href="{{asset('dashboard/css/main.css')}}">
    @stack('styles')
</head>

<body id="page-top">

<!-- Page Wrapper -->
<div id="wrapper">
    @include('seller.layout._sidebar')

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
        <!-- Main Content -->
        <div id="content">
            @include('seller.layout._main_content')
        </div>
        <!-- End of Main Content -->
        @include('seller.layout._footer')
    </div>
    <!-- End of Content Wrapper -->

</div>
<!-- End of Page Wrapper -->



<!-- Scroll to Top Button-->
<a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
</a>
@include('seller.layout.logout_modal')


<script src="{{asset('dashboard/js/app.js')}}"></script>
<!-- Page level custom scripts -->
<script src="{{asset('dashboard/js/demo/chart-area-demo.js')}}"></script>
<script src="{{asset('dashboard/js/demo/chart-pie-demo.js')}}"></script>

@stack('scripts')
@yield('extra-scripts')

</body>
</html>
