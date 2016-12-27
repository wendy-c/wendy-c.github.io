// *--pie chart--*

function getPie (el) {
  console.log(el, 'in getPie');
  var el = document.getElementById(el); // get canvas

  var options = {
      percent:  el.getAttribute('data-percent') || 25,
      size: el.getAttribute('data-size') || 220,
      lineWidth: el.getAttribute('data-line') || 15,
      rotate: el.getAttribute('data-rotate') || 0
  }

  var canvas = document.createElement('canvas');
  var span = document.createElement('span');
  span.className = 'pie';
  span.textContent = options.percent + '%';
      
  if (typeof(G_vmlCanvasManager) !== 'undefined') {
      G_vmlCanvasManager.initElement(canvas);
  }

  var ctx = canvas.getContext('2d');
  canvas.width = canvas.height = options.size;

  el.appendChild(span);
  el.appendChild(canvas);

  ctx.translate(options.size / 2, options.size / 2); // change center
  ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

  //imd = ctx.getImageData(0, 0, 240, 240);
  var radius = (options.size - options.lineWidth) / 2;

  var drawCircle = function(color, lineWidth, percent) {
      percent = Math.min(Math.max(0, percent || 1), 1);
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
      ctx.strokeStyle = color;
          ctx.lineCap = 'round'; // butt, round or square
      ctx.lineWidth = lineWidth
      ctx.stroke();
  };

  drawCircle('#efefef', options.lineWidth, 100 / 100);
  drawCircle('#555555', options.lineWidth, options.percent / 100);

}

getPie('graph1', 'English');
getPie('graph2', 'Cantonese');
getPie('graph3', 'Mandarin');

// Google Map
function initMap() {
  console.log('invoked?')
  var sb = {lat: 37.6305, lng: -122.4111};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: sb,
    scrollwheel: false
  });
  var marker = new google.maps.Marker({
    position: sb,
    map: map
  });
}

(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.carousel.carousel-slider').carousel({full_width: true});
    $('.materialboxed').materialbox();

    // smooth scroll
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });

    var options = [
      // {selector: '#about-des', offset: 50, callback: function(el) {
      //   $('#about-des').slideDown('slow');
      // } },
      {selector: '#about', offset: 500, callback: function(el) {
          $('#nav').addClass('navbar-fixed');
      } },
      {selector: '#about-img', offset: 50, callback: function(el) {
        Materialize.fadeInImage($(el));
      } },
      {selector: '#resume', offset: 205, callback: function(el) {
        Materialize.showStaggeredList($(el));
      } },
      {selector: '#projects', offset: 400, callback: function(el) {
        Materialize.showStaggeredList($(el));
      } },
      {selector: '#image-test', offset: 500, callback: function(el) {
        Materialize.fadeInImage($(el));
      } }
    ];
    Materialize.scrollFire(options);


    
    // *---project photo slider---*

    var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n, current) {
      console.log(slideIndex, 'in plusDivs')
        showDivs(slideIndex += n, current);
    }

    function showDivs(n, current) {
        var i;
        if (current) {
          current = 'p-img' + current;
        } else {
          current = 'p-img1';
        }
        // current = current ? 'p-img' + current || 'project-img';
        var x = document.getElementsByClassName(current);
        console.log(x, slideIndex, current, 'in showDivs')
        if (n > x.length) {slideIndex = 1} 
        if (n < 1) {slideIndex = x.length} ;
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none"; 
        }
        x[slideIndex-1].style.display = "block"; 
    }

    $('.display-left').on('click', function() {
      var currentClass = $(this).data('val');
      console.log(currentClass, 'wat is current class?');
      plusDivs(-1, currentClass);
    });
    $('.display-right').on('click', function() {
      var currentClass = $(this).data('val');
      console.log(currentClass, 'wat is current class?');
      plusDivs(1, currentClass);
    });

    // weatherman modal
    $('.p-mini1').on('click', function() {
      $('.weatherman').css('display', 'block');
    });
    $('.close-m1').on('click', function() {
      $('.weatherman').css('display', 'none');
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space