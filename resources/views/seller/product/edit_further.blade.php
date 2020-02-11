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
        <form action="{{route('product.details.delete', $details )}}" method="POST" class="d-inline">
            @method('DELETE')
            @csrf
            <button type="submit" class="btn btn-sm btn-danger float-right">
                <i class="fa fa-trash"><strong> Delete</strong></i>
            </button>
        </form>
    <form method="POST" action="{{route('product.details.update',$details)}}" enctype="multipart/form-data">
        @csrf
        <div class="form-group">
            <label for="main_name_en_details">English Name of details</label>
            <input type="text" class="form-control @error('main_name_en_details') is-invalid @enderror" id="main_name_en_details" name="main_name_en_details" value="{{$details->name_en}}">
            <label for="main_name_ar_details">Arabic Name of details</label>
            <input type="text" class="form-control @error('main_name_ar_details') is-invalid @enderror" id="main_name_ar_details" name="main_name_ar_details" value="{{$details->name_ar}}" >

        </div>
        <hr>
        <div >
            <h6 style="display: inline">Add new one click on plus</h6>
            <a type="button" id="newOne">
                <img srcset="{{asset('assets/client/icons/plus.svg')}}" width="20%" height="20%">
            </a>
        </div><br>
        @foreach($details->subDetails as $index => $sub_detail)
        <div class="form-group inputDetails" id="inputDetails{{$index +1}}">
            <input type="text" placeholder="English Name of details" class="form-control form-control-sm @error('name_en_details') is-invalid @enderror" name="name_en_details[]" value="{{$sub_detail->name_en}}">
            <input type="text" placeholder="Arabic Name of details" class="form-control form-control-sm @error('name_ar_details') is-invalid @enderror" name="name_ar_details[]"  value="{{$sub_detail->name_ar}}">
            @if($index != 0)
            <input type="number" value="{{$sub_detail->price_egp}}" min="1" placeholder="Offer Price of Product EGP" class="form-control form-control-sm @error('price_egp_details') is-invalid @enderror disabled" name="price_egp_details[]" >
            <input type="number" value="{{$sub_detail->price_usd}}" min="1" placeholder="Offer Price of Product USD" class="form-control form-control-sm @error('price_usd_details') is-invalid @enderror disabled" name="price_usd_details[]" >
            <input type="number" value="{{$sub_detail->quantity}}" min="1" placeholder="Quantity" class="form-control form-control-sm @error('quantity_details') is-invalid @enderror" name="quantity_details[]" >
            @endif
        </div>
        <input type="file" id="images_details{{$index +1}}" class="form-control margin"  name="images_details{{$index +1}}[]" multiple>

        <div class="custom-control custom-checkbox">
             <input class="custom-control-input " type="checkbox" name="deleteSubDetails[]" id="invalidCheck{{$index}}" value="{{$sub_detail->id}}">
             <label class="custom-control-label" for="invalidCheck{{$index}}">
                {{__('Select what do you want to delete')}}
             </label>
        </div>
        <hr>
        @endforeach
        <hr>
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
                $('div[id^="inputDetails"]:last .form-control-sm').removeAttr("value");
                // var num = parseInt( $div.prop("id").match(/\d+/g), 10 ) +1;
                // var $inputDetails = $div.clone().prop('id', 'inputDetails'+num );
            });
        });
    </script>
@endpush