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

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('cart-vue', require('./components/cart.vue').default);
Vue.component('add_cart_button', require('./components/addCartbutton.vue').default);
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

let cartTest = {
    user:{
        name:'john Doe'
    }
};
import sidebar from "./components/sidebarCart.vue"

new Vue({
    el: '#cart',
    data:cartTest
});

new Vue({
    el: '#cartnew',
    components: {
        sidebar,
    },
    data:cartTest
});
