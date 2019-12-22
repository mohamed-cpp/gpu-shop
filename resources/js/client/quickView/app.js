require('./bootstrap');

window.Vue = require('vue');

Vue.config.productionTip = false;


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