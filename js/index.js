// Your code goes here
const logo = document.querySelector(".logo-heading");

logo.addEventListener("click", function(){
    console.log("You clicked the logo")
});

const navBar = document.querySelectorAll("a");

navBar.forEach(element => {
    element.addEventListener("mouseover", function(){
        element.style.color = "blue";
    });
    element.addEventListener("mouseleave", function() {
        element.style.color = "black";
    });
});

const funnyBus = document.querySelector(".intro img");

funnyBus.addEventListener("dblclick", function(){
    console.log("Stop clicking me!")
})

//5
const textChange = document.querySelector(".intro");

textChange.addEventListener("load", function(){
    textChange.style.textColor = "red";
});


//6
const testingSelector = document.querySelector(".intro h2");

testingSelector.addEventListener("select", function(){

})

//7
const testingFocus = document.querySelector(".img-content img")

testingFocus.addEventListener("focus", function() {
    
})

//8
const testingBlur = document.querySelector(".content-destination");

testingBlur.addEventListener("blur", function() {

})

//9
const testingMouseMove = document.querySelector(".content-destination h2");

testingMouseMove.addEventListener("mousemove", function() {

})

//10
const testingMouseUp = document.querySelector(".content-pick h4");

testingMouseUp.addEventListener("mouseup", function() {

})