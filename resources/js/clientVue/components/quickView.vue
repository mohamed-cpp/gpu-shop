<template>
    <!-- modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-hidden="true" v-if="product" v-cloak>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span class="ion-android-close" aria-hidden="true"></span>
        </button>
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="qwick-view-left" v-if="product.main_image">
                        <div class="quick-view-learg-img">
                            <div class="quick-view-tab-content tab-content">

                                <div class="tab-pane active show fade" id="mainImage" role="tabpanel">
                                    <img height="380" :src="'/storage/product/images/thumbnail/'+ product.main_image" alt="">
                                </div>
                                <div class="tab-pane fade"  v-for="(image, index) in product.images" :id="'modal'+index" role="tabpanel">
                                    <img height="380" :src="'/storage/product/images/thumbnail/'+ image.path" alt="">
                                </div>
                                <div class="tab-pane fade"  v-for="(image, index) in images" :id="'modalDetails'+index" role="tabpanel">
                                    <img height="380" :src="'/storage/product/images/thumbnail/'+ image.path" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="quick-view-list nav quick-view-thumbnail" role="tablist">

                            <a class="active" href="#mainImage" data-toggle="tab" role="tab" aria-selected="true" aria-controls="home1">
                                <img height="80" width="80" :src="'/storage/product/images/thumbnail/'+ product.main_image" alt="">
                            </a>
                            <a v-for="(image, index) in product.images" :href="'#modal'+index"  data-toggle="tab" role="tab" aria-selected="true" aria-controls="home1">
                                <img height="80" width="80" :src="'/storage/product/images/thumbnail/'+ image.path" alt="">
                            </a>
                            <a v-for="(image, index) in images" :href="'#modalDetails'+index"  data-toggle="tab" role="tab" aria-selected="true" aria-controls="home1">
                                <img height="80" width="80" :src="'/storage/product/images/thumbnail/'+ image.path" alt="">
                            </a>

                        </div>
                    </div>
                    <div class="qwick-view-right">
                        <div class="qwick-view-content">
                            <h3>{{ product['name_'+lang] }}</h3>

                            <div class="price">
                                <div><span v-bind:class=" { 'old' : product.isOffer }">{{currency}}{{normalPrice}}</span></div>
                                <span v-if="product.isOffer" class="new" >{{currency}}{{offerPrice}}</span>
                            </div>
                            <div class="rating-number">

                                <form class="rating-widget">
                                    <div v-for="(n,index) in 5">
                                        <input :checked="index+1 <= product.rating_of_product" disabled type="checkbox" class="star-input" :id="index" />
                                        <label class="star-input-label" :for="index">{{index}}
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star orange"></i>
                                        </label>
                                    </div>
                                </form>
                                <div class="quick-view-number">
                                    <span>{{product.count_rating}} {{ 'Reviews'| langJson }}</span>
                                </div>
                            </div>

                            <div style="width: 363px; height: 314px; overflow: auto;" v-show="description" v-html="locale ? product.description_ar : product.description_en "></div>
                            <h3 v-if="detailsArray.length !== 0">{{ 'Options'| langJson }}</h3>
                            <section v-if="!description" v-for="(detail, index) in detailsArray">
                                <h6 style="font-weight: bold;" v-if="locale">{{ detail['name_'+lang] }}:</h6>

                                <div v-for="(sub_detail, index) in detail.sub_details" class="toggle-button toggle-button--nummi">
                                    <input :checked="clickedInput(sub_detail,index)" :disabled="disabledInput(sub_detail,index)" :id="detail.name_en+index" :name="detail.name_en" :value="sub_detail.id" type="radio" v-on:click="details(sub_detail,detail.name_en,index)">
                                    <label :for="detail.name_en+index" :data-text="sub_detail['name_'+lang]"></label>

                                    <div class="toggle-button__icon"></div>
                                </div>
                            </section>



                            <h3 v-if="quantity !== 0" >{{ 'Quantity'| langJson }}: <span :class="{'qty': quantity <= 5 }">{{quantity}}</span></h3>
                            <div>
                                <div class="quickview-plus-minus">
                                    <span class="input-number-decrement">???</span><input class="input-number" type="text" :value="1" min="0" :max="quantity"><span class="input-number-increment">+</span>
                                    <div v-if="description === true" class="quickview-btn-cart">
                                        <a class="btn-hover-black" v-on:click="viewDetails()" >{{ 'Add to cart'| langJson }}</a>
                                    </div>
                                    <div v-else class="quickview-btn-cart">
                                        <addCartbutton v-if="quantity !== 0" :slug="product.slug_en" :options="detailsArray"></addCartbutton>
                                        <h5 v-else >Sorry Sold Out &#128577;<p v-if="detailsArray.length !== 0">Select another option </p></h5>

                                    </div>
                                    <div class="quickview-btn-wishlist">
                                        <addWishlist :idproduct="product.id"></addWishlist>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import addWishlist from './addWishlist.vue';
    import addCartbutton from './addCartbutton.vue';
    export default {
        components: { addWishlist , addCartbutton},
        props:['locale','currencyprop'],
        watch: {
            $productSlug: function(newVal, oldVal) {
                if (newVal != oldVal){
                    this.show(newVal);
                }
            }
        },
        data(){
            return{
                product:[],
                products:{},
                currency : '',
                normalPrice: null,
                offerPrice: null,
                quantity: null,
                description: true,
                images: [],
                detailsArray: [],
                detailsPriceArray: [],
                id:null,
                lang: window.App.lang,
            }
        },
        mounted() {
            if( this.currencyprop === 'egp' ){
                this.currency =  '??';
            }else{
                this.currencyprop = 'usd';
                this.currency = '$';
            }
        },
        methods:{
            show(slug){
                if(this.products[slug] === undefined){
                    this.callDB(slug);
                }
                this.products[slug].then(result => this.product = result);
                this.productVar(slug);
            },
            callDB(slug){
                this.product = axios.get('/api/product/'+slug)
                    .then(response => this.product = response.data);
                this.products[slug] = this.product;
            },
            productVar(slug){
                var product = this.products[slug];
                var self = this;
                product.then(result => this.normalPrice = result['price_'+this.currencyprop]);
                product.then(result => this.offerPrice = result['offer_price_'+this.currencyprop]);
                product.then(function (result) {
                    if (self.product.isOffer){
                        self.quantity = result['quantity_offer']
                    }else {
                        self.quantity = result['quantity']
                    }
                });
                product.then(result => this.id = result['id']);
                this.description = true;
            },
            viewDetails(){
                if (this.description === true){
                    this.callDetails();
                    this.description = false;
                }
            },
            callDetails(){
                this.detailsArray = axios.get('/api/details/'+this.id)
                    .then(response => this.detailsArray = response.data);
            },
            details(subdetails,detailName,index){
                if(this.detailsPriceArray.length != 0){
                    var normalPrice = parseInt(this.normalPrice);
                    var offerPrice = parseInt(this.offerPrice);
                    this.detailsPriceArray.forEach(function(item, index, object) {
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
                this.detailsPriceArray.push(detailName+subdetails[price]);
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
                        if (this.detailsPriceArray.length === this.detailsArray.length ){
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
        },
        // beforeCreate: function () {
        //     console.log(this.$productId)
        // },
    };
</script>

<style>
    [v-cloak] {
        display: none;
    }
    #exampleModal .quickview-btn-cart > a{
        letter-spacing: -0.92px;
        margin: 0 6px;
        color: #fff !important;
        padding: 17px 15px !important;
    }
    #exampleModal .quick-view-tab-content .tab-pane > img{
        width: 350px;
    }
    #exampleModal a img{
        margin-bottom: 5px;
    }
    #exampleModal .quick-view-thumbnail{
        width: 360px;
    }
    .qty{
        color: red;
        font-weight: 600;
        text-decoration: underline;
    }
    #exampleModal .rating-widget div{
        display: inline;
    }
</style>

