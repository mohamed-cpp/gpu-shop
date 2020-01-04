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
                    axios.get('/api/wishlist/'+window.App.user+'/'+this.id)
                        .then(response => console.log(response.status));
                }else {
                    window.location.href = '/login';
                }
            },
            productWishlistAndHeart(){
                if(window.signed.signedIn && !this.heart){
                    axios.get('/api/wishlist/'+window.App.user+'/'+this.id)
                        .then(response => this.status = response.status);
                        this.heart = true;
                }else if(window.signed.signedIn && this.heart){
                    axios.delete('/api/wishlist/'+window.App.user+'/'+this.id)
                        .then(response => this.status = response.status);
                    this.heart = false;
                }else {
                    window.location.href = '/login';
                }
            }
        }
    };
</script>



