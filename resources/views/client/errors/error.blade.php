<!DOCTYPE html>
<html>
<head>
    <link href="https://fonts.googleapis.com/css?family=Ropa+Sans" rel="stylesheet">
    <link href="http://netdna.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background-color: #332851;
        }
        body .base {
            width: 100%;
            height: 100vh;
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            flex-direction: column;
            -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        }
        body .base h1 {
            -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
            font-family: 'Ubuntu', sans-serif;
            text-transform: uppercase;
            text-align: center;
            font-size: 30vw;
            display: block;
            margin: 0;
            color: #9ae1e2;
            position: relative;
            z-index: 0;
            animation: colors 0.4s ease-in-out forwards;
            animation-delay: 1.7s;
        }

        body .base h2 {
            font-family: 'Cabin', sans-serif;
            color: #9ae1e2;
            font-size: 2vw;
            margin: 0;
            text-align: center;
            animation: colors 0.4s ease-in-out forwards;
            animation-delay: 2s;
            -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        }
        body .base h5 {
            font-family: 'Cabin', sans-serif;
            color: #9ae1e2;
            font-size: 2vw;
            margin: 0;
            text-align: center;
            opacity: 0;
            animation: show 2s ease-in-out forwards;
            color: #ca3074;
            animation-delay: 3s;
            -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        }
        @keyframes lock {
            50% {
                top: -4%;
            }
            100% {
                top: -6%;
            }
        }
        @keyframes colors {
            50% {
                transform: scale(1.1);
            }
            100% {
                color: #ca3074;
            }
        }
        @keyframes show {
            100% {
                opacity: 1;
            }
        }

    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

</head>
<body>
<div class="base io">
    <h1 class="io">{{$errorCode}}</h1>
    <h2>{{$errorMessage}}</h2>
    <h5></h5>
    <br>
    <a class="btn btn-secondary" href="/" role="button">Back Home</a>
</div>
<script>
    $(document).ready(function(){
        $(function animateByMe() {
            $('#some').animate({
                top:'-50px'
            },1000, function () {
                $(this).animate({

                    top:'-30px'

                },1000, function () {
                    animateByMe();
                });
            });

        }());
    });
</script>
</body>

</html>