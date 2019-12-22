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

                                <div class="tab-pane active show fade" id="modal99" role="tabpanel">
                                    <img height="380" width="320" :src="'/storage/product/images/thumbnail/'+ product.main_image" alt="">
                                </div>
                                <div class="tab-pane fade"  v-for="(image, index) in product.images" :id="'modal'+index" role="tabpanel">
                                    <img height="380" width="320" :src="'/storage/product/images/thumbnail/'+ image.path" alt="">
                                </div>
                                <div class="tab-pane fade"  v-for="(image, index) in images" :id="'modalDetails'+index" role="tabpanel">
                                    <img height="380" width="320" :src="'/storage/product/images/thumbnail/'+ image.path" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="quick-view-list nav" role="tablist">

                            <a class="active" href="#modal99" data-toggle="tab" role="tab" aria-selected="true" aria-controls="home1">
                                <img height="100" width="80" :src="'/storage/product/images/thumbnail/'+ product.main_image" alt="">
                            </a>
                            <a v-for="(image, index) in product.images" :href="'#modal'+index"  data-toggle="tab" role="tab" aria-selected="true" aria-controls="home1">
                                <img height="100" width="80" :src="'/storage/product/images/thumbnail/'+ image.path" alt="">
                            </a>
                            <a v-for="(image, index) in images" :href="'#modalDetails'+index"  data-toggle="tab" role="tab" aria-selected="true" aria-controls="home1">
                                <img height="100" width="80" :src="'/storage/product/images/thumbnail/'+ image.path" alt="">
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
                                    <input :checked="index === 0" :id="detail.name_en+index" :name="detail.name_en" type="radio" v-on:click="details(sub_detail,detail.name_en)">
                                    <label v-if="locale" :for="detail.name_en+index" :data-text="'sub_detail.name_ar'"></label>
                                    <label v-else :for="detail.name_en+index"  :data-text="sub_detail.name_en"></label>
                                    <div class="toggle-button__icon"></div>
                                </div>
                            </section>



                            <h5>Quantity: <span v-if="product.isOffer">{{quantity_offer ? quantity_offer : quantity}}</span> <span v-else>{{quantity}}</span></h5>
                            <div>
                                <div class="quickview-plus-minus">
                                    <div class="cart-plus-minus">
                                        <input type="text" value="02" name="qtybutton" class="cart-plus-minus-box">
                                    </div>
                                    <div class="quickview-btn-cart">
                                        <a class="btn-hover-black" v-on:click="viewDetails()" href="#">add to cart</a>
                                    </div>
                                    <div class="quickview-btn-wishlist">
                                        <a class="btn-hover" href="#"><i class="ion-ios-heart-outline"></i></a>
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
    export default {
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
                this.callDetails();
                this.description = false;
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
    }
    .quick-view-tab-content .tab-pane > img{
        width: 320px;
    }
</style>

