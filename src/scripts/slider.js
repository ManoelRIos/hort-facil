//swipper
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },

  autoplay: {
    delay: 5000,
  },
  // Navigation arrows
  keyboard: true,
});
