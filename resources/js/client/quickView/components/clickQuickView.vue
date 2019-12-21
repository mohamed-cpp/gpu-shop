<template>
    <a  title="Quick View" v-on:click="productSlug()" data-toggle="modal" data-target="#exampleModal" class="animate-right" href="#"><i class="ion-ios-eye-outline"></i></a>
</template>

<script>
    export default {
        props:['idproduct'],
    data(){
            return{
                id: this.idproduct,
            }
        },
        methods:{
            productSlug(){
                this.$productId = this.id;
            }
        }
    };
</script>

<style>

</style>

