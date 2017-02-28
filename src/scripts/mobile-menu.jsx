$(document).ready(() => {
  $('header button').on('click', function() {
    $(this).toggleClass('is-active')
    $('nav[role="mobile"]').slideToggle(1000)
  })
  $(window).resize(() => {
    if($(window).width() > 1200) {
      $('nav[role="mobile"]').hide()
      $('button').removeClass('is-active')
    }
  })
})