console.log("this is script.js comment");

var overlay = document.getElementById('overlay');
var close = document.getElementById('close');
var info = document.getElementById('info');

close.addEventListener('click', function(){
  overlay.style.display="none";
})

close.addEventListener('mouseover', function() {
  close.style.cursor = "pointer";
})

info.addEventListener('click', function(){
  overlay.style.display="block";
})

info.addEventListener('mouseover', function() {
  info.style.cursor = "pointer";
})

mapboxgl.accessToken = 'pk.eyJ1IjoidmlvbGV0ZSIsImEiOiJjamU4dGV4MHMwNWkyMzJtdnh5dWw1NGk4In0.KsEy2IUIClGO1XuEo8p5-w';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v9',
    zoom: 12.27,
    center: [-121.733813, 38.547049]
});

map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));
