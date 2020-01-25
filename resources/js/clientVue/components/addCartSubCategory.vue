<template>
    <div>
        <div v-if="tablist == 'true'" class="product-categori">
            <a v-on:click="addCart()" ><i class="ion-bag"></i> Add to cart</a>
        </div>
        <div v-else class="product-list-cart">
            <a class="btn-hover list-btn-style" v-on:click="addCart()">add to cart</a>
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
                        .then(function (response) {
                            if(response.status === 200){
                                self.$root.cart = response.data;
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
    .product-categori a:hover {
        color: #ee3333 !important;
        cursor: pointer;
    }
    .list-btn-style:hover{
        color:#fff !important;
    }
</style>