<template>
    <div>
        <div v-if="tablist == 'true'" class="cart-add">
            <i class="ion-bag"></i> <a v-on:click="addCart()" >{{ 'Add to cart'| langJson }}</a>
        </div>
        <div v-else class="product-list-cart">
            <a class="btn-hover list-btn-style" v-on:click="addCart()">{{ 'Add to cart'| langJson }}</a>
        </div>
    </div>
</template>

<script>
    export default {
        props:['slug','tablist'],
        data(){
            return{

            }
        },
        methods:{
            addCart(){
                if(window.signed.signedIn){
                    var self = this;
                    axios.post( '/'+window.App.lang+'/cart/add/'+this.slug)
                        .catch(error => {
                            flash(error.response.data,'danger');
                        })
                        .then(function (response) {
                            if(response.status === 200){
                                self.$root.cart = response.data;
                                flash(self.$options.filters.langJson('Added to cart'));
                            }
                        });

                }else {
                    window.location.href = '/login';
                }
            },
        }
    }
</script>
<style>
    .cart-add a:hover {
        color: #ee3333 !important;
        cursor: pointer;
    }
    .list-btn-style:hover{
        color:#fff !important;
    }
</style>