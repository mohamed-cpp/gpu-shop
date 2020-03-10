<div class="slider-area">
    <div class="slider-active owl-carousel">
        @foreach(sliderImages() as $slider)
            @php $slider = \App\GpuShopSetting::castValue( $slider->val, $slider->type) @endphp
        <div class="single-slider single-slider-hm1 bg-img ptb-260" style="background-image: url({{asset(config('websiteSettings.IMAGE_PUBLIC_DIR'))."/{$slider['image']}"}})">
            <div class="container">
                <div class="slider-content slider-content-style-1 {{$slider['animated']}}">
                    <h3 class="animated" style="color: {{$slider['titleColor']}}">{{$slider['title']}} <span style="color: {{$slider['specialColor']}}">{{$slider['special']}}</span></h3>
                    <h2 class="animated" style="color: {{$slider['headerColor']}}">{{$slider['header']}}</h2>
                    <p class="animated" style="color: {{$slider['textColor']}}">{{$slider['text']}} </p>
                    @if($slider['button-text'])
                    <a class="btn-hover slider-btn-style animated" href="{{$slider['urlButton']}}">{{$slider['button-text']}}</a>
                    @endif
                </div>
            </div>
        </div>
        @endforeach




    </div>
</div>