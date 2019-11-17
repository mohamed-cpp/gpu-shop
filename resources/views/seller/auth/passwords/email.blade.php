<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>@yield("title",__("GPU-Shop - Seller Reset Password"))</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" integrity="sha256-+N4/V/SbAFiW1MPBCXnfnP9QSN3+Keu+NlB+0ev/YKQ=" crossorigin="anonymous" />

    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

    <link rel="stylesheet" href="{{asset('dashboard/css/main.css')}}">

</head>
<body class="bg-gradient-primary">

<div class="container">
    <div class="row justify-content-center">

        <div class="col-xl-10 col-lg-12 col-md-9">

            <div class="card o-hidden border-0 shadow-lg my-5">
                <div class="card-body p-0">
                    <!-- Nested Row within Card Body -->
                    <div class="row">
                        <div class="col-lg-6 d-none d-lg-block bg-password-image"></div>
                        <div class="col-lg-6">
                            <div class="p-5">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-2"> {{__('Forgot Your Password?')}}</h1>
                                    <p class="mb-4">{{__("We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!")}}</p>
                                </div>
                                <form class="user" action="{{route('seller.password.email')}}" method="post">
                                    @csrf
                                    <div class="form-group">
                                        <input type="email" class="form-control form-control-user @error('email') is-invalid @enderror" name="email" placeholder="{{__('Enter Email Address...')}}">
                                        @error('email')
                                        <span class="invalid-feedback" role="alert" style="display: block !important;">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-user btn-block">{{__('Reset Password')}}</button>
                                </form>
                                <hr>
                                <div class="text-center">
                                    <a class="small" href="{{route('seller.registerForm')}}">{{__('Create an Account!')}}</a>
                                </div>
                                <div class="text-center">
                                    <a class="small" href="{{route('seller.loginForm')}}">{{__('Already have an account? Login!')}}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

</div>>
<script src="{{asset('dashboard/js/app.js')}}"></script>
</body>

</html>
