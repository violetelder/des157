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

  myMsg.innerHTML = "You're " + yourName + ", a wedding planner, or maybe an uptight banker or lawyer who needs to let her hair down. Somehow, you end up being forced to work with, " + anotherName + ", who’s maybe a lawyer at a rival firm, or the guy whose wedding you’re planning. One or both of you have S.O.'s when you meet, and also you both hate each other on site but still smile while saying awful things to each other, because clearly you’re into each other. Anyway, let’s say he’s in a relationship, with some girl named " + yetAnotherName + ". Maybe she sucks, or maybe she’s really sweet, but, either way, you’re both gonna treat her like trash, and she’ll be out of the picture entirely by the end of the movie. At some point, " + anotherName + " has a weird, competitive game of " + userSport + " with a bunch of your guy friends (all your friends are guys because ~you’re not like other girls~), and the whole thing is just one big mess of toxic masculinity, and, hey, why not throw in some casual homophobia, just for fun? Maybe a little transphobia, too! It’s 2004, every character in this movie is trash, and all the writers of this movie are awful! Anyway, he probably spills some food or drink on your " + userColor + " dress at some point, you storm out angrily, there are a bunch of miscommunications and “yes, it started out as a joke or a bet, but now I actually love you!”’s, and then you guys end up together somehow and I guess we’re supposed to be happy for you? The movie’s over, at least, that’s something.";

  results.setAttribute('class', 'show');
  return false;
}

function resetForm() {
  myMsg.innerHTML = '';
  results.setAttribute('class', 'hide');
}
