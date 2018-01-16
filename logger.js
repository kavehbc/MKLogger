/* Logger Headers */
var logMouse = "timeStamp, screenX, screenY, pageX, pageY, distance, travel;";
var logClick = "timeStamp, screenX, screenY, pageX, pageY, event;";
var logKey = "timeStamp, keyCode, event;";

/* Mouse Move - Settings */
var mRefreshInterval = 1000; //update display interval in ms
var blnLogMouseSleep = true; //logging when the mouse sleeps

/* Mouse Move - Distance Logger */
/* Initialization */
var lstMouseX = -1;
var lstMouseY = -1;
var lstSecMouseX = -1;
var lstSecMouseY = -1;
var screen_x = -1;
var screen_y = -1;
var mouseTravel = 0;

var logTracker = setInterval(function(){
	var d = new Date();
	var dTime = d.getTime();
	var mouseDistance = Math.sqrt( Math.pow((lstSecMouseX - lstMouseX), 2) + Math.pow((lstSecMouseY - lstMouseY), 2) );

	if (blnLogMouseSleep == true || mouseTravel > 0){
		logMouse += dTime + ", " + screen_x + ", " + screen_y + ", " + lstMouseX + ", " + lstMouseY + ", " + mouseDistance + ", " + mouseTravel + ";";
		//console.log (logMouse);
	}
	mouseTravel = 0;
	mouseDistance = 0;
	lstSecMouseX = lstMouseX;
	lstSecMouseY = lstMouseY;
	
}, mRefreshInterval);

$('html').mousemove(function(e) {
     var mouseX = e.pageX;
     var mouseY = e.pageY;
     screen_x = e.screenX;
     screen_y = e.screenY;
	
     if (lstMouseX > -1)
         mouseTravel += Math.sqrt( Math.pow((mouseX - lstMouseX), 2) + Math.pow((mouseY - lstMouseY), 2) );
     lstMouseX = mouseX;
     lstMouseY = mouseY;
});

/* Mouse Events - Click Logger */

function logClickEvent(x, y, page_x, page_y, logEvent){
	var d = new Date();
	var dTime = d.getTime();
	logClick += dTime + ", " + x + ", " + y + ", " + page_x + ", " + page_y + ", " + logEvent + ";";
	//console.log (logClick);
}
 
$('html')
.mousedown(function(e) {
	var mouseX = e.pageX;
	var mouseY = e.pageY;
	screen_x = e.screenX;
    screen_y = e.screenY;
   
   logClickEvent(screen_x, screen_y, mouseX, mouseY, "mousedown");
})
.mouseup(function(e) {
	var mouseX = e.pageX;
	var mouseY = e.pageY;
	screen_x = e.screenX;
    screen_y = e.screenY;
	
   logClickEvent(screen_x, screen_y, mouseX, mouseY, "mouseup");
})
.click(function(e) {
	var mouseX = e.pageX;
	var mouseY = e.pageY;
	screen_x = e.screenX;
    screen_y = e.screenY;
	
   logClickEvent(screen_x, screen_y, mouseX, mouseY, "click");
})
.dblclick(function(e) {
	var mouseX = e.pageX;
	var mouseY = e.pageY;
	screen_x = e.screenX;
    screen_y = e.screenY;
	
   logClickEvent(screen_x, screen_y, mouseX, mouseY, "dblclick");
});

/* Key Events - Key Logger */

function logKeyEvent(key, logEvent){
	var d = new Date();
	var dTime = d.getTime();
	logKey += dTime + ", " + key + ", " + logEvent + ";";
	//console.log (logKey);
}

$('html')
.keydown(function(e) {
   var keyCode = e.which;
   logKeyEvent(keyCode, "keydown");
})
.keyup(function(e) {
   var keyCode = e.which;
   logKeyEvent(keyCode, "keyup");
})
.keypress(function(e) {
   var keyCode = e.which;
   logKeyEvent(keyCode, "keypress");
});