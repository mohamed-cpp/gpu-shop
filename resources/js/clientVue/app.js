/**
 * First we will load all of this project's JavaScript dependencies which
 * layouts Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

// if (process.env.MIX_APP_ENV === 'production') {
//     Vue.config.productionTip = false;
//     Vue.config.devtools = false;
//     Vue.config.debug = false;
//     Vue.config.silent = true;
// }
//Vue.config.productionTip = false;
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
let globalData = new Vue({
    data: { $productSlug: null }
});

Vue.mixin({
    computed: {
        $productSlug: {
            get: function () { return globalData.$data.$productSlug },
            set: function (newSlug) { globalData.$data.$productSlug = newSlug; }
        }
    }
})

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('client_product', require('./components/clientPorduct.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.App.csrfToken,
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type':'application/json',
    'Accept':'application/json'
};

let cartDate = {
    cart:null,
};
const app = new Vue({
    el: '#app',
    data:cartDate
});

import sidebar from "./components/sidebarCart.vue";
import cart_vue from "./components/cart.vue";
import add_cart_button from "./components/addCartbutton.vue";

new Vue({
    el: '#cart',
    components: {
        cart_vue,
        add_cart_button,
    },
    data:cartDate
});

new Vue({
    el: '#cartnew',
    components: {
        sidebar,
    },
    data:cartDate
});


import click_quick_view from "./components/clickQuickView.vue";
import quick_view from "./components/quickView.vue";
import add_wishlist from "./components/addWishlist.vue";
import add_cart from "./components/addCartSubCategory.vue";

new Vue({
    el: '#appView',
    components: {
        click_quick_view,
        quick_view,
        add_wishlist,
        add_cart,
    },
    data:cartDate
});

import wishlist from "./components/wishlist.vue";
new Vue({
    el: '#wishlist',
    components: {
        wishlist,
    },
});