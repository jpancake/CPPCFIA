$(document).ready(() => {
  $('.nav-dropdown').hover(function() {
    $(this).children('.nav-submenu').stop().slideDown(300)
  },
  function() {
    $(this).children('.nav-submenu').stop().slideUp(300)
  })
})