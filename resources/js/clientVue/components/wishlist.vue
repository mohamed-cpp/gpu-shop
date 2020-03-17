<template>
        <div class="table-content table-responsive">
            <table>
                <thead>
                <tr>
                    <th class="product-name">{{ 'Remove'| langJson }}</th>
                    <th class="product-price">{{ 'images'| langJson }}</th>
                    <th class="product-name">{{ 'Name'| langJson }}</th>
                    <th class="product-price">{{ 'Price'| langJson }}</th>
                    <th class="product-price">{{ 'Visibility'| langJson }}</th>
                    <th class="product-sort">{{ 'Sort'| langJson }}</th>
                </tr>
                </thead>
                <tbody v-for="(wishlist, index) in wishlistsVue" v-if="wishlist.products">
                <tr>
                    <td class="product-remove">
                            <button type="submit" class="removeButton" v-on:click="remove(wishlist.id,index)">
                                <i class="ion-android-close"></i>
                            </button>
                    </td>
                    <td class="product-thumbnail">
                        <i v-if="wishlist.products.status == false || wishlist.products.approved != 1" class="fa fa-times-circle" style="font-size: 47px;"></i>
                        <div v-else>
                            <a :href="'/'+lang+'/p/' + wishlist.products['slug_'+lang]">
                                <img width="80" height="80" :src="'/storage/product/images/thumbnail/'+ wishlist.products.main_image" alt="">
                            </a>

                        </div>
                    </td>
                    <td class="product-name">
                        <div v-if="wishlist.products.status == false || wishlist.products.approved != 1">
                            <span class="statusProduct">
                                {{ wishlist.products['name_'+lang] }}
                            </span>
                            <p>{{'Sorry The Product Out of Stock'| langJson }}</p>
                        </div>
                        <div v-else >
                            <a :href="'/'+lang+'/p/' + wishlist.products['slug_'+lang]">
                                {{ wishlist.products['name_'+lang] }}
                            </a>
                        </div>
                    </td>
                    <td class="product-price">
                        <i v-if="wishlist.products.status == false || wishlist.products.approved != 1" class="fa fa-times-circle" style="font-size: 47px;"></i>
                        <div v-else>
                            <div v-if="wishlist.products.isOffer == true">
                                <div>
                                    <span class="oldprice amount">{{currency}}{{wishlist.products['price_'+currencyprop.toLowerCase() ]}}</span>
                                    <span class="offer">{{currency}}{{wishlist.products['offer_price_'+currencyprop.toLowerCase() ]}}</span>
                                </div>
                            </div>
                            <div v-else>
                                <div>
                                    <span class="amount">{{currency}}{{wishlist.products['price_'+currencyprop.toLowerCase() ]}}</span>
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
                            <i class="fa fa-angle-double-up" v-on:click="topOrBottom(wishlist.id,index,true)" ></i>
                        </div>
                        <div>
                            <i class="fa fa-arrow-down" v-on:click="oneStep(wishlist.id,index,false)"></i>
                            <i class="fa fa-angle-double-down" v-on:click="topOrBottom(wishlist.id,index,false)"></i>
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
                lang: window.App.lang,
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
                axios.post('/'+window.App.lang+'/vcisibility/'+wishlist)
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
                axios.delete('/'+window.App.lang+'/wishlist/page/'+wishlist)
                    .then(function (response,) {
                        if(response.status === 204){
                            self.$delete(self.wishlists, index);
                            flash('removed');
                        }
                    });

            },
            oneStep(wishlist,index,isUp){
                if (isUp && index !== 0){
                    this.moveDownOrUp(wishlist,this.wishlists[index-1].id,index,isUp);
                }else if(!isUp && index+1 !== this.wishlists.length){
                    this.moveDownOrUp(wishlist,this.wishlists[index+1].id,index,isUp);
                }
            },
            moveDownOrUp(wishlist,anotherWishlist,index,isUp){
                var self = this;
                axios.post('/'+window.App.lang+'/wishlist/move/'+wishlist+'/'+anotherWishlist+'/'+isUp)
                    .then(function (response) {
                        if(response.status === 204){
                            var theWishlist = self.wishlists[index];
                            self.$delete(self.wishlists, index);
                            if (isUp){
                                self.wishlists.splice(index-1, 0, theWishlist);
                            }else {
                                self.wishlists.splice(index+1, 0, theWishlist);
                            }
                            flash('moved');
                        }
                    });
            },
            topOrBottom(wishlist,index,isTop){
                if (isTop && index !== 0){
                    this.moveToTopOrDown(wishlist,index,isTop);
                }else if(!isTop && index+1 !== this.wishlists.length){
                    this.moveToTopOrDown(wishlist,index,isTop);
                }
            },
            moveToTopOrDown(wishlist,index,isTop){
                var self = this;
                axios.post('/'+window.App.lang+'/wishlist/move/'+wishlist+'/'+isTop)
                    .then(function (response) {
                        if(response.status === 204){
                            var theWishlist = self.wishlists[index];
                            self.$delete(self.wishlists, index);
                            if (isTop){
                                self.wishlists.unshift(theWishlist);
                            }else {
                                self.wishlists.push(theWishlist);
                            }
                            flash('moved');
                        }
                    });
            }

        }
    };
</script>
<style>
    .table-content .product-sort{
        width: 20%;
    }
    .table-content .product-sort div{
        margin-bottom: 5px;
    }
    .table-content .fa{
        font-size: 25px;
        margin-left: 5px;
    }
    .table-content .fa:hover{
        color: #ff3243;
        cursor: pointer;
    }

    .table-content .oldprice{
        text-decoration-line: line-through;
        padding-right: 5px !important;
    }
    .table-content .statusProduct{
        text-decoration-line: line-through;
    }
    .table-content .offer{
        display: block;
        font-size: 16px;
        color: red;
        font-weight: 700;
    }
    .table-content .removeButton{
        border: none;
        cursor: pointer;
    }
</style>