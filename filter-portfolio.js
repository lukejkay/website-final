

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
	var x = document.querySelectorAll('[id^=' + idtochange + ']');
	for (var i = 0; i < x.length; i++){
	x[i].style.display = '';
	x[i].style.width = "";
	}
}
function hide(idtochange){
	var x = document.querySelectorAll('[id^=' + idtochange + ']');
	for (var i = 0; i < x.length; i++){
	x[i].style.width = "0%";
	x[i].style.display = 'none';
	}
}