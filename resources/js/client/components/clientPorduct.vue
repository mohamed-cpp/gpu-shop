<template>
    <div class="row" v-cloak>
    <div class="col-md-12 col-lg-7 col-12">
        <div class="product-details-img-content">
            <div class="product-details-tab mr-70">

                <div class="product-details-large tab-content">


                    <div class="tab-pane active show fade" id="pro-details99" role="tabpanel">
                        <div class="easyzoom easyzoom--overlay">
                            <a :href="'/storage/product/images/'+ product.main_image">
                                <img height="570" width="665" :src="'/storage/product/images/'+ product.main_image" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="tab-pane fade"  v-for="(image, index) in images" :id="'pro-details'+index" role="tabpanel">
                        <div class="easyzoom easyzoom--overlay">
                            <a :href="'/storage/product/images/'+ image.path">
                                <img height="570" width="665" :src="'/storage/product/images/'+ image.path" alt="">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="product-details-small nav mt-12 main-product-details" role=tablist>
                    <a class="active mr-12" href="#pro-details99" data-toggle="tab" role="tab" aria-selected="true">
                        <img :src="'/storage/product/images/thumbnail/'+ product.main_image" alt="">
                    </a>
                    <a class="mr-12" v-for="(image, index) in images"  :href="'#pro-details'+index" data-toggle="tab" role="tab" aria-selected="true">
                        <img :src="'/storage/product/images/thumbnail/'+ image.path" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div class="col-md-12 col-lg-5 col-12">
        <div class="product-details-content">
            <h3 v-if="locale">{{ product.name_ar }}</h3>
            <h3 v-else>{{ product.name_en }}</h3>
            <div class="rating-number">
                <div class="quick-view-rating">
                    <i class="ion-ios-star red-star"></i>
                    <i class="ion-ios-star red-star"></i>
                    <i class="ion-android-star-outline"></i>
                    <i class="ion-android-star-outline"></i>
                    <i class="ion-android-star-outline"></i>
                </div>
                <div class="quick-view-number">
                    <span>2 Ratting (S)</span>
                </div>
            </div>
            <div class="details-price">
                <div><span class="price" v-bind:class=" { 'oldprice' : product.isOffer }">{{currency}}{{price.normalPrice}}</span></div>
                <span v-if="product.isOffer" class="offer" >{{currency}}{{price.offerPrice}}</span>
            </div>

            <div v-for="detail in product.details" class="detail">
                <h6 style="font-weight: bold;" v-if="locale">{{ detail.name_ar }}:</h6>
                <h6 style="font-weight: bold;"  v-else>{{ detail.name_en }}:</h6>
                <a v-for="sub_detail in detail.sub_details" href="#" v-on:click="details(sub_detail)" class="btn btn-outline space">
                    <span v-if="locale">{{sub_detail.name_ar}}</span>
                    <span v-else>{{sub_detail.name_en}}</span>
                </a>
            </div>






            <div class="quickview-plus-minus">
                <div class="cart-plus-minus">
                    <input type="number" value="1" class="cart-plus-minus-box">
                </div>
                <div class="quickview-btn-cart">
                    <a class="btn-hover-black" href="#">add to cart</a>
                </div>
                <div class="quickview-btn-wishlist">
                    <a class="btn-hover" href="#"><i class="ion-ios-heart-outline"></i></a>
                </div>
            </div>

            <div class="product-share">
                <ul>
                    <li class="categories-title">Share :</li>
                    <li>
                        <a href="#">
                            <i class="ion-social-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="ion-social-tumblr"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="ion-social-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="ion-social-instagram-outline"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>

    export default {
        props:['product','locale','currencyprop','price'],
        data(){
            return{
                images: this.product.images,
                currency : '',
            }
        },
        mounted() {
            if( this.currencyprop === 'EGP' ){
                this.currency =  '£';
            }else{
                this.currency = '$';
            }
        },
        methods:{
            details(subdetails){
                if(subdetails.images.length != 0){
                    this.images = subdetails.images;
                }
            }
        }
    };
</script>

<style>

</style>

