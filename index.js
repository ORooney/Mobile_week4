var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

var key = "Car";
var value = "Mazda";


var set = window.localStorage.setItem( key, value);

var output = window.localStorage.getItem(key);




document.addEventListener("deviceready", onDeviceReady, false);
		
	
function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);
	$("#resumed").text("Application paused: " + paused_count);
	$("#paused").text("Application resumed: " + resumed_count);
	$("#localStorage").text("Stored Value: " + output);
}



// device APIs are available
//
    function onDeviceReady() {
	
	document.addEventListener("resume", onResume, false);
	document.addEventListener("pause", onPause, false);
	
	launched_count++;
	updateDisplay();
	    
	alert("device ready");
    }


    function onPause() {
	
	paused_count++;
	updateDisplay();
	    
	alert("pause");
    }
	

    function onResume() {
		
	resumed_count++;
	updateDisplay();
	    
	alert("resume");
    }
