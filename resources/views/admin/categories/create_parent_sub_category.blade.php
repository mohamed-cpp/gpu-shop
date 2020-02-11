@extends('admin.app')

@section('content')
    <div class="container-fluid">
        <h6 class="m-0 font-weight-bold text-primary d-inline" >Add Parent Subcategory</h6>
        <hr>
        <form method="post" action="{{route('create.parent')}}">
            @csrf
            <input type="hidden" value="{{app('request')->input('category_id')}}" name="category_id">
        <div class="form-group">
            <label for="nameEn">English Name of Subcategory</label>
            <input type="text" class="form-control @error('name_en') is-invalid @enderror" name="name_en" id="nameEn" value="{{old('name_en')}}" placeholder="Electronics">
            @error('name_en')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
            <label for="nameAr">Arabic Name of Subcategory</label>
            <input type="text" class="form-control @error('name_ar') is-invalid @enderror" name="name_ar" id="nameAr" value="{{old('name_ar')}}" placeholder="إلكترونيات">
            @error('name_ar')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
        </div>
        <hr>
            <div class="form-group">
                <label for="sort">Sort</label>
                <input type="number" class="form-control @error('sort') is-invalid @enderror" name="sort" id="sort" value="{{old('sort')}}" placeholder="Number" min="0">
                @error('sort')
                <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
                @enderror
            </div>
        <hr>
        <div class="form-group">
            <label for="status">Status</label>
            <select class="form-control @error('status') is-invalid @enderror" id="status" name="status">
                <option value="" selected disabled hidden>Choose Status</option>
                <option value="1">Enable</option>
                <option value="0">Disable</option>
            </select>
            @error('status')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
        </div>
        <button type="submit" class="btn btn-primary btn-user btn-block">{{ __('Add') }}</button>

    </form>
    </div>
@endsection
