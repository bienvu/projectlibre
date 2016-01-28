/**
 * @file
 * Add Drupal functions.
 */

(function (window, document, $) {
  "use strict";

  function add_attribute_menu () {
    var width = window.innerWidth || document.documentElement.clientWidth;
    if(width <= 767) {
      $('.navbar-nav .expanded').each(function() {
        if(!$(this).children('.dropdown-toggle').next().hasClass('caret')) {
          $(this).children('.dropdown-toggle').after("<span class='libre-caret caret'></span>");
        }
      });
    }
    else {
      $('.navbar-nav .expanded').each(function() {
        if($(this).children('.dropdown-toggle').next().hasClass('caret')) {
          $(this).children('.dropdown-toggle').next().remove();
        }
      });
    }
  }

  // Add icon login.
  function add_icon_account () {
    $('.user-logged-in #block-projectlibre-account-menu .menu').before("<span class='account'></span>");

    $('.branding #block-projectlibre-account-menu .account').click(function() {
      //alert('ok');
      $('.branding #block-projectlibre-account-menu .navbar-nav').toggleClass('active');
      $('.navbar-collapse').removeClass('in');
    });

    $('.branding .navbar-toggle').click(function() {
      $('.branding #block-projectlibre-account-menu .navbar-nav').removeClass('active');
    });
  }

  // Add active menu.
  function menu_Active () {
    var url = window.location;
    // Will only work if string in href matches with location
    $('.navbar-nav a[href="'+ url +'"]').addClass('is-active');

    // Will also work for relative and absolute hrefs
    $('.navbar-nav a').filter(function() {
        return this.href == url;
    }).addClass('is-active');
  }

  // Width media box
  function width_media_box () {
    var width = window.innerWidth || document.documentElement.clientWidth;
    if(width <= 767) {
      $('.media-box__items').each(function() {
        var width_img = $(this).find('> .media-box__items__img').outerWidth();
        var width_content = $(this).find('> .media-box__content').outerWidth();

        if (width_img <= width_content) {
          $(this).find('> .media-box__content').outerWidth(width_img);
        }
      });
    } else {
      $('.media-box__content').css({'width': 'auto'});
    }
  }

  $(window).load(function () {
    $(".box-service .box-service__items__img").equalHeight().Height();
    $(".clients .clients__item__image").equalHeight().Height();
    $(".testimonial .testimonial__logo").equalHeight().Height();
    $(".media-box.media-box--wide .media-box__content").equalHeight().Height();
    $(".path-register .cta-register, .path-register .register-trail-form").equalHeight().Height();
    $("#block-projectlibre-account-menu").clone().appendTo(".branding");

    var width = window.innerWidth || document.documentElement.clientWidth;

    if(width > 767) {
      $(".footer .footer-panel").equalHeight().Height();
    }

    $("#owl-demo").owlCarousel({
      autoPlay: 5000,
      items : 1,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1],
      itemsTablet : [768, 1],
    });

    var laber_title = $('.view-filters .form-item-title .control-label').text();
    $('.view-filters .form-item-title .form-text').attr("placeholder", laber_title);

    $('#myModal').on('hidden.bs.modal', function (e) {
      var videoCta = $(".cta__content").find('iframe'),
          currentSrc = videoCta.attr('src');
      videoCta.attr('src',currentSrc);
    });

    $('body').on('click', '.libre-caret', function() {
      $(this).parent().toggleClass('open');
    });

    add_attribute_menu();

    add_icon_account();

    menu_Active();

    width_media_box();

    // Resize windows.
    $(window).resize(function () {
      add_attribute_menu();
      width_media_box();
    });
  });
})(this, this.document, this.jQuery);
