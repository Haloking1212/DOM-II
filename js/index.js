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

const textChange = document.querySelector(".intro h2");

textChange.addEventListener("select", function(){
    //textChange.style.textColor = "red"
});