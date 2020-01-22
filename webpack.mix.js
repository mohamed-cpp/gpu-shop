const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//    .sass('resources/sass/app.scss', 'public/css');

mix.styles([
    // 'resources/templates/GPU-Shop/css/bootstrap.min.css',
    'resources/templates/GPU-Shop/css/bootstrap4.min.css',
    'resources/templates/GPU-Shop/css/magnific-popup.css',
    'resources/templates/GPU-Shop/css/animate.css',
    'resources/templates/GPU-Shop/css/owl.carousel.min.css',
    'resources/templates/GPU-Shop/css/slinky.min.css',
    'resources/templates/GPU-Shop/css/meanmenu.min.css',
    'resources/templates/GPU-Shop/css/easyzoom.css',
    'resources/templates/GPU-Shop/css/slick.css',
    'resources/templates/GPU-Shop/css/ionicons.min.css',
    'resources/templates/GPU-Shop/css/bundle.css',
    'resources/templates/GPU-Shop/css/style.css',
    'resources/templates/GPU-Shop/css/responsive.css',
], 'public/GPU-Shop/css/main.css')
    .sourceMaps();
mix.styles('node_modules/intl-tel-input/build/css/intlTelInput.css',
    'public/GPU-Shop/css/intlTelInput.css');


mix.babel([
    'resources/templates/GPU-Shop/js/vendor/jquery-1.12.0.min.js',
    //'resources/templates/GPU-Shop/js/vendor/jquery-3.4.1.min.js',
    'resources/templates/GPU-Shop/js/popper.js',
    // 'resources/templates/GPU-Shop/js/bootstrap.min.js',
    // 'resources/templates/GPU-Shop/js/bootstrap4.min.js',
    'resources/templates/GPU-Shop/js/bootstrap4.4.min.js',
    'resources/templates/GPU-Shop/js/jquery.magnific-popup.min.js',
    'resources/templates/GPU-Shop/js/isotope.pkgd.min.js',
    'resources/templates/GPU-Shop/js/imagesloaded.pkgd.min.js',
    'resources/templates/GPU-Shop/js/jquery.counterup.min.js',
    'resources/templates/GPU-Shop/js/waypoints.min.js',
    'resources/templates/GPU-Shop/js/slinky.min.js',
    'resources/templates/GPU-Shop/js/ajax-mail.js',
    'resources/templates/GPU-Shop/js/owl.carousel.min.js',
    'resources/templates/GPU-Shop/js/plugins.js',
    'resources/templates/GPU-Shop/js/main.js',
], 'public/GPU-Shop/js/app.js').sourceMaps();

mix.copy('resources/templates/GPU-Shop/js/vendor/modernizr-2.8.3.min.js',
    'public/GPU-Shop/js/modernizr-2.8.3.min.js');
mix.babel('node_modules/intl-tel-input/build/js/intlTelInput.js','public/GPU-Shop/js/intlTelInput.js')
    .sourceMaps();
mix.babel('node_modules/intl-tel-input/build/js/utils.js','public/GPU-Shop/js/utils.js')
    .sourceMaps();

mix.js('resources/js/client/app.js', 'public/GPU-Shop/js/vueProduct.js');
mix.js('resources/js/client/quickView/app.js', 'public/GPU-Shop/js/vueQuickView.js');
mix.js('resources/js/client/wishlist/app.js', 'public/GPU-Shop/js/vueWishlist.js');
mix.js('resources/js/client/cart/app.js', 'public/GPU-Shop/js/vueCart.js');

// Dashboard //

mix.styles([
    'resources/templates/dashboard/css/sb-admin-2.min.css',
], 'public/dashboard/css/main.css')
    .sourceMaps();

mix.babel([
    'resources/templates/dashboard/js/jquery.min.js',
    'resources/templates/dashboard/js/jquery-ui.min.js',
    'resources/templates/dashboard/js/bootstrap.bundle.min.js',
    'resources/templates/dashboard/js/jquery.easing.min.js',
    'resources/templates/dashboard/js/sb-admin-2.min.js',
    'resources/templates/dashboard/js/Chart.min.js',
], 'public/dashboard/js/app.js').sourceMaps();

mix.js('resources/js/seller/app.js', 'public/dashboard/js/vue.js');

mix.babel('resources/templates/dashboard/js/demo/chart-area-demo.js',
    'public/dashboard/js/demo/chart-area-demo.js')
    .sourceMaps();
mix.babel('resources/templates/dashboard/js/demo/chart-pie-demo.js',
    'public/dashboard/js/demo/chart-pie-demo.js')
    .sourceMaps();

