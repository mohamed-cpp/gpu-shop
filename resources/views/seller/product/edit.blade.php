@extends('seller.app')
@section('title', 'Edit '.$product->name)
@push('styles')
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.9/dist/css/bootstrap-select.min.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-fileinput/4.4.7/css/fileinput.css" media="all" rel="stylesheet" type="text/css"/>
    <style>
    .input-group-append .btn,
    .input-group-prepend .btn {
        position: relative;
        z-index: 0;
    }
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
    .modal {
        z-index:1;
        display:none;
        padding-top:10px;
        position:fixed;
        left:0;
        top:0;
        width:100%;
        height:100%;
        overflow:auto;
        background-color:rgb(0,0,0);
        background-color:rgba(0,0,0,0.8)
    }

    .modal-content{
        margin: auto;
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }


    .modal-hover-opacity {
        opacity:1;
        filter:alpha(opacity=100);
        -webkit-backface-visibility:hidden
    }

    .modal-hover-opacity:hover {
        opacity:0.60;
        filter:alpha(opacity=60);
        -webkit-backface-visibility:hidden
    }


    .close {
        text-decoration:none;float:right;font-size:24px;font-weight:bold;color:white
    }
    .container1{
        display:inline-block;
        height: 30%;
        width: 30%;
    }
    .modal-content, #caption {

        -webkit-animation-name: zoom;
        -webkit-animation-duration: 0.6s;
        animation-name: zoom;
        animation-duration: 0.6s;
    }


    @-webkit-keyframes zoom {
        from {-webkit-transform:scale(0)}
        to {-webkit-transform:scale(1)}
    }

    @keyframes zoom {
        from {transform:scale(0)}
        to {transform:scale(1)}
    }

    </style>
    <style>
        ul {
            list-style-type: none;
        }

        li {
            display: inline-block;
        }

        input[type="checkbox"][id^="myCheckbox"] {
            display: none;
        }

        label {
            border: 1px solid #fff;
            padding: 10px;
            display: block;
            position: relative;
            margin: 10px;
            cursor: pointer;
        }

        label:before {
            background-color: white;
            color: white;
            content: " ";
            display: block;
            border-radius: 50%;
            border: 1px solid grey;
            position: absolute;
            top: -5px;
            left: -5px;
            width: 25px;
            height: 25px;
            text-align: center;
            line-height: 28px;
            transition-duration: 0.4s;
            transform: scale(0);
        }

        label img {
            transition-duration: 0.2s;
            transform-origin: 50% 50%;
        }

        :checked + label {
            border-color: #ddd;
        }

        :checked + label:before {
            content: "✓";
            background-color: grey;
            transform: scale(1);
        }

        :checked + label img {
            transform: scale(0.9);
            /* box-shadow: 0 0 5px #333; */
            z-index: -1;
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
    <form method="POST" action="{{route('product.update',$product)}}" enctype="multipart/form-data">
        @method('PATCH')
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
                    <input type="text" class="form-control @error('name_ar') is-invalid @enderror" id="nameAr" name="name_ar" value="{{$product->name_ar}}" placeholder="هاتف هاواوى نوفا 3i">
                    @error('name_ar')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror

                    <label for="descriptionAr">Arabic Description of Product</label>
                    <input type="text" class="form-control @error('description_ar') is-invalid @enderror" name="description_ar" id="descriptionAr" value="{{$product->description_ar}}" placeholder="هاتف هاواوى نوفا 3i.....">
                    @error('description_ar')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="SlugAr">Arabic Slug of Product</label>
                    <input type="text" class="form-control @error('slug_ar') is-invalid @enderror" id="slugAr" name="slug_ar" value="{{$product->slug_ar}}" placeholder="هاتف-هاواوى-نوفا">
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
                    <input type="text" class="form-control @error('title_meta_ar') is-invalid @enderror" id="titleAr" name="" value="{{ $product->title_meta_ar }}" placeholder="هاتف هاواوى نوفا 3i">
                    @error('title_meta_ar')
                    <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror

                    <label for="descriptionMetaAr">Arabic Meta Description of Product</label>
                    <input type="text" class="form-control @error('description_meta_ar') is-invalid @enderror" name="description_meta_ar" id="descriptionMetaAr" value="{{ $product->description_meta_ar }}" placeholder="هاتف هاواوى نوفا 3i.....">
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
                    <input type="text" class="form-control @error('name_en') is-invalid @enderror" id="nameEn" name="name_en" value="{{ $product->name_en }}" placeholder="huawei nova 3i">
                    @error('name_en')
                    <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror

                    <label for="descriptionEn">English Description of Product</label>
                    <input type="text" class="form-control @error('description_en') is-invalid @enderror" name="description_en" id="descriptionEn" value="{{ $product->description_en }}" placeholder="huawei nova 3i...">
                    @error('description_en')
                    <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="slugEn">English Slug of Product</label>
                    <input type="text" class="form-control @error('slug_en') is-invalid @enderror" id="slugEn" name="slug_en" value="{{ $product->slug_en }}" placeholder="huawei-nova-3i">
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
                    <input type="text" class="form-control @error('title_meta_en') is-invalid @enderror" id="titleEn" name="title_meta_en" value="{{ $product->title_meta_en }}" placeholder="Huawei Nova 3i">
                    @error('title_meta_en')
                    <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror

                    <label for="descriptionMetaEn">English Meta Description of Product</label>
                    <input type="text" class="form-control @error('description_meta_en') is-invalid @enderror" name="description_meta_en" id="descriptionMetaEn" value="{{ $product->description_meta_en }}" placeholder="Huawei Nova 3i...">
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
                    <input type="number" min="1" class="form-control @error('price_egp') is-invalid @enderror" id="priceEgp" name="price_egp" value="{{ $product->price_egp }}">
                    @error('price_egp')
                    <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                    <label for="priceUsd">Price of Product USD</label>
                    <input type="number" min="1" class="form-control @error('price_usd') is-invalid @enderror" id="priceUsd" name="price_usd" value="{{ $product->price_usd }}">
                    @error('price_usd')
                    <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <hr>
                <div class="form-group">
                    <label for="quantity">Quantity of Product</label>
                    <input type="number" min="1" class="form-control @error('quantity') is-invalid @enderror" id="quantity" name="quantity" value="{{ $product->quantity }}">
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
                            @php $id = $subcategory->id @endphp
                            <option
                                    value="{{$id}}"
                                    {{ in_array($id,$subcategories_id) ? 'selected' : '' }}>
{{--  {{ $product->subcategories_ids->contains($subcategory->id)   }}--}}
                                {{$subcategory->name}}
                            </option>
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
                        <option value="1" {{ $product->status == 1 ? 'select' : '' }}>Enable</option>
                        <option value="0" {{ $product->status == 0 ? 'select' : '' }}>Disable</option>
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
                        <input class="form-control" name="offer_start_at" value="{{ $product->offer_start_at ? \Carbon\Carbon::parse($product->offer_start_at)->format('Y-m-d\TH:i') : '' }}" type="datetime-local" id="datetimeStart">
                    </div>
                    @error('offer_start_at')
                    <span class="invalid-feedback" style="display: inline !important;" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                    <label for="datetimeEnd" class="col-2 col-form-label">End Discount At:</label>
                    <div class="col-10">
                        <input class="form-control" name="offer_end_at" value="{{ $product->offer_end_at ? \Carbon\Carbon::parse($product->offer_end_at)->format('Y-m-d\TH:i') : ''}}" type="datetime-local" id="datetimeEnd">
                    </div>
                    @error('offer_end_at')
                    <span class="invalid-feedback" style="display: inline !important;" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="offerPriceEgp">Offer Price of Product EGP</label>
                    <input type="number" min="1" class="form-control @error('offer_price_egp') is-invalid @enderror" id="offerPriceEgp" name="offer_price_egp" value="{{$product->offer_price_usd}}">
                    @error('offer_price_egp')
                    <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                    <label for="offerPriceUSD">Offer Price of Product USD</label>
                    <input type="number" min="1" class="form-control @error('offer_price_usd') is-invalid @enderror" id="offerPriceUSD" name="offer_price_usd" value="{{$product->offer_price_usd}}">
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
                <div>
                    <h4>Click on a image to select images you want to delete</h4>
                    @foreach($product->images as $image)
                        <div class="container1">
                            <ul>
                                <li>
                                    <input  type="checkbox" id="myCheckbox{{$image->id}}" value="{{$image->id}}" name="deleteImages[]"/>
                                    <label for="myCheckbox{{$image->id}}">
                                        <img ondblclick="onClick2(this)" src="{{asset('storage/product/images/'.$image->path)}}"  class="modal-hover-opacity img-thumbnail" style="margin: auto;display: block;" >
                                    </label>

                                </li>
                            </ul>

{{--                                <input type="checkbox" class="custom-control-input checkBoxes" name="checkBoxArray[]" value="{{$image->id}}">--}}
                        </div>
                    @endforeach
                    <div>
                        <h5 style="color: #bd2130; text-align: center">Double Click On A Image To View It</h5>
                        <img src="{{asset('assets/client/icons/doubleclick-icon-8.png')}}" style="display: block;margin: auto;" width="3.5%" height="3.5%">

                    </div>
                    <div id="modal02" class="modal" onclick="this.style.display='none'">
                            <span class="close">&times;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <div class="modal-content">
                                <img id="img02" style="max-width:100%">
                            </div>
                        </div>
                    </div>
                <hr>
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
            <img src="{{asset('storage/product/images/'.$product->main_image)}}" onclick="onClick(this)" height="35%" width="35%" class="modal-hover-opacity img-thumbnail" style="margin: auto;display: block;" >
            <div id="modal01" class="modal" onclick="this.style.display='none'">
                <span class="close">&times;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <div class="modal-content">
                    <img id="img01" style="max-width:100%">
                </div>
            </div>
            @include('seller.layout.file_upload')
        <button type="submit" class="btn btn-primary btn-user btn-block">{{ __('Add New Product') }}</button>
    </div>
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

        function onClick(element) {
            document.getElementById("img01").src = element.src;
            document.getElementById("modal01").style.display = "block";
        }
        function onClick2(element) {
            document.getElementById("img02").src = element.src;
            document.getElementById("modal02").style.display = "block";
        }

    </script>
@endpush