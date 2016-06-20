//amami sushi
var map;
function initalize(){
	//center object
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 37.6152672, lng: -122.4131683},
		zoom:20
		});
	};

google.maps.event.addDomListener(window, 'load', initalize);