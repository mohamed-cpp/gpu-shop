<template>
    <div class="row" v-cloak>
    <div class="col-md-12 col-lg-7 col-12">
        <div class="product-details-img-content">
            <div class="product-details-tab mr-70">

                <div class="product-details-large tab-content">


                    <div class="tab-pane active show fade" id="pro-details99" role="tabpanel">
                        <div class="easyzoom easyzoom--overlay">
                            <a :href="'/storage/product/images/'+'big_'+product.main_image">
                                <img :src="'/storage/product/images/'+ product.main_image" :alt="product['name_'+lang]">
                            </a>
                        </div>
                    </div>
                    <div class="tab-pane fade"  v-for="(image, mainIndex) in product.images" :id="'pro-details'+mainIndex" role="tabpanel">
                        <div class="easyzoom easyzoom--overlay">
                            <a :href="'/storage/product/images/'+ 'big_'+image.path">
                                <img :src="'/storage/product/images/'+ image.path" :alt="product['name_'+lang]">
                            </a>
                        </div>
                    </div>
                    <div class="tab-pane fade"  v-for="(image, detailsIndex) in images" v-for-callback="{key: detailsIndex, array: images, callback: easyZoomReload}" :id="'details'+detailsIndex+imagesLength" role="tabpanel">
                        <div class="easyzoom easyzoom--overlay easyzoom-details">
                            <a :href="'/storage/product/images/'+ 'big_'+image.path">
                                <img :src="'/storage/product/images/'+ image.path" :alt="product['name_'+lang]">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="product-details-small nav mt-12 main-product-details" role=tablist>
                    <a class="active mr-12" href="#pro-details99" data-toggle="tab" role="tab" aria-selected="true">
                        <img :src="'/storage/product/images/thumbnail/'+ product.main_image" :alt="product['name_'+lang]">
                    </a>
                    <a class="mr-12" v-for="(image, mainIndex2) in product.images"  :href="'#pro-details'+mainIndex2" data-toggle="tab" role="tab" aria-selected="true">
                        <img :src="'/storage/product/images/thumbnail/'+ image.path" :alt="product['name_'+lang]">
                    </a>
                    <a class="mr-12" v-for="(image, detailsIndex2) in images"  :href="'#details'+detailsIndex2+imagesLength" data-toggle="tab" role="tab" aria-selected="true">
                        <img :src="'/storage/product/images/thumbnail/'+ image.path" :alt="product['name_'+lang]">
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div class="col-md-12 col-lg-5 col-12">
        <div class="product-details-content">
            <h1>{{ product['name_'+lang] }}</h1>
            <div class="rating-number">

                <form class="rating-widget">
                    <input type="checkbox" class="star-input" id="one" v-on:click="sendRating(1)"/>
                    <label class="star-input-label" for="one">1
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star orange"></i>
                    </label>
                    <input type="checkbox" class="star-input" id="two" v-on:click="sendRating(2)"/>
                    <label class="star-input-label" for="two">2
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star orange"></i>
                    </label>
                    <input type="checkbox" class="star-input" id="three" v-on:click="sendRating(3)"/>
                    <label class="star-input-label" for="three">3
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star orange"></i>
                    </label>
                    <input type="checkbox" class="star-input" id="four" v-on:click="sendRating(4)"/>
                    <label class="star-input-label" for="four">4
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star orange"></i>
                    </label>
                    <input type="checkbox" class="star-input" id="5" v-on:click="sendRating(5)"/>
                    <label class="star-input-label" for="5">5
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star orange"></i>
                    </label>
                </form>

                <div class="quick-view-number">
                    <span><b>{{count}} {{ 'Reviews'| langJson }}</b></span>
                </div>

            </div>
            <div class="details-price">
                <div><h4 class="price" v-bind:class=" { 'oldprice' : product.isOffer }">{{currency}}{{normalPrice}}</h4></div>
                <h4 v-if="product.isOffer" class="offer" >{{currency}}{{offerPrice}}</h4>
            </div>
            <h4 v-if="product.details.length !== 0">{{ 'Options'| langJson }}</h4>
            <section v-for="(detail, index) in product.details">
                <h6 style="font-weight: bold;" >{{ detail['name_'+lang] }}:</h6>
            <div v-for="(sub_detail, index) in detail.sub_details" class="toggle-button toggle-button--nummi">
                <input :checked="clickedInput(sub_detail,index)" :disabled="disabledInput(sub_detail,index)" :id="detail.name_en+index" :name="detail.name_en" :value="sub_detail.id" type="radio" v-on:click="details(sub_detail,detail.name_en,index)">
                <label :for="detail.name_en+index" :data-text="sub_detail['name_'+lang]"></label>
                <div class="toggle-button__icon"></div>
            </div>
            </section>

            <h3 v-if="quantity !== 0" >{{ 'Quantity'| langJson }}: <span :class="{'qty': quantity <= 5 }">{{quantity}}</span></h3>
            <h3 v-else >Sorry Sold Out &#128577;<p v-if="product.details.length !== 0">Select another option </p></h3>
            <div class="quickview-plus-minus">
                <span class="input-number-decrement">–</span><input class="input-number" type="text" aria-label="Qty" value="1" min="1" :max="quantity"><span class="input-number-increment">+</span>
                <div v-if="quantity !== 0" class="quickview-btn-cart">
                    <addCartbutton :slug="product['slug_'+lang]" :options="product.details"></addCartbutton>
                </div>
                <div class="quickview-btn-wishlist">
                    <addWishlist :list="2" :idproduct="product.id" :wishlistadded="wishlistadded"></addWishlist>
                </div>
            </div>

            <div class="product-share">
                <ul>
                    <li class="categories-title">{{ 'Share'| langJson }}:</li>
                    <li>
                        <a :href="'https://www.facebook.com/sharer/sharer.php?u='+url" rel="noreferrer" target="_blank" aria-label="Facebook">
                            <i class="ion-social-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a :href="'https://twitter.com/share?text='+product.name_en+'&via=gpu_shop&url='+url" rel="noreferrer" target="_blank" aria-label="Twitter">
                            <i class="ion-social-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a :href="'https://www.instagram.com/?url='+url" rel="noreferrer" target="_blank" aria-label="Instagram">
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
        props:['product','currencyprop','price','wishlistadded','reviews'],
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
                count:this.reviews,
                url: window.location.href,
                lang: window.App.lang,
                easyZoom: null,
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
            sendRating(rating){
                if(rating <= 5 && window.signed.signedIn){
                    axios.post('/'+ window.App.lang  + '/rating',{
                        product:this.product.id,
                        rating:rating,
                    })
                    .catch(error => {
                       if(error.response.status === 422){
                           flash(error.response.data,'danger');
                       }
                        flash(this.$options.filters.langJson('Sorry You need to buy the product first'),'warning');
                    })
                    .then((response) => {
                        if(response.status === 200) {
                            flash(this.$options.filters.langJson('Thank you to reviews our product'));
                            if(response.data[0] === 'created'){
                                this.count = parseInt(this.count) + 1;
                            }
                        }
                    });
                }else {
                    flash( this.$options.filters.langJson('You should to login first') ,'warning');
                }

            },
            easyZoomReload() {
                /*
                * Delay For
                * [Vue warn]: You may have an infinite update loop in a component render function.
                * */
                setTimeout(function (){
                    if (this.easyZoom){
                        for (const [key, value] of Object.entries(this.easyZoom)) {
                            if(typeof value == "number"){
                                break;
                            }
                            $(value).easyZoom().data('easyZoom').teardown();
                        }
                    }
                    this.easyZoom = $('.easyzoom-details').easyZoom();
                }, 100);

            }
        },
        directives: {
            forCallback(el, binding) {
                let element = binding.value
                if (element.key == element.array.length - 1){
                    if (typeof element.callback === 'function') {
                        element.callback()
                    }
                }

            }
        },
    };
</script>
<style>
    .inputNumber{
        width: 54px;
        border-radius: 5px;
        border: 2px solid #ee3333;
        color: black;
    }
    .qty {
        color: red;
        font-weight: 600;
        text-decoration: underline;
    }

</style>
