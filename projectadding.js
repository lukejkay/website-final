let url = window.location.href;
let desc = document.getElementById("description");
let header = document.getElementById("demo");
let projectImg = document.getElementById("projectImage");
let prodName = url.substring(url.indexOf("=") + 1);
let sk1 = document.getElementById("skill1");
let sk2 = document.getElementById("skill2");
let sk3 = document.getElementById("skill3");
let allprojects = '{"projects":[' +
'{"projectTitle":"Unity Roofing","id":"uf", "projectDescription":"About the project", "imgSrc" : "img/uf-example.jpg", "skill1" : "HTML5", "skill2" : "CSS3", "skill3" : "JavaScript" },' +
'{"projectTitle":"Design By Light","id":"dbl", "projectDescription":"About the project", "imgSrc" : "img/dbl-example.jpg", "skill1" : "HTML5", "skill2" : "CSS3", "skill3" : "JavaScript" },' +
'{"projectTitle":"Elegance & Prestige","id":"ep", "projectDescription":"About the project", "imgSrc" : "img/ep-example.jpg", "skill1" : "HTML5", "skill2" : "CSS3", "skill3" : "JavaScript" }]}';

obj = JSON.parse(allprojects);

for (var i = 0; i < allprojects.length; i++){
	if (prodName === obj.projects[i].id){
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
