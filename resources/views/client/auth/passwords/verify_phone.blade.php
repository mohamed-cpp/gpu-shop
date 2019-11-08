@extends('client.app')

@section('content')

    <div class="register-area ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-12 col-lg-6 col-xl-6 ml-auto mr-auto">
                    <div class="login">
                        <div class="login-form-container">
                            <div class="login-form">
                                <form action="{{route('client.send.reset.password')}}" method="POST">
                                    @csrf
                                    <input type="tel" class="form-control" value="{{$phone}}" disabled>

                                    <input type="tel" class="form-control" value="{{$phone}}" name="phone" hidden>
                                    <!-- Group of default radios - option 1 -->
                                    <div class="custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="defaultGroupExample1" name="message" value="sms" checked>
                                        <label class="custom-control-label" for="defaultGroupExample1">{{__('Send message via SMS')}}</label>
                                    </div>
                                    <!-- Group of default radios - option 2 -->
                                    <div class="custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="defaultGroupExample2" name="message" value="whatsapp">
                                        <label class="custom-control-label" for="defaultGroupExample2">{{__('Send message via WhatsApp')}}</label>
                                    </div>
                                    <br>
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