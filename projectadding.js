let url = window.location.href;
let desc = document.getElementById("description");
let header = document.getElementById("demo");
let projectImg = document.getElementById("projectImage");
let projName = url.substring(url.indexOf("=") + 1);
let sk1 = document.getElementById("skill1");
let sk2 = document.getElementById("skill2");
let sk3 = document.getElementById("skill3");
let icn1 = document.getElementById("icon1");
let icn2 = document.getElementById("icon2");
let icn3 = document.getElementById("icon3");
let allprojects = '{"projects":[' +
'{"projectTitle":"Unity Roofing","id":"uf", "projectDescription":"About the project", "imgSrc" : "img/uf-example.jpg", "skill1" : "HTML5", "skill2" : "CSS3", "skill3" : "JavaScript" },' +
'{"projectTitle":"Design By Light","id":"dbl", "projectDescription":"About the project", "imgSrc" : "img/dbl-example.jpg", "skill1" : "HTML5", "skill2" : "CSS3", "skill3" : "JavaScript" },' +
'{"projectTitle":"Elegance & Prestige","id":"ep", "projectDescription":"About the project", "imgSrc" : "img/ep-example.jpg", "skill1" : "HTML5", "skill2" : "CSS3", "skill3" : "JavaScript" },' +
'{"projectTitle":"Crocodile Catering","id":"cc", "projectDescription":"About the project", "imgSrc" : "img/cc-example.jpg", "skill1" : "HTML5", "skill2" : "CSS3", "skill3" : "CMS" },' + 
'{"projectTitle":"Magnolia Care Home","id":"mch", "projectDescription":"About the project", "imgSrc" : "img/mch-example.jpg", "skill1" : "HTML5", "skill2" : "CSS3", "skill3" : "CMS" },' + 
'{"projectTitle":"Aberry House Care Home","id":"ahch", "projectDescription":"About the project", "imgSrc" : "img/ahch-example.jpg", "skill1" : "HTML5", "skill2" : "CSS3", "skill3" : "CMS" },' +
'{"projectTitle":"Magnolia Care Home – Print Design","id":"mchprint", "projectDescription":"About the project", "imgSrc" : "img/mchprint-example.jpg", "skill1" : "PSD", "skill2" : "ILL", "skill3" : "Print Design" },' +
'{"projectTitle":"Aberry House Care Home – Print Design","id":"ahchprint", "projectDescription":"About the project", "imgSrc" : "img/ahchprint-example.jpg", "skill1" : "PSD", "skill2" : "ILL", "skill3" : "Print Design" },' +
'{"projectTitle":"Design By Light – Print Design","id":"dblprint", "projectDescription":"About the project", "imgSrc" : "img/dblprint-example.jpg", "skill1" : "PSD", "skill2" : "ILL", "skill3" : "Print Design" }]}';

obj = JSON.parse(allprojects);
console.log("projname" + projName.length);
if (projName.length === 65){
	window.location.replace("portfolio.html");
}


for (var i = 0; i < allprojects.length; i++){
	if (projName === obj.projects[i].id){
		break;
	}
	
}


header.innerHTML = obj.projects[i].projectTitle;
desc.innerHTML = obj.projects[i].projectDescription;
projectImg.src = obj.projects[i].imgSrc;
projectImg.alt = "Image of " + obj.projects[i].projectTitle;
sk1.innerHTML = obj.projects[i].skill1;
sk2.innerHTML = obj.projects[i].skill2;
sk3.innerHTML = obj.projects[i].skill3;
icn1.src = seticon(1);
icn2.src = seticon(2);
icn3.src = seticon(3);

function seticon(x) {
	console.log("function called");
	
			if (x === 1){
			console.log("case 1");
			return "img/" + obj.projects[i].skill1 + "-icon.png";
			}
			else if (x === 2){
				console.log("case 2");
			return "img/" + obj.projects[i].skill2 + "-icon.png";
			}
			else if (x === 3){
				console.log("case 3");
			return "img/" + obj.projects[i].skill3 + "-icon.png";
			}
}

