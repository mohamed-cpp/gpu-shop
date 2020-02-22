<template>
    <div class="header-cart common-style">
        <button class="sidebar-trigger">
           <span v-if="cart" class="number">{{cart}}</span> <span class="ion-bag"></span>
        </button>
    </div>
</template>

<script>
    export default {
        props:['count_product'],
        watch: {
            '$root.cart': function(newVal, oldVal) {
                this.cart = Object.keys(newVal.items).length;
            }
        },
        data(){
            return{
                cart: false,
            }
        },
        mounted() {
            if (this.count_product != 0) {
                this.cart = this.count_product;
            }
        },
    };
</script>
<style>
    .number{
        font-weight: 600;
        color: #fd3131;
        font-size: 19px;
    }
</style>