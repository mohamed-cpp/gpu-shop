@extends('client.app')
@section('title', __('Profile'))
@push('styles')
    <link rel="stylesheet" href="{{asset('GPU-Shop/css/intlTelInput.css')}}">
    <style>
        .iti__flag {background-image: url("{{asset('GPU-Shop/img/flags.png')}}");}
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            .iti__flag {background-image: url("{{asset('GPU-Shop/img/flags@2x.png')}}");}
        }
    </style>@endpush

@section('content')
            <div class="col">
                <div class="row">
                    <div class="col mb-3">
                        <div class="card">
                            <form class="form" method="POST" action="{{route('update.client.profile')}}" enctype="multipart/form-data">
                                @csrf
                                @method('put')
                            <div class="card-body">
                                <div class="e-profile w-75 mx-auto p-3">
                                    @if($errors)
                                        <ul class="list-group mb-3">
                                            @foreach($errors->all() as $error)
                                                <li class="list-group-item list-group-item-danger" style="margin-bottom: 2px;text-align: center;">{{$error}}</li>
                                            @endforeach
                                        </ul>
                                    @endif
                                    <div class="row">
                                        <div class="col-12 col-sm-auto mb-3">
                                            <div class="mx-auto" style="width: 140px;">
                                                <div class="d-flex justify-content-center align-items-center rounded" style="height: 140px; background-color: rgb(233, 236, 239);">
                                                    <img id="profile_image" src="{{$client->img ?asset('storage/client/images/'.$client->img) : '/GPU-Shop/img/avatar.jpg'}}" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                                            <div class="text-center text-sm-left mb-2 mb-sm-0">
                                                <h4 class="pt-sm-2 pb-1 mb-0 text-nowrap">{{$client->name}}</h4>
                                                <p class="mb-0">{{'@'. $client->username }}</p>
                                                <div class="mt-2">
                                                    <div class="custom-file">
                                                        <input type="file" class="custom-file-input" name="image" id="file">
                                                        <label class="custom-file-label" for="file">@lang('Choose file')</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center text-sm-right">
                                                <div class="text-muted"><small>Joined {{$client->created_at->format('jS F Y') }}</small></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="tab-content pt-3">
                                        <div class="tab-pane active">
                                                <div class="row">
                                                    <div class="col mb-12">
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="form-group">
                                                                    <label>@lang('Name')</label>
                                                                    <input class="form-control" type="text" name="name" value="{{$client->name}}">
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <div class="form-group">
                                                                    <label>@lang('Username')</label>
                                                                    <input class="form-control @error('username') is-invalid @enderror" type="text" name="username" value="{{$client->username}}">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="form-group">
                                                                    <label>@lang('Email Address')</label>
                                                                    <input class="form-control @error('email') is-invalid @enderror @if(! $client->email_verified_at && $client->email)is-invalid @elseif($client->email_verified_at) is-valid @endif" type="email" name="email" value="{{$client->email}}">
                                                                    @if(!$client->email_verified_at)
                                                                    <small  class="form-text text-muted">{{__("Need to verify Email")}}</small>
                                                                    <a class="btn btn-primary" href="{{route("client.email.verifyResend")}}" role="button">{{__('Verify')}}</a>
                                                                    @endif
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="form-group">
                                                                    <label>@lang('Phone Number')</label><br>
                                                                    <input type="tel" id="phone" class="form-control @error('phone_number') is-invalid @enderror @if(!$client->phone_verified_at)is-invalid @else is-valid @endif" min="11" value="{{$client->phone_number}}" required>
                                                                    @if(! $client->phone_verified_at)
                                                                    <small  class="form-text text-muted">{{__("Need to verify phone number")}}</small>
                                                                    <a class="btn btn-primary" href="{{route("verify.phone.client")}}" role="button">{{__('Verify')}}</a>
                                                                    @endif
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h5>@lang('Main Address')</h5>
                                                <div class="row">
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label>@lang('Address')</label>
                                                            <input class="form-control" type="text" name="address" value="{{$client->address}}">
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label>@lang('Town / City')</label>
                                                            <input class="form-control" type="text" name="city" value="{{$client->city}}">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row mb-12">
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label>@lang('State / County')</label>
                                                            <input class="form-control" type="text" name="country" value="{{$client->country}}">
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="form-group">
                                                            <label>@lang('Postcode / Zip')</label>
                                                            <input class="form-control" type="text" name="zip" value="{{$client->zip}}">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-12 col-sm-6 mb-3">
                                                        <h5 class="mb-2"><b>@lang('Change Password')</b></h5>
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="form-group">
                                                                    <label>@lang('Current Password')</label>
                                                                    <input class="form-control @error('old_password') is-invalid @enderror" type="password" name="old_password">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="form-group">
                                                                    <label>@lang('New Password')</label>
                                                                    <input class="form-control @error('new_password') is-invalid @enderror" type="password" name="new_password">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="form-group">
                                                                    <label>@lang('Confirm Password')</label>
                                                                    <input class="form-control" type="password" name="new_password_confirmation">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col d-flex justify-content-end">
                                                        <button class="btn btn-primary" type="submit">@lang('Save Changes')</button>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
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
        $("#phone_number").val($("#phone").intlTelInput("getSelectedCountryData").dialCode);
    </script>
    <script>
        $("#file").on("change", function(evt) {
            var tgt = evt.target ,
                files = tgt.files;

            if (FileReader && files && files.length) {
                var fr = new FileReader();
                fr.onload = function(){
                    document.getElementById('profile_image').src = fr.result;
                };
                fr.readAsDataURL(files[0]);
            }

            let fileName = $(this).val().split("\\").pop();
            $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
        });
    </script>
@endpush