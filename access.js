let buttonClick = document.getElementById("increasetext");

console.log("value on page load" + localStorage.getItem("textsize"));


if (localStorage.getItem("textsize") === "True"){
	document.body.style.fontSize = "24px";
}

buttonClick.addEventListener("click", changeText);

function changeText(){
	let value = localStorage.getItem("textsize");
	console.log(value);
	if(value === "True") {
		document.body.style.fontSize = "16px";
		localStorage.setItem("textsize", "False");
		console.log("after press1 = " + localStorage.getItem("textsize"));
	}
	else {
		document.body.style.fontSize = "24px";
		localStorage.setItem("textsize", "True");
		console.log("after press2 = " + localStorage.getItem("textsize"));
	}
	
}
	