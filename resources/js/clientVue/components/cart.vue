<template>
    <!-- shopping-cart-area start -->
    <div class="cart-main-area pt-95 pb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="table-content table-responsive">
                            <table>
                                <thead>
                                <tr>
                                    <th class="product-name">{{'Remove' | langJson}}</th>
                                    <th class="product-price">{{'images' | langJson}}</th>
                                    <th class="product-name">{{'Products' | langJson}}</th>
                                    <th class="product-price">{{'Price' | langJson}}</th>
                                    <th class="product-quantity">{{'Quantity' | langJson}}</th>
                                    <th class="product-subtotal">{{'Total' | langJson}}</th>
                                </tr>
                                </thead>
                                <tbody v-for="(product, index) in cart.items">
                                    <tr>
                                        <td class="product-remove">
                                            <button class="removeButton" v-on:click="remove(index,product.name)">
                                                <i class="ion-android-close"></i>
                                            </button>
                                        </td>
                                        <td class="product-thumbnail">
                                            <a :href="'/p/' + product.slug">
                                                <img width="80" height="80" :src="'/storage/product/images/thumbnail/'+ product.item.main_image" alt="">
                                            </a>
                                        </td>
                                        <td class="product-name">
                                            <a :href="'/p/' + product.slug">
                                                {{ product.name }}
                                            </a>
                                            <div v-for="(option, index) in product.options">
                                                <span>{{index}}: {{option.name}}</span><br>
                                            </div>
                                            <button v-if="Object.keys(product.options).length != 0"  v-on:click="modelOptions(index,product)" id="optionsBtn">{{ 'Change Options' | langJson }}</button>
                                            <div>
                                                <span v-if="product.for">you are buying for @{{product.for}}</span>
                                            </div>
                                        </td>
                                        <td class="product-price">
                                            <div v-if="product.item.isOffer === true">
                                                <div v-if="currency === '$'">
                                                    <span class="oldprice amount">${{product.item.price_usd}}</span>
                                                    <span class="offer">${{ product.price }}</span>
                                                </div>
                                                <div v-else>
                                                    <span class="oldprice amount">??{{product.item.price_egp}}</span>
                                                    <span class="offer">??{{product.price}}</span>
                                                </div>
                                            </div>
                                            <span v-else class="amount">{{currency}}{{product.price}}</span>
                                        </td>
                                        <td class="product-quantity">
                                            <input :value="product.qty"
                                                   type="number"
                                                   min="1"
                                                   :max="product.minQty"
                                                   :id="index"
                                                   v-on:click="qty(index,product.name)"
                                                   v-on:keyup="qty(index,product.name)">
                                        </td>
                                        <td class="product-subtotal">{{currency}}{{product.totalPriceQty}}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="coupon-all">
                                    <div class="coupon" v-if="cart.coupon">
                                        <input id="coupon_code" class="input-text" name="coupon_code" :value="cart.coupon.code" placeholder="Coupon code" type="text" disabled>
                                        <input class="button" name="apply_coupon" :value="'Remove coupon'| langJson" type="submit" v-on:click="removeCoupon()" >
                                    </div>
                                    <div class="coupon" v-else>
                                        <input id="coupon_code" class="input-text" name="coupon_code" value="" :placeholder="'Coupon Code'| langJson"  type="text">
                                        <input class="button" name="apply_coupon" :value="'Apply coupon'| langJson" type="submit" v-on:click="coupon()" >
                                        <div v-if="alert" class="alert alert-danger" role="alert">
                                            {{alert}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="row">
                            <div class="col-md-5 ml-auto">
                                <div class="cart-page-total">
                                    <h2>{{'Cart totals' | langJson}}</h2>
                                    <ul class="totals">
                                        <li v-for="(product, index) in cart.items">
                                            <span  :class="{ 'oldpriceCoupon' : product.couponPrice != null}">{{currency}}{{product.totalPriceQty}}</span>
                                            <span v-if="product.couponPrice" class="offerCoupon">{{currency}}{{product.couponTotalPrice}}</span>
                                            {{product.name}} x{{product.qty}}
                                            <small v-if="product.for" style="display: block;">
                                                For:@{{product.for}}
                                            </small>

                                        </li>

                                    </ul>
                                    <ul>
                                        <li>{{'Total' | langJson}}
                                            <span :class="{ 'oldpriceCoupon' : cart.couponTotalPrice != 0}" >{{currency}}{{cart.totalPrice}} </span>
                                            <span v-if="cart.couponTotalPrice" class="offerCoupon">{{currency}}{{cart.couponTotalPrice}}</span>
                                        </li>
                                    </ul>
                                    <a href="/checkout">{{'Proceed to checkout' | langJson}}</a>
                                </div>
                            </div>
                        </div>



                </div>
            </div>
        </div>
        <!-- The Modal -->
        <div id="optionsModal" class="modal">

            <!-- Modal content -->
            <div class="modal-content">
                <div class="modal-header">
                    <h3>{{modelName}}</h3>
                    <span class="close">&times;</span>
                </div>
                <div class="modal-body">
                    <div>
                        <section v-for="(detail, index) in detailsArray">
                            <h6 style="font-weight: bold;" v-if="lang === 'ar'">{{ detail.name_ar }}:</h6>
                            <h6 style="font-weight: bold;"  v-else>{{ detail.name_en }}:</h6>
                            <div v-for="(sub_detail, index) in detail.sub_details_without_image" class="toggle-button toggle-button--nummi">
                                <input :disabled="disabledInput(sub_detail,index)" :id="detail.name_en+index" :name="detail.name_en" :value="sub_detail.id" type="radio" >
                                <label v-if="lang === 'ar'" :for="detail.name_en+index" :data-text="sub_detail.name_ar"  @click="flashMessage(sub_detail,index)"></label>
                                <label v-else :for="detail.name_en+index"  :data-text="sub_detail.name_en"  @click="flashMessage(sub_detail,index)"></label>
                                <div class="toggle-button__icon"></div>
                            </div>
                        </section>
                        <div class="coupon-all">
                            <input class="button" :value="'Change Options' | langJson" type="submit" v-on:click="updateOptions()">
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
    <!-- shopping-cart-area end -->
</template>

<script>
    export default {

        props:['cart_session'],
        watch: {
            '$root.cart': function(newVal, oldVal) {
                this.cart = newVal;
            }
        },
        data(){
            return{
                cart: this.cart_session,
                lang: window.App.lang,
                currency: null,
                info: null,
                modelName:null,
                modelIndex:null,
                modelProduct:null,
                detailsArray:[],
                alert:null,
            }
        },
        // mixins: [sidebar],
        mounted() {
            if( this.cart.cookie === 'egp' ){
                this.currency =  '??';
            }else{
                this.currency = '$';
            }
        },
        methods:{
            remove(index,name){
                var self = this;
                axios.delete('/'+ this.lang + '/cart/remove/' + index)
                    .then(function (response) {
                        if(response.status === 200){
                            self.cart = response.data;
                            self.$root.cart = response.data;
                            flash(name+' '+self.$options.filters.langJson('Removed'));
                        }
                    });
            },
            qty(index,name){
                if (this.timer) {
                    clearTimeout(this.timer);
                    this.timer = null;
                }
                this.timer = setTimeout(() => {
                    var qty = document.getElementById(index).value;
                    var self = this;
                    axios.put('/'+ this.lang + '/cart/qty/'+index+'/'+qty)
                        .catch(error => {
                            flash(error.response.data,'danger');
                        })
                        .then(function (response,) {
                            if(response.status === 200) {
                                self.cart = response.data;
                                self.$root.cart = response.data;
                                flash(name+' '+self.$options.filters.langJson('Quantity')+' '+qty);
                            }
                        });
                }, 1500);

            },
            modelOptions(index,product){
                this.modelName =  product.item['name_'+this.lang];
                this.detailsArray = axios.get('/api/details/'+product.item.id+'/'+true)
                    .then(response => this.detailsArray = response.data);
                document.getElementById("optionsModal").style.display = "block";
                this.modelIndex = index;
                this.modelProduct = product;
            },
            updateOptions() {
                var optionsArray = {};
                var optionsString = '';
                this.detailsArray.forEach(function (item, index) {
                    var subOption = $('input[name="' + item.name_en + '"]:checked').val();
                    optionsArray[item.name_en] = {id: item.id, sub: subOption};
                    optionsString +='.'+subOption;
                });
                if (this.modelProduct.item.id+optionsString !== this.modelIndex){
                    this.callServerUpdateOptions(optionsArray,optionsString);
                }else{
                    document.getElementById("optionsModal").style.display = "none";
                    flash(this.$options.filters.langJson("Same options"),'secondary');
                }

            },
            coupon(){
                var coupon = $('#coupon_code').val();
                var self = this;
                if (coupon && coupon.length === 20) {
                    axios.patch('/' + this.lang + '/cart/coupon/' + coupon)
                        .catch(error => {
                            self.alert = error.response.data;
                        })
                        .then(function (response) {
                            if (response.status === 200) {
                                self.cart = response.data;
                                self.$root.cart = response.data;
                                flash(self.$options.filters.langJson("Validated coupon"));
                            }
                        });
                }else if(coupon.length === 0){
                    this.alert = flash(this.$options.filters.langJson("The input is empty"));
                }else {
                    this.alert = flash(this.$options.filters.langJson("The coupon does not validate"));
                }
            },
            removeCoupon(){
                var self = this;
                axios.delete('/' + this.lang + '/cart/remove/coupon/')
                    .then(function (response) {
                        if (response.status === 200) {
                            self.cart = response.data;
                            self.$root.cart = response.data;
                            self.alert = null;
                            flash(self.$options.filters.langJson("Coupon removed"));

                        }
                    });

            },
            disabledInput(subdetails,index){
                let qty = this.modelProduct.minQty;
                if(index !== 0 && subdetails.quantity !== 0){
                    return false;
                }else if(index === 0 && qty !== 0 ){
                    return false;
                }
                return true;
            },
            flashMessage(sub_detail,index){
                let qty = this.modelProduct.minQty;
                if(index !== 0 && sub_detail.quantity !== 0){
                    return false;
                }else if(index === 0 && qty !== 0 ){
                    return false;
                }
                flash(this.$options.filters.langJson("Sold Out"),'secondary');
            },
            callServerUpdateOptions(optionsArray,optionsString){
                var self = this;
                axios.put('/' + window.App.lang + '/cart/page/' + this.modelProduct.item['slug_'+this.lang], {
                    options: optionsArray,
                    qty: this.modelProduct.qty,
                    string: this.modelIndex,
                    subOptions: optionsString,
                }).then(function (response) {
                    if (response.status === 200) {
                        self.cart = response.data;
                        self.$root.cart = response.data;
                        flash(self.$options.filters.langJson("The product's options updated"));
                        document.getElementById("optionsModal").style.display = "none";
                    }
                });
            }
        }
    };
</script>
<style>
    #coupon_code{
        width: 185px;
    }
    .alert-danger{
        margin-top: 5px;
    }
    .offerCoupon{
        font-size: 16px;
        color: red;
        font-weight: 700;
    }
    .oldpriceCoupon{
        margin-left: 25px;
        text-decoration-line: line-through;
    }
    .totals li {
        height: 55px;
    }
</style>