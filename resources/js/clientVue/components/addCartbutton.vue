<template>
    <a class="btn-hover-black" dusk="add-cart-product" v-on:click="optionsPage(slug,options)">{{ 'Add to cart'| langJson }}</a>
</template>

<script>
    // import sidebar from "./sidebarCart.vue"
    export default {
        props:['slug','options'],
        data(){
            return{

            }
        },
        // mixins: [sidebar],
        mounted() {

        },
        methods:{
            optionsPage(slug,options){
                if(window.signed.signedIn){
                    var optionsArray = {};
                    var optionsString = '';
                    options.forEach(function(item, index) {
                        var subOption = $('input[name="'+item.name_en+'"]:checked').val();
                        optionsArray[item.name_en] = {id:item.id, sub:subOption};
                        optionsString +='.'+subOption;
                    });
                    // console.log(location.pathname);
                    var qty = $('.input-number').val();
                    var self = this;
                    axios.put( '/'+window.App.lang+'/cart/page/'+slug, { options: optionsArray, qty: qty, string:optionsString })
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
            // testBla(hi){
            //     console.log(hi);
            // }
            }
    };
</script>
