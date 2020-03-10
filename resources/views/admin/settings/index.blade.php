@extends('admin.app')
@push('styles')

@endpush
@section('content')
    <div class="container-fluid">
        <!-- Page Heading -->
        <h1 class="h3 mb-2 text-gray-800">Settings</h1>
        <!-- DataTales Example -->
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary d-inline" >All Settings</h6>

                <a href="{{route('settings.create')}}" class="btn btn-primary a-btn-slide-text float-right">
                    <span class="fa fa-plus" aria-hidden="true"></span>
                    <span><strong>{{__('Add new setting')}}</strong></span>
                </a>

            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Updated at</th>
                            <th>Edit</th>
                        </tr>
                        </thead>
                        <tbody>
                                @foreach($settings as $setting)
                                <tr>
                                <td>{{$setting->id}}</td>
                                <td>{{$setting->name}}</td>
                                <td>{{$setting->updated_at->format('jS F Y')}}</td>
                                <td width="25%">
                                    <div class=" text-center">
                                        <a href="{{route('settings.edit',[$setting->id])}}" class="btn btn-primary a-btn-slide-text">
                                            <span class="fa fa-wrench" aria-hidden="true"></span>
                                            <span><strong>Edit</strong></span>
                                        </a>
                                        <form class="d-inline" method="post" action="{{route('settings.destroy',$setting->id)}}">
                                            @method('DELETE')
                                            @csrf
                                            <button type="submit" class="btn btn-danger btn-circle">
                                                <i class="fas fa-trash"></i>
                                            </button>
                                        </form>
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

@endpush