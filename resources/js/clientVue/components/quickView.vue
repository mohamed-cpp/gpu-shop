<template>
    <!-- modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-hidden="true" v-if="product" v-cloak>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span class="ion-android-close" aria-hidden="true"></span>
        </button>
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="qwick-view-left">
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
                            <h3 v-if="locale">{{ product.name_ar }}</h3>
                            <h3 v-else>{{ product.name_en }}</h3>
                            <div class="price">
                                <div><span v-bind:class=" { 'old' : product.isOffer }">{{currency}}{{normalPrice}}</span></div>
                                <span v-if="product.isOffer" class="new" >{{currency}}{{offerPrice}}</span>
                            </div>
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

                            <div style="width: 363px; height: 314px; overflow: auto;" v-show="description" v-html="locale ? product.description_ar : product.description_en "></div>
                            <section v-if="!description" v-for="(detail, index) in detailsArray">
                                <h6 style="font-weight: bold;" v-if="locale">{{ detail.name_ar }}:</h6>
                                <h6 style="font-weight: bold;"  v-else>{{ detail.name_en }}:</h6>
                                <div v-for="(sub_detail, index) in detail.sub_details" class="toggle-button toggle-button--nummi">
                                    <input :checked="index === 0" :id="detail.name_en+index" :name="detail.name_en" :value="sub_detail.id" type="radio" v-on:click="details(sub_detail,detail.name_en)">
                                    <label v-if="locale" :for="detail.name_en+index" :data-text="'sub_detail.name_ar'"></label>
                                    <label v-else :for="detail.name_en+index"  :data-text="sub_detail.name_en"></label>
                                    <div class="toggle-button__icon"></div>
                                </div>
                            </section>



                            <h5>Quantity: <span v-if="product.isOffer">{{quantity_offer ? quantity_offer : quantity}}</span> <span v-else>{{quantity}}</span></h5>
                            <div>
                                <div class="quickview-plus-minus">
                                    <span class="input-number-decrement">–</span><input class="input-number" type="text" :value="1" min="0" :max="quantity"><span class="input-number-increment">+</span>
                                    <div class="quickview-btn-cart">
                                        <a class="btn-hover-black" v-if="description === true" v-on:click="viewDetails()" >add to cart</a>
                                        <addCartbutton v-else :slug="product.slug_en" :options="detailsArray"></addCartbutton>
                                    </div>
                                    <div class="quickview-btn-wishlist">
                                        <addWishlist :list="2" :idproduct="product.id"></addWishlist>
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
                quantity_offer: null,
                description: true,
                images: [],
                detailsArray: [],
                detailsPriceArray: [],
                id:null,
            }
        },
        mounted() {
            if( this.currencyprop === 'EGP' ){
                this.currency =  '£';
            }else{
                this.currencyprop = 'USD';
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
                product.then(result => this.normalPrice = result['price_'+this.currencyprop.toLowerCase()]);
                product.then(result => this.offerPrice = result['offer_price_'+this.currencyprop.toLowerCase()]);
                product.then(result => this.quantity = result['quantity']);
                product.then(result => this.quantity_offer = result['quantity_offer']);
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
            details(subdetails,detailName){
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
                var price = 'price_'+this.currencyprop.toLowerCase();
                this.detailsPriceArray.push(detailName+subdetails[price]);
                this.normalPrice = parseInt(this.normalPrice) + parseInt(subdetails[price]);
                this.offerPrice = parseInt(this.offerPrice) + parseInt(subdetails[price]);

                if(subdetails.images.length != 0){
                    this.images = subdetails.images;
                }
                if(subdetails.quantity > 0){
                    this.quantity = subdetails.quantity;
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
    .quickview-btn-cart > a{
        letter-spacing: -0.92px;
        margin: 0 6px;
        color: #fff !important;
    }
    .quick-view-tab-content .tab-pane > img{
        width: 350px;
    }
    a img{
        margin-bottom: 5px;
    }
    .quick-view-thumbnail{
        width: 360px;
    }
</style>

