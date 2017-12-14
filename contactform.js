//Get all elements within the DOM with id names below
const submit1 = document.getElementById("submit");
const name = document.getElementById("namefield");
const email = document.getElementById("emailfield");
const txtarea = document.getElementById("textareafield");

function checkEmailDomain(e) {
	//This variable is resetting itself everytime the function is called
	let checkvalue;
	if (window.event) {
		checkvalue = e.keyCode;
	}
//the next bit will work on desktop for browsers that do not suport the email type
//it will check the users key input, and it will look for the @, when the user inputs the @ it will save the next char
// and it will fill in the rest of the email address depending on the first letter
	let email1 = email.value + String.fromCharCode(checkvalue);
	if (email.value.indexOf("@") > -1) {
		const splitEmail = email1.split("@")[1];
		firstcharafterat = splitEmail.charAt(0);
		if (firstcharafterat == "g") {
			email.value = email.value + "googlemail.com";
			return false;
		} else if (firstcharafterat == "h") {
			email.value = email.value + "hotmail.com";
			return false;
		} else if (firstcharafterat == "o") {
			email.value = email.value + "outlook.com";
			return false;
		} else if (firstcharafterat == "y") {
			email.value = email.value + "yahoo.com";
			return false;
		} else if (firstcharafterat == "l") {
			email.value = email.value + "live.com";
			return false;
		} else if (firstcharafterat == "a") {
			email.value = email.value + "aol.com";
			return false;
		} else if (firstcharafterat == "n") {
			email.value = email.value + "ntlworld.com";
			return false;
		}
	}
}
// this function is called when the user submits the form,
//it will make sure there is text in all fields, if it doesnt it will alert the user with the an alert in there browser
function formcheck() {
	if (name.value == "") {
		alert("Please fill in the name field");
		return false;
	} else if (email.value == "") {
		alert("Please fill in the email field");
		return false;
	} else if (validateemail()) {
		alert("Please add an actual email address");
		return false;
	} else if (txtarea.value == "") {
		alert("Please fill in the TextBox field");
		return false;
	} else {
		return true;
	}
	//need to return true to show valid
}

function validateemail() {
	if (email.value.indexOf("@") > -1) {
		return false;
	} else {
		return true;
	}
}