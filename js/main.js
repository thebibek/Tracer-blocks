"use strict";



// Variables
// ===================

var $html = $('html'),
    $document = $(document),
    $window = $(window),
    i = 0;



// Scripts initialize
// ===================

document.write('<script async defer src="//maps.googleapis.com/maps/api/js?key=AIzaSyAYjhWq7DvCwCiRKotPu9_IXQxupSQbhuo" type="text/javascript"></script>');

$(window).on('load', function () {

  // =======
  // Preloader
  // =======

  var $preloader = $('#page-preloader'),
      $spinner   = $preloader.find('.spinner');

  $spinner.fadeOut();
  $preloader.delay(1000).fadeOut('slow');

});


$document.ready(function () {

  function detectElement(dom) {
    return $window.height() + $window.scrollTop() >= dom.offset().top && $window.scrollTop() <= dom.outerHeight() + dom.offset().top;
  }

  // ==========
  // AJAX form
  // ==========
  var ajaxForm = $('.js-form');
  var jsForm = $('.contact-form');
  var resultPanel = $("body").append("<div class='js-result'></div>").find(".js-result");

  if (jsForm.length) {

    jsForm.each(function(){
      var $form = $(this);

      $form.ajaxForm({
        success: function(json) {
          var jsJSON = JSON.parse(json);
          resultPanel.text(jsJSON.message);

          if (jsJSON.valid) {

            resultPanel[0].classList.add("success");

            setTimeout(function () {
              resultPanel[0].classList.remove("success");
              $form.clearForm();
            }, 3000);

          } else {

            resultPanel[0].classList.add("error");

            setTimeout(function () {
              resultPanel[0].classList.remove("error");
            }, 4500);
          }
        }
      });

    });
  }


  // ==========
  // jQuery ajaxChimp
  // ==========
  var chimpForm = $('.subscription-form form');

  chimpForm.ajaxChimp({
    callback: function(){
      var panel = $('.js-result');
      setTimeout(function () {
        panel.removeClass("error").removeClass("success");
      }, 4500);
    },
    language: 'cm',
    url: '//cear-studio.us13.list-manage.com/subscribe/post?u=5c10401fe692f6eddbd86220f&amp;id=b974661486'
    //http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
  });


  $.ajaxChimp.translations.cm = {
    'submit': 'Submitting...',
    0: 'We have sent you a confirmation email',
    1: 'Please enter a value',
    2: 'An email address must contain a single @',
    3: 'The domain portion of the email address is invalid (the portion after the @: )',
    4: 'The username portion of the email address is invalid (the portion before the @: )',
    5: 'This email address looks fake or invalid. Please enter a real email address'
  };

  // ==========
  // Responsive Nav
  // ==========
  var responsiveNav = new Navigation({
    initClass: "nav",
    mobileClass: "nav-mobile",
    desktopClass: "nav-desktop",
    checkHeight: false,
    stuck: true,
    stuckOffset: 1,
    onePage: true,
    onePageOffset: 100
  });

  // ==========
  // Magnific Popup
  // ==========
  var lightbox = $('[data-lightbox]').not('[data-lightbox="gallery"] [data-lightbox]');
  var lightboxGallery = $('[data-lightbox^="gallery"]');

  if (lightbox.length) {
    lightbox.each(function(){
      var item = $(this);
      item.magnificPopup({
        type: item.data("lightbox")
      });
    });
  }
  if (lightboxGallery.length) {
    lightboxGallery.each(function(){
      $(this).magnificPopup({
        delegate: '[data-lightbox]',
        type: "image",
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        gallery: {
          enabled: true
        },
        zoom: {
          enabled: true,
          duration: 300, // don't foget to change the duration also in CSS
          opener: function(element) {
            return element.find('img');
          }
        }
      });
    });
  }

  /* Magnific Popup modal window */
  $('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,

    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });

  $('.popup-with-move-anim').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,

    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  });

  // =======
  // Parallalx.js
  // =======
  var parallax = $('.parallax-bg');

  if (parallax.length > 0) {
    parallax.parallax();
  }


  // =======
  // Responsive Tabs
  // =======
  var tabs = $('.responsive-tabs');

  if (tabs.length > 0) {
    var i = 0;
    for (i = 0; i < tabs.length; i++) {
      var $this = $(tabs[i]);
      $this.easyResponsiveTabs({
        type: $this.attr("data-type"),
        tabidentify: $this.find(".resp-tabs-list").attr("data-group") || "tab",
        activate: function() {
          setTimeout(function() {
            $('.resp-accordion.resp-tab-active')[0].scrollIntoView();
          }, 500);
         }
      });
    };
    $(".resp-tabs-list li").on("click", function(){
      $window.trigger("resize");
    });
    
  }

  // =======
  // UIToTop
  // =======
  $().UItoTop();
 
  // =======
  // Owl carousel
  // =======
  var owl1 = $('.owl-1');
  if (owl1.length) {
    owl1.owlCarousel({
      mouseDrag: false,
      loop: true,
      autoplay: false,
      dots: true,
      items: 2,
      responsiveClass:true,
      responsive:{
        0:{ items:1, },
        480:{ items:1, },
        768:{ items:2, },
        992:{ items:1, nav: true, dots: false, },
        1200: { items:1, nav: true, dots: false, },
        1800: { items:2, nav: true, dots: false, }
      }
    });
  }

  var owl2 = $('.owl-2');
  if (owl2.length) {
    owl2.owlCarousel({
      mouseDrag: true,
      loop: true,
      nav: true,
      autoplay: false,
      dots: false,
      items: 1,
    });
  }

  var owl3 = $('.owl-3');
  if (owl3.length) {
    owl3.owlCarousel({
      mouseDrag: true,
      loop: true,
      autoplay: false,
      dots: true,
      items: 1,
    });
  }


  // =======
  // jQuery Count To
  // =======
  var counter = $('.counter');

  if (counter.length) {
    var counterToInit = counter.not(".init");
    $document.on("scroll", function () {
      counterToInit.each(function(){
        var item = $(this);

        if ((!item.hasClass("init")) && (detectElement(item))) {
          item.countTo({
            refreshInterval: 20,
            speed: item.attr("data-speed") || 1000
          });
          item.addClass('init');
        }
      });
      $document.trigger("resize");
    });
    $document.trigger("scroll");
  }

  // =======
  // WOW
  // =======
  if ($html.hasClass('desktop')) { new WOW().init(); }

});

