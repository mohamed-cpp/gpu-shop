@extends('seller.app')
@section('title', 'Add further')
@push('styles')
    <style>
        .margin{
            margin-bottom: 15px;
        }
        .inputDetails input{
            margin-bottom: 5px;
        }
    </style>

@endpush
@section('content')
    <div class="container-fluid">
        @if($errors)
            <ul class="list-group">
                @foreach($errors->all() as $key => $message)
                    <li class="list-group-item list-group-item-danger" style="margin-bottom: 2px;"><span>{{$key + 1}}. </span>{{$message}}</li>
                @endforeach
            </ul>
            <hr>
        @endif
    <form method="POST" action="{{route('product.details.store',$product)}}" enctype="multipart/form-data">
        @csrf

        <div class="form-group">
            <label for="main_name_en_details">English Name of details</label>
            <input type="text" class="form-control @error('main_name_en_details') is-invalid @enderror" id="main_name_en_details" name="main_name_en_details" value="{{old('main_name_en_details')}}">
            <label for="main_name_ar_details">Arabic Name of details</label>
            <input type="text" class="form-control @error('main_name_ar_details') is-invalid @enderror" id="main_name_ar_details" name="main_name_ar_details" value="{{old('main_name_ar_details')}}" >

        </div>
        <hr>
        <div >
            <h6 style="display: inline">Add new one click on plus</h6>
            <a type="button" id="newOne">
                <img srcset="{{asset('assets/client/icons/plus.svg')}}" width="20%" height="20%">
            </a>
        </div><br>
        <div class="form-group inputDetails" id="inputDetails1">
            <input type="text" placeholder="English Name of details" class="form-control form-control-sm @error('name_en_details') is-invalid @enderror" id="name_en_details" name="name_en_details[]">
            <input type="text" placeholder="Arabic Name of details" class="form-control form-control-sm @error('name_ar_details') is-invalid @enderror" id="name_ar_details" name="name_ar_details[]"  >
            <input type="number" hidden min="1" placeholder="Offer Price of Product EGP" class="form-control form-control-sm @error('price_egp_details') is-invalid @enderror disabled" id="price_egp_details" name="price_egp_details[]">
            <input type="number" hidden min="1" placeholder="Offer Price of Product USD" class="form-control form-control-sm @error('price_usd_details') is-invalid @enderror disabled" id="offerPriceUSD" name="price_usd_details[]" >
            <input type="number" hidden min="1" placeholder="Quantity" class="form-control form-control-sm @error('quantity_details') is-invalid @enderror disabled" id="quantity_details" name="quantity_details[]" >
        </div>
        <input type="file" id="images_details1" class="form-control margin @error('images_details') is-invalid @enderror"  name="images_details1[]" multiple>



        <hr>
        <div class="custom-control custom-checkbox">
            <input class="custom-control-input " type="checkbox" name="agree" id="invalidCheck">
            <label class="custom-control-label" for="invalidCheck">
                Add another details ?
            </label>
        </div>
        <br>
        <button type="submit" class="btn btn-primary btn-user btn-block">{{ __('Add New Product') }}</button>
    </form>
    </div>
@endsection

@push('scripts')
    <script type="text/javascript">
        $(function(){
            $("#newOne").click(function(){
                var $div = $('div[id^="inputDetails"]:last');
                var $input = $('input[id^="images_details"]:last');
                var numDiv = parseInt( $div.prop("id").match(/\d+/g), 10 ) +1;

                var newDiv = $($div).clone().prop('id','inputDetails'+numDiv).insertAfter($input);
                $($input).clone().prop('id','images_details'+numDiv).prop('name','images_details'+numDiv+'[]').insertAfter(newDiv);

                event.preventDefault();
                $('div[id^="inputDetails"]:last .disabled').removeAttr("hidden");
                // var num = parseInt( $div.prop("id").match(/\d+/g), 10 ) +1;
                // var $inputDetails = $div.clone().prop('id', 'inputDetails'+num );
            });
        });
    </script>
@endpush