<template>
    <!-- sidebar-cart start -->
    <div class="sidebar-cart onepage-sidebar-area">
        <div class="wrap-sidebar">
            <div class="sidebar-cart-all">
                <div class="sidebar-cart-icon">
                    <button class="op-sidebar-close" aria-label="sidebar-close"><span class="ion-android-close"></span></button>
                </div>
                <div v-if="emptyCart()" class="cart-content">
                    <h3>{{ 'Cart'| langJson }}</h3>
                    <ul v-if="cart" v-for="(product, index) in cart.items">
                        <li class="single-product-cart">
                            <div class="cart-img">
                                <a v-if="lang == 'ar'" :href="'/p/' + product.item.slug_ar">
                                    <img width="70" height="70" :src="'/storage/product/images/thumbnail/'+ product.item.main_image" alt="">
                                </a>
                                <a v-else :href="'/p/' + product.item.slug_en">
                                    <img width="70" height="70" :src="'/storage/product/images/thumbnail/'+ product.item.main_image" alt="">
                                </a>
                            </div>
                            <div class="cart-title">
                                <h3 v-if="lang == 'ar'" ><a :href="'/p/' + product.item.slug_ar"> {{product.item.name_ar}}</a></h3>
                                <h3 v-else><a :href="'/p/' + product.item.slug_en"> {{product.item.name_en}}</a></h3>
                                <span>{{product.qty}} x {{currency}}{{product.price}}</span>
                                <span v-if="product.for">{{ 'you are buying for'| langJson }} @{{product.for}}</span>
                            </div>
                            <div class="cart-delete">
                                <button class="removeButton" v-on:click="remove(index)">
                                    <i style="font-size: 24px;" class="ion-ios-trash-outline"></i>
                                </button>
                            </div>
                        </li>
                    </ul>

                    <ul>
                        <li class="single-product-cart">
                            <div class="cart-total">
                                <h4>{{ 'Total'| langJson }} : <span>{{currency}} {{cart.totalPrice}}</span></h4>
                            </div>
                        </li>
                        <li class="single-product-cart">
                            <div class="cart-checkout-btn">
                                <a class="btn-hover cart-btn-style" href="/cart">{{ 'View cart'| langJson }}</a>
                                <a class="no-mrg btn-hover cart-btn-style" href="/checkout">{{ 'Checkout'| langJson }}</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div v-else-if="!signedIn">
                    <h3>{{ 'You need to login to view your cart'| langJson }}</h3>
                    <ul>
                        <li class="single-product-cart">
                            <div class="cart-checkout-btn">
                                <a class="btn-hover cart-btn-style" href="/login">{{ 'Login'| langJson }}</a>
                                <a class="no-mrg btn-hover cart-btn-style" href="/register">{{ 'Register'| langJson }}</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div v-else>
                        <h3>{{ 'Your cart is empty'| langJson }}</h3>
                        <ul>
                            <li class="single-product-cart">
                                <div class="cart-checkout-btn">
                                    <a class="btn-hover cart-btn-style" href="/">{{ 'Home'| langJson }}</a>
                                    <a class="no-mrg btn-hover cart-btn-style" href="/hot-sale">{{ 'Hot Sale'| langJson }}</a>
                                </div>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- main-search start -->
</template>

<script>
    export default {
        props:['session_cart'],
        watch: {
            '$root.cart': function(newVal, oldVal) {
                this.cart = newVal;
            }
        },
        data(){
            return{
                cart: this.session_cart,
                lang: null,
                currency: null,
                signedIn: window.signed.signedIn,
            }
        },
        mounted() {
            this.lang = document.documentElement.lang;
            if(this.cart != null){
                if( this.cart.cookie === 'egp' ){
                    this.currency =  '£';
                }else{
                    this.currency = '$';
                }
            }
        },
        methods:{
            remove(index){
                var self = this;
                axios.delete('/'+ this.lang + '/cart/remove/' + index)
                    .then(function (response,) {
                        if(response.status === 200){
                            self.cart = response.data;
                            self.$root.cart = response.data;
                        }
                    });
            },
            emptyCart(){
                if( this.cart !== null && this.cart.items !== null ){
                    if(this.cart.items.length != 0){
                        return true;
                    }

                }
                return false;
            }
        }
    };
</script>
<style>
    .cart-content ul {
        margin-top: 30px;
    }
    .cart-checkout-btn a{
        margin-bottom: 5px;
    }
</style>