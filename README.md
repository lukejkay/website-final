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

####Header and Footer together
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

## JavaScript Included in the website

## API I have used in the website, and my own JSON I have used

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

####Third test Problem - second test
The larger text works on all pages, but when you change pages it would be better if it already knew I had pressed the button to make the text larger as I have to do it on all pages
####Changes I have made
**NEED TO ASK IN LAB ABOUT THIS PROBLEM**

## Problems I have encountered

1. I made rollover images with javascript rather than css, this has been changed, the javascript is still available to be seen in the GitHub repository, it is not linked with the website
2. The contact page had some css applied to the sections I didnt want it to have, this has been changed within the css file by applying a :not to the style and not applying to the class
3. My css was developed from max width instead of min width, this has been changed, original css is available to see in the css folder

## References
References go here