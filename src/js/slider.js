let sliderBig = new Swiper('.reviews__swiper-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //   },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: {
    eventsTarger: '.reviews__swiper-slider',
  },

  autoplay: {
    delay: 1500,
    stopOnLastSlide: true,
    disableOnInteraction: true,
  },

  grabCursor: true,
  slideToClickedSlide: true,

  speed: 700,
  effect: 'flip',
  flipEffect: {
    slideShadow: true,
    limitRotation: true,
  },

  thumbs: {
    swiper: {
      el: '.reviews__swiper-slider-min',
      breakpoints: {
        0: { slidesPerView: 3 },
        768: { slidesPerView: 7 },
      },
    },
  },
});

//====================================================================================

// let sliderSmall = new Swiper('.reviews__swiper-slider-min', {
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   //   pagination: {
//   //     el: '.swiper-pagination',
//   //     clickable: true,
//   //   },

//   keyboard: {
//     enabled: true,
//     onlyInViewport: true,
//     pageUpDown: true,
//   },

//   mousewheel: {
//     eventsTarger: '.reviews__swiper-slider',
//   },

//   //   autoplay: {
//   //     delay: 1500,
//   //     stopOnLastSlide: true,
//   //     disableOnInteraction: true,
//   //   },
//   spacebetween: 30,
//   grabCursor: true,
//   slideToClickedSlide: true,
//   //   autoHeight: true,
//   speed: 700,
//   //   slidesPerView: 3,
//   //   breakpoints: {
//   //     0: { slidesPerView: 3 },
//   //     768: { slidesPerView: 1 },
//   //   },
// });

// // sliderBig.controller.control = sliderSmall;
// // sliderSmall.controller.control = sliderBig;
