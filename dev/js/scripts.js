'use strict';

$(function () {
  // Поддержка svg спрайтов в IE11
  svg4everybody();

  // Слайдер
  $('#slider-list').slick({
    appendArrows: '#slider-nav',
    appendDots: '#slider-nav',
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="images/icons-sprite.svg#icon-angle"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="images/icons-sprite.svg#icon-angle"></use></svg></button>',
    responsive: [
      {
        breakpoint: 990,
        settings: {
          
        }
      }
    ]
  });

  // Карусель новостей
  $('#news-names').slick({
    fade: true,
    adaptiveHeight: true,
    appendArrows: '#news-arrows',
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="images/icons-sprite.svg#icon-angle"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="images/icons-sprite.svg#icon-angle"></use></svg></button>',
    asNavFor: '#news-carousel',
    swipe: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          
        }
      }
    ]
  });

  $('#news-carousel').slick({
    variableWidth: true,
    arrows: false,
    dots: false,
    asNavFor: '#news-names',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          variableWidth: false
        }
      },
      {
        breakpoint: 990,
        settings: {
          variableWidth: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          variableWidth: false,
          centerMode: true,
          centerPadding: '30px'
        }
      },
      {
        breakpoint: 480,
        settings: {
          variableWidth: false,
          centerMode: true,
          centerPadding: '20px'
        }
      }
    ]
  });

  // Навигация
  $('#pull').on('click', function() {
    $('#main-nav').addClass('active');
    $('#main-nav-bg').fadeIn(200);
  });

  $('#main-nav-bg, #main-nav-close').on('click', function() {
    $('#main-nav').removeClass('active');
    $('#main-nav-bg').fadeOut(200);
  });

  $('.main-nav__link').on('click', function(e) {
    var parentContainer = $(this).parent('.main-nav__item');
    var subNavList = parentContainer.find('.main-nav__list');

    if (subNavList.length) {
      e.preventDefault();
      subNavList.stop(true, true).slideToggle(200);
    }
  });

  // Модальное окно
  $('[data-fancybox]').fancybox({
    buttons: [],
    hash: false,
    arrows: false,
    infobar: false,
    hideScrollbar: true,
    transitionEffect: 'slide',
    animationEffect: 'fade',
    closeExisting: true,
    transitionDuration: 200,
    autoFocus: false,
    loop: false,
    modal: true,
    afterLoad: function afterLoad(instance, current) {
      current.$content.append('<div class="modal__close" data-fancybox-close><svg><use xlink:href="images/icons-sprite.svg#icon-cross"></use></svg></div>');
    }
  });

  // Маска телефона
  $('input[type=tel]').mask('+7 999 999 99 99');
});