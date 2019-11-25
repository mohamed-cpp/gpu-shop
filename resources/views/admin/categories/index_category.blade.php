@extends('admin.app')
@push('styles')
    <style>
    body {
    color: #6b7381;
    background: #f2f2f2;
    }
    .example .btn-toggle {
    top: 50%;
    transform: translateY(-50%);
    }
    .btn-toggle {
    margin: 0 4rem;
    padding: 0;
    position: relative;
    border: none;
    height: 1.5rem;
    width: 3rem;
    border-radius: 1.5rem;
    color: #6b7381;
    background: #bdc1c8;
    }
    .btn-toggle:focus,
    .btn-toggle.focus,
    .btn-toggle:focus.active,
    .btn-toggle.focus.active {
    outline: none;
    }
    .btn-toggle:before,
    .btn-toggle:after {
    line-height: 1.5rem;
    width: 4rem;
    text-align: center;
    font-weight: 600;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: absolute;
    bottom: 0;
    transition: opacity .25s;
    }
    .btn-toggle:before {
    content: 'D';
    left: -4rem;
    }
    .btn-toggle:after {
    content: 'E';
    right: -4rem;
    opacity: .5;
    }
    .btn-toggle > .handle {
    position: absolute;
    top: 0.1875rem;
    left: 0.1875rem;
    width: 1.125rem;
    height: 1.125rem;
    border-radius: 1.125rem;
    background: #fff;
    transition: left .25s;
    }
    .btn-toggle.active {
    transition: background-color 0.25s;
    }
    .btn-toggle.active > .handle {
    left: 1.6875rem;
    transition: left .25s;
    }
    .btn-toggle.active:before {
    opacity: .5;
    }
    .btn-toggle.active:after {
    opacity: 1;
    }
    .btn-toggle.btn-sm:before,
    .btn-toggle.btn-sm:after {
    line-height: -0.5rem;
    color: #fff;
    letter-spacing: .75px;
    left: 0.41250000000000003rem;
    width: 2.325rem;
    }
    .btn-toggle.btn-sm:before {
    text-align: right;
    }
    .btn-toggle.btn-sm:after {
    text-align: left;
    opacity: 0;
    }
    .btn-toggle.btn-sm.active:before {
    opacity: 0;
    }
    .btn-toggle.btn-sm.active:after {
    opacity: 1;
    }

    .btn-toggle:before,
    .btn-toggle:after {
    color: #6b7381;
    }
    .btn-toggle.active {
    background-color: #29b5a8;
    }

    .btn-toggle.btn-sm {
    margin: 0 0.5rem;
    padding: 0;
    position: relative;
    border: none;
    height: 1.5rem;
    width: 3rem;
    border-radius: 1.5rem;
    }
    .btn-toggle.btn-sm:focus,
    .btn-toggle.btn-sm.focus,
    .btn-toggle.btn-sm:focus.active,
    .btn-toggle.btn-sm.focus.active {
    outline: none;
    }
    .btn-toggle.btn-sm:before,
    .btn-toggle.btn-sm:after {
    line-height: 1.5rem;
    width: 0.5rem;
    text-align: center;
    font-weight: 600;
    font-size: 0.55rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: absolute;
    bottom: 0;
    transition: opacity .25s;
    }
    .btn-toggle.btn-sm:before {
    content: 'Dis';
    left: -0.5rem;
    }
    .btn-toggle.btn-sm:after {
    content: 'Ena';
    right: -0.5rem;
    opacity: .5;
    }
    .btn-toggle.btn-sm > .handle {
    position: absolute;
    top: 0.1875rem;
    left: 0.1875rem;
    width: 1.125rem;
    height: 1.125rem;
    border-radius: 1.125rem;
    background: #fff;
    transition: left .25s;
    }
    .btn-toggle.btn-sm.active {
    transition: background-color 0.25s;
    }
    .btn-toggle.btn-sm.active > .handle {
    left: 1.6875rem;
    transition: left .25s;
    }
    .btn-toggle.btn-sm.active:before {
    opacity: .5;
    }
    .btn-toggle.btn-sm.active:after {
    opacity: 1;
    }
    .btn-toggle.btn-sm.btn-sm:before,
    .btn-toggle.btn-sm.btn-sm:after {
    line-height: -0.5rem;
    color: #fff;
    letter-spacing: .75px;
    left: 0.41250000000000003rem;
    width: 2.325rem;
    }
    .btn-toggle.btn-sm.btn-sm:before {
    text-align: right;
    }
    .btn-toggle.btn-sm.btn-sm:after {
    text-align: left;
    opacity: 0;
    }
    .btn-toggle.btn-sm.btn-sm.active:before {
    opacity: 0;
    }
    .btn-toggle.btn-sm.btn-sm.active:after {
    opacity: 1;
    }

    .btn-toggle.btn-xs.active > .handle {
    left: 1.125rem;
    transition: left .25s;
    }

    a.btn:hover {
        -webkit-transform: scale(1);
        -moz-transform: scale(1);
        -o-transform: scale(1);
    }
    a.btn {
        -webkit-transform: scale(0.8);
        -moz-transform: scale(0.8);
        -o-transform: scale(0.8);
        -webkit-transition-duration: 0.5s;
        -moz-transition-duration: 0.5s;
        -o-transition-duration: 0.5s;
    }

</style>
@endpush
@section('content')
    <div class="container-fluid">
        <!-- Page Heading -->
        <h1 class="h3 mb-2 text-gray-800">Categories</h1>
    <!-- DataTales Example -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary d-inline" >All Categories</h6>

            <a href="{{route('categories.create')}}" class="btn btn-primary a-btn-slide-text float-right">
                <span class="fa fa-plus" aria-hidden="true"></span>
                <span><strong>{{__('Add')}}</strong></span>
            </a>

        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Sort</th>
                        <th>Status</th>
                        <th>Quick Buttons</th>
                        <th>Edit</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($categories as $category)
                        @php $status = $category->status  @endphp
                    <tr>
                        <td>{{$category->name}}</td>
                        <td>{{$category->sort}}</td>
                        <td>{{$status == 1 ? __('Enabled') : __('Disabled') }}</td>
                        <td width="15%">
                            {!! Form::model(['method'=>'PATCH' ],['route' => ['quick.buttons',$category] ,'class'=>'d-inline'] ) !!}
                            @method('PATCH')
                            <button type="button"  onclick="myFunction({{$category->id}})" class="btn btn-sm btn-toggle {{$status == 1 ? 'active' : ''}}" data-toggle="button" aria-pressed="true" autocomplete="off">
                                <div class="handle"></div>
                            </button>
                            {!! Form::submit ("",['hidden','id'=>$category->id]) !!}
                            {!! Form::close() !!}

                            <form class="d-inline" method="post" action="{{route('categories.destroy',$category)}}">
                                @method('DELETE')
                                @csrf
                                <button type="submit" class="btn btn-danger btn-circle">
                                <i class="fas fa-trash"></i>
                                </button>
                            </form>

                        </td>
                        <td width="15%">
                            <div class=" text-center">
                            <a href="#" class="btn btn-primary a-btn-slide-text">
                                <span class="fa fa-wrench" aria-hidden="true"></span>
                                <span><strong>Edit</strong></span>
                            </a>
                            </div>
                        </td>
                    </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    </div>
    <!-- /.container-fluid -->
    @include('admin.layout.alert')
@endsection
@push('scripts')
<script>
    function myFunction(id) {
        document.getElementById(id).click();
    }
</script>
@endpush