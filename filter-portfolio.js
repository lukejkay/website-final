let allButton = document.getElementById("button-all");
let webButton = document.getElementById("button-web");
let graphicButton = document.getElementById("button-graphic");
let printButton = document.getElementById("button-print");
allButton.addEventListener("click", allFilterFunction);
webButton.addEventListener("click", webFilterFunction);
graphicButton.addEventListener("click", graphicFilterFunction);
printButton.addEventListener("click", printFilterFunction);

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

function display(idtochange){
	let x = document.querySelectorAll('[id^=' + idtochange + ']');
	for (var i = 0; i < x.length; i++){
	x[i].style.display = '';
	x[i].style.width = "";
	}
}
function hide(idtochange){
	let x = document.querySelectorAll('[id^=' + idtochange + ']');
	for (var i = 0; i < x.length; i++){
	x[i].style.width = "0%";
	x[i].style.display = 'none';
	}
}
