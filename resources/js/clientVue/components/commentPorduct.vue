<template>
    <div>
        <div class="row mt-30">
            <div class="col-lg-10 col-xl-8 comments">
                <div class="media d-block d-md-flex comment-box" v-for="(comment, commentIndex) in vueComments">
                    <img class="d-flex rounded-circle avatar z-depth-1-half mb-3 mx-auto" :src="comment.commentable.img ? '/storage/client/images/'+comment.commentable.img : defaultImage"
                         alt="Avatar">
                    <div class="media-body text-center text-md-left ml-md-3 ml-0">
                        <button class="reply  btn btn-primary btn-sm" v-on:click="showReply(commentIndex)">Replay</button>
                        <h5 v-bind:class="{ 'sellerBox' : comment.commentable_type == 'App\\Seller','adminBox' : comment.commentable_type == 'App\\Admin'}">{{comment.commentable.name}}</h5>
                        <small class="mb-3">@<a :href="'/en/profile/'+comment.commentable.username">{{comment.commentable.username}}</a></small>
                        <div class="mt-15" :id="'commentBody'+commentIndex">
                            <div class="reply" v-if="comment.commentable.username ==  username">
                                <div class="edit">
                                    <button class="btn btn-info btn-sm" v-on:click="editReply(commentIndex)">Edit</button>
                                    <button class="btn btn-danger btn-sm" v-on:click="deleteReply(commentIndex,false,comment.id)">Delete</button>
                                </div>
                                <div class="update"  style="display: none">
                                    <button class="btn btn-outline-info btn-sm" v-on:click="updateReply(commentIndex,false,comment.id)">Update</button>
                                    <button class="btn btn-outline-danger btn-sm" v-on:click="closeReply(commentIndex)">Close</button>
                                </div>
                            </div>
                            <div class="reply" v-else-if="product.username_seller ==  username">
                                <button type="button" class="btn btn-danger btn-xs">Report</button>
                            </div>
                            <div>{{comment.body}}</div>
                        </div>

                        <div class="media d-block d-md-flex mt-3 shadow-textarea" v-for="(reply, replyIndex) in comment.replies">
                            <img class="d-flex rounded-circle avatar z-depth-1-half mb-3 mx-auto" :src="reply.commentable.img ? '/storage/client/images/'+reply.commentable.img : defaultImage"
                                 alt="Generic placeholder image">

                            <div class="media-body text-center text-md-left ml-md-3 ml-0">

                                <h5 v-bind:class="{ 'sellerBox' : reply.commentable_type == 'App\\Seller','adminBox' : reply.commentable_type == 'App\\Admin'}">{{reply.commentable.name}}</h5>
                                <small class="mb-3">
                                    @<a :href="'/en/profile/'+reply.commentable.username">{{reply.commentable.username}}</a>
                                </small>
                                <div class="form-group basic-textarea rounded-corners mt-15 mb-md-0 mb-4" :id="'commentBody'+commentIndex+'reply'+replyIndex">
                                    <div class="reply" v-if="reply.commentable.username ==  username">
                                        <div class="edit">
                                            <button class="btn btn-info btn-sm" v-on:click="editReply(commentIndex,replyIndex)">Edit</button>
                                            <button class="btn btn-danger btn-sm" v-on:click="deleteReply(commentIndex,replyIndex,reply.id)">Delete</button>
                                        </div>
                                        <div class="update" style="display: none">
                                            <button class="btn btn-outline-info btn-sm" v-on:click="updateReply(commentIndex,replyIndex,reply.id)">Update</button>
                                            <button class="btn btn-outline-danger btn-sm" v-on:click="closeReply(commentIndex,replyIndex)">Close</button>
                                        </div>
                                    </div>
                                    <div class="reply" v-else-if="product.username_seller ==  username">
                                        <button type="button" class="btn btn-danger btn-xs">Report</button>
                                    </div>
                                    <div>{{reply.body}}</div>

                                </div>
                            </div>
                        </div>

                        <div class="media d-block d-md-flex mt-3 shadow-textarea" style="display: none !important;" :id="'comment'+commentIndex" v-if="loggedUser">
                            <img class="d-flex rounded-circle avatar z-depth-1-half mb-3 mx-auto" :src="loggedUser.img ? '/storage/client/images/'+loggedUser.img : defaultImage"
                                 alt="Generic placeholder image">
                            <div class="media-body text-center text-md-left ml-md-3 ml-0">
                                <h5 class="mt-0 font-weight-bold blue-text mb-3">{{loggedUser.name}}</h5>
                                <div class="form-group basic-textarea rounded-corners mb-md-0 mb-4">
                                    <textarea class="form-control z-depth-1" :id="'reply'+commentIndex" rows="3" placeholder="Write your comment..."></textarea>
                                    <button class="reply mt-1 btn btn-primary btn-sm" v-on:click="postComment(commentIndex,comment.id)">Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="media d-block d-md-flex" v-if="loggedUser">
                    <img class="d-flex rounded-circle avatar z-depth-1-half mb-3 mx-auto" :src="loggedUser.img ? '/storage/client/images/'+loggedUser.img : defaultImage"
                         alt="Avatar">
                    <div class="media-body text-center text-md-left ml-md-3 ml-0">
                        <h5 class="mt-0 font-weight-bold blue-text">{{loggedUser.name}}</h5>
                        <textarea class="form-control z-depth-1" id="comment" rows="3" placeholder="Write your comment..."></textarea>
                        <button class="reply mt-1 btn btn-primary btn-sm" v-on:click="postComment()">Post</button>
                    </div>
                </div>
                <div v-else><h4>You need to login for add comment</h4></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['comments','product'],
        data(){
            return{
                loggedUser:null,
                vueComments: this.comments,
                defaultImage:'/GPU-Shop/img/avatar.jpg',
                lang: window.App.lang,
                username: window.App.username,
            }
        },
        mounted() {
            if(window.signed.signedIn || window.signed.signedInAGuard ){
                this.loggedUser = window.App.user;
            }
        },
        methods:{
            postComment(commentIndex = false,commetID){
                if(Number.isInteger(commentIndex)){
                    var parent_id = commetID;
                    var el = $('#reply'+commentIndex);
                }else {
                    var parent_id = null;
                    var el = $('#comment');
                }
                var self = this;
                var body = el.val();
                if(body){
                    axios.post('/'+this.lang+'/comment/store/'+this.product['slug_'+this.lang],{
                        parent_id : parent_id,
                        body: body,
                    })
                    .catch(error => {
                        if(error.response.status === 422){
                            flash(error.response.data,'warning');
                        }
                        if(error.response.status === 401){
                            flash('you should login first','danger');
                        }
                    })
                    .then( function(response) {
                        if(response.status === 200){
                            flash(response.data[0]);
                            if(Number.isInteger(commentIndex)){
                                if(self.vueComments[commentIndex].replies){
                                    self.vueComments[commentIndex].replies.push(response.data[1]);
                                    self.$forceUpdate();
                                }else {
                                    let data = response.data[1];
                                    self.vueComments[commentIndex]['replies'] = [data];
                                    self.$forceUpdate();
                                }
                            }else {
                                self.vueComments.push(response.data[1]);
                            }
                            el.val('');
                        }
                    });
                }else {
                    flash('it is empty comment ?','danger');
                }
            },
            showReply(index){
                $('#comment'+index).fadeIn(700);
            },
            editReply(commentIndex,replyIndex = false){
                if (Number.isInteger(replyIndex)) {
                    var body = $('#commentBody'+commentIndex+'reply'+replyIndex);
                }else {
                    var body = $('#commentBody'+commentIndex);
                }
                body.find('.reply .update').show();
                body.find('.reply .edit').hide();
                let text = body.find('>:last-child').text();
                body.find('>:last-child').remove();
                body.append('<textarea class="form-control z-depth-1 mb-2" rows="3">'+text.trim()+'</textarea>');

            },
            deleteReply(commentIndex,replyIndex = false,id){
                var self = this;
                axios.delete('/'+this.lang+'/comment/delete/'+id)
                .catch(error => {
                    if(error.response.status === 422){
                        flash(error.response.data,'warning');
                    }
                    if(error.response.status === 401){
                        flash('you should login first','danger');
                    }
                })
                .then( function(response) {
                    if(response.status === 200){
                        flash(response.data[0]);
                        if (Number.isInteger(replyIndex)) {
                            self.$delete(self.vueComments[commentIndex].replies, replyIndex);
                        }else {
                            self.$delete(self.vueComments, commentIndex);
                        }
                    }
                });
            },
            updateReply(commentIndex,replyIndex = false,id){
                console.log(commentIndex,replyIndex);
                if (Number.isInteger(replyIndex)) {
                    var el = $('#commentBody'+commentIndex+'reply'+replyIndex);
                    var oldText = this.vueComments[commentIndex].replies[replyIndex].body;

                }else {
                    var oldText = this.vueComments[commentIndex].body;
                    var el = $('#commentBody'+commentIndex);
                }
                var text = el.find('>:last-child').val();

                if(text && oldText != text){
                    var self = this;
                    axios.patch('/'+this.lang+'/comment/update/',{
                        id : id,
                        body: text,
                    })
                    .catch(error => {
                        if(error.response.status === 422){
                            flash(error.response.data,'warning');
                        }
                    })
                    .then( function(response) {
                        if(response.status === 200){
                            flash(response.data[0]);
                            if (Number.isInteger(replyIndex)) {
                                self.vueComments[commentIndex].replies[replyIndex].body = response.data[1].body;
                            }else {
                                self.vueComments[commentIndex].body = response.data[1].body;
                            }
                            el.find('.reply .update').hide();
                            el.find('.reply .edit').show();
                            el.find('>:last-child').remove();
                            el.append('<div>'+text+'</div>');
                            el.find('>:last-child').val('');
                        }
                    });
                }else {
                    flash('it is empty comment or same text ?','danger');
                }
            },
            closeReply(commentIndex,replyIndex = false){
                if (Number.isInteger(replyIndex)) {
                    var body = $('#commentBody'+commentIndex+'reply'+replyIndex);
                    var text = this.vueComments[commentIndex].replies[replyIndex].body;
                }else {
                    var body = $('#commentBody'+commentIndex);
                    var text = this.vueComments[commentIndex].body;
                }
                body.find('.reply .update').hide();
                body.find('.reply .edit').show();
                body.find('>:last-child').remove();
                body.append('<div>'+text+'</div>');
            },
        }

    }
</script>

<style scoped>
    .btn-xs {
        padding: .25rem .4rem;
        font-size: .875rem;
        line-height: .5;
        font-weight:normal;;
    }
    .comment-box{
        box-shadow: 2px 2px 11px 1px rgba(106, 106, 106, 0.48);
    }
    .shadow-textarea{
        box-shadow: 2px 2px 11px 1px rgba(106, 106, 106, 0.48);
    }
    .media{
        padding: 5px;
        margin-bottom: 20px;
    }
    .media h5{
        margin-bottom: 0;
    }
    .media small{
        display: block;
        margin-top: 2px;
    }
    .media button{
        margin:2px;
    }
    .comments{
        margin: auto;
    }
    .comments img{
        height: 80px;
        width: 80px;
    }
    .comments button{
        border-radius: 7px;
        font-weight: bold;
    }
    .reply{
        float:right;
        display:inline-grid;
    }
    .sellerBox{
        padding: 0 6px;
        height: 23px;
        line-height: 24px;
        background-color: rgba(99, 96, 99, 0.89);
        color: #fff;
        font-size: 14px;
        border-radius: 12px;
        margin-top: 5px;
        text-align: center;
        display: inline-flex;
    }
    .adminBox{
        padding: 0 6px;
        height: 23px;
        line-height: 24px;
        background-color: rgba(255, 0, 1, 0.64);
        color: #fff;
        font-size: 14px;
        border-radius: 12px;
        margin-top: 5px;
        text-align: center;
        display: inline-flex;
    }

</style>