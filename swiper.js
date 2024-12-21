const swiper = new Swiper(".swiper", {
  loop: true,

  // If we need pagination
  pagination: {
    dynamicBullets: true,
    clickable: true,
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 3000,
  },

  slidesPerView: 3,
  spaceBetween: 20,

  breakpoints: {
    0:  {
        slidesPerView: 1
    },
    610: {
        slidesPerView: 2,
    },
    990: {
        slidesPerView: 3
    }
  }
});
