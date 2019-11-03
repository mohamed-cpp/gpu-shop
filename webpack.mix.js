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
    'resources/templates/GPU-Shop/css/bootstrap.min.css',
    'resources/templates/GPU-Shop/css/magnific-popup.css',
    'resources/templates/GPU-Shop/css/animate.css',
    'resources/templates/GPU-Shop/css/owl.carousel.min.css',
    'resources/templates/GPU-Shop/css/slinky.min.css',
    'resources/templates/GPU-Shop/css/slick.css',
    'resources/templates/GPU-Shop/css/ionicons.min.css',
    'resources/templates/GPU-Shop/css/bundle.css',
    'resources/templates/GPU-Shop/css/style.css',
    'resources/templates/GPU-Shop/css/responsive.css',
], 'public/GPU-Shop/css/main.css')
    .sourceMaps();


mix.babel([
    'resources/templates/GPU-Shop/js/vendor/jquery-1.12.0.min.js',
    'resources/templates/GPU-Shop/js/popper.js',
    'resources/templates/GPU-Shop/js/bootstrap.min.js',
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

