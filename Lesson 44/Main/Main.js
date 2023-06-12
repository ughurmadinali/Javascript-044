const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    effect: 'cube', //fade, cards, cube, slide, coverflow, flip, creative

    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
      delay: 3000,
    },
  });