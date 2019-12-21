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


                            </div>
                        </div>
                        <div class="quick-view-list nav" role="tablist">

                            <a class="active" href="#modal99" data-toggle="tab" role="tab" aria-selected="true" aria-controls="home1">
                                <img height="112" width="100" :src="'/storage/product/images/thumbnail/'+ product.main_image" alt="">
                            </a>

                        </div>
                    </div>
                    <div class="qwick-view-right">
                        <div class="qwick-view-content">
                            <h3>{{product.name_en}}</h3>
                            <div class="price">
                                <span class="new">$90.00</span>
                                <span class="old">$120.00  </span>
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
                            <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do tempor incididun ut labore et dolore magna aliqua. Ut enim ad mi , quis nostrud veniam exercitation .</p>
                            <div class="quick-view-select">
                                <div class="select-option-part">
                                    <label>Size*</label>
                                    <select class="select">
                                        <option value="">- Please Select -</option>
                                        <option value="">900</option>
                                        <option value="">700</option>
                                    </select>
                                </div>
                                <div class="select-option-part">
                                    <label>Color*</label>
                                    <select class="select">
                                        <option value="">- Please Select -</option>
                                        <option value="">orange</option>
                                        <option value="">pink</option>
                                        <option value="">yellow</option>
                                    </select>
                                </div>
                            </div>
                            <div class="quickview-plus-minus">
                                <div class="cart-plus-minus">
                                    <input type="text" value="02" name="qtybutton" class="cart-plus-minus-box">
                                </div>
                                <div class="quickview-btn-cart">
                                    <a class="btn-hover-black" href="#">add to cart</a>
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
</template>

<script>
    export default {
        props:['locale','currencyprop'],
        watch: {
            $productId: function(newVal, oldVal) {
                if (newVal != oldVal){
                    this.show(newVal);
                }
            }
        },
        data(){
            return{
                product:null,
                products:{},
                slug:null,
                currency : '',
                normalPrice: null,
                offerPrice: null,
                quantity: null,
            }
        },
        mounted() {

        },
        methods:{
            show(slug){
                if(this.products[slug] != undefined){
                    this.products[slug].then(result => this.product = result);
                }else {
                    this.callDB(slug);
                }
            },
            callDB(slug){
                this.product = axios.get('/api/product/'+slug)
                    .then(response => this.product = response.data);
                this.products[slug] = this.product;
                this.productVar();
            },
            productVar(){
                if( this.currencyprop === 'EGP' ){
                    this.currency =  '£';
                }else{
                    this.currency = '$';
                }
                if(this.product.isOffer){
                    if (this.product.quantity_offer){
                        this.quantity = this.product.quantity_offer;
                    }
                }
            }
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
</style>

