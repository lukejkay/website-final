let submit1 = document.getElementById("submit");
let name = document.getElementById("namefield");
let email = document.getElementById("emailfield");
let txtarea = document.getElementById("textareafield");
let emailcomplete = document.getElementById("email");

function checkEmailDomain(e){
    let checkvalue;

    if(window.event) {                  
      checkvalue = e.keyCode;
	  console.log(checkvalue);
	  
    }
	let email1 = email.value + String.fromCharCode(checkvalue);
    console.log("full email = " + email1);
	if (email.value.indexOf("@") > -1){
		let splitEmail = email1.split("@")[1];
		console.log("email split = " + email1.split("@")[1]);
		firstcharafterat = splitEmail.charAt(0);
		console.log("splitmail = " + firstcharafterat);
		
		if(firstcharafterat == "g") {
			 email.value = email.value + "googlemail.com";
			 return false;
			}
		else if(firstcharafterat == "h") {
			 email.value = email.value + "hotmail.com";
			 return false;
			}
		else if(firstcharafterat == "o") {
			 email.value = email.value + "outlook.com";
			 return false;
			}
		else if(firstcharafterat == "y") {
			 email.value = email.value + "yahoo.com";
			 return false;
			}
		else if(firstcharafterat == "l") {
			 email.value = email.value + "live.com";
			 return false;
			}
		else if(firstcharafterat == "a") {
			 email.value = email.value + "aol.com";
			 return false;
			}
		else if(firstcharafterat == "n") {
			 email.value = email.value + "ntlworld.com";
			 return false;
			}
	}
}

function formcheck() {
	console.log(name.value);
	console.log(email.value);
	console.log(txtarea.value);
	
	
	if(name.value == "") {
		alert("Please fill in the name field");
		return false;
	}
	else if (email.value == "") {
		alert("Please fill in the email field");
		return false;
	}
	else if (validateemail()) {
		alert("Please add an actual email address");
		return false;
	}
	else if (txtarea.value == "") {
		alert("Please fill in the TextBox field");
		return false;
	}
	else {
		return true;
	}
	
	//need to return true to show valid
}

function validateemail() {
	
	if (email.value.indexOf("@") > -1) {
			return false;
		}
		else {
			return true;
		}
	
	
}