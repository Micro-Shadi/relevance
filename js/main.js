/* enable BS4 tool tips////////////////////////  */
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

/* Enabling bootstrap 4 popovers /////////////////////// */
$(function(){
  // Enables popover
  $("[data-toggle=popover]").popover();
});

/* 3D mouse movement effect - parallax */
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

var scene = document.getElementById('scene2');
var parallaxInstance = new Parallax(scene);

// Wrap every letter in a span
$('.lettering').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});


// scroll reveal
ScrollReveal().reveal('.letters-animation .letter', {
  interval: 30,
  distance: '500px'
});

/*
ScrollReveal().reveal('.letters-animation .letter', {
  interval: 30,
  distance: '50px',
  beforeReveal: function () {
      $('.letters-animation').addClass('letters-animate');
  }
});
*/
