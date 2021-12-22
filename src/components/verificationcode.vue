<template>
  <div id="app">
      <div class="container">
          <div>
      <img id="vcode" src="../assets/images/Verificationcode.png" alt="">
          <h6>Please type the Verification Code: </h6>
            <CodeInput :loading="false" class="input" v-on:change="onChange" v-on:complete="onComplete" />
             <div class="btn_confirm col-xs-12 col-md-12 ">
            <button type="submit" class="btn_confirm col-xs-12 col-md-12 "> Login </button>
            </div>
          </div>

    </div>
  </div>
</template>
 
<script>
import CodeInput from "vue-verification-code-input";
 
export default {
  name: "app",
  components: {
    CodeInput
  },
  methods: {
    onChange(v) {
      console.log("onChange ", v);
    },
    onComplete(v) {
      console.log("onComplete ", v);
    }
  }
};
</script>



<style scoped>
#vcode[data-v-648962d0] {
    size: 10px;
    width: 39%;
    margin: 0 0 20px 40%;

}

.container {
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 50px;
    width: 348px;
    display: block;
    
}
 .btn_confirm button {
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
} 
body {
    display: block;
    margin: 8px;
}
/* @import "../assets/css/style.css"; */
/* @import "../assets/css/helper.css"; */
/* @import "../assets/plugins/wow/animate.css"; */
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

