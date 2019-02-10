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
    "centered": false
  },

  "areasSettings": {
    "unlistedAreasColor": "#37414b",
    "outlineThickness": 0.1
  },

  "dataProvider": {
    "map": "worldLow",
    "areas": [{
        "id": "LT",
        "showAsSelected": true
      }],
    "groupId": "myCustomid",
    "images": [{
      "id": "myCustomid",
      "groupId": "myCustomid",
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Relevance Poland",
      "color": "#c6a526",
      "latitude": 52.83154490872976,
      "longitude": 19.40880787499998,
      "description": "<p>Stanisława Augusta 75/30,<br> 03-846 Warsaw, Poland<br><br> <a href='tel:+3493173051' class='text-dark'>+48221244200</a><br><a href='mailto:warsaw@relevanceweb.com' class='text-dark'>warsaw@relevanceweb.com</a><br></p>",
      "descriptionWindowBottom": "100"

    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Relevance Paris",
      "latitude": 48.85661400000001,
      "longitude": 2.6598390875000177,
      "description": "<p>10 Place Vendôme, <br>Paris, 75001, France<br><br> <a href='tel:+3493173051' class='text-dark'>+33 1 85 15 13 64</a><br><a href='mailto:milan@relevanceweb.com' class='text-dark'>paris@relevanceweb.com</a><br></p>",
      "descriptionWindowBottom": "100"
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Relevance Italy",
      "latitude": 43.45291889355471,
      "longitude": 12.744140625,
      "description": "<p>Via Monte di Pietà 21, <br>Centro Montenapoleone,<br> 20121 Milano MI, Italy<br><br> <a href='tel:+3493173051' class='text-dark'>+39 02 9920 0027</a><br><a href='mailto:milan@relevanceweb.com' class='text-dark'>milan@relevanceweb.com</a><br></p>",
      "descriptionWindowBottom": "100"
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Partner Stolk",
      "latitude": 67.74275906666392,
      "longitude": 20.654296875,
      "description": "<p>Zurich World Trade Centre, <br>The World Trade Center,<br> Leutschenbachstrasse 95,<br> Zurich 8050, Switzerland<br><br> <a href='tel:+3493173051' class='text-dark'>+34 931 730 051</a><br><a href='mailto:barcelona@relevanceweb.com' class='text-dark'>barcelona@relevanceweb.com</a><br></p>",
      "descriptionWindowBottom": "100"
    }, {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "color": "#c6a526",
      "title": "Relevance Fort Lauderdale",
      "latitude": 27.683528083787834,
      "longitude": -81.650390625,
      "description": "<p>Relevance Fort Lauderdale <br>Suite 1700, Fort Lauderdale,<br> Florida, 33301<br><br> <a href='tel:+3493173051' class='text-dark'>+1 (754) 200-0634</a><br><a href='mailto:fortlauderdale@relevanceweb.com' class='text-dark'>fortlauderdale@relevanceweb.com</a><br></p>",
      "descriptionWindowBottom": "100"
    }]
  },
  "export": {
    "enabled": false
  }
});

