/* enable BS4 tool tips////////////////////////  */
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

/* Enabling bootstrap 4 popovers /////////////////////// */
$(function () {
  // Enables popover
  $("[data-toggle=popover]").popover();
});

// Wrap every letter in a span
$('.lettering').each(function () {
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
  .on('mouseover', function () {
    $(this).children('.photo').css({
      'transform': 'scale(' + $(this).attr('data-scale') + ')'
    });
  })
  .on('mouseout', function () {
    $(this).children('.photo').css({
      'transform': 'scale(1)'
    });
  })
  .on('mousemove', function (e) {
    $(this).children('.photo').css({
      'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 + '%'
    });
  })
  // tiles set up
  .each(function () {
    $(this)
      // add a photo container
      .append('<div class="photo"></div>')
      // some text just to show zoom level on current item in this example
      // .append('<div class="txt"><div class="x">'+ $(this).attr('data-scale') +'x</div>ZOOM ON<br>HOVER</div>')
      // set up a background image for each tile based on data-image attribute
      .children('.photo').css({
        'background-image': 'url(' + $(this).attr('data-image') + ')'
      });
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
    } else {
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

  $(window).scroll(function (event) {
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
      $navbar.css('margin-top', margin + "px")

      lastDirection = 1;
    } else { // scroll up
      if (lastDirection != -1) {
        movement = 0;
      }
      var margin = Math.abs(movement);
      if (margin > navbarHeight) {
        margin = navbarHeight;
      }
      margin = margin - navbarHeight;
      $navbar.css('margin-top', margin + "px")

      lastDirection = -1;
    }

    lastScrollTop = st;
    // console.log(margin);
  });
});


/* Map configirations */
/**
 * Define SVG path for target icon
 */
var targetSVG =
  "M40,0C26.191,0,15,11.194,15,25c0,23.87,25,55,25,55s25-31.13,25-55C65,11.194,53.807,0,40,0z M40,38.8c-7.457,0-13.5-6.044-13.5-13.5S32.543,11.8,40,11.8c7.455,0,13.5,6.044,13.5,13.5S47.455,38.8,40,38.8z";

/**
 * Create the map
 */
var map = AmCharts.makeChart("chartdiv", {
  "type": "map",
  "projection": "miller",
  "imagesSettings": {
    "rollOverColor": "#c6a526",
    "rollOverScale": 1.2,
    "selectedScale": 1.5,
    "selectedColor": "#c6a526",
    "color": "#c45614",
  },

  "areasSettings": {
    "unlistedAreasColor": "#37414b",
    "outlineThickness": 0.1
  },

  "dataProvider": {
    "map": "worldLow",
    "images": [{
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Vienna",
      "color": "#c6a526",
      "latitude": 48.2092,
      "longitude": 16.3728,
      "description": "<img style='width:100%' src='http://upload.wikimedia.org/wikipedia/commons/9/97/Palace_of_Westminster%2C_London_-_Feb_2007.jpg' /><p>London is the capital and most populous city of England and the United Kingdom. Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium. London's ancient core, the City of London, largely retains its 1.12-square-mile (2.9 km2) medieval boundaries and in 2011 had a resident population of 7,375, making it the smallest city in England. Since at least the 19th century, the term London has also referred to the metropolis developed around this core The bulk of this conurbation forms the Greater London administrative area (coterminous with the London region), governed by the Mayor of London and the London Assembly.</p>",
      "descriptionWindowBottom": "100"

    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Minsk",
      "latitude": 53.9678,
      "longitude": 27.5766,
      "description": "<img style='width:100%' src='http://upload.wikimedia.org/wikipedia/commons/9/97/Palace_of_Westminster%2C_London_-_Feb_2007.jpg' /><p>London is the capital and most populous city of England and the United Kingdom. Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium. London's ancient core, the City of London, largely retains its 1.12-square-mile (2.9 km2) medieval boundaries and in 2011 had a resident population of 7,375, making it the smallest city in England. Since at least the 19th century, the term London has also referred to the metropolis developed around this core The bulk of this conurbation forms the Greater London administrative area (coterminous with the London region), governed by the Mayor of London and the London Assembly.</p>",
      "descriptionWindowBottom": "100"
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Brussels",
      "latitude": 50.8371,
      "longitude": 4.3676,
      "description": "<img style='width:100%' src='http://upload.wikimedia.org/wikipedia/commons/9/97/Palace_of_Westminster%2C_London_-_Feb_2007.jpg' /><p>London is the capital and most populous city of England and the United Kingdom. Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium. London's ancient core, the City of London, largely retains its 1.12-square-mile (2.9 km2) medieval boundaries and in 2011 had a resident population of 7,375, making it the smallest city in England. Since at least the 19th century, the term London has also referred to the metropolis developed around this core The bulk of this conurbation forms the Greater London administrative area (coterminous with the London region), governed by the Mayor of London and the London Assembly.</p>",
      "descriptionWindowBottom": "100"
    }]
  },
  "export": {
    "enabled": false
  }
});