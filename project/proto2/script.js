console.log("this is script.js comment");

var overlay = document.getElementById('overlay');
var close = document.getElementById('close');
var info = document.getElementById('info');

close.addEventListener('click', function() {
  overlay.style.display = "none";
})

close.addEventListener('mouseover', function() {
  close.style.cursor = "pointer";
})

info.addEventListener('click', function() {
  overlay.style.display = "block";
})

info.addEventListener('mouseover', function() {
  info.style.cursor = "pointer";
})

mapboxgl.accessToken = 'pk.eyJ1IjoidmlvbGV0ZSIsImEiOiJjamU4dGV4MHMwNWkyMzJtdnh5dWw1NGk4In0.KsEy2IUIClGO1XuEo8p5-w';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/violete/cjeg2nn6h06yf2rnrf3bmng9p',
  zoom: 12.27,
  center: [-121.733813, 38.547049]
});

map.addControl(new mapboxgl.GeolocateControl({
  positionOptions: {
    enableHighAccuracy: true
  },
  trackUserLocation: true
}));


map.on('click', function(e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['self-care-spots']
  });

  if (!features.length) {
    return;
  }

  var feature = features[0];

  var popup = new mapboxgl.Popup({ offset: [0, -15] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML('<p>this feature is coming soon!</p>')
    .setLngLat(feature.geometry.coordinates)
    .addTo(map);
});
