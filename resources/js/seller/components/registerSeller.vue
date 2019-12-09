<template>
    <div>

        <div class="center">
            <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline1" name="group" class="custom-control-input" :checked="show" @click="show = true">
                <label class="custom-control-label" for="customRadioInline1">Individual</label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline2" name="group" class="custom-control-input" :checked="!show" @click="show = false">
                <label class="custom-control-label" for="customRadioInline2">Organization</label>
            </div>
        </div>
        <hr>
        <form method="post" :action="route" class="user" v-if="show" enctype="multipart/form-data">
            <input type="hidden" name="_token" :value="csrf">
            <input type="hidden" class="form-control form-control-user" value=true name="company_or_individual">

            <div class="form-group row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <input type="text" class="form-control form-control-user" name="name" placeholder="Name" :value="old.name" v-bind:class="{ 'is-invalid': errors.name }">
                </div>
                <div class="col-sm-6">
                    <input type="text" class="form-control form-control-user" name="username" placeholder="Username" :value="old.username" v-bind:class="{ 'is-invalid': errors.username }">
                </div>
            </div>
            <div class="form-group">
                <input type="email" class="form-control form-control-user" name="email" placeholder="Email Address" :value="old.email" v-bind:class="{ 'is-invalid': errors.email }">
            </div>

            <div class="form-group">
                <input type="tel" class="form-control form-control-user" name="phone_number" :value="old.phone_number" placeholder="Phone Number Ex.+201112479050" v-bind:class="{ 'is-invalid': errors.phone_number }">
            </div>

            <div class="form-group row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <input type="password" class="form-control form-control-user" name="password" placeholder="Password" v-bind:class="{ 'is-invalid': errors.password }">
                </div>
                <div class="col-sm-6">
                    <input type="password" class="form-control form-control-user" name="password_confirmation" placeholder="Repeat Password">
                </div>
            </div>
            <div class="file-field">
                <div class="btn btn-sm" >
                    <strong>Passport Photo/National ID </strong>
                    <input type="file" accept="image/*" name="passport_or_id" >
                </div>
            </div>
            <div class="custom-control custom-checkbox">
                <input class="custom-control-input " type="checkbox" name="agree" id="invalidCheck" :checked="old.agree" v-bind:class="{ 'is-invalid': errors.agree }">
                <label class="custom-control-label" for="invalidCheck">
                    Agree to terms and conditionst
                </label>
            </div>
            <hr>
            <button type="submit" class="btn btn-primary btn-user btn-block">Register Account</button>
        </form>
        <!--        Company-->
        <form class="user" method="post" :action="route" enctype="multipart/form-data" v-else>
            <input type="hidden" name="_token" :value="csrf">
            <input type="hidden" class="form-control form-control-user" name="company_or_individual" value=false>
            <div class="form-group row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <input type="text" class="form-control form-control-user" name="name" :value="old.name" placeholder="Company Name" v-bind:class="{ 'is-invalid': errors.name }">
                </div>
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <input type="text" class="form-control form-control-user" name="username" :value="old.username" placeholder="Username" v-bind:class="{ 'is-invalid': errors.username }">
                </div>

                <div class="col-sm-6 mb-3 mb-sm-0">
                    <div class="btn-sm" v-bind:class="{ 'is-invalid': errors.company_logo }">
                        <strong>Company Logo</strong>
                        <input type="file" name="company_logo" multiple>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <input type="email" class="form-control form-control-user" name="email" :value="old.email" placeholder="Email Address" v-bind:class="{ 'is-invalid': errors.email }">
            </div>

            <div class="form-group">
                <input type="tel" class="form-control form-control-user" name="phone_number" :value="old.phone_number" placeholder="Phone Number Ex.+201112479050" v-bind:class="{ 'is-invalid': errors.phone_number }">
            </div>

            <div class="form-group row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <input type="password" class="form-control form-control-user" name="password" placeholder="Password" v-bind:class="{ 'is-invalid': errors.password }">
                </div>
                <div class="col-sm-6">
                    <input type="password" class="form-control form-control-user" name="password_confirmation" placeholder="Repeat Password" >
                </div>
            </div>
            <div class="file-field">
                <div class="btn btn-sm" >
                    <strong>Passport Photo/National ID </strong>
                    <input type="file" name="passport_or_id" multiple>
                </div>
            </div>
            <div class="file-field space" style="margin-top: 5px">
                <div class="btn btn-sm" >
                    <strong>Tax Photo Document </strong>
                    <input type="file" name="tax" multiple>
                </div>
            </div>
            <div class="custom-control custom-checkbox">
                <input class="custom-control-input " type="checkbox" name="agree" id="invalidCheck" :checked="old.agree" v-bind:class="{ 'is-invalid': errors.agree }">
                <label class="custom-control-label" for="invalidCheck">
                    Agree to terms and conditionst
                </label>
            </div>
            <hr>
            <button type="submit" class="btn btn-primary btn-user btn-block">Register Account</button>
        </form>
    </div>

</template>

<script>
    export default {
        props:['route','csrf','errors','old'],
        data(){
            return{
                show:true,
            }
        },
        mounted() {
            if(this.old.company_or_individual === false){
                this.show = false;
            }
        }

    };

</script>

<style>
    .center{
        text-align: center;
    }

</style>

