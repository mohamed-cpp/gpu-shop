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
                    <div class="tab-pane fade"  v-for="(image, mainIndex) in product.images" :id="'pro-details'+mainIndex" role="tabpanel">
                        <div class="easyzoom easyzoom--overlay">
                            <a :href="'/storage/product/images/'+ image.path">
                                <img height="570" width="665" :src="'/storage/product/images/'+ image.path" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="tab-pane fade"  v-for="(image, detailsIndex) in images" :id="'pro-details'+detailsIndex+imagesLength" role="tabpanel">
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
                    <a class="mr-12" v-for="(image, mainIndex2) in product.images"  :href="'#pro-details'+mainIndex2" data-toggle="tab" role="tab" aria-selected="true">
                        <img :src="'/storage/product/images/thumbnail/'+ image.path" alt="">
                    </a>
                    <a class="mr-12" v-for="(image, detailsIndex2) in images"  :href="'#pro-details'+detailsIndex2+imagesLength" data-toggle="tab" role="tab" aria-selected="true">
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
                <div><span class="price" v-bind:class=" { 'oldprice' : product.isOffer }">{{currency}}{{normalPrice}}</span></div>
                <span v-if="product.isOffer" class="offer" >{{currency}}{{offerPrice}}</span>
            </div>
            <h3 v-if="product.details.length !== 0">Options</h3>
            <section v-for="(detail, index) in product.details">
                <h6 style="font-weight: bold;" v-if="locale">{{ detail.name_ar }}:</h6>
                <h6 style="font-weight: bold;"  v-else>{{ detail.name_en }}:</h6>
            <div v-for="(sub_detail, index) in detail.sub_details" class="toggle-button toggle-button--nummi">
                <input :checked="clickedInput(sub_detail,index)" :disabled="disabledInput(sub_detail,index)" :id="detail.name_en+index" :name="detail.name_en" :value="sub_detail.id" type="radio" v-on:click="details(sub_detail,detail.name_en,index)">
                <label v-if="locale" :for="detail.name_en+index" :data-text="sub_detail.name_ar"></label>
                <label v-else :for="detail.name_en+index"  :data-text="sub_detail.name_en"></label>
                <div class="toggle-button__icon"></div>
            </div>

            </section>



            <h3 v-if="quantity !== 0" >Quantity: <span :class="{'qty': quantity <= 5 }">{{quantity}}</span></h3>
            <h3 v-else >Sorry Sold Out &#128577;<p v-if="product.details.length !== 0">Select another option </p></h3>
            <div class="quickview-plus-minus">
                <span class="input-number-decrement">–</span><input class="input-number" type="text" value="1" min="1" :max="quantity"><span class="input-number-increment">+</span>
                <div v-if="quantity !== 0" class="quickview-btn-cart">
                    <addCartbutton :slug="product.slug_en" :options="product.details"></addCartbutton>
                </div>
                <div class="quickview-btn-wishlist">
                    <addWishlist :list="2" :idproduct="product.id" :wishlistadded="wishlistadded"></addWishlist>
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
    import addWishlist from './addWishlist.vue';
    import addCartbutton from './addCartbutton.vue';
    export default {
        components: { addWishlist, addCartbutton },
        props:['product','currencyprop','price','wishlistadded'],
        data(){
            return{
                images: [],
                imagesLength: this.product.images.length,
                currency : '',
                normalPrice: this.price.normalPrice,
                offerPrice: this.price.offerPrice,
                quantity: this.product.quantity,
                detailsArray: [],
                locale:null,
            }
        },
        mounted() {
            if(document.documentElement.lang == 'ar'){
                this.locale = true;
            }
            if( this.currencyprop === 'egp' ){
                this.currency =  '£';
            }else{
                this.currencyprop = 'usd';
                this.currency = '$';
            }
            if(this.product.isOffer){
                if (this.product.quantity_offer){
                    this.quantity = this.product.quantity_offer;
                }
            }
        },
        methods:{
            details(subdetails,detailName,index){
                if(this.detailsArray.length != 0){
                    var normalPrice = parseInt(this.normalPrice);
                    var offerPrice = parseInt(this.offerPrice);
                    this.detailsArray.forEach(function(item, index, object) {
                        if(item.indexOf(detailName) === 0){
                            var mystring = item.split(detailName).join('');
                            normalPrice = normalPrice - parseInt(mystring);
                            offerPrice = offerPrice - parseInt(mystring);
                            object.splice(index, 1);
                        }
                    });
                    this.normalPrice = normalPrice;
                    this.offerPrice = offerPrice;
                }

                var price = 'price_'+this.currencyprop;
                this.detailsArray.push(detailName+subdetails[price]);
                this.normalPrice = parseInt(this.normalPrice) + parseInt(subdetails[price]);
                this.offerPrice = parseInt(this.offerPrice) + parseInt(subdetails[price]);

                if(subdetails.images.length != 0){
                    this.images = subdetails.images;
                }
                if(index === 0){
                    if (this.product.isOffer){
                        this.quantity = this.product.quantity_offer
                    }else {
                        this.quantity = this.product.quantity
                    }
                }else if(subdetails.quantity > 0){
                    if(subdetails.quantity < this.quantity || this.quantity === 0 ){
                        if (this.product.details.length === this.detailsArray.length ){
                            this.quantity = subdetails.quantity;
                        }
                    }
                }
            },
            disabledInput(subdetails,index){
                if(index !== 0 && subdetails.quantity === 0){
                    return true;
                }else if(index === 0 && this.quantity ===0 ){
                    return true;
                }
            },
            clickedInput(subdetails,index){
                if(index === 0){
                    if (this.product.isOffer){
                        var qty = this.product.quantity_offer;
                    }else {
                        var qty = this.product.quantity;
                    }
                    if (qty !== 0) {
                        return true;
                    }
                }
            },
        }
    };
</script>
<style>
    .inputNumber{
        width: 54px;
        border-radius: 5px;
        border: 2px solid #ee3333;
        color: black;
    }
    .quickview-btn-cart{
        color: white;
    }
    .qty {
        color: red;
        font-weight: 600;
        text-decoration: underline;
    }

</style>