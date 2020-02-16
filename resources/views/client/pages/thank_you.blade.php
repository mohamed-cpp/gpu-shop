@extends('client.app')
@push('styles')
    <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,900&display=swap" rel="stylesheet">

    <style>
    #card {
            text-align: center;
            /*padding: 40px 0;*/
            /*background: #EBF0F5;*/
    }
    .card h1 {
        color: #88B04B;
        font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
        font-weight: 900;
        font-size: 40px;
        margin-bottom: 10px;
    }
    .card p {
        color: #404F5E;
        font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
        font-size:20px;
        margin: 0;
    }
    .card i {
        color: #9ABC66;
        font-size: 100px;
        line-height: 200px;
        margin-left:-15px;
    }
    .card {

        background: white;
        padding: 60px;
        border-radius: 4px;
        box-shadow: 0 2px 3px #C8D0D8;
        display: inline-block;
        margin: 0 auto;
    }
</style>
@endpush
@section('content')
    <div id="card">
    <div class="card">
        <div style="border-radius:200px; height:400px; width:400px; background: #F8FAF5; margin:0 auto;">
            <div id="el5" class="el"></div>
        </div>
        <h1>Success</h1>
        <p>Thank you for using GPU-Shop<br/> we'll message you SOON!</p>
        @isset($id)
            <h4>Order ID:{{$id}}</h4>
        @endisset
    </div>
    </div>
@endsection
@push('scripts')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.6.3/lottie.min.js" integrity="sha256-lZIvAx83WLHALrd5UIfVRAkDgVmAIxUt8JqPhNZIs4Q=" crossorigin="anonymous"></script>
    <script>
    lottie.loadAnimation({
        container: el5, // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/assets/img/json/29-motorcycle.json' // the path to the animation json
    });
    window.setTimeout(function () {
        window.location = "/";
    }, 5000);
</script>
@endpush
