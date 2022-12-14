<div id="sidebar">
<header>
    <div class="header-area header-area-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-6">
                    <div class="logo">
                        <a href="/"><img src="{{asset('/assets/img/logo/logo.png')}}" alt="GPU Shop" /></a>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-6">
                    <div class="header-search-cart">
                        <div class="header-search common-style">
                            <button class="sidebar-trigger-search" aria-label="search">
                                <span class="ion-ios-search-strong"></span>
                            </button>
                        </div>
                        <count_cart :count_product="{{ isset(session()->get('cart')->items)  ? count(session()->get('cart')->items) : 0 }}" ></count_cart>
                        @if(auth('client')->check())
                        <notification></notification>
                        @endif
                        <div class="header-sidebar common-style">
                            <button class="header-navbar-active" aria-label="sidebar">
                                <span class="ion-navicon"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
<!-- header end -->

    <sidebar :session_cart="{{ json_encode(session()->get('cart')) }}" ></sidebar>
</div>
<div class="main-search-active">
    <div class="sidebar-search-icon">
        <button class="search-close" aria-label="search-close"><span class="ion-android-close"></span></button>
    </div>
    <div class="sidebar-search-input">
        <form action="{{route('search.product')}}" method="get">
            <div class="form-search">
                <input id="search" class="input-text" aria-label="{{__('Search Entire Store')}}" name="keywords" placeholder="{{__('Search Entire Store')}}" type="search" autocomplete="off" >
                <button aria-label="search-button">
                    <i class="ion-ios-search-strong"></i>
                </button>
            </div>
        </form>
    </div>
</div>
<!-- main-search start -->
<div class="cur-lang-acc-active">
    <div class="wrap-sidebar">
        <div class="sidebar-nav-icon">
            <button class="op-sidebar-close" aria-label="sidebar-close"><span class="ion-android-close"></span></button>
        </div>
        <div class="cur-lang-acc-all">
            <div class="single-currency-language-account">
                <div class="cur-lang-acc-title">
                    <h4>{{__('Currency')}}: <span>{{ Cookie::get('currency') == 'egp' ? __('EGP') : __('USD') }} </span></h4>
                </div>
                <div class="cur-lang-acc-dropdown">
                    <ul>
                        <li><a href="{{route('currency.product.client')}}">{{ Cookie::get('currency') == 'usd' ? __('EGP') : __('USD') }}</a></li>
                    </ul>
                </div>
            </div>
            @if(app()->getLocale() == 'ar')
                @php $lang = 'Arabic'; $anotherLocale= '/en'; $anotherLang= 'English' @endphp
            @else
                @php $lang = 'English'; $anotherLocale = '/ar'; $anotherLang= 'Arabic' @endphp
            @endif
            <div class="single-currency-language-account">
                <div class="cur-lang-acc-title">
                    <h4>{{__('Language')}}: <span><img src="/assets/img/icon-img/{{$lang}}.png" alt="{{__($lang)}}"> {{__($lang)}} </span></h4>
                </div>
                <div class="cur-lang-acc-dropdown">
                    <ul>
                        <li><a href="{{ Str::replaceFirst("/".app()->getLocale(),$anotherLocale,request()->url()) }}" aria-label="Change Language To {{$anotherLang}}"><img src="/assets/img/icon-img/{{$anotherLang}}.png" alt="Change Language To {{$anotherLang}}"> {{__($anotherLang)}} </a></li>
                    </ul>
                </div>
            </div>
            <div class="single-currency-language-account">

                <div class="cur-lang-acc-dropdown">
                    @if( Auth::guard('client')->check() )
                        <div class="cur-lang-acc-title">
                            <h4>{{__('My Account')}}:</h4>
                        </div>
                        <ul>
                            <li><a href="{{route('client.profile')}}">{{__('Profile')}}</a></li>
                            <li><a href="{{route('show.wishlist.client')}}">{{__('My Wish List')}}</a></li>
                            <li><a href="{{route('cart.client')}}">{{__('Cart')}}</a></li>
                            <li><a href="{{route('orders.client')}}">{{__('Orders')}}</a></li>
                            <li><a href="{{ route('client.logout') }}"
                                   onclick="event.preventDefault();
                            document.getElementById('logout-form').submit();">
                                    {{ __('Logout') }}
                                </a></li>
                            <form id="logout-form" action="{{ route('client.logout') }}" method="POST" style="display: none;">
                                @csrf
                            </form>

                        @else
                            <li><a href="{{route('client.registerForm')}}">{{ __('Register') }}</a></li>
                            <li><a href="{{ route('client.login') }}">{{ __('Login') }} </a></li>
                        @endif
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>