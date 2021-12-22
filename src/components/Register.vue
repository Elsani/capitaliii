<template>
        <div id="wrapper-page" class="login_steps">
            <div id="header">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xs-9 col-sm-3">
                            <router-link to="/"><a class="logo">
                            </a></router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div id="content">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="text_started">
                                <p>Step 2/4</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8 pl0 pr0">
                            <div class="text_started">
                                <h3>Let's get Started!</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8 pl0 pr0">
                            <div class="text_formstarted">
                                <p>Firstly, tell us about yourself.</p>
                                <form @submit.prevent="submit" class="parsleyform">
                                    <div class="row">
                                         <div class="col-12 col-sm-6 col-md-6">
                                            <label >First name</label>
                                            <input data-required="true"  type="text" name="username" />
                                            <label>Telephone </label>
                                            <input data-required="true" type="text"  name="telephone" id="telephone"/>
                                            <div class="fontpass">
                                                <label >Password <span>min 8 symbols*</span></label>
                                                    <input type="password"  name="password" >
                                                <i class="fa fa-eye" id="togglePassword"></i>
                                            </div>
                                            <div class="row text_checkbox">
                                                <div class="col-1 col-lg-2 col-xl-1">
                                                    <input type="checkbox" id="accept" name="accept" value="Bike">
                                                </div>
                                                <div class="col-9 col-lg-8 col-xl-9 ">
                                                    <label for="accept">Accept terms and conditions</label>
                                                </div>
                                            </div>
                                        </div>
                                         <div class="col-12 col-sm-6 col-md-6">
                                            <label for="full_name">Last Full name</label>
                                            <input data-required="true"  v-model="form.full_name" type="text" name="full_name" id="full_name"/>
                                            <label for="username">E-mail User</label>
                                            <input data-required="true" v-model="form.username" data-type="username" name="username" id="username" />
                                            <div class="fontpass">
                                                <label for="password"> Password</label>
                                                    <input type="password" v-model="form.password" name="password"  id="password">
                                                <i class="fa fa-eye" id="togglePassword"></i>
                                            </div>
                                         </div>
                                         <div class="col-12 col-md-12 btn_confirm">
                                             <!-- <a>Confirm<i class="fa fa-long-arrow-right"></i></a> -->
                                                <!-- <router-link to="/login">Confirm</router-link>
                                                 -->
                                                 <button type="submit">Submit</button>
                                         </div>
                                        <div class="col-12  col-md-12 text_login">
                                            <p>Already have an account?<router-link to="/login"> Log in </router-link></p>
                                            
                                        </div>
                                     </div>
                                </form>        
                            </div>
                            <p v-if="showError" id="error">Username already exists</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8 pl0 pr0">
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
                                        <router-link to="/our_branches"><a>Our Branches</a>
                                        <a href=""><i class="fa fa-map-marker"></i></a></router-link>
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
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Register",
  components: {},
  data() {
    return {
      form: {
        username: "",
        full_name: "",
        password: "",
      },
      showError: false
    };
  },
  methods: {
    ...mapActions(["Register"]),
    async submit() {
      try {
        await this.Register(this.form);
        this.$router.push("/login");
        this.showError = false
      } catch (error) {
        this.showError = true
      }
    },
  },
};
</script>

<style>
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
</style>