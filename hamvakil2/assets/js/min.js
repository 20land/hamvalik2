var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  slidesPerView: 1.1,
  loop: true,
  autoplay: {
    delay: 2800,
    disableOnInteraction: false,
  },
  breakpoints: {
    360: {
      slidesPerView: 1.4,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2.7,
      spaceBetween: 100,
    },
    1536: {
      slidesPerView: 4.5,
      spaceBetween: 100,
    },
  },
});

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 1.1,
//   spaceBetween: 30,
//   autoplay: {
//     delay: 2800,
//     disableOnInteraction: false,
//   },
//   breakpoints: {
//     360: {
//       slidesPerView: 1.4,
//       spaceBetween: 20,
//     },
//     640: {
//       slidesPerView: 2.2,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 2.5,
//       spaceBetween: 40,
//     },
//     1024: {
//       slidesPerView: 2.7,
//       spaceBetween: 100,
//     },
//     1536: {
//       slidesPerView: 3.8,
//       spaceBetween: 100,
//     },
//   },
// });
