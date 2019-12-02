@extends('seller.app')
@section('title', 'Add Product')
@push('styles')
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.9/dist/css/bootstrap-select.min.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-fileinput/4.4.7/css/fileinput.css" media="all" rel="stylesheet" type="text/css"/>
    <style>
    #myTab a{
        color: #3f9ae5 ;
    }
    #myTab .active{
        color: #545454;
    }
    .select2-dropdown {
        top: 22px !important;
        left: 8px !important;
    }
    .select2-selection__clear{
        margin-left: 10px;
    }
    .tab-pane{
        margin-top: 5px;
    }
    .subcategory{
        display: inline;
    }
</style>

    <style type="text/css">

        .main-section{

            margin:0 auto;

            padding: 20px;

            margin-top: 100px;

            background-color: #fff;

            box-shadow: 0px 0px 20px #c1c1c1;

        }

        .fileinput-remove,

        .fileinput-upload{

            display: none;

        }

    </style>

@endpush
@section('content')
    <form method="POST" action="{{route('store.product')}}" enctype="multipart/form-data">
        @csrf
    <div class="container-fluid">
        <h6 class="m-0 font-weight-bold text-primary d-inline" >Add Product</h6>
        @if($errors)
            <ul class="list-group">
                @foreach($errors->all() as $key => $message)
                    <li class="list-group-item list-group-item-danger" style="margin-bottom: 2px;"><span>{{$key + 1}}. </span>{{$message}}</li>
                @endforeach
            </ul>
            <hr>
        @endif
        <hr>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="arabic-tab" data-toggle="tab" href="#arabic" role="tab" aria-controls="arabic" aria-selected="true">Arabic</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="english-tab" data-toggle="tab" href="#english" role="tab" aria-controls="english" aria-selected="false">English</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="data-tab" data-toggle="tab" href="#data" role="tab" aria-controls="data" aria-selected="false">Data</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="discount-tab" data-toggle="tab" href="#discount" role="tab" aria-controls="discount" aria-selected="false">Discount</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="images-tab" data-toggle="tab" href="#images" role="tab" aria-controls="images" aria-selected="false">Images</a>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="arabic" role="tabpanel" aria-labelledby="arabic-tab">
                <div class="form-group">
                    <label for="nameAr">Arabic Name of Product</label>
                    <input type="text" class="form-control @error('name_ar') is-invalid @enderror" id="nameAr" name="name_ar" value="{{old('name_ar')}}" placeholder="هاتف هاواوى نوفا 3i">
                    @error('name_ar')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror

                    <label for="descriptionAr">Arabic Description of Product</label>
                    <input type="text" class="form-control @error('description_ar') is-invalid @enderror" name="description_ar" id="descriptionAr" value="{{old('description_ar')}}" placeholder="هاتف هاواوى نوفا 3i.....">
                    @error('description_ar')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="SlugAr">Arabic Slug of Product</label>
                    <input type="text" class="form-control @error('slug_ar') is-invalid @enderror" id="slugAr" name="slug_ar" value="{{old('slug_ar')}}" placeholder="هاتف-هاواوى-نوفا">
                    @error('slug_ar')
                    <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div id="metaDivAr">
                <h6 style="display: inline">If you want add custom name and description for Google(SEO) click on Plus</h6>
                <a type="button" id="showAr">
                    <img srcset="{{asset('assets/client/icons/plus.svg')}}" width="20%" height="20%">
                </a>
                </div>
                <div class="form-group" style="display: none" id="metaAr">
                    <hr>
                    <label for="titleAr">Arabic Meta Title of Product</label>
                    <input type="text" class="form-control @error('title_meta_ar') is-invalid @enderror" id="titleAr" name="title_meta_ar" value="{{old('title_meta_ar')}}" placeholder="هاتف هاواوى نوفا 3i">
                    @error('title_meta_ar')
                    <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror

                    <label for="descriptionMetaAr">Arabic Meta Description of Product</label>
                    <input type="text" class="form-control @error('description_meta_ar') is-invalid @enderror" name="description_meta_ar" id="descriptionMetaAr" value="{{old('description_meta_ar')}}" placeholder="هاتف هاواوى نوفا 3i.....">
                    @error('description_meta_ar')
                    <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
            </div>

            <div class="tab-pane fade" id="english" role="tabpanel" aria-labelledby="english-tab">
                <div class="form-group">
                    <label for="nameEn">English Name of Product</label>
                    <input type="text" class="form-control @error('name_en') is-invalid @enderror" id="nameEn" name="name_en" value="{{old('name_en')}}" placeholder="huawei nova 3i">
                    @error('name_en')
                    <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror

                    <label for="descriptionEn">English Description of Product</label>
                    <input type="text" class="form-control @error('description_en') is-invalid @enderror" name="description_en" id="descriptionEn" value="{{old('description_en')}}" placeholder="huawei nova 3i...">
                    @error('description_en')
                    <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="slugEn">English Slug of Product</label>
                    <input type="text" class="form-control @error('slug_en') is-invalid @enderror" id="slugEn" name="slug_en" value="{{old('slug_en')}}" placeholder="huawei-nova-3i">
                    @error('slug_en')
                    <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div id="metaDivEn">
                    <h6 style="display: inline">If you want add custom name and description for Google(SEO) click on Plus</h6>
                    <a type="button" id="showEn">
                        <img srcset="{{asset('assets/client/icons/plus.svg')}}" width="20%" height="20%">
                    </a>
                </div>
                <div class="form-group" style="display: none" id="metaEn">
                    <hr>
                    <label for="titleEn">English Meta Title of Product</label>
                    <input type="text" class="form-control @error('title_meta_en') is-invalid @enderror" id="titleEn" name="title_meta_en" value="{{old('title_meta_en')}}" placeholder="Huawei Nova 3i">
                    @error('title_meta_en')
                    <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror

                    <label for="descriptionMetaEn">English Meta Description of Product</label>
                    <input type="text" class="form-control @error('description_meta_en') is-invalid @enderror" name="description_meta_en" id="descriptionMetaEn" value="{{old('description_meta_en')}}" placeholder="Huawei Nova 3i...">
                    @error('description_meta_en')
                    <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
            </div>

            <div class="tab-pane fade" id="data" role="tabpanel" aria-labelledby="data-tab">

                <div class="form-group">
                    <label for="priceEgp">Price of Product EGP</label>
                    <input type="number" min="1" class="form-control @error('price_egp') is-invalid @enderror" id="priceEgp" name="price_egp" value="{{old('price_egp')}}">
                    @error('price_egp')
                    <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                    <label for="priceUsd">Price of Product USD</label>
                    <input type="number" min="1" class="form-control @error('price_usd') is-invalid @enderror" id="priceUsd" name="price_usd" value="{{old('price_usd')}}">
                    @error('price_usd')
                    <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <hr>
                <div class="form-group">
                    <label for="quantity">Quantity of Product</label>
                    <input type="number" min="1" class="form-control @error('quantity') is-invalid @enderror" id="quantity" name="quantity" value="{{old('quantity')}}">
                    @error('quantity')
                    <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <hr>

                <div class="form-group">
                    <h5>Select Subcategories You Want</h5>
                    <select class="selectpicker" multiple="multiple" data-live-search="true" name="subcategories[]">
                        @foreach($subcategories as $subcategory)
                            <option value="{{$subcategory->id}}">{{$subcategory->name}}</option>
                        @endforeach
                    </select>
                    @error('subcategories')
                    <span class="invalid-feedback"  style="display: inline !important;" role="alert">
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
            </div>

            <div class="tab-pane fade" id="discount" role="tabpanel" aria-labelledby="discount-tab">
                <div class="form-group row">
                    <label for="datetimeStart" class="col-2 col-form-label">Start Discount At:</label>
                    <div class="col-10">
                        <input class="form-control" name="offer_start_at" value="{{old('offer_start_at')}}" type="datetime-local" id="datetimeStart">
                    </div>
                    @error('offer_start_at')
                    <span class="invalid-feedback" style="display: inline !important;" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                    <label for="datetimeEnd" class="col-2 col-form-label">End Discount At:</label>
                    <div class="col-10">
                        <input class="form-control" name="offer_end_at" value="{{old('offer_end_at')}}" type="datetime-local" id="datetimeEnd">
                    </div>
                    @error('offer_end_at')
                    <span class="invalid-feedback" style="display: inline !important;" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="offerPriceEgp">Offer Price of Product EGP</label>
                    <input type="number" min="1" class="form-control @error('offer_price_egp') is-invalid @enderror" id="offerPriceEgp" name="offer_price_egp" value="{{old('offer_price_egp')}}">
                    @error('offer_price_egp')
                    <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                    <label for="offerPriceUSD">Offer Price of Product USD</label>
                    <input type="number" min="1" class="form-control @error('offer_price_usd') is-invalid @enderror" id="offerPriceUSD" name="offer_price_usd" value="{{old('offer_price_usd')}}">
                    @error('offer_price_usd')
                    <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
            </div>

            <div class="tab-pane fade" id="images" role="tabpanel" aria-labelledby="images-tab">

                @error('images')
                <span class="invalid-feedback" style="display: block !important;" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
                @enderror
                <div class="col-lg-8 col-sm-12 col-11 main-section">
                    <h2 class="text-center text-danger">Add Images</h2><br>
                    <div class="form-group">
                        <div class="file-loading">
                            <input id="file-1" type="file" name="images[]" multiple class="file" data-overwrite-initial="true" >
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <h3>Main Image of The Product</h3>
            @error('main_image')
            <span class="invalid-feedback" style="display: block !important;" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
            @include('seller.layout.file_upload')
        <button type="submit" class="btn btn-primary btn-user btn-block">{{ __('Add New Product') }}</button>
    </div>
    </form>
@endsection

@push('scripts')
    <script src="{{asset('dashboard/js/vue-upload-multiple-image.js')}}"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.9/dist/js/bootstrap-select.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-fileinput/4.4.7/js/fileinput.js" type="text/javascript"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-fileinput/4.4.7/themes/fa/theme.js" type="text/javascript"></script>

    <script type="text/javascript">
        $("#file-1").fileinput({
            theme: 'fa',
            allowedFileExtensions: ['jpg', 'jpeg', 'png', 'gif'],
            overwriteInitial: false,
            maxFileSize:2000,
            maxFilesNum: 10,
            slugCallback: function (filename) {
                return filename.replace('(', '_').replace(']', '_');
            }
        });
    </script>
    <script>

        $("#showAr").click(function(){
            $('#metaAr').show(2000);
            $("#metaDivAr").hide(500);
        });
        $("#showEn").click(function(){
            $('#metaEn').show(2000);
            $("#metaDivEn").hide(500);
        });

    </script>
@endpush