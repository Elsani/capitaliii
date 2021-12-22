<template>
    <div class="app">
              <!-- Loading -->
        <!-- <div id="loadingg">
            <img src="../assets/images/loader.gif" width="64" height="64" alt="/" /> -->
        <!-- </div> -->
        <div id="wrapper-page" class="login_steps">
            <div id="header">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xs-9 col-sm-3">
                            <router-link to="/"><a class="logo">
                                <img src="../assets/images/logostart.png" alt="" />
                            </a></router-link>
                            <!-- <div v-show="isLoggedIn = !isLoggedIn">
                            <verificationcode/>
                            </div> -->
                            <!-- QITU Komponenta thirret -->

                        </div>
                    </div>
                </div>
            </div>
            <div id="content">
                <div class="container">
                    <div class="row">
                        <div class="col-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8">
                            <div class="text_started text_sign">
                                <h3>Sign in into your Account</h3>
                            </div>
                        </div>
                    </div>
                    <div v-if="showModal">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                    <div class="containeree">
                                        <img id="vcode" src="../assets/images/Verificationcode.png" alt="">
                                            <h6>Please type the Verification Code: </h6>
                                                <CodeInput :loading="false" v-model="form.token" class="input" v-bind:value="form.token" />
                                                <div class="btn_confirm col-xs-12 col-md-12 ">
                                                <button type="submit" class="btn_confirm col-xs-12 col-md-12 " @click="login()"> Confirm </button>
                                            </div>
                                        </div>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="row" v-if="!showModal">
                        <div class="col-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8 pl0 pr0">
                            <div class="text_formstarted">
                                <form  @submit.prevent="submit" class="parsleyform">
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-6 col-md-6 text_formlogin">
                                            <label>Phone </label>
                                            <select class="form-select" aria-label="Default select example" v-model="form.prefixId">
                                                <option class="form-select" v-for="item in prefixConfigs" v-bind:value="item.id" :key="item.id"> {{item.prefix}}</option>
                                            </select>
                                            <input  data-required="true" type="text" v-model="form.username"  name="Name" id="name"/>
                                            <p>Forget Password?<router-link to="/reset"><a> Reset</a></router-link></p>
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-6">
                                            <div class="fontpass">
                                                <label for="password">Confirm Password</label>
                                                    <input type="password" v-model="form.password" name="password"  id="id_password">
                                                    <i class="fa fa-eye" id="togglePassword"></i>
                                            </div>
                                         </div>
                                         <div class="col-xs-12 col-md-12 btn_confirm">
                                             <!-- <router-link to="/account_home">Login</router-link> -->
                                             <!-- <a type="submit" href="">Login</a>  -->
                                        <button type="submit" @click="requestLogin()"  class="btn_confirm col-xs-12 col-md-12 "> Login </button>
                                        <!-- <div class="senden"> 
                                            <a href="#"><input type="submit" value="Confirm">
                                                <i class="fa fa-long-arrow-right"></i>
                                            </a>  
                                        </div> -->
                                        
                                     </div>
                                     </div>
                                </form>  
                                <p v-if="showError" id="error">Username or Password is incorrect</p>      
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-12  offset-md-1 col-md-10 offset-lg-2 col-lg-8 pl0 pr0">
                            <div class="text_footer">
                                <ul class="navf row">
                                    <li class="col-3">
                                        <a href="">Contact Us</a>
                                        <a href="#"><i class="fa fa-phone"></i></a>
                                        <a href="#"><i class="fa fa-envelope"></i></a>
                                    </li>
                                    <li class="col-3">
                                        <a href="">Socials</a>
                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                        <a href="#"><i class="fa fa-instagram"></i></a>
                                        <a href="#"><i class="fa fa-twitter"></i></a>
                                        <a href="#"><i class="fa fa-linkedin"></i></a>
                                    </li>
                                    <li class="col-3">
                                        <router-link to="/our_branches"><a>Our Branches</a></router-link>
                                        <a href=""><i class="fa fa-map-marker"></i></a>
                                    </li>
                                    <li class="col-3">
                                        <a href="">Support</a>
                                        <a href=""><i class="fa fa-comment"></i></a>
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CodeInput from "vue-verification-code-input";
import { mapActions } from "vuex";
import axios from 'axios';

export default {
  name: "Login",
  components: {
    CodeInput
  },
  data() {
    return {
      showModal: false,
      form: {
        activationCode: "",
        token: "",
        username: "",
        password: "",
        prefixId: "",
      },
    // verifycode: [{
    //     activationCode: "",
    //     username: "",
    //     password: "",
    //     prefixId: "",
    //   }],


      prefixConfigs: [{
        id: '',
        prefix: '',
        country: '',
      }],
      showError: false
    };
  },
  computed: {

  },
  methods: {
    ...mapActions(["LogIn"]),
    async submit() {
        const authRequestLogin = {
            phoneNumber: this.form.username,
            password: this.form.password,
            prefixId: this.form.prefixId,
            userType: 'PRIVATE'
        }
        // qitu po shkruj per qato verificationcode
    },
    async login() {
         const loginRequest = {
            username: this.form.username,
            password: this.form.password,
            prefixId: this.form.prefixId,
            activationCode: this.form.activationCode,
            token: this.form.token,
            userType: 'PRIVATE'
        }

        
        await axios.post('https://capapi.digitizeict.com/api/auth/login', loginRequest)
        .then((res) => {this.showModal = false;});
    },
    async requestLogin() {
         const authRequestLogin = {
            phoneNumber: this.form.username,
            password: this.form.password,
            prefixId: this.form.prefixId,
            type: 'PRIVATE'
        }

        await axios.post('https://capapi.digitizeict.com/api/auth/request-login', authRequestLogin)
        .then((res) => {this.form.activationCode = res.data.activationCode; this.showModal = true;});
    }

    //  qitu ONCHANGE MODALI

    // onChange(v) {
    //   console.log("onChange ", v);
    // },
    // onComplete(v) {
    //   console.log("onComplete ", v);
    // },

    // QITU posht e ki Metoden per get Code dhe Sekondat

//    getCode(){
//        console.log(this.getCode)
//     if(this.username){
//         let params = {}
//         params.username = this.verifycode.activationCode
//         // Call to get the SMS verification code interface
//         axios.get('https://capapi.digitizeict.com/api/auth/login',params).then(res=>{ 
//             res = res.data
//             if(res.status==200) {
//                 this.$message({
//                     message:'The verification code has been sent, please wait...',
//                     type: 'success',
//                     center:true
//                 })
//             }
//         })
//     }
//    }

//         // Because the timer is used below, you need to save this point
//         let that = this
//         that.waitTime--
//         that.getCodeBtnDisable = true
//                  this.codeBtnWord = `${this.waitTime}s after reacquiring`
//         let timer = setInterval(function(){
//             if(that.waitTime>120){
//                 that.waitTime--
//             }else{
//                 clearInterval(timer)
//                 that.waitTime = 120
//             }
//         },1000)
//     }
// }

   // QITU E KI PER GET CODE EDHE SEKONDAT //

  },
  async created() {
       await axios.get('https://capapi.digitizeict.com/api/config/prefixes').then((res) => {this.prefixConfigs = res.data})
       console.log(this.prefixConfigs);
  }
};
</script>

<style scoped>


/*  qitu butoni qasaj */
@import "../assets/css/style.css";
@import "../assets/css/helper.css";
@import "../assets/plugins/wow/animate.css";
@import "../assets/plugins/fonts-awesome/css/font-awesome.min.css";
/* @import "../assets/plugins/bootstrap/css/bootstrap.min.css";
@import "../assets/plugins/easy-parallax-background/simpleparallax.css";
@import "../assets/plugins/flexslider/flexslider.css";
@import "../assets/plugins/fancybox/jquery.fancybox.css";
@import "../assets/plugins/fancybox/jquery.fancybox-thumbs.css";
@import "../assets/plugins/supersized/supersized.css";
@import "../assets/plugins/supersized/supersized.shutter.css";
@import "../assets/plugins/slick/slick.css";
@import "../assets/plugins/slick/slick-theme.css";
@import "../assets/plugins/mcustomscrollbar/jquery.mCustomScrollbar.css";
@import "../assets/plugins/selectbox/jquery.selectbox.css";
@import "../assets/plugins/lazyload/lazyload.css";
@import "../assets/plugins/icheck/css/minimal.css";
@import "../assets/plugins/owlcarousel/owl.carousel.css";
@import "../assets/plugins/flagstrap/dist/css/flags.css"; */
/* @import "../assets/plugins/flagstrap/dist/css/flags.css";  */


 /* .btn_confirm button {
  width: 100%;
    height: auto;
    color: #fff !important;
    font-size: 16px;
    line-height: 26px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    display: block;
    margin: 0 0 20px 0;
    padding: 13px 0px 13px 0px !important;
    position: relative;
    border-radius: 10px;
    text-transform: uppercase;
    background: #F37021;
    text-align: center;
    border: 1px solid #F37021;
    line-height: normal;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  margin: 20px 0 0 13px;
}  */
</style>