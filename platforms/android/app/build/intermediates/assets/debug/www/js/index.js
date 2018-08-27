document.addEventListener("deviceready",function(){
	getGps();
},false);
function getGps(){
	navigator.geolocation.getCurrentPosition(gpsSuccess, gpsError,{timeout:5000,maximumAge:10000,enableHighAccuracy:true});
}
function gpsSuccess(position) {
	alert('Success');

}
function gpsError(error) {
	alert('GPS Error: code: '+error.code+'\n'+'message:'+error.message+'\n');
	getGps();
}