$(function () {
  //Ie + Ie number
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");
  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    $("body")
      .addClass("ie")
      .addClass("ie" + parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
  }
});
$(window).resize(function(){
  if (Modernizr.mq('(max-width: 767px)')) {
    $('html').addClass("mobile-menu-js").removeClass("desktop-menu-js");
    } else {
      $('html').addClass("desktop-menu-js").removeClass("mobile-menu-js");
    }
});
if (!$("html").hasClass("ie8")) {
  // var wow = new WOW({
  //   boxClass: "wow", // default
  //   animateClass: "animated", // default
  //   offset: 0, // default
  //   obile: true, // default
  //   live: true, // default
  // });
  // wow.init();
}
window.mobileMenu = {
  init: function (windowi) {
    var current_width = $(window).width();
    if (Modernizr.mq("(max-width: 767px)")) {
      $("html").addClass("mobile-menu").removeClass("desktop-menu");
    } else {
      $("html").addClass("desktop-menu").removeClass("mobile-menu");
    }
  },
  extended: function () {
    $(".li-pre > a").click(function (e) {
      if ($("html").hasClass("mobile-menu")) {
        e.preventDefault();
        $(this)
          .parent()
          .find("ul")
          .slideToggle(400, function () {
            // Animation complete.
          });
      }
    });
    $(window).resize(function () {
      $(".li-pre > ul").attr("style", "");
    });
  },
};
window.validate = { init: function () {
    if ($(".parsleyform").length) {
      $(".parsleyform").each(function (e) {
        var thisi = $(this);
        thisi.parsley({
          errors: {
            classHandler: function (elem, isRadioOrCheckbox) {
              //console.log($(elem));
              if (isRadioOrCheckbox) {
                return $(elem).closest(".checkbox_group");
              } else if ($(elem).hasClass("selectbox")) {
                return $(elem).closest(".selectparent");
              }
            },
            container: function (element, isRadioOrCheckbox) {
              if (isRadioOrCheckbox) {
                return element.closest(".checkbox_group");
              }
            },
          },
        });
      });
    }
  },
}
//     if ($(".icheck").length) {
//       $(".icheck")
//         .iCheck({
//           checkboxClass: "icheckbox_minimal",
//           radioClass: "iradio_minimal",
//         })
//         .on("ifChanged", function (event) {
//           $('.icheck[name="check"]').parsley("validate");
//         });
//     }
//   },
// };
//* chackbox and radio buttons
window.icheck = {
  init: function () {
    if ($(".icheck").length) {
      $(".icheck").iCheck({
        checkboxClass: "icheckbox_minimal",
        radioClass: "iradio_minimal",
      });
    }
  },
};

// Document Ready
$(document).ready(function () {
  icheck.init();
  validate.init();
  // validate.extended();
  $(function () {
    $("select").selectpicker();
  });
  $(".exit").click(function (event) {
    event.stopPropagation();
    $("#notification").slideUp();
    $("#qrcode").slideUp();
    $("#account_details").slideUp();
    $("#content1").removeClass('blur');
    $("#header .account_nav a").removeClass('active');
  });
  $("#header .account_qrcode").click(function (event) {
    event.stopPropagation();
    $("#qrcode").slideDown();
    $("#notification").hide();
    $("#account_details").hide();
  });
  
  $("#header .account_notification").click(function (event) {
    event.stopPropagation();
    $("#notification").slideDown();
    $("#qrcode").hide();
    $("#account_details").hide();
  });
  $("#header .account_img").click(function (event) {
    event.stopPropagation();
    $("#account_details").slideDown();
    $("#qrcode").hide();
    $("#notification").hide();
  });
  $("#header .account_qrcode").click(function () {
    $('#content1').addClass('blur');
    $(this).addClass('active');
    $("#header .account_img").removeClass('active');
    $("#header .account_notification").removeClass('active');
  });
  $("#header .account_notification").click(function () {
    $('#content1').addClass('blur');
    $(this).addClass('active');
    $("#header .account_img").removeClass('active');
    $("#header .account_qrcode").removeClass('active');
  });
  $("#header .account_img").click(function () {
    $('#content1').addClass('blur');
    $(this).addClass('active');
    $("#header .account_notification").removeClass('active');
    $("#header .account_qrcode").removeClass('active');
  });
  $("#howto").each(function() {
    $(this).on("click", function(){
      $(this).closest('div').find('.how_text').slideToggle('slow');
      });
  });
  $(document).keyup(function (e) {
    if (e.which == 27) {
      $("#account_details").hide();
      $("#qrcode").hide();
      $("#notification").hide();
      $("#content1").removeClass('blur');
      $("#header .account_nav a").removeClass('active');
    }
  });
  // $("html").on("click", function (event) {
  //   if (!$(event.target).closest("#notification","#qrcode","#account_details", "#header .account_notification", "#header .account_qrcode", "#header .account_img").length) {
  //     $("#notification").hide();
  //     $("#qrcode").hide();
  //     $("#account_details").hide(); 
  //     $("#content").removeClass('blur');
  //     $("#header .account_nav a").removeClass('active');
  //   }
  // });
  // $(".slider-for").slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   dots: false,
  //   fade: true,
  //   asNavFor: ".slider-nav",
  // });
  // $(".slider-nav").slick({
  //   slidesToShow: 8,
  //   slidesToScroll: 1,
  //   asNavFor: ".slider-for",
  //   centerMode: false,
  //   arrows: true,
  //   infinite: false,
  //   focusOnSelect: true,
  //   responsive: [
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         arrows: true,
  //         infinite: true,
  //         dots: false,
  //       },
  //     },
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: false,
  //       },
  //     },
  //   ],
  // });*/
  /*if( $('.fancybox').length > 0){
        $(".fancybox").fancybox({
            openEffect  : 'elastic',
            closeEffect : 'elastic',
            padding : 0
        });
    }*/
  /*if( $('.fancybox-cap').length > 0){
        $(".fancybox-cap").fancybox({
            openEffect  : 'elastic',
            closeEffect : 'elastic',
            padding : 0,
            beforeLoad: function() {
            var caption = this.element.attr('data-caption');
            var title = this.element.attr('data-title');
            if ( !caption || caption == undefined || caption == "" || caption == "undefined" || caption.length == 0 ) {
                this.tpl.wrap = '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div><div class="fancybox-text-wrap"><div class="fancybox-title fancybox-title-inside-wrap"><h3>'+title+'</h3></div></div></div></div>'
            }
            if ( !title || title == undefined || title == "" || title == "undefined" || title.length == 0 ){
                this.tpl.wrap = '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div><div class="fancybox-text-wrap"><div class="fcaption"><p>'+caption+'</p></div></div></div></div>'
            }
            if ( (!title || title == undefined || title == "" || title == "undefined" || title.length == 0) && (!caption || caption == undefined || caption == "" || caption == "undefined" || caption.length == 0) ){
                this.tpl.wrap = '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>'
            }else {
                this.tpl.wrap = '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div><div class="fancybox-text-wrap"><div class="fancybox-title fancybox-title-inside-wrap"><h3>'+title+'</h3></div><div class="fcaption"><p>'+caption+'</p></div></div></div></div>'
            }
            /this.tpl.wrap = '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div><p>'+caption+'</p></div></div></div>'/
        },
        helpers:  {
            title : null
        }
    });
}*/
  /*if( $('.fancybox-media').length > 0){
        $('.fancybox-media').fancybox({
            openEffect  : 'none',
            closeEffect : 'none',
            padding : 0,
            helpers : {
                media : {}
            }
        });
    }*/
  /*if( $('#startpop').length > 0){
        $.fancybox.open('#startpop');
        //$("#startpop").fancybox().trigger('click');
    }*/
  if ($(".selectbox").length > 0) {
    $(".selectbox").selectbox();
  }
  if ($("#defaultReal").length > 0) {
    $("#defaultReal").realperson();
  }
  if ($(".parallax").length > 0) {
    $(".parallax").simpleParallax();
  }
  $(".lazy").lazyload({
    event: "sporty",
    effect: "fadeIn",
  });
  $(window).bind("load", function () {
    if ($(".lazy").length > 0) {
      var timeout = setTimeout(function () {
        $(".lazy").trigger("sporty");
      }, 100);
    }
  });
  if( $('.flexslider').length > 0)
    {
        $('.carousel').flexslider({
            animation: "slide",
            animationLoop: false,
            controlNav: false,
            directionNav: true,
            itemWidth: 310,
            itemMargin: 5
            //asNavFor: '#slider'
        });
        $('.flexslide').flexslider({
            //smoothHeight: true,//animationLoop: true, //startAt: 0,//slideshow: true,
            //slideshowSpeed: 7000,//animationSpeed: 600,//touch: true,//video: false,
            //pauseOnAction: true,//pauseOnHover: false,//prevText: "Previous",//nextText: "Next",
            controlNav: false,
            directionNav: true,
            animation: "fade",
            slideshow: true,
            pauseOnAction: false,
            start: function(){
                $('.panel-collapse').removeClass('in');
                $('.panel:first-child .panel-collapse').addClass('in');
                $('.tab-pane').removeClass('active').removeClass('in');
                $('.tab-pane:first-child').addClass('active').addClass('in');
                var settimer = setTimeout(function(){
                    clearTimeout(settimer);
                }, 300);
                if( $('.parallax-s').length > 0) {
                    $(".parallax-s").simpleParallax();
                    $(".parallax-s").addClass('paralax-s-loaded');
                }
            }
            //sync: "#carousel"
        });
    }
  if( $('.slickslider1').length > 0){
    $('.slickslider1').slick({
        lazyLoad: 'progressive',
        dots: true,
        arrows:false,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplay: true,
        infinite: true,
        fade: false,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 7000,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });
}
    if( $('.slickcarousel').length > 0){
        $('.slickcarousel').slick({
            dots: true,
            speed: 300,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            slidesToScroll: 3,
            fade: false,
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }
            ]
        }).on('afterChange', function(event, slick, direction){
            //console.log(direction);
            // left
        });
    }
  // if ($(".slicksc").length > 0) {
  //   $(".slicksc").slick({
  //     slidesToShow: 6,
  //     slidesToScroll: 1,
  //     arrows: false,
  //     fade: true,
  //     asNavFor: ".slickscc",
  //   });
  //   $(".slickscc").slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     dots: true,
  //     centerMode: true,
  //     focusOnSelect: true,
  //     asNavFor: ".slicksc",
  //   });
  // }
  if ($(".resize-img").length > 0) {
    $(".resize-img").resizeToParent();
  }
  // $('#accordion h3 a').click(function(){
  //       window.location.replace($(this).attr('href'));
  //   });
  /*$('a.click').click(function(e) {
        e.preventDefault();
        var id = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 1000);
    });*/
  /* if (window.location.hash) {
        var url = window.location.hash;
        var url1= url.substr(1,50);
        $('.adofilter').find('a[href='+url1+']').trigger('click');
    }*/
  /*if ( $('.mCustomScrollbar').length > 0) {
        $('.mCustomScrollbar').mCustomScrollbar({
            mouseWheel:{
                scrollAmount: 300
            }
        });
    }*/
  /*if( $('.flexslidebanner .slides li').length < 2)
    {
        $('.flexslidebanner').addClass('nobuton');
    } */
   windowHeight.init(window);
});
// Window Load
$(window).load(function () {
  if (localStorage.getItem("slideIndex") !== null) {
    var slide = localStorage.getItem(slideIndex);
    console.log("getLocal", slide);
  }

  $("#advanced").flagStrap();
  mobileMenu.init();
  $("a[data-slick-index]").click(function () {
    slideIndex = $(this).data("slick-index");
    console.log(slideIndex);
    $(".slider-for").slickGoTo(parseInt(slideIndex, -1));
  });
  $("a[data-slick-index]").click(function (e) {
    e.preventDefault();
    var slideno = $(this).data("slick-index");
    console.log("slidernow", slideno);
    $(".slider-for").slick("slickGoTo", slideno - 1);
  });
  var jump = function (e) {
    if (e) {
      e.preventDefault();
      var target = $(this).attr("href");
    } else {
      var target = location.hash;
    }
    $("html,body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      2000,
      function () {
        location.hash = target;
      }
    );
  };
  /*mobileMenu.extended();*/

  
  /*if( $('.flexslidecon').length > 0) {
        $('.tab-pane').each(function(e) {
            var thisi = $(this);
            thisi.find('.carouseli').attr('id','carouseli'+e);
            thisi.find('.slideri').attr('id','slideri'+e);
            $('#carouseli'+e).flexslider({
                animation: "slide",
                animationLoop: false,
                controlNav: false,
                directionNav: true,
                itemWidth: 71,
                itemMargin: 20,
                asNavFor: '#slideri'+e
            });
            $('#slideri'+e).flexslider({
                //smoothHeight: true,//animationLoop: true, //startAt: 0,//slideshow: true,
                //slideshowSpeed: 7000,//animationSpeed: 600,//touch: true,//video: false,
                //pauseOnAction: true,//pauseOnHover: false,//prevText: "Previous",//nextText: "Next",
                controlNav: false,
                directionNav: false,
                animation: "slide",
                slideshow: true,
                pauseOnAction: false,
                start: function(){
                    $('.panel-collapse').removeClass('in');
                    $('.panel:first-child .panel-collapse').addClass('in');
                    $('.tab-pane').removeClass('active').removeClass('in');
                    $('.tab-pane:first-child').addClass('active').addClass('in');
                },
                sync: '#carouseli'+e
            });
        });
    }*/
  if (!$("#supersized li").length > 0) {
    $("#supersized-loader").hide();
  }
  if ($("#supersized li").length == 0) {
    $("#supersized").hide();
  }
  /*if( $('.maxeight').length > 0){
        var maxHeight = 0;
        $('.maxeight').each(function() {
            if ($(this).height() > maxHeight)
                maxHeight = $(this).height();
        });
        $('.maxeight').each(function() {
            $(this).height(maxHeight);
        });
    }
  /*$('.linkaatarget').each(function() {
        $(this).find('a').not('.fancybox-thumbs, .fancybox, .fancybox-fade').attr('target', '_blank');
    });*/
  /*if( $('.').length > 0){}*/
  $("#loadingg").fadeOut();
   windowHeight.init(window);

  const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#id_password');
    togglePassword.addEventListener('click', function (e) {
      // toggle the type attribute
      const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);
      // toggle the eye slash icon
      this.classList.toggle('fa-eye-slash');
  });
});

// Window Resize
$(window).resize(function () {
  // mobileMenu.init();

  windowHeight.init(window);
});

// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;
  var noop = function () {};
  var methods = [
    "assert",
    "clear",
    "count",
    "debug",
    "dir",
    "dirxml",
    "error",
    "exception",
    "group",
    "groupCollapsed",
    "groupEnd",
    "info",
    "log",
    "markTimeline",
    "profile",
    "profileEnd",
    "table",
    "time",
    "timeEnd",
    "timeStamp",
    "trace",
    "warn",
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
})();
// windowHeight = {
//   init: function (windowi) {
//     var windowHeight = $(windowi).outerHeight();

//     if (windowHeight < 630) {
//       var windowHeight = 630;
//     } else {
//     }
//   },
// };
windowHeight = {
  init: function(windowi){
      var windowHeight = $(windowi).outerHeight();
      var headerHeight = $('#header').outerHeight();
      var footerheight = $('#footer').outerHeight();
      var rowheight = $('.rowheight').outerHeight();
      var rowheight1 = $('.rowheight1').outerHeight();
      var textUp = $('.text_table').outerHeight();
      var textUp1 = $('.text_table1').outerHeight();
      var bgScroll = $('.bg_scroll').outerHeight();
      if (windowHeight < 630) {
          var windowi = 630;
            $('.login_steps #content').outerHeight(windowHeight - headerHeight);
            $('#menu_left').outerHeight(windowHeight - headerHeight - 60);
            $('.map_location #content').outerHeight(windowHeight - headerHeight - footerheight);
            $('#user_transiction').outerHeight(windowHeight - headerHeight - rowheight - rowheight1 - textUp -90);
            $('.table_right').outerHeight(windowHeight - headerHeight - rowheight - rowheight1 - textUp1 -90);
      }else {
          $('.login_steps #content').outerHeight(windowHeight - headerHeight);
          $('#menu_left').outerHeight(windowHeight - headerHeight - 60);
          $('.map_location #content').outerHeight(windowHeight - headerHeight - footerheight);
          $('#user_transiction').outerHeight(windowHeight - headerHeight - rowheight - rowheight1 - textUp -90);
          $('.table_right').outerHeight(windowHeight - headerHeight - rowheight - rowheight1 - textUp1 -90);
      }
      if ($("html").hasClass("mobile-menu-js")){
        //  $('.homecontentimg').outerHeight(windowHeight);
      //    $('.bgimg').outerHeight(windowHeight);
         

     }
  }
};
