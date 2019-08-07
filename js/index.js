// Your code goes here

//1
const logo = document.querySelector(".logo-heading");

logo.addEventListener("click", function(){
    console.log("You clicked the logo")
});

//2 & 3
const navBar = document.querySelectorAll("a");

navBar.forEach(element => {
    element.addEventListener("mouseover", function(){
        element.style.color = "blue";
    });
    element.addEventListener("mouseleave", function() {
        element.style.color = "black";
    });
});

//4
const funnyBus = document.querySelector(".intro img");

funnyBus.addEventListener("dblclick", function(){
    console.log("Stop clicking me!")
})

//5
const testingLoad = document.querySelector(".intro");

window.addEventListener("load", function(event){
    alert("Loading the an infinite loop.")
});


//6
const testingBtnOne = document.querySelectorAll(".btn")[0];

testingBtnOne.addEventListener("click", function(){
 console.log("Hey get off me!")
})

//7
const testingBtnTwo = document.querySelectorAll(".btn")[1];

testingBtnTwo.addEventListener("dblclick", function() {
    console.log("You just like clicking on everything on this page dont you?")
})

//8
const testingBtnThree = document.querySelectorAll(".btn")[2];

testingBtnThree.addEventListener("click", function() {
    console.log("You wanna Poke stuff? Go on FaceBook, not here buddy!")
})

//9
const testingFooterClick = document.querySelector("footer");

testingFooterClick.addEventListener("click", function() {
    console.log("This is a reminder that I made this not you.")
})

//10
const testingHeaderClick = document.querySelector("h4");

testingHeaderClick.addEventListener("click", function() {
    console.log("I'm hot like the sun.")
})