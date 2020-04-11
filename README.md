# FrontEndMentor | Social Media Dashboard

<p align="center">
  <img src="img/html-css-js-readme-logo.png" width="300"/>
</p>

## Welcome 👋
This is a junior challenge at [***frontendmentor***](https://www.frontendmentor.io). There are 3 levels of challenges at [***frontendmentor***](https://www.frontendmentor.io) **Junior**, **Intermediate** and **Hard**. Junior are beginner friendly challgenges which test your basics of HTML5, CSS3, Responsive Design and JS. Intermediate challenges are modern layout with fully implemented website (3-4) pages. Hard are the crucial testers of your knowledge with Front-end basics like responsive design, optimal layout rendering etc This challenge illustrates the following functionalities
1. Users should be able to view the optimal layout for the site depending on their device's screen size
2. See hover states for all interactive elements on the page
3. Toggle color theme from **Dark** to **Light**

## Table of contents
- [About the Project](#about-the-project)
- [Technical Specification](#technical-specification)
- [Grid Geometry](#grid-geometry)
- [Names Spaces Classes(BEM)](#class-definition)
- [Deployment (Live)](#deploy)

## About the Project
The main objective of this challenge is to build out this Social Media Dashboard and get it looking as close to the design as possible. The design of this challenge is very intriguing as it has a variant color pallette and theming. Generally it has 2 themes i.e. 2 different design of color palletes involved.

## Technical Specification
This challenge can be solved with any css framework and any js framework but I have used the following
## 1. SASS/SCSS
SASS is a css pre-processor which adds new features to CSS3 like variables, funcitons, maps, mixins, some color functions like **lighten()** and **darken** and many more.

## 2. BEM
Block Element Modifier can relieve from the greatest head-ache of naming classes.

## 3. Javascript
The javascript used in this challenge is ES6+, which has many added advantages over old javascript ES5.

## Grid Geometry
To make the responsive design in CSS3 without any frameworks like bootstrap, materialize of tailwind there are concepts like **flexbox**. **css grid**. This project is developed in the combination of both **flexbox** and **grid** where majority layout i.e. parent container layout is developed using **flexbox** and internally cards are developed using **css grid**.

## Class Definitions
Naming classes for layouts is a very tidy job as there are multiple tasks involved in it. Thanks😁 to **BEM** for making this job easy and making the challenge solve quickly because class names and identifier names are very crucial especially when using a pre-processor like **SASS**. BEM stands for **Block Element Modifier**, as the name itself is self-explanatory
1. Block means a whole component, like a div encompensating a sidebar of the layout (header__, nav__)
2. Element means small components or children of the block (header__logo, nav__links)
3. Modifier is like a different variant of already existing element like btn, btn--white, btn--red.

## Deploy
This challenge is available live on Netlify. The url is **https://confident-yonath-f4cb83.netlify.com/**
