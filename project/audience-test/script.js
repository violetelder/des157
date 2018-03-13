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
  style: 'mapbox://styles/violete/cjep5p4m743gg2rnp89okj9z1',
  zoom: 12.27,
  center: [-121.733813, 38.547049]
});

map.addControl(new mapboxgl.GeolocateControl({
  positionOptions: {
    enableHighAccuracy: true
  },
  trackUserLocation: true
}));


map.on('load', function() {
  // Add a layer showing the places.
  map.addLayer({
    "id": "self-care-spots",
    "type": "symbol",
    "source": {
      "type": "geojson",
      "data": {
        "type": "FeatureCollection",
        "features": [{
          "type": "Feature",
          "properties": {
            "name": "Northstar park",
            "description": "There's a lake on one side and wetland on the other, with some docks extending out onto the wetland that are sometimes closed, but have been open recently! A nice place to run! If you go in the evening, there are a lot of birds in the lake, and there are often dogs playing in the park and lots of people and families out for walks.",
            "by": "Violet"
          },
          "geometry": {
            "coordinates": [-121.750024,
              38.571812
            ],
            "type": "Point"
          },
          "id": "0561b876754518fe14a74019667f410d"
        }, {
          "type": "Feature",
          "properties": {
            "name": "Voorhies courtyard",
            "description": "The courtyard of Voorhies hall! There's a kitty and a fountain! Be nice to the kitty, please. :)",
            "by": "Anonymous"
          },
          "geometry": {
            "coordinates": [-121.746953,
              38.541213
            ],
            "type": "Point"
          },
          "id": "0ce8b72074c8b7604d5355e35c02ca6d"
        }, {
          "type": "Feature",
          "properties": {
            "name": "Path in Sycamore Park",
            "description": "Shady, nice place for a walk.",
            "by": "Anonymous"
          },
          "geometry": {
            "coordinates": [-121.766135,
              38.556076
            ],
            "type": "Point"
          },
          "id": "0fd7d90b008623a99be325a2b20df9ec"
        }, {
          "type": "Feature",
          "properties": {
            "name": "Shrem parking lot",
            "description": "The part of the parking lot with sculptures! Nice outdoor area to just relax in.",
            "by": "Anonymous"
          },
          "geometry": {
            "coordinates": [-121.747089,
              38.533853
            ],
            "type": "Point"
          },
          "id": "2a32fe7d5c19405d2f754d6dbd7d334a"
        }, {
          "type": "Feature",
          "properties": {
            "name": "Davis Art Center",
            "description": "Something about walking or driving or busing by here and seeing people dancing in the street-facing studios sometimes in the evening is really nice and makes me really happy.",
            "by": "Violet"
          },
          "geometry": {
            "coordinates": [-121.745238,
              38.560328
            ],
            "type": "Point"
          },
          "id": "3c9019a74c3ab636628e784b297d42f5"
        }, {
          "type": "Feature",
          "properties": {
            "name": "The art building stairwell on the side closer to the SCC",
            "description": "It's the smaller stairwell! There's a top part of the stairwell that leads nowhere in particular, so there's little foot traffic up there! A good place to hide, if necessary.",
            "by": "Art building ghost :)"
          },
          "geometry": {
            "coordinates": [-121.74882,
              38.538859
            ],
            "type": "Point"
          },
          "id": "42f7a10f3c39a3376c80473559f7f7ea"
        }, {
          "type": "Feature",
          "properties": {
            "name": "Hart Hall courtyard",
            "description": "On sunny days, the grass here and the little walkway are both nice places. They're kind of secluded, but still central to campus.",
            "by": "Violet"
          },
          "geometry": {
            "coordinates": [-121.750803,
              38.540767
            ],
            "type": "Point"
          },
          "id": "4710101fb471ea9c00694f61f955e6d3"
        }, {
          "type": "Feature",
          "properties": {
            "name": "Central Park Swings",
            "description": "Swing as high as you can!",
            "by": "Demi"
          },
          "geometry": {
            "coordinates": [-121.744669,
              38.545794
            ],
            "type": "Point"
          },
          "id": "4739078354976c577283ed07db812ec0"
        }, {
          "type": "Feature",
          "properties": {
            "name": "John Natsulas Gallery, top floor",
            "description": "Lay on the sofa, stare up at the sky or people watching the streets below.",
            "by": "Demi"
          },
          "geometry": {
            "coordinates": [-121.741015,
              38.542159
            ],
            "type": "Point"
          },
          "id": "571a24b3451b1d754caad461b83e5e5b"
        }, {
          "type": "Feature",
          "properties": {
            "name": "KDVS",
            "description": "Listening rooms, nice couches, often pretty empty, art all over... Good place to nap, if you don't mind people walking by!",
            "by": "Violet"
          },
          "geometry": {
            "coordinates": [-121.750212,
              38.54259
            ],
            "type": "Point"
          },
          "id": "5927191b0697b43a35c5b101e6a92a1f"
        }, {
          "type": "Feature",
          "properties": {
            "name": "Konditorei",
            "description": "Konditorei kind of removes you from the world of Davis. It's cute, with lots of older residents stopping in to chat with friends. As a student, it can be nice to get out of the college part of Davis sometimes.",
            "by": "Anonymous"
          },
          "geometry": {
            "coordinates": [-121.718326,
              38.551771
            ],
            "type": "Point"
          },
          "id": "59ceb358ae3f7e965494bb1de78e9b2d"
        }, {
          "type": "Feature",
          "properties": {
            "name": "Little pathway in the Arboretum",
            "description": "This little pathway is a little more secluded than more crowded parts of the Arboretum. A good place to hide, maybe.",
            "by": "Violet"
          },
          "geometry": {
            "coordinates": [-121.748658,
              38.535768
            ],
            "type": "Point"
          },
          "id": "5d4d98abaf73f8a97d60fc3d3b42f6c9"
        }, {
      "type": "Feature",
      "properties": {
        "name": "Amtrak Station Benches",
        "description": "Sit on a bench and listen to the birds.",
        "by": "Demi"
      },
      "geometry": {
        "coordinates": [
          -121.737406,
          38.544337
        ],
        "type": "Point"
      },
      "id": "6b8766ab4bc0d46c65f41c4ff64b6aa9"
    },{
      "type": "Feature",
      "properties": {
        "name": "Arboretum Outdoor Piano",
        "description": "Sit outside and listen to people play the outdoor piano near the Wyatt Pavilion.",
        "by": "Erica"
      },
      "geometry": {
        "coordinates": [
          -121.746707,
          38.538124
        ],
        "type": "Point"
      },
      "id": "8de65628fc4c99ed680cbcb1a597b320"
    },{
      "type": "Feature",
      "properties": {
        "name": "P&ES murals",
        "description": "The murals in this building are nice, and there are some benches right near them. Not too far from the MU, too.",
        "by": "Anonymous"
      },
      "geometry": {
        "coordinates": [
          -121.751836,
          38.543548
        ],
        "type": "Point"
      },
      "id": "b02489eed14232d2ca54184ffae57664"
    },{
      "type": "Feature",
      "properties": {
        "name": "Mondavi Fountain",
        "description": "A nice place to sit, not too far from central campus.",
        "by": "Violet"
      },
      "geometry": {
        "coordinates": [
          -121.748015,
          38.534397
        ],
        "type": "Point"
      },
      "id": "bdb2500eaf03dbc7ac0148432329a645"
    },{
      "type": "Feature",
      "properties": {
        "name": "Tunnel by Mrak",
        "description": "A nice tunnel to walk through! It's a nice, quiet, shaded, outdoor area! Quiet and feels more private than most parts of campus.",
        "by": "Violet"
      },
      "geometry": {
        "coordinates": [
          -121.748743,
          38.537144
        ],
        "type": "Point"
      },
      "id": "c58d73ea101683de4c9c077c0a8f1998"
    },{
      "type": "Feature",
      "properties": {
        "name": "Window seats at Shields",
        "description": "Take a nap here when it's sunny. The warmth filters in through the windows.",
        "by": "Demi"
      },
      "geometry": {
        "coordinates": [
          -121.749154,
          38.539876
        ],
        "type": "Point"
      },
      "id": "e169fa9927d18dad63bf911065c4458e"
    },{
      "type": "Feature",
      "properties": {
        "name": "Single-person bathrooms",
        "description": "A good place to hide. Single-person bathrooms on the first floor. Paint smell, plaster smell.",
        "by": "Anon"
      },
      "geometry": {
        "coordinates": [
          -121.748518,
          38.538975
        ],
        "type": "Point"
      },
      "id": "e3fd323e1a0cd5a2ed9d6b17fa553d74"
    },{
      "type": "Feature",
      "properties": {
        "name": "Path by the cows",
        "description": "Visit the cows. Maybe pet them, but only if they come over to you and want to be petted!",
        "by": "Anonymous"
      },
      "geometry": {
        "coordinates": [
          -121.759321,
          38.536095
        ],
        "type": "Point"
      },
      "id": "fa23b1ef40ff6e44fff819ebb6d08bd2"
    },{
      "type": "Feature",
      "properties": {
        "name": "WRRC",
        "description": "i love the comfy chairs and pillows!!!",
        "by": "Mal"
      },
      "geometry": {
        "coordinates": [
          -121.74826890725701,
      38.541826959324055
        ],
        "type": "Point"
      },
      "id": "fa23b1ef40ff6e44fff819ebb6d08bd2"
    },{
      "type": "Feature",
      "properties": {
        "name": "CoHo",
        "description": "if u bring ur own mug to the coho u can get rly nice tea bags 2 drink",
        "by": "Mal"
      },
      "geometry": {
        "coordinates": [
          -121.74983156556246,
      38.541927827143695
        ],
        "type": "Point"
      },
      "id": "fa23b1ef40ff6e44fff819ebb6d08bd2"
    },{
      "type": "Feature",
      "properties": {
        "name": "Avid Reader Toy Store",
        "description": "It’s very sensory & colorful, lots of fun and distracting stuff to look at.",
        "by": "Hannah"
      },
      "geometry": {
        "coordinates": [
          -121.74047937571011,
     38.54348543073155
        ],
        "type": "Point"
      },
      "id": "fa23b1ef40ff6e44fff819ebb6d08bd2"
    },{
      "type": "Feature",
      "properties": {
        "name": "Raja's",
        "description": "go visit Taranbir at Raja’s to remind u everything will be okay",
        "by": "Jay"
      },
      "geometry": {
        "coordinates": [
          -121.7466254017838,
      38.54375576159245
        ],
        "type": "Point"
      },
      "id": "fa23b1ef40ff6e44fff819ebb6d08bd2"
    },{
      "type": "Feature",
      "properties": {
        "name": "Raja's",
        "description": "I like to get the coconut curry when I'm feeling sick, run-down, or when certain elements of my mental health aren't too good. It's so warm and comforting!",
        "by": "Anon"
      },
      "geometry": {
        "coordinates": [
          -121.74660247734114,
      38.54375494659794
        ],
        "type": "Point"
      },
      "id": "fa23b1ef40ff6e44fff819ebb6d08bd2"
    },{
      "type": "Feature",
      "properties": {
        "name": "Raja's",
        "description": "I like to get the coconut curry when I'm feeling sick, run-down, or when certain elements of my mental health aren't too good. It's so warm and comforting!",
        "by": "Anon"
      },
      "geometry": {
        "coordinates": [
          -121.74660247734114,
      38.54375494659794
        ],
        "type": "Point"
      },
      "id": "fa23b1ef40ff6e44fff819ebb6d08bd2"
    },{
      "type": "Feature",
      "properties": {
        "name": "The Varsity",
        "description": "I love going to see movies at The Varsity. It's normally emptier than most theaters, which is great for me and makes me much less nervous than full theaters do.",
        "by": "Anon"
      },
      "geometry": {
        "coordinates": [
          -121.7403234778634,
      38.54306635340504
        ],
        "type": "Point"
      },
      "id": "fa23b1ef40ff6e44fff819ebb6d08bd2"
    },{
      "type": "Feature",
      "properties": {
        "name": "Bike Path",
        "description": "This is a really nice bike path!",
        "by": "Tara"
      },
      "geometry": {
        "coordinates": [
          -121.73236258400696,
      38.53707898058053
        ],
        "type": "Point"
      },
      "id": "fa23b1ef40ff6e44fff819ebb6d08bd2"
    },{
      "type": "Feature",
      "properties": {
        "name": "Dutch Bros",
        "description": "Honestly, talking to the people at Dutch Bros really makes me happy. They're always so excited and friendly!",
        "by": "Violet"
      },
      "geometry": {
        "coordinates": [
          -121.73856125385211,
     38.540511229436134
        ],
        "type": "Point"
      },
      "id": "fbfa2aa63c7b123677ed88e3a7985d1e"
    }]
      }
    },
    "layout": {
      "icon-image": "garden-15",
      "icon-allow-overlap": true
    }
  });

  map.on('click', 'self-care-spots', function(e) {
    var coordinates = e.features[0].geometry.coordinates.slice();
    var name = e.features[0].properties.name;
    var description = e.features[0].properties.description;
    var by = e.features[0].properties.by;

    new mapboxgl.Popup()
      .setLngLat(coordinates)
      .setHTML("<h2>"+name+"</h2>" + "<p>" + description + "</p>" + "<h3>" +by+"</h3>")
      .addTo(map);
  });
});


var results = document.getElementById("results");
var myTip = document.getElementById("myTip");

document.f.onsubmit = processForm;

function processForm() {
  var yourName = document.f.yourName.value;
  var yourTip = document.f.yourTip.value;

  myTip.innerHTML = yourTip + " - " + yourName;

  results.style.display="block";
  document.f.reset();
  return false;
}
