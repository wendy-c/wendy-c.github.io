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


  }); // end of document ready
})(jQuery); // end of jQuery name space