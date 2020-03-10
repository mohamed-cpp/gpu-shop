@extends('admin.app')

@section('content')
    <div class="container-fluid">
        <h6 class="m-0 font-weight-bold text-primary d-inline" >Add Setting</h6>
        <hr>
        <form method="post" action="{{route('settings.update',$setting->id)}}" enctype="multipart/form-data">
            @csrf
            @method('PATCH')
            <div class="form-group">
                <label for="name">Name of Setting</label>
                <input type="text" class="form-control @error('name') is-invalid @enderror" name="name"  value="{{$setting->name}}" id="name" placeholder="CASH_PAYMENT">
                @error('name')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <hr>
            @if(is_file(config('websiteSettings.IMAGE_DIR')."/{$setting->val}"))
                <img src="{{asset(config('websiteSettings.IMAGE_PUBLIC_DIR')."/{$setting->val}")}}" height="60%" width="60%" class="modal-hover-opacity img-thumbnail" style="margin: auto;display: block;" >
                <hr>
            @else
            <div class="form-group">
                <label for="val">Value</label>
                <input type="text" class="form-control @error('val') is-invalid @enderror" name="val" value="{{$setting->val}}" id="val">
                @error('val')
                <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            @endif
            <div class="form-group">
                <label for="type">type</label>
                <input type="text" class="form-control @error('type') is-invalid @enderror" name="type" value="{{$setting->type}}" id="type">
                @error('type')
                <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div class="form-group">
                @error('main_image')
                <div class="invalid-feedback" role="alert" style="display: block !important;">
                    <strong>{{ $message }}</strong>
                </div>
                @enderror
                @include('seller.layout.file_upload')
            </div>
            <button type="submit" class="btn btn-primary btn-user btn-block">{{ __('Add') }}</button>

        </form>
    </div>
@endsection
