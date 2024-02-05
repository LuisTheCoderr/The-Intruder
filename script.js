/* Declare variables below to save the different sections (divs) of your story*/
let body = document.querySelector("body");
let title = document.querySelector(".title");
let opening = document.querySelector(".story-opening");
let buttons = document.querySelector(".buttons");

let buttonOne = document.querySelector(".option-one");
let optionOne = document.querySelector(".option-one-screen");
let optionOneImg = document.querySelector(".option-one-img");
let optionOneEnd = document.querySelector(".option-one-end");

let buttonTwo = document.querySelector(".option-two");
let optionTwo = document.querySelector(".option-two-screen");
let optionTwoImg = document.querySelector(".option-two-img");
let optionTwoEnd = document.querySelector(".option-two-end");

let buttonThree = document.querySelector(".option-three");
let optionThree = document.querySelector(".option-three-screen");
let optionThreeImg = document.querySelector(".option-three-img");
let optionThreeEnd = document.querySelector(".option-three-end");

let buttonFour = document.querySelector(".option-four");
let optionFour = document.querySelector(".option-four-screen");
let optionFourImg = document.querySelector(".option-four-img");
let optionFourEnd = document.querySelector(".option-four-end");





/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables! */

buttonOne.onclick = function() {
    opening.style.display = "none";
    buttons.style.display = "none";
    optionOne.style.display = "block";
};

optionOneImg.onclick = function() {
    optionOne.style.display = "none";
    optionOneEnd.style.display = "block";
};
buttonTwo.onclick = function() {
    opening.style.display = "none";
    buttons.style.display = "none";
    optionTwo.style.display = "block";
};

optionTwoImg.onclick = function() {
    optionTwo.style.display = "none";
    optionTwoEnd.style.display = "block";
};

/*
INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){
*/
title.onmouseover = function() {
    title.innerHTML = "RUN!";
};
setTimeout(() => {
    title.innerHTML = "HE IS COMING!";
}, 6000);