<template>
        <!-- Loading -->
        <!-- <div id="loadingg">
            <img src="../assets/images/loader.gif" width="64" height="64" alt="/" />
        </div> -->
        <div id="wrapper-page" class="login_steps">
            <div id="header">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xs-9 col-sm-3">
                           <router-link to="/"><a class="logo">
                                <img src="../assets/images/logostart.png" alt="" />
                            </a></router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div id="content">
                <div class="container">
                    <div class="row">
                        <div class="col-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8 pl0 pr0">
                            <div class="text_started text_sign">
                                <h3>Write us</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8 pl0 pr0">
                            <div class="text_formstarted text_formlogin">
                                <form class="parsleyform">
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-6 col-md-6">
                                            <div class="fontpass">
                                                <label> E-mail </label>
                                                <input data-required="true"  data-type="email" name="E-mail" id="email" />
                                                <i class="fa fa-envelope"></i>
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-12">
                                            <label> Your message </label>
                                            <textarea data-required="true" name="mitteilung" id="mitteilung" placeholder="Type your message here..."></textarea>
                                        </div>
                                        <div class="col-xs-12 col-md-12">
                                            <div class="senden"> 
                                                <input type="submit" value="Send">
                                            </div>
                                         </div>
                                     </div>
                                </form>        
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
        
</template>

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