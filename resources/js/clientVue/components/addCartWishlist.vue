<template>
    <div class="cart-checkout-btn">
        <a class="btn-hover cart-btn-style" v-on:click="addCart()">add cart</a>
    </div>
</template>

<script>
    export default {
        props:['slug','username'],
        methods:{
            addCart(){
                if(window.signed.signedIn){
                    var self = this;
                    axios.post( '/'+window.App.lang+'/cart/add/'+this.slug, { username: this.username })
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

<style scoped>

</style>