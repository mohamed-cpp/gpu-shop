@extends('client.app')
@section('title', $admin->name.' '.__('Administrator'))
@section("SEO")
    <link rel="canonical" href="{{request()->fullUrl()}}" />
    <meta name="robots" content="index,follow">
    <meta property="og:locale" content="{{app()->getLocale()}}">
    <meta name="description" content="{{ __('Profile') }} {{ $admin->name}} {{__('Administrator')}}">
    <meta property="og:type" content="product"/>
    <meta property="og:title" content="{{ __('Profile') }}"/>
    <meta property="og:description" content="{{ __('Profile') }}"/>
    <meta property="og:image" content="{{asset('storage/client/images/'.$admin->img)}}"/>
    <meta property="og:url" content="{{ route('view.profile',$admin->username) }}"/>
    <meta property="og:site_name" content="{{ __("GPU_Shop") }}"/>
@endsection

@push('styles')
<style>
    .badge-secondary{
        background-color: #ff1434;
    }
</style>
@endpush

@section('content')
    <div class="col">
        <div class="row">
            <div class="col mb-3">
                <div class="card">
                    <div class="card-body">
                        <div class="e-profile w-75 mx-auto p-3">
                            <div class="row">
                                <div class="col-12 col-sm-auto mb-3">
                                    <div class="mx-auto" style="width: 140px;">
                                        <div class="d-flex justify-content-center align-items-center rounded" style="height: 140px; background-color: rgb(233, 236, 239);">
                                            <img width="140" height="140" alt="{{$admin->name}}" id="profile_image" src="{{$admin->img ?asset('storage/client/images/'.$admin->img) : '/GPU-Shop/img/avatar.jpg'}}" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                                    <div class="text-center text-sm-left mb-2 mb-sm-0">
                                        <h4 class="pt-sm-2 pb-1 mb-0 text-nowrap">{{$admin->name}}</h4>
                                        <p class="mb-0">{{'@'. $admin->username }}</p>
                                        <p>{{$admin->email}}</p>
                                    </div>
                                    <div class="text-center text-sm-right">
                                        <span class="badge badge-secondary">{{__('Administrator')}}</span>
                                        <div class="text-muted"><small>Joined {{$admin->created_at->format('jS F Y')}}</small></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@push('scripts')

@endpush