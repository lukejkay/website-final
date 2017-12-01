# Website Project - Portfolio website
## Introduction

My website is going to be a site focusing on a portfolio on some of my previous work, and the skills I have including an online CV.
When designing a website I prefer to use Photoshop for my designs as well as a greyscale design of the layout of the pages. I have included a design of what content will be placed where as well as a detailed design of the header, navigation and footer and a navigation list. All of my designs can be found inside my GitHub folder as well as screenshots placed inside of this document.


## Initial Designs

My website will be responsive therefore there will be designs for the mobile device as well as desktop, there will be no designs for a tablet as this works with the desktop design.

#### Header & Navigation Design
Below is my header design for the desktop. This design will be consistent throughout all of the pages in this website, there will be no change apart from maybe the page that will be open may have a active design like bold text.
![Header design and navigation desktop](https://github.com/lukejkay/website-final/blob/master/images-readmefile/header%20and%20navigation%20design.jpg "Header design and navigation desktop")

![Header and navigation design mobile](https://github.com/lukejkay/website-final/blob/master/images-readmefile/header%20and%20navigation%20mobile%20screen%20-%20Copy.jpg "Header and navigation design mobile")

#### Footer Design
The footer design will also be a consistent style throughout all of the pages created in this website, the footer is a great way to add quick links which you do not want in the navigation bar, as my website is small with few pages I will only add social links and contact information.
The footer will look consistent throughout the different screen sizes, but at mobile the social icons will be bigger for easier use with fingers on touch screens
![Footer design desktop](https://github.com/lukejkay/website-final/blob/master/images-readmefile/header%20and%20navigation%20and%20footer%20design%20full%20screen%20-%20Copy.jpg "Footer design desktop")
![footer design mobile](https://github.com/lukejkay/website-final/blob/master/images-readmefile/header%20and%20navigation%20mobile%20screen.jpg "Footer design mobile")

#### Header and Footer together
![Header and footer together](https://github.com/lukejkay/website-final/blob/master/images-readmefile/header%20and%20navigation%20and%20footer%20design%20full%20screen.jpg "header and footer together")

#### Pages Created
I will be creating a website which consists of 5 pages, these are
1. Home
2. About me
3. Portfolio
4. **Individual Portfolio Page** - This page was added at a later stage, this is why there is no design for this page
5. Skills
6. Contact

#### Navigation Plan
![Navigation plan](https://github.com/lukejkay/website-final/blob/master/images-readmefile/navigation%20plan.jpg "Navigation Plan")


## Greyscale Layout of Page Content
I have created a layout of the page content in Photoshop to help me focus on how I want information to be portrayed to the users, I have used rectangles and squares to show where items will go however my final design will be considerably different. Below I have attached the images of my greyscale designs. I designed the mobile first, and the desktop after; Breakpoints will be added in between the 2 sizes where appropriate

#### Home Page
![home page greyscale initial design](https://github.com/lukejkay/website-final/blob/master/images-readmefile/Homepage%20GREYSCALE.jpg "home page greyscale initial design")

#### About Page
![about page greyscale initial design](https://github.com/lukejkay/website-final/blob/master/images-readmefile/about%20me%20GREYSCALE.jpg "about page greyscale initial design")

#### Portfolio Page
![portfolio page greyscale initial design](https://github.com/lukejkay/website-final/blob/master/images-readmefile/portfolio%20GREYSCALE.jpg "portfolio page greyscale initial design")

#### Skills Page
![skills page greyscale initial design](https://github.com/lukejkay/website-final/blob/master/images-readmefile/skills%20GREYSCALE.jpg "skills page greyscale initial design")

#### Contact Page
![contact page greyscale initial design](https://github.com/lukejkay/website-final/blob/master/images-readmefile/contact%20GREYSCALE.jpg "contact page greyscale initial design")

## Prototypes
All of my final designs have been designed using Photoshop, this is a great way for me to finalise my design and showcase how I want my final deliverable to be. I have only designed the desktop in final design as the mobile designs are exactly the same just played out differently as can be seen through the greyscale designs.

##### Home page Design
![home page prototype design](https://github.com/lukejkay/website-final/blob/master/images-readmefile/home%20page%20final%20design%20desktop%20and%20mobile.jpg "home page prototype design")

##### About page Design
![about page prototype design](https://github.com/lukejkay/website-final/blob/master/images-readmefile/about%20page%20final%20design%20desktop%20and%20mobile.jpg "about page prototype design")

##### Portfolio page Design
![portfolio page prototype design](https://github.com/lukejkay/website-final/blob/master/images-readmefile/portfolio%20page%20final%20design%20desktop%20and%20mobile.jpg "portfolio page prototype design")

##### Skills page Design
![skills page prototype design](https://github.com/lukejkay/website-final/blob/master/images-readmefile/skills%20page%20final%20design%20desktop%20and%20mobile.jpg "skills page prototype design")

##### Contact page Design
![contact page prototype design](https://github.com/lukejkay/website-final/blob/master/images-readmefile/contact%20page%20final%20design%20desktop%20and%20mobile.jpg "contact page prototype design")

## JavaScript Included in the website]

All of the javascript has been placed into 1 file as requested in labs, previously they were in seperate files so individual js would not be imported if it was not used.
 In further testing, I realised some event listeners were not being used causing the JavaScript to not work in seperate files, therefore I have reverted back to seperate JavaScript files.

#### Clock Logo with Live time
On every page in the website header, there is a clock, the clock uses a live time which is called within a loop called every second to update the rotation of the images which are on top of each other using
 z-index. The layers are shown below.
![layers of clock image](https://github.com/lukejkay/website-final/blob/master/images-readmefile/clock-layers.jpg "layers of clock image")

#### Contact Form
Within the contact form, I have added a way to check whether each field is filled in by checking the value, if the submission button is pressed and no input is present a alert box will tell you which field to fill in.
If the user has a browser which does not support the email field, there is a capture to validate the email address with the @ symbol.
Also the contact form email field on desktop will allow you to type in certain email domains and will autofill the rest of the email address. This will not work on mobile devices as the onkeypress does not work from my research.
 
#### Portfolio page filter
On the portfolio page there will be an option to filter what is displayed within the view depending on what category of portfolio you choose, this is done by hiding certain elements with certain ids that contain certain words i.e grpahic, but the id may be graphic1.
Instead of repeating code, the way different categories are hidden are done through funtions and the different functions are called with a variable passed with the correct id 

#### larger text
Within my testing accessibility was an option for one test user. They wanted the text to be larger, I did this by changing all of the font sizes to rems and ems so they change size depending on the size set in the body. Then when the button at the top of the page is pressed the body text will change to be larger, and will change all the text size on the page corresponding.
This will also toggle as and when the button is pressed. The same test user tested the website and wanted the larger text to stay on when they change page. I did this by saving the variable in the local storage.

#### Portfolio adding with JSON data
Instead of creating individual pages for the portfolio page I have created 1 page which is consistent through all of my individual portfolio projects I have. With doing this, the information and text and images for each project needed to be saved in JSON data so it could be called and used within the page when it is called.
from the portfolio page, depending on what link is pressed it will pass data through the uri which will let the individual-portfolio page know what data to use as the json data has got unique ids per object.
When the website page is opened, if there is no variable passed it will revert back to the portfolio page (only works, if no extra characters are in the html link i.e ends with .html).
otherwise there will be a variable that will fill change the src of the image of the id passed and it will fill in innnerhtml of images and of text.
when the page is first loaded, it will get the window location and extract the id passed

#### Navigation

I used the same code for the navigation from the labs, as this was all my design required, as you can see I have changed it with design.


## API I have used in the website, and my own JSON I have used

I have not used any API in my website as I couldnt think of a good way to use one, however, an API just pulls in JSON data, In m project I have created my own javscript objects which can be found in my javascript file, there are 15 different objects each with 6 unique variables.
These are used with my javascript to fill in the parts of the individual-portfolio.html page depending on what projName is passed which is the ID of each object in the javascript.


## Testing of the website

#### First test Problems
Rollover buttons did not suit the design of the website, they should be in the same style and be a smooth animation - this has been rectified, evidence is shown in the section of CHANGES I HAVE MADE.

#### Changes I have made

My first change was the javascript rollover buttons, I had done JavaScript Rollover buttons to showcase my text manipulation skills in Javascript(The code is still available to view on GitHub), this also allowed me to avoid using backgrounds and changeing the backgrounds in css, but I have changed this to be a more interactive experience for the user by making them graphical and animated

#### Second test Problems
One user I tested suggested that the portfolios would be good if there was a page where it would give more information on that particular project.

#### Changes I have made
I have created a page which allows a user to click on the articles on the page for my portfolio and it will take them to a seperate page about the project. <ENTER>
Problems are <ENTER>
1. This will be multiple pages
2. Too long to design multiple pages and add them into the website
3. What happens if i want to add more projects to the website?

The way I have resolved this is by creating 1 page which when a button is pressed, it will pass information through the hhtp request and it will pull the information from a JSON file,
The JSON file will include:
1. Name of the project
2. links to the images I want to display
3. skills i used in the project
4. a brief description of the project
6. When I add more projects in the JSON file, How do I make the website update the portfolio page to automatically add the new projects
7. If I have time I will develop this into the project

#### Third test Problems
Another problem with the website is there was no accessibility available to users, the main problem with this user is the text was too small
#### Changes I have made
I have resolved this problem by adding a larger text button to the top of the website.

#### Third test Problem - second test
The larger text works on all pages, but when you change pages it would be better if it already knew I had pressed the button to make the text larger as I have to do it on all pages
#### Changes I have made
With this problem I was able to work the local storage to be saved and checked on page load, if it was true then the text would be large, if it was false then the page would be normal size; 
The value when automatically opened is false, the button needs to be pressed to activate the larger text; a suggestion to improve was to check if there computer settings was already on enhanced view,
but this would take a long time and permission to view computer settings.

## Problems I have encountered

1. I made rollover images with javascript rather than css, this has been changed, the javascript is still available to be seen in the GitHub repository, it is not linked with the website
2. The contact page had some css applied to the sections I didnt want it to have, this has been changed within the css file by applying a :not to the style and not applying to the class
3. My css was developed from max width instead of min width, this has been changed, original css is available to see in the css folder

## PARC

Talk about PARC


## References
The resources I have used are below, there are a fair few forums I have also used, but no code has been copied or taken from anywhere, all the code I have written myself.
https://codepen.io/thebabydino/pen/aFrcu
https://www.lynda.com/
https://ctec3905.github.io/website-marksheet/
https://codepen.io/FabioG/pen/MaZpJp?limit=all&page=14&q=svg
https://vle.dmu.ac.uk/webapps/blackboard/content/listContent.jsp?course_id=_460483_1&content_id=_3775335_1
https://www.w3schools.com/css/css_rwd_viewport.asp
https://github.com/CTEC3905/js-get-elements
https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
https://www.pinterest.co.uk/
http://nexusdigital.co/content/uploads/2014/03/facebook-icon.png
http://icons.iconarchive.com/icons/sicons/basic-round-social/512/twitter-icon.png
http://icons.iconarchive.com/icons/martz90/circle/512/linkedin-icon.png
