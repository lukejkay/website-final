//I took this from the lab of front end web development, it was simple and all i needed to make my nav, the style is different but there was no requirement for me to change the js
//Get all elements within the DOM with id names below
let menuButton = document.getElementById("menu");
let navMenu = document.getElementById("nav-menu");
let toggle = false;
//the function will be called when the event of click has occured
menuButton.addEventListener("click", toggleMenu);

//the toggle will allow when the menuButton has the event of click, it will know the style the menu already is
//the function checks for whether the menu is open or closed with a boolean exp
function toggleMenu() {
	if (toggle) {
		navMenu.classList.remove("show-menu"),
			toggle = false
	} else {
		navMenu.classList.add("show-menu"),
			toggle = true
	}
}