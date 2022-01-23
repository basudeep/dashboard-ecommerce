<template>
<div>
    <div class="nk-block nk-block-middle nk-auth-body wide-xs">
        <div class="brand-logo pb-4 text-center">
            <a href="#" class="logo-link">
                <img class="logo-light logo-img logo-img-lg" src="../assets/logo.png" srcset="../assets/logo.png" alt="logo">
                <img class="logo-dark logo-img logo-img-lg" src="../assets/logo.png" srcset="../assets/logo.png" alt="logo-dark">
            </a>
        </div>
        <div class="card">
            <div class="card-inner card-inner-lg">
                <div class="nk-block-head">
                    <div class="nk-block-head-content">
                        <h4 class="nk-block-title">Login Page</h4>
                        <div class="nk-block-des">
                            <p>Ecommerce Dashboard Login</p>
                        </div>
                    </div>
                </div>
                <form @submit.prevent="handleSignIn">
                    <div class="form-group">
                        <label class="form-label" for="email">Email</label>
                        <div class="form-control-wrap">
                            <input type="text" v-model="form.email" v-bind:class="this.errors.email ? 'form-control form-control-lg error' : 'form-control form-control-lg'"  id="email" placeholder="Enter your email address or username">
                            <span v-if="this.errors.email" id="-error" class="invalid">{{this.errors.email}}</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="password">Password</label>
                        <div class="form-control-wrap">
                            <a href="#" class="form-icon form-icon-right passcode-switch lg" data-target="password">
                                <em class="passcode-icon icon-show icon ni ni-eye"></em>
                                <em class="passcode-icon icon-hide icon ni ni-eye-off"></em>
                            </a>
                            <input type="password" v-model="form.password" v-bind:class="this.errors.password ? 'form-control form-control-lg error' : 'form-control form-control-lg' "  id="password" placeholder="Enter your password">
                            <span v-if="this.errors.password" id="-error" class="invalid">{{this.errors.password}}</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="custom-control custom-control-xs custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="checkbox">
                            <label class="custom-control-label" for="checkbox">I agree to Dashlite <a href="#">Privacy Policy</a> &amp; <a href="#"> Terms.</a></label>
                        </div>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-lg btn-primary btn-block" type="submit" >Log In</button>
                    </div>
                </form>
                <div class="form-note-s2 text-center pt-4"> Not have an account? <router-link to='/register'><strong>Register in instead</strong></router-link>
                </div>
                <div class="text-center pt-4 pb-3">
                    <h6 class="overline-title overline-title-sap"><span>OR</span></h6>
                </div>
                <ul class="nav justify-center gx-8">
                    <li class="nav-item"><a class="nav-link" href="#">Facebook</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Google</a></li>
                </ul>
            </div>
        </div>
    </div>
                    
</div>
</template>
<style scoped>
    #-error{
        position: absolute;
    }
</style>
<script>
import axios from 'axios'
export default {
    title: 'Login',
    name: 'Login',
    data() {
        return {
            form:{
                email:null,
                password: null
            },
            errors:{}
        }
    },
    methods: {
        handleSignIn: function(){
            this.errors={}

            if(!this.form.email){
                this.errors.email = 'Email is required'
            }else if(!this.validEmail(this.form.email)){
                 this.errors.email = 'Email is not valid'
            }
            if(!this.form.password){
                this.errors.password = 'Password is required'
            }
            
        },
        validEmail: function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(this.form.email);
        }
    },
}
</script>