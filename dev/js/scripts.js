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
});