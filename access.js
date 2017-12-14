//Get all elements within the DOM with id names below
const buttonClick = document.getElementById("increasetext");
console.log("value on page load" + localStorage.getItem("textsize")); //allows me to identify if the page is loading with largetext on or off, like a toggle
if (localStorage.getItem("textsize") === "True") {//saved in local storage and called everytime the page is loaded
	document.body.style.fontSize = "24px";
}
buttonClick.addEventListener("click", changeText);//when the button is clicked, the localstorage changes and so does the textsize of the page
function changeText() {
	let value = localStorage.getItem("textsize");
	console.log(value);
	if (value === "True") {
		document.body.style.fontSize = "16px";
		localStorage.setItem("textsize", "False");
		console.log("after press1 = " + localStorage.getItem("textsize"));
	} else {
		document.body.style.fontSize = "24px";
		localStorage.setItem("textsize", "True");
		console.log("after press2 = " + localStorage.getItem("textsize"));
	}
}