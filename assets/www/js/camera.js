//In this file there are functions related to the camera

function takePicture(){

	navigator.camera.getPicture(onSuccess, onFail, { quality: 25, 
		destinationType: Camera.DestinationType.FILE_URI }); 

	function onSuccess(imageURI) {
		console.log("SUCCESS_FROM CAMERA");
		var image = document.getElementById('image');
		image.src = imageURI;	
	}
	
	function onFail(message) {
		alert('Failed because: ' + message);
	}
}

	function getPhoto() {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: 0,
		correctOrientation: false,
		targetWidth: 500,
		targetHeight: 500});
    }
	
	function onFail(message) {
      alert('Failed because: ' + message);
    }
	
	function onPhotoURISuccess(imageURI) {
      console.log("SUCCESS_FROM LIBRARY");
		var image = document.getElementById('image');
		image.src = imageURI;	
    }

	$(function() {

            $( "img#image" ).on( 'tap', tapHandler );
			
            function tapHandler( event ) {
			
			var className = $('img#image').attr('class');
				
				if(className == "normal"){
					$(event.target).removeClass("normal");
					$(event.target).addClass( "overlay" );
				}else{
					$(event.target).removeClass("overlay");
					$(event.target).addClass( "normal" );
				}
			}
      });