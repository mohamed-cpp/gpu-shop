<template>
    <!-- sidebar-cart start -->
    <div class="sidebar-cart onepage-sidebar-area">
        <div class="wrap-sidebar">
            <div class="sidebar-cart-all">
                <div class="sidebar-cart-icon">
                    <button class="op-sidebar-close"><span class="ion-android-close"></span></button>
                </div>
                <div class="cart-content">
                    <h3>Shopping Cart {{test2}}</h3>
                    <ul>
                        <li class="single-product-cart">
                            <div class="cart-img">
                                <a href="#"><img src="assets/img/cart/1.jpg" alt=""></a>
                            </div>
                            <div class="cart-title">
                                <h3><a href="#"> HANDCRAFTED MUG</a></h3>
                                <span v-on:click="test = 'ad'">1 x $140.00</span>
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
</template>

<script>
    export default {
        props:['test'],
        data(){
            return{
                test2:null,
            }
        },
        mounted() {
            this.test2 = this.test;
        },
        methods:{
            testTwo(hi){
                var self = this;
                axios.get('/testt')
                    .then(function (response) {
                        self.test = response.data;
                        self.$cartTwo = response.data;
                        console.log(response.data);
                    });

            }
        }
    };
</script>
