new WOW().init();

var mySwiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletClass: 'project-dots',
    bulletActiveClass: 'project-dots-active'
  },
});