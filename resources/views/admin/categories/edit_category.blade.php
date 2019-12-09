@extends('admin.app')

@section('content')
    <div class="container-fluid">
        <h6 class="m-0 font-weight-bold text-primary d-inline" >Update {{$category->name}}</h6>
        <hr>
        <form method="post" action="{{route('categories.update',$category)}}">
            @method('PATCH')
            @csrf
            <div class="form-group">
                <label for="nameEn">English Name of Category</label>
                <input type="text" class="form-control @error('name_en') is-invalid @enderror" name="name_en" id="nameEn" value="{{ $category->name_en }}" placeholder="Electronics">
                @error('name_en')
                <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
                @enderror
                <label for="nameAr">Arabic Name of Category</label>
                <input type="text" class="form-control @error('name_ar') is-invalid @enderror" name="name_ar" id="nameAr" value="{{ $category->name_ar }}" placeholder="إلكترونيات">
                @error('name_ar')
                <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
                @enderror
            </div>
            <hr>
            <div class="form-group">
                <label for="sort">Sort</label>
                <input type="number" class="form-control @error('sort') is-invalid @enderror" name="sort" id="sort" value="{{ $category->sort }}" placeholder="Number" min="0">
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
                    <option value="1" {{ $category->status == 1 ? 'selected' : ''  }}>Enable</option>
                    <option value="0" {{ $category->status == 0 ? 'selected' : ''  }}>Disable</option>
                </select>
                @error('status')
                <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
                @enderror
            </div>
            <br>
            <button type="submit" class="btn btn-primary btn-user btn-block">{{ __('Update') }}</button>

        </form>
    </div>
@endsection
