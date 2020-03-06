<template>
    <div>
        <div class="panel-body">
            <!-- Single button -->
            <div class="btn-group pull-right top-head-dropdown" v-if="notifications">
                <a class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   <i :class="icon+' bell'" style="font-size: 19px"> <span v-if="isUnreadNotifications" class="badge">{{unreadNotifications}}</span></i> <span class="caret"></span>
                </a>

                <ul class="dropdown-menu dropdown-menu-right" id="dropdown-menu" @scroll="scrolling()">
                    <li>
                        <a class="btn btn-default makeAsRead" v-on:click="makeAsRead()" >Make All as Read</a>
                    </li>
                    <li v-for="(notification,index) in notifications" :id="'notification'+index" v-bind:class="{ 'unread' : !notification.read_at}" v-on:click="aRead(notification,index)">
                        <a :href="notification.data.path" class="top-text-block">
                            <div class="top-text-heading">{{notification.data.message}}</div>
                            <div class="top-text-light">{{notification.created_at | dateFormat}}</div>
                        </a>
                    </li>
                    <li v-if="loading">
                        <div class="loader-topbar"></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                notifications: false,
                icon: 'fa fa-bell-o',
                loading: false,
                page:2,
                lastPage:null,
                moreLoading:true,
                unreadNotifications: 0,
                isUnreadNotifications:false,
            }
        },
        created() {
            // var self = this;
            axios.get('/notification')
                .then(response =>{
                    this.notifications = response.data[0];
                    this.lastPage = response.data[1] + 1;
                    this.loopUnreadNotifications(this.notifications);
                });
        },
        methods: {
            scrolling() {
                var container = this.$el.querySelector("#dropdown-menu");
                let scrolledToEnd = container.offsetHeight + container.scrollTop >= container.scrollHeight;

                if( scrolledToEnd && this.moreLoading && this.page < this.lastPage){
                    this.loading = true;
                    this.moreLoading = false;
                    var self = this;
                    axios.get('/notification?page='+this.page)
                        .then(response => {
                            if(response.data[0].length){
                                Array.prototype.push.apply(self.notifications, response.data[0]);
                                self.page = self.page + 1;
                                self.moreLoading = true;
                                this.loopUnreadNotifications(response.data[0]);
                            }else {
                                self.moreLoading = false;
                            }
                            self.loading = false;

                        });
                }
            },
            makeAsRead(){
                if (this.isUnreadNotifications){
                    axios.patch('/notification/read')
                    .then(response =>{
                        if (response.status === 204){
                            $("li").removeClass("unread");
                            this.icon = 'fa fa-bell-o';
                            this.isUnreadNotifications = false;
                        }
                    });
                }
            },
            aRead(notification,index){
                if (!notification.read_at){
                    axios.patch('/notification/read/'+notification.id)
                    .then(response =>{
                        if (response.status === 204){
                            $("#notification"+index).removeClass("unread");
                            this.unreadNotifications = this.unreadNotifications - 1;
                            if (this.unreadNotifications === 0){
                                this.icon = 'fa fa-bell-o';
                                this.isUnreadNotifications = false;
                            }
                        }
                    });
                }
            },
            loopUnreadNotifications(data){
                data.forEach(item => {
                    if (!item.read_at) {
                        this.unreadNotifications = this.unreadNotifications + 1;
                    }
                });
                if (this.unreadNotifications > 0){
                    this.icon = 'fa fa-bell';
                    this.isUnreadNotifications = true;
                }
            }
        }




    }
</script>

<style scoped>
    .unread{
        background-color: #6b6a6a40;
    }
    .bell .badge{
        position: absolute;
        top: -9px;
        left: 12px;
        padding: 0 3px;
        border-radius: 50%;
        background-color: #ee3333;
        color: white;
    }
    .makeAsRead:hover{
        color: #1d68a7 !important;
        text-decoration: underline !important;;
    }
</style>