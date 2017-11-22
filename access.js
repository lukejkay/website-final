let buttonClick = document.getElementById("increasetext");
let textsize = localStorage.textsz;


console.log(`Name on page load: ${textsize}`);

buttonClick.addEventListener("click", changeText);

function changeText(){
	if(textsize === true) {
		document.body.style.fontSize = "16px";
		textsize = false;
		console.log(`after press 2: ${textsize}`);
	}
	else {
		document.body.style.fontSize = "24px";
		textsize = true;
		console.log(`after press: ${textsize}`);
	}
	
}
	