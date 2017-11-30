let submit1 = document.getElementById("submit");
let name = document.getElementById("namefield");
let email = document.getElementById("emailfield");
let txtarea = document.getElementById("textareafield");


function checkEmailDomain(e){
    let checkvalue;

    if(window.event) {                  
      checkvalue = e.keyCode;
	  console.log(checkvalue);
	  if (checkvalue == 64) {
		  
		  alert(String.fromCharCode(checkvalue)); // need to remember it is numbers not chars
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