function delayPage() {
  delay = setTimeout(showPage, 2000)
  delayResize = setTimeout(showResize, 2001)
}

function showPage() {
  $('.spinner').fadeOut('slow')
  $('.wrapper').fadeIn(3000)
}

function showResize() {
  $(window).resize()
}