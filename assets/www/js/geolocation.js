function getCurrentPosition(){

	navigator.geolocation.getCurrentPosition(onSuccess, onError);

	$.mobile.loading( 'show', {
          text: "Loading Current Position",
          textVisible: "true",
          theme: "b",
          textonly: "false",
          html: ""
      });
}

function roundTo(value, decimals){
  	var i = value * Math.pow(10, decimals);
  	i = Math.round(i);
  	return i / Math.pow(10, decimals);
}

function onSuccess(position) {

	$('#latitude').html("LAT: "+roundTo(position.coords.latitude, 4));
	$('#longitude').html("LONG: "+roundTo(position.coords.longitude, 4));
	$('#altitude').html("ALT: "+roundTo(position.coords.altitude, 2)+"m s.l.m");

	$('#mapImage').attr('src', "http://maps.googleapis.com/maps/api/staticmap?center="+position.coords.latitude+","+position.coords.longitude+"&zoom=13&size=287x200&maptype=roadmap&markers=color:blue%7Clabel:S%7C"+position.coords.latitude+","+position.coords.longitude+"&sensor=false");

	$('#divListProperty').show();

    $.mobile.loading( "hide" );
};

function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

