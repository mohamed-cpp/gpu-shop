<template>
        <div class="alert alert-flash"
             :class="'alert-'+level"
             role="alert"
             v-show="show">
                <strong v-text="body">
                </strong>
        </div>
</template>

<script>
    export default {
        props: ['message'],

        data() {
            return {
                body: this.message,
                level: 'success',
                show: false
            }
        },

        created() {
            if (this.message) {
                this.flash();
            }

            window.events.$on(
                'flash', data => this.flash(data)
            );
        },

        methods: {
            flash(data) {
                if (data) {
                    this.body = data.message;
                    this.level = data.level;
                }

                this.show = true;

                this.animate();
            },

            animate() {
                var self = this;
                var el = $('.alert-flash');
                el.animate({right: '15px'},"slow",function () {
                    el.delay(3000).animate({right: '-500px'},"slow",function () {
                            el.css('right', '');
                        self.show = false;
                    });
                });
            }
        }
    };
</script>
<style>
    .alert-flash {
        position: fixed;
        right: 10px;
        top: 260px;
        z-index: 9999;
    }
</style>