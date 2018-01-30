//this is my js

"use strict";

console.log("reading");

var results = document.getElementById("results");
var myMsg = document.getElementById("myMsg");

document.f.onsubmit = processForm;
document.f.onreset = resetForm;

function processForm() {
  var yourName = document.f.yourName.value;
  var anotherName = document.f.anotherName.value;
  var yetAnotherName = document.f.yetAnotherName.value;
  var userSport = document.f.userSport.value;
  var userColor = document.f.userColor.value;

  myMsg.innerHTML = "You’re " + yourName + ", a retired cop with a strained relationship with your ex-wife. You were in the game too long and it cost you your marriage, and custody of your daughter, " + anotherName + ", who you now only see on weekends and every other holiday. She’s an aspiring professional  " + userSport + " player, and her team is going to Barcelona for a few weeks before they all split up to go to college. You messed up and missed the last big game of her high school career, so you want to make it up to her by paying for her tickets.<br>" + "While she’s abroad, a group of six of your enemies from your days in the force, led by the worst of them all, " + yetAnotherName + ", tracks her to the hotel you booked for her, and kidnaps her. They send you their demands: $5 million dollars, or she dies. All you have to go on is the description the hotel clerk gives you of their car, a busted-up " + userColor + " SUV.<br>" + " After some gratuitous suspense and lots of breaking through windows and running along rooftops, you get your daughter back safe-and-sound and all six of your old enemies are put behind bars, until this whole thing somehow happens again like 3 years later because you’re a Liam Neeson character and y’all apparently never get any rest, except for I guess in Love Actually, but even then your wife died.";

  results.setAttribute('class', 'show');
  return false;
}

function resetForm() {
  myMsg.innerHTML = '';
  results.setAttribute('class', 'hide');
}
