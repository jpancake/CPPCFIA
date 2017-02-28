$(document).ready(() => {
  $('.nav-dropdown').hover(function() {
    $(this).children('.nav-submenu').stop().slideDown(300)
  },
  function() {
    $(this).children('.nav-submenu').stop().slideUp(300)
  })

  $('.nav-dropdown-mobile').on('click', function() {
    $(this).next('.sub-menu-mobile').slideToggle()
  })
})