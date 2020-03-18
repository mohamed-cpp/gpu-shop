<template>
    <a class="btn-hover list-btn-wishlist" v-if="list == 1" v-on:click="productWishlist()"><i class="ion-ios-heart-outline"></i></a>
    <a class="btn-hover"  v-else-if="list == 2" v-on:click="productWishlistAndHeart()">
        <i v-if="heart == true" class="ion-ios-heart"></i>
        <i v-else class="ion-ios-heart-outline"></i>
    </a>
    <a title="Wishlist"  v-else class="animate-left" v-on:click="productWishlist()"><i class="ion-ios-heart-outline"></i></a>
</template>

<script>
    export default {
        props:['idproduct','list','wishlistadded'],
        data(){
            return{
                id: this.idproduct,
                heart: this.wishlistadded,
                status: null,
            }
        },
        methods:{
            productWishlist(){
                if(window.signed.signedIn){
                    axios.post('/'+window.App.lang+'/wishlist/'+this.idproduct)
                        .then(function (response) {
                            if(response && response.status === 204){
                                flash(this.$options.filters.langJson('Added to wishlist'));
                            }
                        })
                        .catch(error => {
                            if(error.response.status === 400){
                                flash(error.response.data);
                            }
                        });
                }else {
                    window.location.href = '/login';
                }
            },
            productWishlistAndHeart(){
                var self = this;
                if(window.signed.signedIn && !this.heart){
                    axios.post('/'+window.App.lang+'/wishlist/'+this.id)
                        .then(function (response) {
                            if(response.status === 204){
                                self.heart = true;
                                flash(this.$options.filters.langJson('Added to wishlist'));
                            }
                        });
                }else if(window.signed.signedIn && this.heart){
                    axios.delete('/'+window.App.lang+'/wishlist/'+this.id)
                        .then(function (response) {
                            if(response.status === 204){
                                self.heart = false;
                                flash(this.$options.filters.langJson('Removed from wishlist'));
                            }
                        });
                }else {
                    window.location.href = '/login';
                }
            }
        }
    };
</script>



