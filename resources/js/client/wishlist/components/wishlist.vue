<template>
        <div class="table-content table-responsive">
            <table>
                <thead>
                <tr>
                    <th class="product-name">remove</th>
                    <th class="product-price">images</th>
                    <th class="product-name">name</th>
                    <th class="product-price">Price</th>
                    <th class="product-price">Visibility</th>
                    <th class="product-sort">sort</th>
                </tr>
                </thead>
                <tbody v-for="(wishlist, index) in wishlistsVue">
                <tr>
                    <td class="product-remove">
                            <button type="submit" class="removeButton" v-on:click="remove(wishlist.id,index)">
                                <i class="ion-android-close"></i>
                            </button>
                    </td>
                    <td class="product-thumbnail">
                        <i v-if="wishlist.products.status == false || wishlist.products.approved != 1" class="fa fa-times-circle" style="font-size: 47px;"></i>
                        <div v-else>
                            <a v-if="locale" :href="'/p/' + wishlist.products.slug_ar">
                                <img width="80" height="80" :src="'/storage/product/images/thumbnail/'+ wishlist.products.main_image" alt="">
                            </a>
                            <a v-else :href="'/p/' + wishlist.products.slug_en">
                                <img width="80" height="80" :src="'/storage/product/images/thumbnail/'+ wishlist.products.main_image" alt="">
                            </a>
                        </div>
                    </td>
                    <td class="product-name">
                        <div v-if="wishlist.products.status == false || wishlist.products.approved != 1">
                            <span v-if="locale" class="statusProduct">
                                {{ wishlist.products.name_ar }}
                            </span>
                            <span v-else class="statusProduct">
                                {{ wishlist.products.name_en }}
                            </span>
                            <p>Sorry The Product Out of Stock</p>
                        </div>
                        <div v-else >
                            <a v-if="locale"  :href="'/p/' + wishlist.products.slug_ar">
                                {{ wishlist.products.name_ar }}
                            </a>
                            <a v-else  :href="'/p/' + wishlist.products.slug_en">
                                {{ wishlist.products.name_en }}
                            </a>
                        </div>
                    </td>
                    <td class="product-price">
                        <i v-if="wishlist.products.status == false || wishlist.products.approved != 1" class="fa fa-times-circle" style="font-size: 47px;"></i>
                        <div v-else>
                            <div v-if="wishlist.products.isOffer == true">
                                <div v-if="currency === '$'">
                                    <span class="oldprice amount">$ {{wishlist.products.price_usd}}</span>
                                    <span class="offer">$ {{wishlist.products.offer_price_usd}}</span>
                                </div>
                                <div v-else>
                                    <span class="oldprice amount">£ {{wishlist.products.price_egp}}</span>
                                    <span class="offer">£ {{wishlist.products.offer_price_egp}}</span>
                                </div>
                            </div>
                            <div v-else>
                                <div v-if="currency === '$'">
                                    <span class="amount">$ {{wishlist.products.price_usd}}</span>
                                </div>
                                <div v-else>
                                    <span class="amount">£ {{wishlist.products.price_egp}}</span>
                                </div>
                            </div>
                        </div>

                    </td>
                    <td>
                        <i v-if="wishlist.public" class="fa fa-globe" :id="'fa'+index" v-on:click="public(wishlist.id,'#fa'+index)"></i>
                        <i v-else class="fa fa-user" :id="'fa'+index" v-on:click="public(wishlist.id,'#fa'+index)"></i>
                    </td>
                    <td class="product-sort">
                        <div>
                            <i class="fa fa-arrow-up" v-on:click="oneStep(wishlist.id,index,true)"></i>
                            <i class="fa fa-angle-double-up"></i>
                        </div>
                        <div>
                            <i class="fa fa-arrow-down" v-on:click="oneStep(wishlist.id,index,false)"></i>
                            <i class="fa fa-angle-double-down"></i>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
</template>

<script>

    export default {

        props:['wishlists','locale','currencyprop'],
        data(){
            return{
                currency:null,
                wishlistsVue: this.wishlists,
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
            public(wishlist,id){
                axios.get('/api/vcisibility/'+window.App.user+'/'+wishlist)
                    .then(function (response) {
                        if(response.status === 204){
                            var el = $(id);
                            if( el.attr('class') === 'fa fa-user'){
                                el.attr({'class':'fa fa-globe'});
                            }else{
                                el.attr({'class':'fa fa-user'});
                            }
                        }
                    })
            },
            remove(wishlist,index){
                var self = this;
                axios.delete('/api/wishlist/page/'+window.App.user+'/'+wishlist)
                    .then(function (response,) {
                        if(response.status === 204){
                            self.$delete(self.wishlists, index);
                        }
                    });

            },
            oneStep(wishlist,index,isUp){
                if (isUp && index !== 0){
                    this.moveDownorUp(wishlist,this.wishlists[index-1].id,index,isUp);
                }else if(!isUp && index+1 !== this.wishlists.length){
                    this.moveDownorUp(wishlist,this.wishlists[index+1].id,index,isUp);
                }
            },
            moveDownorUp(wishlist,anotherWishlist,index,isUp){
                console.log('/api/wishlist/move/'+window.App.user+'/'+wishlist+'/'+anotherWishlist+'/'+isUp);
                var self = this;
                axios.get('/api/wishlist/move/'+window.App.user+'/'+wishlist+'/'+anotherWishlist+'/'+isUp)
                    .then(function (response) {
                        if(response.status === 204){
                            var theWishlist = self.wishlists[index];
                            self.$delete(self.wishlists, index);
                            if (isUp){
                                self.wishlists.splice(index-1, 0, theWishlist);
                            }else {
                                self.wishlists.splice(index+1, 0, theWishlist);
                            }
                        }
                    });
            }
        }
    };
</script>
<style>
    .product-sort{
        width: 20%;
    }
    .product-sort div{
        margin-bottom: 5px;
    }
    .fa{
        font-size: 25px;
        margin-left: 5px;
    }
    .fa:hover{
        color: #ff3243;
        cursor: pointer;
    }

    .oldprice{
        text-decoration-line: line-through;
        padding-right: 5px !important;
    }
    .statusProduct{
        text-decoration-line: line-through;
    }
    .offer{
        display: block;
        font-size: 16px;
        color: red;
        font-weight: 700;
    }
    .removeButton{
        border: none;
        cursor: pointer;
    }
</style>