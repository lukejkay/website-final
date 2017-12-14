//Get all elements within the DOM with id names below
const minutehandchange = document.getElementById("minutehand");
const hourhandchange = document.getElementById("hourhand");
const secondhandchange = document.getElementById("secondhand");
//Every second the clock will be updated
const everysecond = setInterval(function() {
	myClock()
}, 1000);
let date = new Date();
//For the clock timings I was going to use an object, I did not do this because I need to change the value of the object every second it is called through a the date variable being changed
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
//sets the date hour and minutes and seconds every time it is called to a new date, as the old date will be the first set when page is opened
function myClock() {
	date = new Date();
	hour = date.getHours();
	minute = date.getMinutes();
	second = date.getSeconds();
	hourhandchange.setAttribute("style", "transform: rotate(" + tohourdegrees() + "deg);");
	minutehandchange.setAttribute("style", "transform: rotate(" + tominutedegrees() + "deg);");
	secondhandchange.setAttribute("style", "transform: rotate(" + toseconddegrees() + "deg);");
}
//these functions changes the degrees the images will be rotated in the css
function tohourdegrees() {
	return (360 / 12) * (hour)
}

function tominutedegrees() {
	return (360 / 60) * (minute)
}

function toseconddegrees() {
	return (360 / 60) * (second)
}