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

  myMsg.innerHTML = "You're " + yourName + ", a quirky, nerdy, artsy weird girl with frizzy hair who wears clothes with clashing patterns and lives in a perfectly messy house (that probably costs over a million dollars let's be real) with your parents and maybe an embarrassing younger sibling or two.<br>" + "He’s " + anotherName + ", the cute, popular, maybe a little mean, but secretly sensitive " + userSport + " player.<br>" + "Do you think he’s cute? Sure. But you have no chance with him! He’s totally in love with " + yetAnotherName + ", and she’s the captain of the cheer team!<br>Through a mess of hijinks and miscommunication, you end up going to The Big Dance with him! He gets all dressed up and comes to your house to pick you up, chatting awkwardly with your *~*weird*~* family while you finish getting ready.<br>You look at yourself in the mirror, take out your pony tail, take off your glasses, and suddenly you’re hot! You walk downstairs in your " + userColor + " dress, and " + anotherName + " falls in love with you " + "immediately. Even though you deserve somebody who likes you even before you fundamentally transform everything about yourself for them, you apparently live happily ever after.";

  results.setAttribute('class', 'show');
  return false;
}

function resetForm() {
  myMsg.innerHTML = '';
  results.setAttribute('class', 'hide');
}
