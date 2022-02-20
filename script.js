$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('acrylic');
    $('nav').removeClass('bg-light');
  } else {
    $('nav').addClass('bg-light');
    $('nav').removeClass('acrylic');
  }
});