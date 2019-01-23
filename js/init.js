

// *--pie chart--*

function getPie (el) {
  var el = document.getElementById(el); // get canvas

  var options = {
    percent: el.getAttribute('data-percent') || 25,
    size: el.getAttribute('data-size') || 220,
    lineWidth: el.getAttribute('data-line') || 15,
    rotate: el.getAttribute('data-rotate') || 0
  };

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
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  };

  drawCircle('#efefef', options.lineWidth, 100 / 100);
  drawCircle('#555555', options.lineWidth, options.percent / 100);

}

getPie('graph1', 'English');
getPie('graph2', 'Cantonese');
getPie('graph3', 'Mandarin');

(function($) {
  $(function() {

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.materialboxed').materialbox();

    // animate icon 
    setInterval(function() {
      var isAnimated = $('.fa-arrow-down').hasClass('animated pulse');
      if (isAnimated) {
        $('.fa-arrow-down').removeClass('animated pulse');
      } else {
        $('.fa-arrow-down').addClass('animated pulse');
      }
    }, 2000);

    // smooth scroll
    $('.scroll a[href*="#"]:not([href="#"])').click(function() {
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
      {selector: '#about', offset: 500, callback: function(el) {
          $('#nav').addClass('navbar-fixed');
      } },
      {selector: '#about-img', offset: 50, callback: function(el) {
        Materialize.fadeInImage($(el));
      } },
      {selector: '#image-test', offset: 500, callback: function(el) {
        Materialize.fadeInImage($(el));
      } }
    ];
    Materialize.scrollFire(options);

  }); // end of document ready
})(jQuery); // end of jQuery name space