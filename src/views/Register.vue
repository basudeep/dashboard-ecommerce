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
                        <h4 class="nk-block-title">Register</h4>
                        <div class="nk-block-des">
                            <p>Ecommerce Dashboar Register</p>
                        </div>
                    </div>
                </div>
                <form @submit.prevent='handleRegister' class="form-validate">
                    <div class="form-group">
                        <label class="form-label" for="name">Name</label>
                        <div class="form-control-wrap">
                            <input type="text" v-model="form.name" v-bind:class="this.errors.name ? 'form-control form-control-lg error' : 'form-control form-control-lg'"   id="name" placeholder="Enter your name" required>
                            <span v-if="this.errors.name" id="-error" class="invalid">{{this.errors.name}}</span>
                            
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="email">Email</label>
                        <div class="form-control-wrap">
                            <input type="text" v-model="form.email" v-bind:class="this.errors.email ? 'form-control form-control-lg error' : 'form-control form-control-lg'"  id="email" placeholder="Enter your email address">
                            <span v-if="this.errors.email" id="-error" class="invalid">{{this.errors.email}}</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="password">Password</label>
                        <div class="form-control-wrap">
                            <input type="password" v-model="form.password" v-bind:class="this.errors.password ? 'form-control form-control-lg error' : 'form-control form-control-lg'" id="password" placeholder="Enter your password">
                             <span v-if="this.errors.password" id="-error" class="invalid">{{this.errors.password}}</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="confirmPassword">Confirm Password</label>
                        <div class="form-control-wrap">
                            <a href="#" class="form-icon form-icon-right passcode-switch lg" data-target="confirmPassword">
                                <em class="passcode-icon icon-show icon ni ni-eye"></em>
                                <em class="passcode-icon icon-hide icon ni ni-eye-off"></em>
                            </a>
                            <input type="password" v-model="form.confirmPassword" v-bind:class="this.errors.confirmPassword ? 'form-control form-control-lg error' : 'form-control form-control-lg'" id="confirmPassword" placeholder="Confirm password">
                             <span v-if="this.errors.confirmPassword" id="-error" class="invalid">{{this.errors.confirmPassword}}</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="custom-control custom-control-xs custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="checkbox">
                            <label class="custom-control-label" for="checkbox">I agree to Dashlite <a href="#">Privacy Policy</a> &amp; <a href="#"> Terms.</a></label>
                        </div>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-lg btn-primary btn-block" v-on:click.prevent='handleRegister'>Register</button>
                    </div>
                </form>
                <div class="form-note-s2 text-center pt-4"> Already have an account? <router-link to='/login'><strong>Sign in instead</strong></router-link>
                </div>
                <div class="text-center pt-4 pb-3">
                    <h6 class="overline-title overline-title-sap"><span>OR</span></h6>
                </div>
                <ul class="nav justify-center gx-8">
                    <li class="nav-item"><a class="nav-link" href="#">Facebook</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Google</a></li>
                </ul>
                {{
                   error
                }}
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
import Vue from 'vue'
import { mapMutations, mapState } from 'vuex'
export default {
    title: 'Register',
    name: 'Register',
    data() {
        return {
            form:{
                name:null,
                email:null,
                password:null,
                confirmPassword:null
            },
            errors:{}
        }
    },

    computed: {
        ...mapState([
            'error'
        ])
    },

    methods: {
         ...mapMutations([
             'SET_ERROS'
         ]),
         handleRegister: function(event){
            this.errors={}

            if(!this.form.name){
                this.errors.name = 'Name is required'
            }
            if(!this.form.email){
                this.errors.email = 'Email is required'
            } else if(!this.validEmail(this.form.email)){
                this.errors.email = 'Email is not valid'
            }
            if(!this.form.password){
                this.errors.password = 'Password is required'
            }
            if(!this.form.confirmPassword){
                this.errors.confirmPassword = 'Confirm password is required'
            }else if(this.form.password !== this.form.confirmPassword){
                this.errors.confirmPassword = "Confirm password does't match"
            }

            if(!Object.keys(this.errors).length){
                axios.post('/api/register', this.form).then((res)=>{
                if(res.data.errors){
                    this.SET_ERROS(res.data)
                    this.toastNotification(this.error.message, 'error')
                }else{
                    console.log('Regsistered Succesfully')
                    this.toastNotification(res.data.message, 'success')
                    return this.form = {}
                }
            })
            }else{
                console.log('Validation Failed')
            }
        },
        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(this.form.email);
        }
            
        }       

    
}
</script>