<template>
    
            <!-- Loading -->
        <!-- <div id="loadingg">
            <img src="../assets/images/loader.gif" width="64" height="64" alt="/" />
        </div> -->
        <div id="wrapper-page" class="map_location">
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
                <div class="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.509762235455!2d21.156837615592448!3d42.65055182469918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549fdd9da7295d%3A0xbbd903e99833ea7a!2sCapital%20Ria!5e0!3m2!1sen!2s!4v1631021018236!5m2!1sen!2s" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    <div class="icon_location">
                        <img src="../assets/images/location.png" alt="">
                    </div>
                    <div class="text_map">
                        <h5>Branches Details</h5>
                        <ul class="navmap">
                            <li><i class="fa fa-map-marker"></i>Rr. Filan Fisteku p.n.</li>
                            <li><i class="fa fa-phone"></i><a href="tel:+383 38 123456">+383 38 123456</a></li>
                            <li><i class="fa fa-envelope"></i><a href="mailto:info@ria.com ">info@ria.com </a></li>
                            <li><i class="fa fa-map-marker"></i>08:00 - 17:00  |  <span>Open</span></li>
                        </ul>
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
        <!--Fancybox-->
        <!--<a class="fancybox" href="repository/" data-fancybox-group="grup"><img src="repository/" alt=""/></a>-->
        <!--Flexslider-->
        <!--<div class="flexslider flexslide">
        <ul class="slides">
            <li>
                <img src="repository/" alt="" />
            </li>
         </ul>
    </div>
    <div class="flexslider carousel">
        <ul class="slides">
            <li>
                <img src="repository/" alt="" />
            </li>
         </ul>
    </div>-->
        <!--<div class="sl" data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'>
        <div>

        </div>
    </div>-->
        <!--Accordion-->
        <!-- <div id="accordion" class="accoardionii">
        <div class="panel">
            <div class="panel-heading">
                <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse1">Test</a>
            </div>
            <div id="collapse1" class="panel-collapse collapse in">
                <div class="panel-body">
                </div>
            </div>
        </div>
        <div class="panel">
            <div class="panel-heading">
                <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse2">Test</a>
            </div>
            <div id="collapse2" class="panel-collapse collapse">
                <div class="panel-body">
                </div>
            </div>
        </div>
    </div> -->
        <!--Tab-->
        <!-- <ul class="tab_list">
            <li class="active"><a href="#tab_1" data-toggle="pill">Test</a></li>
            <li><a href="#tab_2" data-toggle="pill">Test</a></li>
        </ul>
        <div class="tab-content">
            <div class="tab-pane fade active in" id="tab_1">
            </div>
            <div class="tab-pane fade" id="tab_2">
            </div>
        </div>-->
        <!--Supersized - - -
    //Thumbnail Navigation
        <div id="prevthumb"></div>
        <div id="nextthumb"></div>
    //Arrow Navigation
        <a id="prevslide" class="load-item"></a>
        <a id="nextslide" class="load-item"></a>
        <div id="thumb-tray" class="load-item">
            <div id="thumb-back"></div>
            <div id="thumb-forward"></div>
        </div>
    //Time Bar
        <div id="progress-back" class="load-item">
            <div id="progress-bar"></div>
        </div>
        //Control Bar
        <div id="controls-wrapper" class="load-item">
            <div id="controls">
                <a id="play-button"><img id="pauseplay" src="plugins/supersized/images/pause.png"/></a>
                //Slide counter
                <div id="slidecounter">
                    <span class="slidenumber"></span> / <span class="totalslides"></span>
                </div>
                //Slide captions displayed here
                <div id="slidecaption"></div>
                //Thumb Tray button
                <a id="tray-button"><img id="tray-arrow" src="plugins/supersized/images/button-tray-up.png"/></a>
                //Navigation
                <ul id="slide-list"></ul>
            </div>
        </div>-->
        <!-- Selctbox - - -
        <select name="selectbox"  class="selectbox "tabindex="1">
            <option value="Herr">Herr</option>
            <option value="Frau">Frau</option>
        </select>-->
        <!-- Radio Button - - -
        <input class="icheck" type="radio" name="iCheck" checked>
        <label class="lchek">Frau</label>
        <input class="icheck" type="radio" name="iCheck">
        <label class="lchek"> Herr</label>-->
        <!-- Chek Box - - -
        <input class="icheck" tabindex="1" name="vrufen" type="checkbox" id="input-1">-->
        <!-- Parsley - - -
        <label for="email">Email</label>
        <input data-required="true" data-type="email" name="E-mail" id="email" />
        <input data-required="true" type="text" name="Name" id="name"/>
        <textarea data-required="true" name="mitteilung" id="mitteilung"></textarea>
        <input type="submit" value="Senden"/>-->
        <!-- captcha - - -
		<input type="hidden" class="realperson-hash" name="chaptchaTextHash" value="">
        <input type="text" data-required="true" id="defaultReal" name="chaptchaText">-->
        <!-- Newsletter - - -
        <div class="col-xs-4 newsletter">
            <form>
                <form method="post" action="">
                    <input type="text" name="Name" id="name"/>
                    <button type="submit" value="">
                        <i class="fa fa-envelope"></i>
                    </button>
                </form>
            </form>
        </div>-->
        <!-- Parallax v 1.5- - -
    <div class="parallax" data-image-src=""></div>-->
        <!-- Easy Parallax Background - - -
    <div class="container-fluid pd0 oh parallax prelative" style="background-image: url(repository/images1-parallax.jpg);" data-overlay-opacity="0.0">
      <img class="myimg-responsive" src="../assets/images/img-parallax.png" height="233" width="1920" alt=""/>
    </div>-->
        <!--[if lt IE 7]>
            <p class="chromeframe">
                You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> or
                <a href="https://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a>
                to improve your experience.
            </p>
        <![endif]-->
        <!-- Scripts -->
        <!--<script type="text/javascript">
        jQuery(function($){
            $.supersized({
                slideshow               :   1,          // Slideshow on/off
                autoplay                :   1,          // Slideshow starts playing automatically
                start_slide             :   1,          // Start slide (0 is random)
                stop_loop               :   0,          // Stops slideshow on last slide
                random                  :   0,          // Randomize slide order (Ignores start slide)
                slide_interval          :   4500,       /*Length between transitions*/
                transition              :   1,          /*0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left*/
                transition_speed        :   700,        /*Speed of transition*/
                slide_links             :   'blank',    /*Individual links for each slide (Options: false, 'num', 'name', 'blank')*/
                slides                  :
                [
                    {image : 'repository/.jpg'},
                    {image : '', title : '', url : ''}
                ]
            });
        });
    </script>-->
    
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