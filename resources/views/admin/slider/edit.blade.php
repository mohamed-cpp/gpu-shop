@extends('admin.app')
@push('styles')
    <style>
        div.image {
            content:url({{ asset(config('websiteSettings.IMAGE_PUBLIC_DIR')."/{$sliderJson['image']}") }});
            width: 950px;
            height: 450px;
        }

        .containerImg {
            position: relative;
            text-align: center;
            color: white;
            width: 950px;
            height: 450px;
        }

        .containerImg .textImg {
            position: absolute;
            top: 250px;
            left: 6px;
            color: #000000;
            letter-spacing: 0.5px;
            width: 47%;
        }

        .containerImg .titleImg {
            position: absolute;
            top: 160px;
            left: 16px;
            color: #000000;
            font-family: pacifico, serif;
            font-size: 32px;
        }
        .containerImg .titleImg span{
            color: red;
        }

        .containerImg .btn-home-page{
            position: absolute;
            top: 300px;
            left: 16px;
            border: 2px solid #000000;
            color: #000000;
            display: inline-block;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.5px;
            line-height: 1;
            margin-top: 19px;
            padding: 23px 49px 24px;
            text-transform: uppercase;
            -webkit-transform: perspective(1px) translateZ(0px);
            transform: perspective(1px) translateZ(0px);
        }

        .containerImg .headerImg {
            font-family: 'Open Sans', sans-serif;
            position: absolute;
            top: 190px;
            left: 16px;
            color: #000000;
            font-size: 44px;
            font-weight: bold;
            letter-spacing: 2.5px;
            margin: 6px 0 19px;
        }
        .containerImg .btn-home-page:hover {
            border: 2px solid #ee3333;
        }

    </style>
@endpush
@section('content')
    <div class="container-fluid">
        <h6 class="m-0 font-weight-bold text-primary d-inline" >Add Slider</h6>
        <hr>
        <form method="post" action="{{route('slider.update',$slider->id)}}" enctype="multipart/form-data">
            @csrf
            @method('PATCH')
            <input type="hidden" name="oldImage" value="{{$sliderJson['image']}}">
            <div class="containerImg">
                <div class="titleImg" style="color: {{$sliderJson['titleColor']}}">{{$sliderJson['title']}} @if($sliderJson['special']) <span style="color: {{$sliderJson['specialColor']}}">{{$sliderJson['special']}}</span>@endif</div>
                <div class="headerImg" style="color: {{$sliderJson['headerColor']}}">{{$sliderJson['header']}}</div>
                <p class="textImg" style="color: {{$sliderJson['textColor']}}">{{$sliderJson['text']}}</p>
                <div class="btn-home-page @if(!$sliderJson['button-text']) d-none @endif">{{$sliderJson['button-text']}}</div>
                <div class="image" id="image"></div>
            </div>

            <div class="form-group">
                @error('main_image')
                <div class="invalid-feedback" role="alert" style="display: block !important;">
                    <strong>{{ $message }}</strong>
                </div>
                @enderror
                <div class="mt-2">
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" name="image" id="file">
                        <label class="custom-file-label" for="file">Choose file</label>
                    </div>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-5">
                    <input type="text" class="form-control" name="title" id="title" value="{{$sliderJson['title']}}">
                </div>
                <div class="form-group col-md-1">
                    <input type="color" id="titleColor" name="titleColor" value="{{$sliderJson['titleColor']}}">
                </div>
                <div class="form-group col-md-5">
                    <input type="text" class="form-control" name="special" id="special" value="{{$sliderJson['special']}}">
                </div>
                <div class="form-group col-md-1">
                    <input type="color" id="specialColor" name="specialColor" value="{{$sliderJson['specialColor']}}">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-5">
                    <input type="text" class="form-control" name="header" id="header" value="{{$sliderJson['header']}}">
                </div>
                <div class="form-group col-md-5">
                    <input type="color" id="headerColor" name="headerColor" value="{{$sliderJson['headerColor']}}">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-5">
                    <input type="text" class="form-control" name="text" id="text" value="{{$sliderJson['text']}}">
                </div>
                <div class="form-group col-md-5">
                    <input type="color" id="textColor" name="textColor" value="{{$sliderJson['textColor']}}">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-5">
                    <input type="text" class="form-control @error('button-text') is-invalid @enderror" name="button-text" id="button-text" value="{{$sliderJson['button-text']}}">
                </div>
                <div class="form-group col-md-5">
                    <input type="text" id="urlButton" name="urlButton" value="{{$sliderJson['urlButton']}}">
                </div>
            </div>

            <div class="form-group">
                <h2>Slider Animated</h2>
                <span>Animated 1</span>
                <img src="{{asset('\dashboard\images\slider_one.gif')}}" alt="HTML5 Icon" style="width:350px;height:250px;">
                <span>Animated 2</span>
                <img src="{{asset('\dashboard\images\slider_two.gif')}}" alt="HTML5 Icon" style="width:350px;height:250px;">
                <div class="form-group">
                    <label for="animated">select animate</label>
                    <select class="form-control" id="animated" name="animated">
                        <option value="slider-animated-1" @if($sliderJson['animated'] == 'slider-animated-1') selected @endif>animated 1</option>
                        <option value="slider-animated-2"  @if($sliderJson['animated'] == 'slider-animated-1') selected @endif>animated 2</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <h2>Text Direction</h2>
                <div class="form-group">
                    <label for="direction">select direction</label>
                    <select class="form-control" id="direction" name="direction">
                        <option value="" @if(!$sliderJson['direction']) selected @endif>Left To Right</option>
                        <option value="slider-text-right" @if($sliderJson['direction'] == 'slider-text-right') selected @endif>Right To Left</option>
                    </select>
                </div>
            </div>

            <button type="submit" class="btn btn-primary btn-user btn-block">{{ __('Update') }}</button>
        </form>
    </div>

@endsection
@push('scripts')
    <script>
        $("#title").keyup(function(){
            $(".titleImg").text($("#title").val());
        });
        document.getElementById("titleColor").onchange = function() {
            backRGB = this.value;
            $(".titleImg").css('color', backRGB);
        };

        $("#header").keyup(function(){
            $(".headerImg").text($("#header").val());
        });
        document.getElementById("headerColor").onchange = function() {
            backRGB = this.value;
            $(".headerImg").css('color', backRGB);
        };

        $("#special").keyup(function(){
            $(".titleImg span").remove();
            $(".titleImg").append(" <span>"+$("#special").val()+"</span>");
        });
        document.getElementById("specialColor").onchange = function() {
            backRGB = this.value;
            $(".titleImg span").css('color', backRGB);
        };

        $("#text").keyup(function(){
            $(".textImg").text($("#text").val());
        });
        document.getElementById("textColor").onchange = function() {
            backRGB = this.value;
            $(".textImg").css('color', backRGB);
        };


        $("#button-text").keyup(function(){
            var btn = $(".btn-home-page");
            var btnText = $("#button-text");
            btn.removeClass("d-none");
            btn.text(btnText.val());
            if(btnText.val().length <= 0 ){
                btn.addClass("d-none");
            }
        });


        $("#file").on("change", function(evt) {
            var tgt = evt.target ,
                files = tgt.files;

            if (FileReader && files && files.length) {
                var fr = new FileReader();
                fr.onload = function(){
                    $('#image').attr({style: "content:url("+fr.result+")" });
                };
                fr.readAsDataURL(files[0]);
            }

            let fileName = $(this).val().split("\\").pop();
            $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
        });
    </script>
@endpush
