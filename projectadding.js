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
'{"projectTitle":"Unity Roofing","id":"uf", "projectDescription":"This website has been running for nearly 2 years, the owner of this company came to me with no online presence and no idea how to go about it. I then showcased a plan of the process of getting the company online, including business location, finding the customers and importantly getting the customers to find Unity Roofing. <br/><br/> The work I had done for Unity Roofing was the design and development of the website as well as updating their portfolio on a regular basis; as well as this they needed graphic design for all their content and to make the website responsive and stylish, but informative. As well as this the website was developed with SEO in mind, with regular content changes and including keywords in the content that customers would be searching for.", "imgSrc" : "img/uf-example.jpg", "skill1" : "HTML5", "skill2" : "CSS3", "skill3" : "JavaScript" },' +
'{"projectTitle":"Design By Light","id":"dbl", "projectDescription":"Design by Light is a luxurious brand, and offers a high cost service for lighting design, the company came to me through recommendation and believed there online presence was not presenting the company how they wanted it to, as well as changing the way the company looks online, they had long term plans to add a store onto the website. <br/><br/>  To begin with this website, I created a new branding style for the company along with a site that was ready for the store to be incorporated, this website was developed on WordPress as this system is what the previous website was ran on. As well as the design and the implementation of the design they wanted to be found on line nationally rather than locally, this included SEO for this website.", "imgSrc" : "img/dbl-example.jpg", "skill1" : "HTML5", "skill2" : "CSS3", "skill3" : "CMS" },' +
'{"projectTitle":"Elegance & Prestige","id":"ep", "projectDescription":"When I began my journey of self-employment, I came across a supercar hire company in need of a website, I reached out to this company offering a low cost website design to change their website; they agreed to allow me to change their website to build up my portfolio. The problems with the website before was it was not updated or responsive, only development and design was required for this project.", "imgSrc" : "img/ep-example.jpg", "skill1" : "HTML5", "skill2" : "CSS3", "skill3" : "JavaScript" },' +
'{"projectTitle":"Your AV Store","id":"av", "projectDescription":"This website is still under BETA design and not fully functional, but is live on the web. This website is an e-commerce website that offers high instructiveness through website visitors as well as a high blog which offers information to help users installing their AV equipment. <br/><br/> This website required an easy to navigate website for users to find information as well as an easy to understand and purchase products on the website, the website comprises of 400 products as well as offering the option to purchase bespoke packages created by the user, this website when complete will be very intuitive and a great system for the organisation to use.", "imgSrc" : "img/av-example.jpg", "skill1" : "CMS", "skill2" : "PSD", "skill3" : "CSS3" },' +
'{"projectTitle":"Crocodile Catering","id":"cc", "projectDescription":"This website is a link to just contact the company, at the moment the company only wants to have their contact information shown on the website, for the users to get in touch quickly and effectively. However the website is in development to become an e-commerce store for kitchen equipment. <br/><br/> This website needs to offer a backend system for the company to add products on the website as they become available, they wish to use the system in house and not use any external company for selling their products, and this is why the backend system is required.", "imgSrc" : "img/cc-example.jpg", "skill1" : "HTML5", "skill2" : "CSS3", "skill3" : "CMS" },' + 
'{"projectTitle":"Magnolia Care Home","id":"mch", "projectDescription":"This is a care home which was in the middle of rebranding the company. Not only did they have time specific requirements for the project, but they wanted the website and branding to be completed to a high standard. <br/><br/> Not only did the care home want a fresh style, but they also wanted social media designs and some work for print media, this can be seen in the print design area of my portfolio.", "imgSrc" : "img/mch-example.jpg", "skill1" : "HTML5", "skill2" : "CSS3", "skill3" : "CMS" },' + 
'{"projectTitle":"Aberry House Care Home","id":"ahch", "projectDescription":"This website was in need of some updating, the website was developed in early 2000’s, there were many problems with the website making it hard to update as well as being unresponsive. The care home requested for the website to be updated to look modern and interactive and represent the business with new branding. I spent time drafting the website to suit the business as well as incorporating all of the required API’s for a care home.", "imgSrc" : "img/ahch-example.jpg", "skill1" : "HTML5", "skill2" : "CSS3", "skill3" : "CMS" },' +
'{"projectTitle":"Chalfin Boxer Shorts","id":"cbs", "projectDescription":"This company is a boxer shorts company offering luxury boxer shorts made in the UK. They had a struggle to show a luxury brand online through styling and was in need of a refreshing look to execute how they wanted the brand to be portrayed. After a few weeks I was able to complete their website on a CMS system for their ease of managing stock on their website. After the website was complete they wanted to have further design work to help with their social media presence.", "imgSrc" : "img/cbs-example.jpg", "skill1" : "CMS", "skill2" : "PSD", "skill3" : "CSS3" },' +
'{"projectTitle":"Magnolia Care Home – Print Design","id":"mchprint", "projectDescription":"The care home wanted to have a brochure made with consistent design with the style of the new branding. A few designs and layouts were sent which were custom made, but they decided on the design above.", "imgSrc" : "img/mch-print.jpg", "skill1" : "PSD", "skill2" : "ILL", "skill3" : "Print" },' +
'{"projectTitle":"Alston House Care Home – Print Design","id":"ahprint", "projectDescription":"Alston House wanted to add promotional merchandise to their home, but to have a design which fitted around the care home. They wanted business cards, letter heads, pens, their own envelopes and compliment slips, the design is shown above.", "imgSrc" : "img/ahch-print.jpg", "skill1" : "PSD", "skill2" : "ILL", "skill3" : "Print" },' +
'{"projectTitle":"Unity Roofing – Print Design","id":"ufprint", "projectDescription":"With print design, Unity Roofing wanted to market their company with leaflet distribution, I had designed a design to keep in with consistency of the style of their brand whilst keeping information straight to the point. Above is the design of the leaflet that was sent around Leicester in certain areas.", "imgSrc" : "img/uf-poster.jpg", "skill1" : "PSD", "skill2" : "ILL", "skill3" : "Print" },' +
'{"projectTitle":"Sonias Sewing Studio – Graphic Design","id":"sssgraphic", "projectDescription":"This is a start-up company who wanted some designs made for the branding of the company; as we spoke to Sonia, she was unsure what she wanted, but as we gave her some initial designs we began to build her brand design. The branding was developed in programs like Photoshop, InDesign and Illustrator.", "imgSrc" : "img/sss-graphic.jpg", "skill1" : "PSD", "skill2" : "ILL", "skill3" : "inDesign" },' +
'{"projectTitle":"Sharon Lorraine Cakes – Graphic Design","id":"slcgraphic", "projectDescription":"Sharron has been making cakes for a long time, and most of her market is through social media, she came to me looking for just a logo and business card designs to represent her brand and the type of cakes she makes; she wanted flat colours and a flat design and the logo to suit any colour combinations so they can be displayed on the cakes she designs.", "imgSrc" : "img/slc-graphic.jpg", "skill1" : "PSD", "skill2" : "ILL", "skill3" : "inDesign" },' +
'{"projectTitle":"Benji Music – Graphic Design","id":"bengraphic", "projectDescription":"Benji is a music artist who makes his own beats online and sound cloud, he already makes his own album covers, but wants an idea for a logo that would suit the album covers, which can be shown in any colour and can also be used as a watermark, the first design I shown to him, he wanted it straight away, his music studio is called still surfing.", "imgSrc" : "img/ben-graphic.jpg", "skill1" : "PSD", "skill2" : "ILL", "skill3" : "Print" },' +
'{"projectTitle":"Design By Light – Print Design","id":"dblprint", "projectDescription":"Design by Light only wanted luxury business cards, to look better than normal business cards, this involved communication with printers to allow the ideas and designs I had to be able to be possible, the idea for the business cards was to have the logo in gold but different material than the matte paper to be printed on. The outcome of the business cards were fantastic.", "imgSrc" : "img/dblprint.jpg", "skill1" : "PSD", "skill2" : "ILL", "skill3" : "inDesign" }]}';

obj = JSON.parse(allprojects);
console.log(projName.length);
projName = "https://lukejkay.github.io/website-final/individual-portfolio.html";
console.log(projName.length);
if (projName.length === 65 || projName.length === 66){ // 65 for on local host, 66 for github repository
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
	
			if (x === 1){			
			return "img/" + obj.projects[i].skill1.toLowerCase() + "-icon.png";
			}
			else if (x === 2){
			return "img/" + obj.projects[i].skill2.toLowerCase() + "-icon.png";
			}
			else if (x === 3){
			return "img/" + obj.projects[i].skill3.toLowerCase() + "-icon.png";
			}
}

