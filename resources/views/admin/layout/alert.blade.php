@if(session('flash'))
    @push('styles')
        <style>
            #alertCustom{
                position: fixed;
                right: 10px;
                top: 150px;
            }
        </style>
    @endpush
    <div id="alertCustom" style="display: none;"></div>
    @push('scripts')
        <script>
                var successAlert = "<div class='alert alert-success' role='alert'> {{session('flash')}} </div>",
                    failAlert = "<div class='alert alert-danger' role='alert'> {{session('flash')}} </div>",
                    str = "{{session('flash')}}",
                    s = str.includes("Success"),
                    f = str.includes("Fail");
                if(s){
                    $("#alertCustom").append(successAlert).show(1000);
                }else if(f){
                    $("#alertCustom").append(failAlert).show('slow');
                }
                $("#alertCustom").delay(3000).animate({right: '-500px'},"slow").fadeOut();
        </script>
    @endpush
 @endif