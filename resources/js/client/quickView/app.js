//
//
// require('./bootstrap');
//
// window.Vue = require('vue');
//
// //Vue.config.productionTip = false;
//
//

//
//
// const app = new Vue({
//     el: '#app',
// });


require('./bootstrap');

window.Vue = require('vue');

let globalData = new Vue({
    data: { $productId: null }
});

Vue.mixin({
    computed: {
        $productId: {
            get: function () { return globalData.$data.$productId },
            set: function (newId) { globalData.$data.$productId = newId; }
        }
    }
})



Vue.component('click_quick_view', require('./components/clickQuickView.vue').default);
Vue.component('quick_view', require('./components/quickView.vue').default);

// const routes = [
//     { path: '/clickQuickView', component: require('./components/clickQuickView.vue') },
//     { path: '/quickView', component: require('./components/quickView.vue') }
// ]

// const router = new VueRouter({
//     routes
// })

const app = new Vue({
    el: '#appView',
});