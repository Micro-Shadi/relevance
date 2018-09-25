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
ScrollReveal().reveal('.scroll-fade');
ScrollReveal().reveal('.letters-animation .letter', {
  interval: 30,
  distance: '500px'
});
ScrollReveal().reveal('.services-header', {
  beforeReveal: function () {
      $('.services-header').addClass('block-reveal');
  }
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





// Sticky navbar
// =========================
$(document).ready(function () {
  // Custom function which toggles between sticky class (is-sticky)
  var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
      var stickyHeight = sticky.outerHeight();
      var stickyTop = stickyWrapper.offset().top;
      if (scrollElement.scrollTop() >= stickyTop) {
          stickyWrapper.height(stickyHeight);
          sticky.addClass("is-sticky");
      }
      else {
          sticky.removeClass("is-sticky");
          stickyWrapper.height('auto');
      }
  };

  // Find all data-toggle="sticky-onscroll" elements
  $('[data-toggle="sticky-onscroll"]').each(function () {
      var sticky = $(this);
      var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
      sticky.before(stickyWrapper);
      sticky.addClass('sticky');

      // Scroll & resize events
      $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
          stickyToggle(sticky, stickyWrapper, $(this));
      });

      // On page load
      stickyToggle(sticky, stickyWrapper, $(window));
  });
});

/* sticky navbar */
$(function () {
  var lastScrollTop = 0;
  var $navbar = $('.navbar');
  var navbarHeight = $navbar.outerHeight();
  var movement = 0;
  var lastDirection = 0;

  $(window).scroll(function(event){
    var st = $(this).scrollTop();
    movement += st - lastScrollTop;

    if (st > lastScrollTop) { // scroll down
      if (lastDirection != 1) {
        movement = 0;
      }
      var margin = Math.abs(movement);
      if (margin > navbarHeight) {
        margin = navbarHeight;
      }
      margin = -margin;
      $navbar.css('margin-top', margin+"px")

      lastDirection = 1;
    } else { // scroll up
      if (lastDirection != -1) {
        movement = 0;
      }
      var margin = Math.abs(movement);
      if (margin > navbarHeight) {
        margin = navbarHeight;
      }
      margin = margin-navbarHeight;
      $navbar.css('margin-top', margin+"px")

      lastDirection = -1;
    }

    lastScrollTop = st;
    // console.log(margin);
  });
});