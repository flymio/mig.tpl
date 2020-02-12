'use strict';
var last_map = false;

function getToltip(event, region) {
  $('.map-tooltip').addClass('show').css({
    top: event.offsetY + 20,
    left: event.offsetX + 40
  });

  if (region) {
    $('.map-tooltip').html(region);
  } else {
    $('.map-tooltip').removeClass('show');
  }
}

$(function () {
  // Поддержка svg спрайтов в IE11
  svg4everybody();

  // Слайдер
  $('#slider-list').slick({
    appendArrows: '#slider-nav',
    appendDots: '#slider-nav',
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="/bitrix/templates/general_mig/images/icons-sprite.svg#icon-angle"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="/bitrix/templates/general_mig/images/icons-sprite.svg#icon-angle"></use></svg></button>',
    responsive: [
      {
        breakpoint: 990,
        settings: {
          
        }
      }
    ]
  });

  if (window['regions_count']){
    $.each(regions_count, function(i,j){
      if (regions_count[i] && regions_count[i]>0){
        $("#"+i).addClass("active");
      }
    });
  }

  $('.map-region').on('mouseover mousemove', function(e){
    var id = $(this)[0].id;
    var title = $(this).attr("title");
    if(!$('.map-details').hasClass('show')){
      if (regions_count[id]){
        title = title + "<br/>Центров: " +regions_count[id];
    getToltip(e, title);
      }
    }
  });

  $('.map-region').hover(function(e){
    var id = $(this)[0].id;
  if (regions_count[id]){
      $(this).addClass("active");   
  }
  }, function(e){
    var id = $(this)[0].id;
  if (regions_count[id]){
      //$(this).removeClass("active");
    getToltip(e, '');
  }
  }).on('click', function(){
    if (last_map){
      $(last_map).removeClass("selected");
    }
    $(this).addClass('selected');
    $(".city_choose").removeClass("g-hidden");
    last_map = this;
    $("[name=map_id]").val($(this).attr("id"));
  });


  // Карусель новостей
  $('#news-names').slick({
    fade: true,
    adaptiveHeight: true,
    appendArrows: '#news-arrows',
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="/bitrix/templates/general_mig/images/icons-sprite.svg#icon-angle"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="/bitrix/templates/general_mig/images/icons-sprite.svg#icon-angle"></use></svg></button>',
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
      current.$content.append('<div class="modal__close" data-fancybox-close><svg><use xlink:href="/bitrix/templates/general_mig/images/icons-sprite.svg#icon-cross"></use></svg></div>');
    }
  });

  // Маска телефона
  $('input[type=tel]').mask('+7 999 999 99 99');

  // Карусель видео
  $('#video-names').slick({
    fade: true,
    adaptiveHeight: true,
    appendArrows: '#video-arrows',
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="/bitrix/templates/general_mig/images/icons-sprite.svg#icon-angle"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="/bitrix/templates/general_mig/images/icons-sprite.svg#icon-angle"></use></svg></button>',
    asNavFor: '#video-carousel',
    swipe: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          
        }
      }
    ]
  });

  $('#video-carousel')
    .slick({
      arrows: false,
      dots: false,
      swipe: false,
      asNavFor: '#video-names',
      focusOnSelect: false,
      responsive: [
        {
          breakpoint: 990,
          settings: {
            swipe: true,
            variableWidth: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            variableWidth: false,
            centerMode: true,
            centerPadding: '30px',
            swipe: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            variableWidth: false,
            centerMode: true,
            centerPadding: '20px',
            swipe: true
          }
        }
      ]
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide){
      var containerVideo = $('#video-carousel .video.play');
      
      if (containerVideo.length) {
        var video = $(containerVideo[0]).find('video');
        if (!video[0].paused && !video[0].ended) {
          video[0].pause();
          containerVideo.removeClass('play');
        }
      }
    })
    .on('afterChange', function(event, slick, currentSlide){
      var targetsWrapper = $('#video-carousel .video__wrapper');

      targetsWrapper.unbind('click');
      targetsWrapper.on('click', function() {
        videoControl($(this));
      });
    });

  // Воспроизведение видео
  function videoControl(currentElement) {
    var wrapper = currentElement;
    var containerVideo = wrapper.closest('.video');
    var video = containerVideo.find('video');

    if (video.length) {
      if (!video[0].paused && !video[0].ended) {
        video[0].pause();
        containerVideo.removeClass('play');
      } else {
        video[0].play();
        containerVideo.addClass('play');
      }
    }
  }

  $('.video__wrapper').on('click', function() {
    videoControl($(this));
  });

  // Стилизация селекта
  $('select').styler();

  // Карусель новостей на странице детальной новости
  $('#carousel').slick({
    dots: false,
    arrows: true,
    appendArrows: '#carousel-arrows',
    appendDots: '#carousel-dots',
    prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="/bitrix/templates/general_mig/images/icons-sprite.svg#icon-angle"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="/bitrix/templates/general_mig/images/icons-sprite.svg#icon-angle"></use></svg></button>',
    swipe: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false
        }
      }
    ]
  });
});