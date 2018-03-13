console.log("this is script.js comment");

var welcome = document.getElementById("welcome");
var audienceTest = document.getElementById("audience-test");

document.f.onsubmit = processForm;

function processForm() {
  var yourName = document.f.yourName.value;

  welcome.innerHTML = "Hello, " + yourName + "!";

  audienceTest.style.display="block";
  f.style.display="none";
  return false;
}
