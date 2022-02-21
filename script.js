$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('acrylic');
    $('nav').addClass('py-1')
    $('nav').removeClass('py-3');
    $('nav').removeClass('bg-light');
  } else {
    $('nav').addClass('py-3');
    $('nav').addClass('bg-light');
    $('nav').removeClass('py-1')
    $('nav').removeClass('acrylic');
  }
});