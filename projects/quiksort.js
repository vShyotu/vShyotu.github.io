$(document).ready(function() {
  $('.contents-link').on('click', function() { 
      var page = $(this).attr('href');
      var speed = 750;
      var offset = 60;
      $('html, body').animate({
          scrollTop: $(page).offset().top - offset
      }, speed);
  });
});