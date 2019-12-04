
<header>
    <div class="header-area header-area-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-6">
                    <div class="logo">
                        <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-6">
                    <div class="header-search-cart">
                        <div class="header-search common-style">
                            <button class="sidebar-trigger-search">
                                <span class="ion-ios-search-strong"></span>
                            </button>
                        </div>
                        <div class="header-cart common-style">
                            <button class="sidebar-trigger">
                                <span class="ion-bag"></span>
                            </button>
                        </div>
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

<!-- sidebar-cart start -->
<div class="sidebar-cart onepage-sidebar-area">
    <div class="wrap-sidebar">
        <div class="sidebar-cart-all">
            <div class="sidebar-cart-icon">
                <button class="op-sidebar-close"><span class="ion-android-close"></span></button>
            </div>
            <div class="cart-content">
                <h3>Shopping Cart</h3>
                <ul>
                    <li class="single-product-cart">
                        <div class="cart-img">
                            <a href="#"><img src="assets/img/cart/1.jpg" alt=""></a>
                        </div>
                        <div class="cart-title">
                            <h3><a href="#"> HANDCRAFTED MUG</a></h3>
                            <span>1 x $140.00</span>
                        </div>
                        <div class="cart-delete">
                            <a href="#"><i class="ion-ios-trash-outline"></i></a>
                        </div>
                    </li>
                    <li class="single-product-cart">
                        <div class="cart-img">
                            <a href="#"><img src="assets/img/cart/2.jpg" alt=""></a>
                        </div>
                        <div class="cart-title">
                            <h3><a href="#"> HANDCRAFTED MUG</a></h3>
                            <span>1 x $140.00</span>
                        </div>
                        <div class="cart-delete">
                            <a href="#"><i class="ion-ios-trash-outline"></i></a>
                        </div>
                    </li>
                    <li class="single-product-cart">
                        <div class="cart-img">
                            <a href="#"><img src="assets/img/cart/3.jpg" alt=""></a>
                        </div>
                        <div class="cart-title">
                            <h3><a href="#"> HANDCRAFTED MUG</a></h3>
                            <span>1 x $140.00</span>
                        </div>
                        <div class="cart-delete">
                            <a href="#"><i class="ion-ios-trash-outline"></i></a>
                        </div>
                    </li>
                    <li class="single-product-cart">
                        <div class="cart-total">
                            <h4>Total : <span>$ 120</span></h4>
                        </div>
                    </li>
                    <li class="single-product-cart">
                        <div class="cart-checkout-btn">
                            <a class="btn-hover cart-btn-style" href="#">view cart</a>
                            <a class="no-mrg btn-hover cart-btn-style" href="#">checkout</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
<!-- main-search start -->
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
                    <h4>Currency: <span>USD </span></h4>
                </div>
                <div class="cur-lang-acc-dropdown">
                    <ul>
                        <li><a href="/usd">EUR  Euro</a></li>
                    </ul>
                </div>
            </div>
            <div class="single-currency-language-account">
                <div class="cur-lang-acc-title">
                    <h4>Language: <span><img src="assets/img/icon-img/english.png" alt=""> English </span></h4>
                </div>
                <div class="cur-lang-acc-dropdown">
                    <ul>
                        <li><a href="#"><img src="assets/img/icon-img/english.png" alt=""> English </a></li>
                        <li><a href="#"><img src="assets/img/icon-img/es.png" alt=""> spanish </a></li>
                        <li><a href="#"><img src="assets/img/icon-img/fr.png" alt=""> french </a></li>
                        <li><a href="#"><img src="assets/img/icon-img/ge.png" alt=""> german </a></li>
                        <li><a href="#"><img src="assets/img/icon-img/es.png" alt=""> spanish </a></li>
                    </ul>
                </div>
            </div>
            <div class="single-currency-language-account">
                <div class="cur-lang-acc-title">
                    <h4>My Account:</h4>
                </div>
                <div class="cur-lang-acc-dropdown">
                    <ul>
                        <li><a href="#">Compare Products </a></li>
                        <li><a href="#">Default welcome msg!</a></li>
                        <li><a href="wishlist.html">My Wish List</a></li>
                        @if( Auth::guard('client')->check() )
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