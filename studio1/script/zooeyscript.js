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

  myMsg.innerHTML = "You’re a quirky, charming, goofy gal named " + yourName + ". You wear 60’s-style polka dotted dresses, but you also love " + userSport + "! You play the ukulele, but you also love nachos! You say the darndest things, but, heck, if you aren’t cute! Either an architect follows you around the whole movie, unable to let go even when you two break up, and then just eventually replaces you with someone whose name is almost exactly like yours, or you have a wacky meet-cute and spend the rest of the movie having more wacky adventures until you and your beau end up getting married, but it’s like a unique quirky wedding, with mason jars and burlap and your roommate, " + anotherName + "’s weird mixed-genre band plays during the reception, and your dress is " + userColor + " instead of white. Oh, and your husband/the horrible architect’s name is " + yetAnotherName +                                                                                                                   " or whatever, but, let’s be real, most people are gonna watch the movie just because you’re adorable and your blunt bangs just fall so perfectly, how do they do that? Can you tell I don’t like 500 Days of Summer, by the way? I haven’t seen it in a while, but, man, that is a pretty messed up movie in a number of ways.";

  results.setAttribute('class', 'show');
  return false;
}

function resetForm() {
  myMsg.innerHTML = '';
  results.setAttribute('class', 'hide');
}
