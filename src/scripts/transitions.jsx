$(document).ready(() => {
  $('nav[role="mobile"] li').hover(function() {
    $(this).toggleClass('white-bg', 450, 'ease')
    $(this).toggleClass('link-hover', 450, 'ease')
  })
})