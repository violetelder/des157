//I focused on familiarizing myself with CSS animations, instead of a js library. CSS animations were a listed option on the assignment page on Canvas.

"use strict";

console.log("reading");

//get container2 so i can change it on drop
var container2 = document.getElementById("target");
//get container2 h3 so i can change it on drop
var containerh3 = document.getElementById("containerh3");
//get container1 h3 so i can change it on drop
var container1h3 = document.getElementById("container1h3");

//get container2 so i can change it on drop
var target2 = document.getElementById("target2");
//get container2 h3 so i can change it on drop
var container3h3 = document.getElementById("container3h3");
//get container1 h3 so i can change it on drop
var container2h3 = document.getElementById("container2h3");

//trying to drag and drop again!
//allow drop event
function allowDrop(ev) {
    ev.preventDefault();
}

//drag event
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    ev.dataTransfer.setData("text", ev.target2.id);
}

//drop event
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    ev.target2.appendChild(document.getElementById(data));
    container1h3.innerHTML=" ";
    container1h3.innerHTML=" ";
    target.style.backgroundColor="yellow";
    container2h3.style.color="cornflowerblue";
    container2h3.innerHTML="you did it! again!";
  }
