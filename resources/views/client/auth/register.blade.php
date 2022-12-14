@extends('client.app')
@section('title',  __('Register'))
@section("SEO")
    <link rel="canonical" href="{{request()->fullUrl()}}" />
    <meta name="robots" content="index,follow">
    <meta property="og:locale" content="{{app()->getLocale()}}">
    <meta name="description" content="{{ __('Register') }}">
    <meta property="og:type" content="product"/>
    <meta property="og:title" content="{{ __('Register') }}"/>
    <meta property="og:description" content="{{ __('Register') }}"/>
    <meta property="og:url" content="{{ route('client.registerForm') }}"/>
    <meta property="og:site_name" content="{{ __("GPU_Shop") }}"/>
@endsection
@push('styles')
    <link rel="stylesheet" href="{{asset('GPU-Shop/css/intlTelInput.css')}}">
    <style>
        .iti__flag {background-image: url("{{asset('GPU-Shop/img/flags.png')}}");}
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            .iti__flag {background-image: url("{{asset('GPU-Shop/img/flags@2x.png')}}");}
        }
    </style>
@endpush
@section('content')

    <div class="breadcrumb-area pt-205 pb-210" style="background-image: url({{registerImage()}})">
        <div class="container">
            <div class="breadcrumb-content">
                <h2>{{ __('Register') }}</h2>
                <ul>
                    <li><a href="/">{{ __('Home') }}</a></li>
                    <li> {{ __('Register') }} </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- register-area start -->
    <div class="register-area ptb-100">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 col-12 col-lg-6 col-xl-6 ml-auto mr-auto">
                    <div class="login">
                        <div class="login-form-container">
                            <form action="{{ route('client.register') }}" method="POST">
                                @csrf
                                <div class="form-group">
                                    <input  type="text" aria-label="{{ __('Name') }}" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus placeholder="{{ __('Name') }}">
                                    @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>

                                <div class="form-group">
                                    <input type="text" aria-label="{{ __('Username') }}" class="form-control @error('username') is-invalid @enderror" name="username" value="{{ old('username') }}" required autocomplete="username" placeholder="{{ __('Username') }}">
                                    @error('username')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>

                                <div class="form-group">
                                    <input type="text" aria-label="{{ __('Email')  }}" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" autocomplete="email" placeholder="{{ __('Email')  }}{{__('Option')}}">
                                    @if($errors->isEmpty())
                                        <small  class="form-text text-muted">{!! __("Email Note") !!} </small>
                                    @endif
                                    @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>

                                <div class="form-group">
                                    <input type="password" aria-label="{{ __('Password') }}" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password" placeholder="{{ __('Password') }}">
                                    @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                    <input type="password" aria-label="Password Confirmation" class="form-control" name="password_confirmation" required autocomplete="new-password" placeholder="{{ __('Confirm Password') }}">
                                </div>

                                <div class="form-group">
                                    <input type="tel" id="phone" aria-label="{{ __('Phone Number') }}" class="form-control @error('phone_number') is-invalid @enderror" name="phone_number" min="11" value="{{ old('phone_number') }}" required placeholder="{{ __('Phone Number') }}">
                                    @if($errors->isEmpty())
                                        <small  class="form-text text-muted">{!! __("Phone Note") !!}</small>
                                    @endif
                                    @error('phone_number')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input class="@error('agree') is-invalid @enderror" aria-label="{{__('Agree Conditions')}}" type="checkbox" name="agree" id="invalidCheck" {{ old('agree') ? 'checked' : '' }} required>
                                    <label class="custom-control-label" for="invalidCheck">
                                        {{__('Agree Conditions')}}
                                    </label>
                                </div>

                                <div class="button-box">
                                    <button type="submit" class="default-btn floatright">{{ __('Register') }}</button>
                                    <small  class="form-text text-muted"><strong>{{ __("Thank You") }}</strong></small>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <!-- register-area end -->
@endsection

@push('scripts')
    <script src="{{asset('GPU-Shop/js/intlTelInput.js')}}"></script>
    <script>
        var input = document.querySelector("#phone");
        var reset = function () {
        input.classList.remove("error");
        };
        var iti = window.intlTelInput(input, {
        initialCountry: "auto",
        nationalMode: true,
        separateDialCode: true,
        hiddenInput: "phone_number",
        geoIpLookup: function (callback) {
        $.get('https://ipinfo.io', function () {
        }, "jsonp").always(function (resp) {
        var countryCode = (resp && resp.country) ? resp.country : "";
        callback(countryCode);
        });
        },
        utilsScript: "{{ asset("GPU-Shop/js/utils.js") }}"
        });
        $("#phone_number").val($("#phone").intlTelInput("getSelectedCountryData").dialCode)

    </script>
@endpush
