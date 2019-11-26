@extends('admin.app')

@section('content')
    <div class="container-fluid">
        <h6 class="m-0 font-weight-bold text-primary d-inline" >Edit {{$subcategory->name}}</h6>
        <hr>
        <form method="post" action="{{route('subcategories.update',$subcategory)}}" enctype="multipart/form-data">
            @method('PATCH')
            @csrf
            <div class="form-group">
                <label for="nameEn">English Name of Subcategory</label>
                <input type="text" class="form-control @error('name_en') is-invalid @enderror" name="name_en" id="nameEn" value="{{$subcategory->name_en}}" placeholder="Electronics">
                @error('name_en')
                <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
                @enderror
                <label for="nameAr">Arabic Name of Subcategory</label>
                <input type="text" class="form-control @error('name_ar') is-invalid @enderror" name="name_ar" id="nameAr" value="{{$subcategory->name_ar}}" placeholder="إلكترونيات">
                @error('name_ar')
                <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
                @enderror
            </div>
            <hr>
            <div class="form-group">
                <label for="nameEn">English URL of Subcategory</label>
                <input type="text" class="form-control @error('slug_en') is-invalid @enderror" name="slug_en" id="nameEn" value="{{$subcategory->slug_en}}" placeholder="electronics-home-projects">
                @error('slug_en')
                <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
                @enderror
                <label for="nameAr">Arabic URL of Subcategory</label>
                <input type="text" class="form-control @error('slug_ar') is-invalid @enderror" name="slug_ar" id="nameAr" value="{{$subcategory->slug_ar}}" placeholder="مشاريع-الالكترونيات-للمنزلية">
                @error('slug_ar')
                <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
                @enderror
            </div>
            <hr>
            <div class="form-group">
                <label for="sort">Sort</label>
                <input type="number" class="form-control @error('sort') is-invalid @enderror" name="sort" id="sort" value="{{$subcategory->sort}}" placeholder="Number" min="0">
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
                    <option value="1" {{ $subcategory->status == 1 ? 'selected' : ''  }}>Enable</option>
                    <option value="0" {{ $subcategory->status == 0 ? 'selected' : ''  }}>Disable</option>
                </select>
                @error('status')
                <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
                @enderror
            </div>
            <hr>
            <img src="{{asset($subcategory->image)}}" class="img-thumbnail" style="margin-bottom: 10px" alt="{{$subcategory->name}}">
            <h3>Change Subcategory Image</h3>
            <p>An image must be 1920x500</p>
            @error('image')
            <span class="invalid-feedback" style="display: block !important;" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
            @include('admin.layout.file_upload')
            <br>
            <button type="submit" class="btn btn-primary btn-user btn-block">{{ __('Add') }}</button>

        </form>
    </div>
@endsection
