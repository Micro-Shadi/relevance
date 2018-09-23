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

/* case studies section/tiles */

$('.tile')
// tile mouse actions
.on('mouseover', function(){
  $(this).children('.photo').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
})
.on('mouseout', function(){
  $(this).children('.photo').css({'transform': 'scale(1)'});
})
.on('mousemove', function(e){
  $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
})
// tiles set up
.each(function(){
  $(this)
    // add a photo container
    .append('<div class="photo"></div>')
    // some text just to show zoom level on current item in this example
    // .append('<div class="txt"><div class="x">'+ $(this).attr('data-scale') +'x</div>ZOOM ON<br>HOVER</div>')
    // set up a background image for each tile based on data-image attribute
    .children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
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
