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
        breakpoint: 990,
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
      }
    ]
  });
});