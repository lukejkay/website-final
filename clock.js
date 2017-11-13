let minutehandchange = document.getElementById("minutehand");
let hourhandchange = document.getElementById("hourhand");
let secondhandchange = document.getElementById("secondhand");
var myVar = setInterval(function(){ myClock() }, 1000);
var date = new Date();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();


function myClock() {
	date = new Date();
	hour = date.getHours();
	minute = date.getMinutes();
	second = date.getSeconds();
	hourhandchange.setAttribute("style", "transform: rotate(" + tohourdegrees() + "deg);");
	minutehandchange.setAttribute("style", "transform: rotate(" + tominutedegrees() + "deg);");
	secondhandchange.setAttribute("style", "transform: rotate(" + toseconddegrees() + "deg);");
}

function tohourdegrees() {
return (360/12) * (hour)
}

function tominutedegrees() {
return (360/60) * (minute)
}

function toseconddegrees() {
return (360/60) * (second)
}