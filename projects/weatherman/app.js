var APPID = "4eb5bfe0d9f5cc3629d6206c6bf312f6";
var temp;
var loc;
var icon;
var humidity;
var wind;
var direction;
var message;

function updateByZip(zip){
	var url = "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + "&APPID=" + APPID;
	sendRequest(url);
}

// function updateByGeo(lat,lon){
// 	console.log(lat, lon);
// 	var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=" + APPID;
// 	sendRequest(url);
// }

function sendRequest(url){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
			var data = JSON.parse(xmlhttp.responseText);
			var weather = {};;
			weather.icon = data.weather[0].id;
			weather.humidity = data.main.humidity;
			weather.wind = data.wind.speed;
			weather.direction = degToDir(data.wind.deg);
			weather.loc = data.name;
			weather.temp = K2C(data.main.temp);
			console.log("weather", weather)
			update(weather);
		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

function K2C(k){
	return Math.round(k - 273.15);
}

function K2F(k){
	return Math.round(k*(9/5)-459.67);
}

function degToDir(degrees){
	var range = 360/8;
	var low = 360 - range/2;
	var high = (low + range)%360;
	var angles = ["N","NE","E","SE","S","SW","W","NW"];
	for(i in angles){
		if(degrees >= low && degrees < high){
			return angles[i];
		}
		low = (low +range) % 360;
		high = (high +range) % 360;
	}
	return "N";
}

function update(weather){
	wind.innerHTML = weather.wind;
	direction.innerHTML = weather.direction;
	humidity.innerHTML = weather.humidity;
	loc.innerHTML = weather.loc;
	temp.innerHTML = weather.temp;
	if(Math.floor(weather.icon/100)==3||Math.floor(weather.icon/100)==5){
		icon.src = "mica_mugshot/rainy.png";
		message.innerHTML = weather.loc + " is rainy today!"
	}
	if(Math.floor(weather.icon/100)==2){
		icon.src = "mica_mugshot/stormy.png";
		message.innerHTML = weather.loc + " is stormy today!"
	}
	if(Math.floor(weather.icon/100)==6){
		icon.src = "mica_mugshot/snowy.png";
		message.innerHTML = weather.loc + " is snowy today!"
	}
	if(Math.floor(weather.icon/100)==8 && weather.temp > 26){
		icon.src = "mica_mugshot/sunny.png";
		message.innerHTML = weather.loc + " is sunny today!"
	}
	if(Math.floor(weather.icon/100)==8 && weather.temp < 15){
		icon.src = "mica_mugshot/cold.png";
		message.innerHTML = weather.loc + " is freezy today!"
	}
	if(Math.floor(weather.icon/100)==8 && weather.temp >= 15 && weather.temp <= 26){
		icon.src = "mica_mugshot/cloudy.png";
		message.innerHTML = weather.loc + " is cloudy today!"
	}
	else{
		icon.src = "mica_mugshot/cloudy.png";
		message.innerHTML = "It's a nice day in " + weather.loc;
	}
	
}

function showPosition(position){
	console.log("pos", position);
	updateByGeo(position.coords.latitude, position.coords.longitude);
}

window.onload = function(){
	temp = document.getElementById("temperature");
	loc = document.getElementById("location");
	icon = document.getElementById("icon");
	humidity = document.getElementById("humidity");
	wind = document.getElementById("wind");
	direction = document.getElementById("direction")
	message = document.getElementById("message");
	// if(navigator.geolocation){
	// 	navigator.geolocation.getCurrentPosition(showPosition);
	// }else{
		var zip = window.prompt("Tell me your zip code and I will tell you the weather")
	//}
	updateByZip(zip);
}