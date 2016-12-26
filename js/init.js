  // function initMap() {
  //   console.log('invoked?')
  //   var sb = {lat: 37.6305, lng: -122.4111};
  //   var map = new google.maps.Map(document.getElementById('map'), {
  //     zoom: 13,
  //     center: sb,
  //     scrollwheel: false
  //   });
  //   var marker = new google.maps.Marker({
  //     position: sb,
  //     map: map
  //   });
  // }



(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.carousel.carousel-slider').carousel({full_width: true});
    $('.materialboxed').materialbox();

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
          current = 'project-img' + current;
        } else {
          current = 'project-img1';
        }
        // current = current ? 'project-img' + current || 'project-img';
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

  }); // end of document ready
})(jQuery); // end of jQuery name space