<template>
    <a title="Quick View" v-on:click="productSlug()" data-toggle="modal" data-target="#exampleModal" class="animate-right" href="#"><i class="ion-ios-eye-outline"></i></a>
</template>

<!--v-on:click.native="$productSlug = slugproduct"-->
<script>
    export default {
        props:['slugproduct'],
    data(){
            return{
                slug: this.slugproduct,
            }
        },
        methods:{
            productSlug(){
                this.$productSlug = this.slug;
            }
        }
    };
</script>

<style>

</style>

