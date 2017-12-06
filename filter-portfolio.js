//Get all elements within the DOM with id names below
let allButton = document.getElementById("button-all");
let webButton = document.getElementById("button-web");
let graphicButton = document.getElementById("button-graphic");
let printButton = document.getElementById("button-print");
//when the links are pressed, and event click has occured on the element, it will call a function
allButton.addEventListener("click", allFilterFunction);
webButton.addEventListener("click", webFilterFunction);
graphicButton.addEventListener("click", graphicFilterFunction);
printButton.addEventListener("click", printFilterFunction);
//The functions below are will show and hide different articles in the DOM depending on what they have pressed
function allFilterFunction() {
	display('website');
	display('graphic');
	display('print');
}

function webFilterFunction() {
	display('website');
	hide('graphic');
	hide('print');
}

function graphicFilterFunction() {
	display('graphic');
	hide('website');
	hide('print');
}

function printFilterFunction() {
	display('print');
	hide('website');
	hide('graphic');
}
//when the display function is called, it will look for an element with an id that contains the variable passed
//the variable passed will show the one they click and hide the others, all id's contain the category they are apart of with a unique number
//if the function is to show all projects, all ids will be shown which will be the display function
function display(idtochange) {
	let x = document.querySelectorAll('[id^=' + idtochange + ']');
	for (var i = 0; i < x.length; i++) {
		x[i].style.display = '';
		x[i].style.width = "";
	}
}

function hide(idtochange) {
	let x = document.querySelectorAll('[id^=' + idtochange + ']');
	for (var i = 0; i < x.length; i++) {
		x[i].style.width = "0%";
		x[i].style.display = 'none';
	}
}