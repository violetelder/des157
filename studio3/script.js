//I focused on familiarizing myself with CSS animations, instead of a js library. CSS animations were a listed option on the assignment page on Canvas.

"use strict";

console.log("reading");

//get container2 so i can change it on drop
var container2 = document.getElementById("target");
//get container2 h3 so i can change it on drop
var containerh3 = document.getElementById("containerh3");
//get container1 h3 so i can change it on drop
var container1h3 = document.getElementById("container1h3");

//trying to drag and drop again!
//allow drop event
function allowDrop(ev) {
    ev.preventDefault();
}

//drag event
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

//drop event
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    container1h3.innerHTML=" ";
    target.style.backgroundColor="yellow";
    containerh3.style.color="cornflowerblue";
    containerh3.innerHTML="you did it!";
  }
