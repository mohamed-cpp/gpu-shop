<div id="cartnew">
<header>
    <div class="header-area header-area-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-6">
                    <div class="logo">
                        <a href="/"><img src="/assets/img/logo/logo.png" alt="" /></a>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-6">
                    <div class="header-search-cart">
                        <div class="header-search common-style">
                            <button class="sidebar-trigger-search">
                                <span class="ion-ios-search-strong"></span>
                            </button>
                        </div>
                        <count_cart :count_product="{{ isset(session()->get('cart')->items)  ? count(session()->get('cart')->items) : 0 }}" ></count_cart>
                        <div class="header-sidebar common-style">
                            <button class="header-navbar-active">
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
        <button class="search-close"><span class="ion-android-close"></span></button>
    </div>
    <div class="sidebar-search-input">
        <form>
            <div class="form-search">
                <input id="search" class="input-text" value="" placeholder="Search Entire Store" type="search">
                <button>
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
            <button class="op-sidebar-close"><span class="ion-android-close"></span></button>
        </div>
        <div class="cur-lang-acc-all">
            <div class="single-currency-language-account">
                <div class="cur-lang-acc-title">
                    <h4>Currency: <span>{{ $currency = Cookie::get('currency') === 'egp' ? 'EGP' : 'USD' }} </span></h4>
                </div>
                @php $currency = $currency === 'USD' ? 'EGP' : 'USD' @endphp
                <div class="cur-lang-acc-dropdown">
                    <ul>
                        <li><a href="{{route('currency.product.client')}}">{{$currency}}</a></li>
                    </ul>
                </div>
            </div>
            @if(app()->getLocale() == 'ar')
                @php $lang = 'Arabic'; $anotherLocale= '/en/'; $anotherLang= 'English' @endphp
            @else
                @php $lang = 'English'; $anotherLocale = '/ar/'; $anotherLang= 'Arabic' @endphp
            @endif
            <div class="single-currency-language-account">
                <div class="cur-lang-acc-title">
                    <h4>Language: <span><img src="/assets/img/icon-img/{{$lang}}.png" alt=""> {{$lang}} </span></h4>
                </div>
                <div class="cur-lang-acc-dropdown">
                    <ul>
                        <li><a href="{{ str_replace("/".app()->getLocale()."/",$anotherLocale,Request::url()) }}"><img src="/assets/img/icon-img/{{$anotherLang}}.png" alt=""> {{$anotherLang}} </a></li>
                    </ul>
                </div>
            </div>
            <div class="single-currency-language-account">
                <div class="cur-lang-acc-title">
                    <h4>My Account:</h4>
                </div>
                <div class="cur-lang-acc-dropdown">
                    <ul>
                        @if( Auth::guard('client')->check() )
                            <li><a href="{{route('client.profile')}}">Profile</a></li>
                            <li><a href="{{route('show.wishlist.client')}}">My Wish List</a></li>
                            <li><a href="{{route('cart.client')}}">Cart</a></li>
                            <li><a href="{{route('orders.client')}}">Orders</a></li>
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