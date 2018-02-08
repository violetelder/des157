"use strict";

//declaration of variables
var shea = document.getElementById('shea');
var paw = document.getElementById('paw');
var phone = document.getElementById('phone');
var caption = document.getElementById('caption');
var close = document.getElementById('close');
var captionIntro = document.getElementById('captionIntro');
var captionP = document.getElementById('captionP');

//if hover, change transparency and cursor
shea.addEventListener('mouseover', function() {
  shea.style.cursor = "pointer";
  shea.style.opacity = "1.0";
})
//if stop hover, change transparency back to default
shea.addEventListener('mouseout', function() {
  shea.style.opacity = "0.7";
})
//on click, background pink
shea.addEventListener('mousedown', function() {
  console.log('mousedown on btn');
  shea.style.background = 'pink';
});
//on release, background white
shea.addEventListener('mouseup', function() {
  console.log('mousedown on btn');
  shea.style.background = 'white';
});
//if click image, display the caption and set the caption text
shea.addEventListener('click', function() {
  caption.style.display = "block";
  captionIntro.innerHTML = "alaffia shea butter";
  captionP.innerHTML = "coconut rose scented, vegan, cruelty-free, fair trade, ethical, hand-crafted. melt in hand, then apply to dry skin. oily, with no alcohol-based perfumes, making it good to use on cracked skin.";
})

//if hover, change transparency and cursor
paw.addEventListener('mouseover', function() {
  paw.style.cursor = "pointer";
  paw.style.opacity = "1.0";
})
//if stop hover, change transparency back to default
paw.addEventListener('mouseout', function() {
  paw.style.opacity = "0.7";
})
//on click, background pink
paw.addEventListener('mousedown', function() {
  console.log('mousedown on btn');
  paw.style.background = 'pink';
});
//on release, background white
paw.addEventListener('mouseup', function() {
  console.log('mousedown on btn');
  paw.style.background = 'white';
});
//if click image, display the caption and set the caption text
paw.addEventListener('click', function() {
  caption.style.display = "block";
  captionIntro.innerHTML = "squishy paw";
  captionP.innerHTML = "a stress toy that just soaks up all your hand grease to become a disgusting rubbery kitchen sponge. it looks like a little kitty paw, though.";
})

//if hover, change transparency and cursor
phone.addEventListener('mouseover', function() {
  phone.style.cursor = "pointer";
  phone.style.opacity = "1.0";
})
//if stop hover, change transparency back to default
phone.addEventListener('mouseout', function() {
  phone.style.opacity = "0.7";
})
//on click, background pink
phone.addEventListener('mousedown', function() {
  console.log('mousedown on btn');
  phone.style.background = 'pink';
});
//on release, background white
phone.addEventListener('mouseup', function() {
  console.log('mousedown on btn');
  phone.style.background = 'white';
});
//if click image, display the caption and set the caption text
phone.addEventListener('click', function() {
  caption.style.display = "block";
  captionIntro.innerHTML = "phone";
  captionP.innerHTML = "rose gold, with a nice pink knock-off otterbox case, which is broken in two places. screen protector that came with the phone still in-tact, though very air-bubbly.";
})

//on hover over button to close caption, change cursor display
close.addEventListener('mouseover', function() {
  close.style.cursor = "pointer";
})
//on click close, hide caption
close.addEventListener('click', function() {
  caption.style.display = "none";
})
//on stop hover over button to close caption, return cursor to default
caption.addEventListener('mouseover', function() {
  caption.style.cursor = "default";
})
