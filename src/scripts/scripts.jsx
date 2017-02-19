import $ from 'jquery'
import 'jquery-easing'

$(document).ready(() => {
  $('#button').on('click', () => {
    $('html, body').animate({
      scrollTop: $('.mission').offset().top
    }, 2000, 'easeInOutQuad')
  })
  $('#button2').on('click', () => {
    $('html, body').animate({
      scrollTop: $('.mission').offset().top
    }, 2000, 'easeInOutQuad')
  })
})