@extends('client.app')

@section('content')

    <div class="register-area ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-12 col-lg-6 col-xl-6 ml-auto mr-auto">
                    <div class="login">
                        <div class="login-form-container">
                            <div class="login-form">
                                <form action="{{route('verify.code.client')}}" method="POST">
                                    @csrf
                                    <input type="text" class="form-control" placeholder="Active code" name="code" required>
                                    @if (Session::has('error'))
                                        <div class="alert alert-danger" role="alert">
                                            {{ session('error') }}
                                        </div>
                                    @endif
                                    <button type="submit" class="btn btn-outline-primary">{{ __('Send Code') }}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- login-area end -->

@endsection