console.log("this is script.js comment");

mapboxgl.accessToken = 'pk.eyJ1IjoidmlvbGV0ZSIsImEiOiJjamU4dGV4MHMwNWkyMzJtdnh5dWw1NGk4In0.KsEy2IUIClGO1XuEo8p5-w';
var mymap = new mapboxgl.Map({
    container: 'mymap',
    style: 'mapbox://styles/mapbox/dark-v9',
    zoom: 12.27,
    center: [-121.733813, 38.547049]
});
