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
                                    <th class="product-name">remove</th>
                                    <th class="product-price">images</th>
                                    <th class="product-name">Product</th>
                                    <th class="product-price">Price</th>
                                    <th class="product-quantity">Quantity</th>
                                    <th class="product-subtotal">Total</th>
                                </tr>
                                </thead>
                                <tbody v-for="(product, index) in cart.items">
                                    <tr>
                                        <td class="product-remove">
                                            <button class="removeButton" v-on:click="remove(index)">
                                                <i class="ion-android-close"></i>
                                            </button>
                                        </td>
                                        <td class="product-thumbnail">
                                            <a v-if="lang === 'ar'" :href="'/p/' + product.item.slug_ar">
                                                <img width="80" height="80" :src="'/storage/product/images/thumbnail/'+ product.item.main_image" alt="">
                                            </a>
                                            <a v-else :href="'/p/' + product.item.slug_en">
                                                <img width="80" height="80" :src="'/storage/product/images/thumbnail/'+ product.item.main_image" alt="">
                                            </a>
                                        </td>
                                        <td class="product-name">
                                            <a v-if="lang === 'ar'"  :href="'/p/' + product.item.slug_ar">
                                                {{ product.item.name_ar }}
                                            </a>
                                            <a v-else  :href="'/p/' + product.item.slug_en">
                                                {{ product.item.name_en }}
                                            </a>
                                            <div v-for="(option, index) in product.options">
                                                <span>{{index}}: {{option.name}}</span><br>
                                            </div>
                                            <button v-if="Object.keys(product.options).length != 0"  v-on:click="modelOptions(index,product)" id="optionsBtn">Change Options</button>
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
                                                   v-on:click="qty(index)"
                                                   v-on:keyup="qty(index)">
                                        </td>
                                        <td class="product-subtotal">{{currency}}{{product.totalPriceQty}}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="coupon-all">
                                    <div class="coupon">
                                        <input id="coupon_code" class="input-text" name="coupon_code" value="" placeholder="Coupon code" type="text">
                                        <input class="button" name="apply_coupon" value="Apply coupon" type="submit">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-5 ml-auto">
                                <div class="cart-page-total">
                                    <h2>Cart totals</h2>
                                    <ul>
                                        <li>Subtotal<span>100.00</span></li>
                                        <li>Total<span>100.00</span></li>
                                    </ul>
                                    <a href="#">Proceed to checkout</a>
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
                                <input :checked="index === 0" :id="detail.name_en+index" :name="detail.name_en" :value="sub_detail.id" type="radio" >
                                <label v-if="lang === 'ar'" :for="detail.name_en+index" :data-text="sub_detail.name_ar"></label>
                                <label v-else :for="detail.name_en+index"  :data-text="sub_detail.name_en"></label>
                                <div class="toggle-button__icon"></div>
                            </div>
                        </section>
                        <div class="coupon-all">
                            <input class="button" value="Change Options" type="submit" v-on:click="updateOptions()">
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
    <!-- shopping-cart-area end -->
</template>

<script>
    // import sidebar from "../../sideberCart/components/sidebarCart.vue"
    export default {

        props:['cart_session'],
        data(){
            return{
                cart: this.cart_session,
                lang: null,
                currency: null,
                info: null,
                modelName:null,
                modelIndex:null,
                modelProduct:null,
                detailsArray:[],
            }
        },
        // mixins: [sidebar],
        mounted() {
            this.lang = document.documentElement.lang;
            if( cart.cookie === 'egp' ){
                this.currency =  '??';
            }else{
                this.currency = '$';
            }
        },
        methods:{
            remove(index){
                var self = this;
                axios.delete('/'+ this.lang + '/cart/remove/' + index)
                    .then(function (response,) {
                        if(response.status === 200){
                            self.cart = response.data;
                        }
                    });
            },
            qty(index){
                if (this.timer) {
                    clearTimeout(this.timer);
                    this.timer = null;
                }
                this.timer = setTimeout(() => {
                    var qty = document.getElementById(index).value;
                    var self = this;
                    axios.post('/'+ this.lang + '/cart/qty/'+index+'/'+qty)
                        .then(function (response,) {
                            if(response.status === 200) {
                                self.cart = response.data;
                            }
                        });
                }, 1500);
                this.$parent.user.name = index;

            },
            modelOptions(index,product){
                if( this.lang === 'ar' ){
                    this.modelName =  product.item.name_ar;
                }else{
                    this.modelName =  product.item.name_en;
                }
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
                var self = this;
                axios.post('/' + window.App.lang + '/cart/page/' + this.modelProduct.item.slug_en, {
                    options: optionsArray,
                    qty: this.modelProduct.qty,
                    string: this.modelIndex,
                    subOptions: optionsString,
                    updateOptions: true,
                }).then(function (response) {
                        if (response.status === 200) {
                            self.cart = response.data;
                            document.getElementById("optionsModal").style.display = "none";
                        }
                    });
            }
        }
    };
</script>
<style>

</style>