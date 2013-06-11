//In this file there are functions related to the camera

function takePicture(){

	alert("take a picture");

	navigator.camera.getPicture(onSuccess, onFail, 
	{
		quality: 100,
		destinationType: Camera.DestinationType.DATA_URL
	});

	function onSuccess(imageData){
		var image = document.getElementById('image');
		image.src = "data:image/jpeg;base64," + imageData;
	}

	function onFail(error){
		alert("Failed because: " + error);
	}

}