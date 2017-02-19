import slick from 'slick-carousel'

$(window).on('load', () => {
  $('.carousel').slick({
    respondTo: window,
    autoplay: true,
    pauseOnHover: true,
    arrows: true,
    fade: true,
    lazyLoad: 'progressive',
    speed: 6000,
    autoplaySpeed: 10000
  })
})