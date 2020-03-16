@extends('admin.app')

@section('content')
    <div class="container-fluid">
        <h6 class="m-0 font-weight-bold text-primary d-inline" >Add Subcategory</h6>
        <hr>
        <form method="post" action="{{route('subcategories.store')}}" enctype="multipart/form-data">
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
            <label for="titleEn">English Title of Subcategory For SEO</label>
            <input type="text" class="form-control @error('title_en') is-invalid @enderror" name="title_en" id="titleEn" value="{{old('title_en')}}" placeholder="Electronics">
            @error('title_en')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
            <label for="titleAr">Arabic Title of Subcategory For SEO</label>
            <input type="text" class="form-control @error('title_ar') is-invalid @enderror" name="title_ar" id="titleAr" value="{{old('title_ar')}}" placeholder="إلكترونيات">
            @error('title_ar')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
        </div>
        <div class="form-group">
            <label for="descriptionEn">English Description of Subcategory For SEO</label>
            <input type="text" class="form-control @error('description_en') is-invalid @enderror" name="description_en" id="descriptionEn" value="{{old('description_en')}}" placeholder="Electronics">
            @error('description_en')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
            <label for="descriptionAr">Arabic Description of Subcategory For SEO</label>
            <input type="text" class="form-control @error('description_ar') is-invalid @enderror" name="description_ar" id="descriptionAr" value="{{old('description_ar')}}" placeholder="إلكترونيات">
            @error('description_ar')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
        </div>
        <hr>
        <div class="form-group">
            <label for="nameEn">English URL of Subcategory</label>
            <input type="text" class="form-control @error('slug_en') is-invalid @enderror" name="slug_en" id="nameEn" value="{{old('slug_en')}}" placeholder="electronics-home-projects">
            @error('slug_en')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
            <label for="nameAr">Arabic URL of Subcategory</label>
            <input type="text" class="form-control @error('slug_ar') is-invalid @enderror" name="slug_ar" id="nameAr" value="{{old('slug_ar')}}" placeholder="مشاريع-الالكترونيات-للمنزلية">
            @error('slug_ar')
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
            <hr>
            <h3>Subcategory Image</h3>
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
