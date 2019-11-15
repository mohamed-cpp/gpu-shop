<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>@yield("title",__("GPU-Shop - Seller Register"))</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" integrity="sha256-+N4/V/SbAFiW1MPBCXnfnP9QSN3+Keu+NlB+0ev/YKQ=" crossorigin="anonymous" />

    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

    <link rel="stylesheet" href="{{asset('dashboard/css/main.css')}}">

</head>
<body class="bg-gradient-primary">

<div class="container">

    <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
                <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                <div class="col-lg-7">
                    <div class="p-5">
                        <div class="text-center">
                            <h1 class="h4 text-gray-900 mb-4">Create an Account! </h1>
                        </div>

                        @if($errors)
                        <ul class="list-group">
                            @foreach($errors->all() as $error)
                            <li class="list-group-item list-group-item-danger" style="margin-bottom: 2px;">{{$error}}</li>
                            @endforeach
                        </ul>
                            <hr>
                        @endif

                        <div id="app">
                            <register-seller route="{{route('seller.register')}}" csrf="{{csrf_token()}}" :errors="{{ $errors }}" :old="{{ json_encode(Session::getOldInput()) }}"></register-seller>
                        </div>

                        <hr>
                        <div class="text-center">
                            <a class="small" href="forgot-password.html">Forgot Password?</a>
                        </div>
                        <div class="text-center">
                            <a class="small" href="login.html">Already have an account? Login!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

<script src="{{asset('dashboard/js/app.js')}}"></script>

<script src="{{asset('dashboard/js/vue.js')}}"></script>

</body>

</html>
