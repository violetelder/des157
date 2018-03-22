console.log("this is script.js comment");

"use strict";

//variables for overlay
//the way I've been thinking about it, close button is required interactive element #1, info is required interactive element #2
var overlay = document.getElementById('overlay');
var close = document.getElementById('close');
var info = document.getElementById('info');

//overlay controls
close.addEventListener('click', function() {
  overlay.style.display = "none";
})

//overlay controls
close.addEventListener('mouseover', function() {
  close.style.cursor = "pointer";
})

//overlay controls
info.addEventListener('click', function() {
  overlay.style.display = "block";
})

//overlay controls
info.addEventListener('mouseover', function() {
  info.style.cursor = "pointer";
})

//variables for submissions
//the way I've been thinking about it, close 2 button is required interactive element #3, tipsubmission button is required interactive element #4
var tipoverlay = document.getElementById('tipsubmitoverlay');
var close2 = document.getElementById('close2');
var tipsubmission = document.getElementById('tipsubmission');

//overlay controls
close2.addEventListener('click', function() {
  tipoverlay.style.display = "none";
})

//overlay controls
close2.addEventListener('mouseover', function() {
  close2.style.cursor = "pointer";
})

//overlay controls
tipsubmission.addEventListener('click', function() {
  tipoverlay.style.display = "block";
})

//overlay controls
tipsubmission.addEventListener('mouseover', function() {
  tipsubmission.style.cursor = "pointer";
})

//variables for questionmark
//the way I've been thinking about it, close 3 button is required interactive element #5, questionmark button is a 6th interactive element
var legendoverlay = document.getElementById('legendoverlay');
var close3 = document.getElementById('close3');
var questionmark = document.getElementById('questionmark');

//overlay controls
close3.addEventListener('click', function() {
  legendoverlay.style.display = "none";
})

//overlay controls
close3.addEventListener('mouseover', function() {
  close3.style.cursor = "pointer";
})

//overlay controls
questionmark.addEventListener('click', function() {
  legendoverlay.style.display = "block";
})

//overlay controls
questionmark.addEventListener('mouseover', function() {
  questionmark.style.cursor = "pointer";
})

//here's my setTimeout!
function submissionwarning() {
    setTimeout(function(){ alert("Thank you so much for your interest in contributing! Unfortunately, this function isn't available yet. Please feel free to email me at violetelderdesign@gmail.com if you'd like to submit a self-care suggestion before this function becomes available through the website!"); }, 4000);
}

//add map
mapboxgl.accessToken = 'pk.eyJ1IjoidmlvbGV0ZSIsImEiOiJjamU4dGV4MHMwNWkyMzJtdnh5dWw1NGk4In0.KsEy2IUIClGO1XuEo8p5-w';

//Here's the data for all the low energy points
var lowenergydata = {
    "features": [
      {
        "type": "Feature",
        "properties": {
          "name": "Amtrak Station Benches",
          "description": "Sit on a bench and listen to the birds.",
          "by": "Demi",
          "icon": "heart-15_4",
          "energy": "Low energy"
        },
        "geometry": {
          "coordinates": [
            -121.737406,
            38.544337
          ],
          "type": "Point"
        },
        "id": "01e70041c3ec81329565dbd3dc0bc3b6"
      },

      {
        "type": "Feature",
        "properties": {
          "name": "Window seats at Shields",
          "description": "Take a nap here when it's sunny. The warmth filters in through the windows.",
          "by": "Demi",
          "icon": "heart-15_4",
          "energy": "Low energy"
        },
        "geometry": {
          "coordinates": [
            -121.749154,
            38.539876
          ],
          "type": "Point"
        },
        "id": "09bcb546c97c19c2fd7a1768e6306b2e"
      },
      {
        "type": "Feature",
        "properties": {
          "name": "SCC Meditation Room",
          "description": "Nap on the couches here.",
          "by": "Val",
          "icon": "heart-15_4",
          "energy": "Low energy"
        },
        "geometry": {
          "coordinates": [
            -121.751615,
            38.53954
          ],
          "type": "Point"
        },
        "id": "0c76dfa51824e4abaad7d2021e0e000d"
      },

      {
        "type": "Feature",
        "properties": {
          "name": "CoHo",
          "description": "if u bring ur own mug to the coho u can get rly nice tea bags 2 drink",
          "by": "Mal",
          "icon": "heart-15_4",
          "energy": "Low energy"
        },
        "geometry": {
          "coordinates": [
            -121.749831,
            38.541927
          ],
          "type": "Point"
        },
        "id": "12bfc0cddcca706e1bb2c85b3fb1d1d6"
      },

      {
        "type": "Feature",
        "properties": {
          "name": "Arboretum Redwoods",
          "description": "Hang out with the redwoods in the morning",
          "by": "D",
          "icon": "heart-15_4",
          "energy": "Low energy"
        },
        "geometry": {
          "coordinates": [
            -121.747487,
            38.537347
          ],
          "type": "Point"
        },
        "id": "26e1220c8bad3a60643729ba7219c863"
      },

      {
        "type": "Feature",
        "properties": {
          "name": "Shrem parking lot",
          "description": "The part of the parking lot with sculptures! Nice outdoor area to just relax in.",
          "by": "Anonymous",
          "icon": "heart-15_4",
          "energy": "Low energy"
        },
        "geometry": {
          "coordinates": [
            -121.747089,
            38.533853
          ],
          "type": "Point"
        },
        "id": "338e1fcb4a4b219bbf40cd50bd6d4715"
      },
      {
        "type": "Feature",
        "properties": {
          "name": "WRRC",
          "description": "i love the comfy chairs and pillows!!!",
          "by": "Mal",
          "icon": "heart-15_4",
          "energy": "Low energy"
        },
        "geometry": {
          "coordinates": [
            -121.748268,
            38.541826
          ],
          "type": "Point"
        },
        "id": "33bd419bb7141ad94ecf228f29003d2a"
      },



      {
        "type": "Feature",
        "properties": {
          "name": "Mondavi Fountain",
          "description": "A nice place to sit, not too far from central campus.",
          "by": "Violet",
          "icon": "heart-15_4",
          "energy": "Low energy"
        },
        "geometry": {
          "coordinates": [
            -121.748015,
            38.534397
          ],
          "type": "Point"
        },
        "id": "5ced85498ec3eb76e9c03454038450b4"
      },

      {
        "type": "Feature",
        "properties": {
          "name": "By the Arboretum Gazebo",
          "description": "I love napping in the fields by the Arboretum gazebo!",
          "by": "Jess",
          "icon": "heart-15_4",
          "energy": "Low energy"
        },
        "geometry": {
          "coordinates": [
            -121.747051,
            38.538328
          ],
          "type": "Point"
        },
        "id": "63b980aba101ca8eeb3b1b916c2595cc"
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Voorhies courtyard",
          "description": "The courtyard of Voorhies hall! There's a kitty and a fountain! Be nice to the kitty, please. :)",
          "by": "Anonymous",
          "icon": "heart-15_4",
          "energy": "Low energy"
        },
        "geometry": {
          "coordinates": [
            -121.746953,
            38.541213
          ],
          "type": "Point"
        },
        "id": "65a65e181635ad57b97fbfb18d383f9d"
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Kleiber Hall",
          "description": "Lay down and stargaze here at night!",
          "by": "Demi",
          "icon": "heart-15_4",
          "energy": "Low energy"
        },
        "geometry": {
          "coordinates": [
            -121.755215,
            38.540798
          ],
          "type": "Point"
        },
        "id": "668abac5d97bfc826954700d85b9aa72"
      },


      {
        "type": "Feature",
        "properties": {
          "name": "John Natsulas Gallery, top floor",
          "description": "Lay on the sofa, stare up at the sky or people watching the streets below.",
          "by": "Demi",
          "icon": "heart-15_4",
          "energy": "Low energy"
        },
        "geometry": {
          "coordinates": [
            -121.741015,
            38.542159
          ],
          "type": "Point"
        },
        "id": "7228e2c71b254adc685380e08252d4da"
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Single-person bathrooms",
          "description": "A good place to hide. Single-person bathrooms on the first floor. Paint smell, plaster smell.",
          "by": "Anon",
          "icon": "heart-15_4",
          "energy": "Low energy"
        },
        "geometry": {
          "coordinates": [
            -121.748518,
            38.538975
          ],
          "type": "Point"
        },
        "id": "728e2abc726d7e84fe63e467efa432b6"
      },


      {
        "type": "Feature",
        "properties": {
          "name": "Health Sciences Library on the Vet Campus",
          "description": "find a super secret study place in the health sciences library on the veterinary campus",
          "by": "Val",
          "icon": "heart-15_4",
          "energy": "Low energy"
        },
        "geometry": {
          "coordinates": [
            -121.763519,
            38.533441
          ],
          "type": "Point"
        },
        "id": "88905f5c6546f7602e6c358f674735bc"
      },
      {
        "type": "Feature",
        "properties": {
          "name": "LGBTQIARC",
          "description": "Read comics here!",
          "by": "Tara",
          "icon": "heart-15_4",
          "energy": "Low energy"
        },
        "geometry": {
          "coordinates": [
            -121.751389,
            38.539489
          ],
          "type": "Point"
        },
        "id": "a7a811d2904d911cc92daf859193409d"
      },
      {
        "type": "Feature",
        "properties": {
          "name": "KDVS",
          "description": "Listening rooms, nice couches, often pretty empty, art all over... Good place to nap, if you don't mind people walking by!",
          "by": "Violet",
          "icon": "heart-15_4",
          "energy": "Low energy"
        },
        "geometry": {
          "coordinates": [
            -121.750212,
            38.54259
          ],
          "type": "Point"
        },
        "id": "adf2537a7ce12924fee68a44e2c0e675"
      },

      {
        "type": "Feature",
        "properties": {
          "name": "Hart Hall courtyard",
          "description": "On sunny days, the grass here and the little walkway are both nice places. They're kind of secluded, but still central to campus.",
          "by": "Violet",
          "icon": "heart-15_4",
          "energy": "Low energy"
        },
        "geometry": {
          "coordinates": [
            -121.750803,
            38.540767
          ],
          "type": "Point"
        },
        "id": "cc068a229a0ae70a1661c91b1828b426"
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Quad",
          "description": "lay in grass and actually eat a meal!!",
          "by": "Tiffany",
          "icon": "heart-15_4",
          "energy": "Low energy"
        },
        "geometry": {
          "coordinates": [
            -121.74974,
            38.541247
          ],
          "type": "Point"
        },
        "id": "cc4ea87e734fdcd6feedc58e6a2d9abb"
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Arboretum Outdoor Piano",
          "description": "Sit outside and listen to people play the outdoor piano near the Wyatt Pavilion.",
          "by": "Erica",
          "icon": "heart-15_4",
          "energy": "Low energy"
        },
        "geometry": {
          "coordinates": [
            -121.746707,
            38.538124
          ],
          "type": "Point"
        },
        "id": "d7e5f5f20ce0e1b2621749a8ca5ee894"
      },


      {
        "type": "Feature",
        "properties": {
          "name": "P&ES murals",
          "description": "The murals in this building are nice, and there are some benches right near them. Not too far from the MU, too.",
          "by": "Anonymous",
          "icon": "heart-15_4",
          "energy": "Low energy"
        },
        "geometry": {
          "coordinates": [
            -121.751836,
            38.543548
          ],
          "type": "Point"
        },
        "id": "dd52c2d983197fa3f70874fc106fcdca"
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Little pathway in the Arboretum",
          "description": "This little pathway is a little more secluded than more crowded parts of the Arboretum. A good place to hide, maybe.",
          "by": "Violet",
          "icon": "heart-15_4",
          "energy": "Low energy"
        },
        "geometry": {
          "coordinates": [
            -121.748658,
            38.535768
          ],
          "type": "Point"
        },
        "id": "e074e44872fd37518a380ffd200c4fe5"
      },
      {
        "type": "Feature",
        "properties": {
          "name": "The art building stairwell on the side closer to the SCC",
          "description": "It's the smaller stairwell! There's a top part of the stairwell that leads nowhere in particular, so there's little foot traffic up there! A good place to hide, if necessary.",
          "by": "Art building ghost :)",
          "icon": "heart-15_4",
          "energy": "Low energy"
        },
        "geometry": {
          "coordinates": [
            -121.74882,
            38.538859
          ],
          "type": "Point"
        },
        "id": "e30817894989398e0a5226ae01588c94"
      }

    ],
    "type": "FeatureCollection"
  };

  //Here's the data for all the med energy points
  var medenergydata = {
  "features": [

    {
      "type": "Feature",
      "properties": {
        "name": "Avid Reader Toy Store",
        "description": "It’s very sensory & colorful, lots of fun and distracting stuff to look at.",
        "by": "Hannah",
        "icon": "heart-15_1",
        "energy": "Medium energy"
      },
      "geometry": {
        "coordinates": [
          -121.740479,
          38.543485
        ],
        "type": "Point"
      },
      "id": "08947a25293889b9634f47fa959ed769"
    },

    {
      "type": "Feature",
      "properties": {
        "name": "Edge of West Village",
        "description": "Now that I have a car, one of my favorite things to do is drive back to West Village at night to the very edge, right before the fields, and just park there with the windows open. It smells so nice. Driving through campus at night is nice, too. Just be careful and safe!",
        "by": "Sarah",
        "icon": "heart-15_1",
        "energy": "Medium energy"
      },
      "geometry": {
        "coordinates": [
          -121.776365,
          38.541156
        ],
        "type": "Point"
      },
      "id": "117785a2187aa585ab13ef4387c11d11"
    },

    {
      "type": "Feature",
      "properties": {
        "name": "Raja's",
        "description": "Go visit Taranbir at Raja’s to remind u everything will be okay",
        "by": "Jay",
        "icon": "heart-15_1",
        "energy": "Medium energy"
      },
      "geometry": {
        "coordinates": [
          -121.746625,
          38.543755
        ],
        "type": "Point"
      },
      "id": "21138f59ee5507339e46d1299357215e"
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Dutch Bros",
        "description": "Honestly, talking to the people at Dutch Bros really makes me happy. They're always so excited and friendly!",
        "by": "Violet",
        "icon": "heart-15_1",
        "energy": "Medium energy"
      },
      "geometry": {
        "coordinates": [
          -121.738561,
          38.540511
        ],
        "type": "Point"
      },
      "id": "23122794c5331f9dc5483461c1e28ad7"
    },

    {
      "type": "Feature",
      "properties": {
        "name": "Path by the cows",
        "description": "Visit the cows. Maybe pet them, but only if they come over to you and want to be petted!",
        "by": "Anonymous",
        "icon": "heart-15_1",
        "energy": "Medium energy"
      },
      "geometry": {
        "coordinates": [
          -121.759321,
          38.536095
        ],
        "type": "Point"
      },
      "id": "2bd078962b8ebdbf3631f151e48faf18"
    },


    {
      "type": "Feature",
      "properties": {
        "name": "Co-op",
        "description": "Wander the aisles and look at the different kinds of food!",
        "by": "May",
        "icon": "heart-15_1",
        "energy": "Medium energy"
      },
      "geometry": {
        "coordinates": [
          -121.739829,
          38.549619
        ],
        "type": "Point"
      },
      "id": "3f92bbbfb479a49e4ad7b01e53e97b10"
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Scrubs",
        "description": "Take a detour to Scrubs cafe on the vet campus at lunch to say hi to vet student’s doggos",
        "by": "Val",
        "icon": "heart-15_1",
        "energy": "Medium energy"
      },
      "geometry": {
        "coordinates": [
          -121.761839,
          38.532075
        ],
        "type": "Point"
      },
      "id": "3f9a49c466f7e144e0bb18f39fec3e9a"
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Raja's",
        "description": "I like to get the coconut curry when I'm feeling sick, run-down, or when certain elements of my mental health aren't too good. It's so warm and comforting!",
        "by": "Anon",
        "icon": "heart-15_1",
        "energy": "Medium energy"
      },
      "geometry": {
        "coordinates": [
          -121.746602,
          38.543754
        ],
        "type": "Point"
      },
      "id": "4579b90b1091674c93e6424eeafbd2cc"
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Farmer's Market",
        "description": "People watch here on Saturdays!",
        "by": "Katie",
        "icon": "heart-15_1",
        "energy": "Medium energy"
      },
      "geometry": {
        "coordinates": [
          -121.744066,
          38.544684
        ],
        "type": "Point"
      },
      "id": "58d2f297815637891857a39609398f28"
    },

    {
      "type": "Feature",
      "properties": {
        "name": "Teabo",
        "description": "play board games with friends at Teabo",
        "by": "Val",
        "icon": "heart-15_1",
        "energy": "Medium energy"
      },
      "geometry": {
        "coordinates": [
          -121.723774,
          38.540979
        ],
        "type": "Point"
      },
      "id": "6a208634571e2f2d7457086ef8791684"
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Tunnel by Mrak",
        "description": "A nice tunnel to walk through! It's a nice, quiet, shaded, outdoor area! Quiet and feels more private than most parts of campus.",
        "by": "Violet",
        "icon": "heart-15_1",
        "energy": "Medium energy"
      },
      "geometry": {
        "coordinates": [
          -121.748743,
          38.537144
        ],
        "type": "Point"
      },
      "id": "6e1eeb09748c395dbf36484df447a0a1"
    },

    {
      "type": "Feature",
      "properties": {
        "name": "Greenbelt Dog Statues",
        "description": "The dog statues in the Greenbelt always make me happy. :) They're just so sweet! And seeing people walking and taking care of their pets makes me feel capable and calm. If they can do it, I can, too!",
        "by": "K",
        "icon": "heart-15_1",
        "energy": "Medium energy"
      },
      "geometry": {
        "coordinates": [
          -121.756507,
          38.564458
        ],
        "type": "Point"
      },
      "id": "72aa144ca680dd030a6891c3f37d75d3"
    },

    {
      "type": "Feature",
      "properties": {
        "name": "Konditorei",
        "description": "Konditorei kind of removes you from the world of Davis. It's cute, with lots of older residents stopping in to chat with friends. As a student, it can be nice to get out of the college part of Davis sometimes.",
        "by": "Anonymous",
        "icon": "heart-15_1",
        "energy": "Medium energy"
      },
      "geometry": {
        "coordinates": [
          -121.718326,
          38.551771
        ],
        "type": "Point"
      },
      "id": "b4861c0ec61687c08afe3f07697fa9e6"
    },

    {
      "type": "Feature",
      "properties": {
        "name": "Temple Coffee",
        "description": "Getting floral or herbal drinks always makes me feel calmer, or at least like I'm a fancy, sophisticated lady in charge of my own life. Temple has a really nice mint green tea drink, called Bliss! I get it everytime I go there.",
        "by": "Violet",
        "icon": "heart-15_1",
        "energy": "Medium energy"
      },
      "geometry": {
        "coordinates": [
          -121.739398,
          38.544754
        ],
        "type": "Point"
      },
      "id": "dadba55cf72e038ffe205468925b7706"
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Davis Art Center",
        "description": "Something about walking or driving or busing by here and seeing people dancing in the street-facing studios sometimes in the evening is really nice and makes me really happy.",
        "by": "Violet",
        "icon": "heart-15_1",
        "energy": "Medium energy"
      },
      "geometry": {
        "coordinates": [
          -121.745238,
          38.560328
        ],
        "type": "Point"
      },
      "id": "dc3a0d3019229ea8d8630397b392fa03"
    },

    {
      "type": "Feature",
      "properties": {
        "name": "The Varsity",
        "description": "I love going to see movies at The Varsity. It's normally emptier than most theaters, which is great for me and makes me much less nervous than full theaters do.",
        "by": "Anon",
        "icon": "heart-15_1",
        "energy": "Medium energy"
      },
      "geometry": {
        "coordinates": [
          -121.740323,
          38.543066
        ],
        "type": "Point"
      },
      "id": "f21af5cc8eff893b8ff1ff8eb073436b"
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Mishka's",
        "description": "Get coffee with a friend!",
        "by": "May",
        "icon": "heart-15_1",
        "energy": "Medium energy"
      },
      "geometry": {
        "coordinates": [
          -121.74053,
          38.543155
        ],
        "type": "Point"
      },
      "id": "f4371414621905e142abe815c9527e26"
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Path in Sycamore Park",
        "description": "Shady, nice place for a walk.",
        "by": "Anonymous",
        "icon": "heart-15_1",
        "energy": "Medium energy"
      },
      "geometry": {
        "coordinates": [
          -121.766135,
          38.556076
        ],
        "type": "Point"
      },
      "id": "f8126eef47d834516b6cb239a62b0217"
    }
  ],
  "type": "FeatureCollection"
};

//here's the data for the high energy points
var highenergydata={
  "features": [

    {
      "type": "Feature",
      "properties": {
        "name": "Bike Trail by West Village",
        "description": "I love biking everywhere. To the parks, the trail towards the farms in West Davis, and seeing the sheep and beautiful Davis sunset.",
        "by": "Demi",
        "icon": "heart-15_3",
        "energy": "High energy"
      },
      "geometry": {
        "coordinates": [
          -121.771963,
          38.546326
        ],
        "type": "Point"
      },
      "id": "1091e219e696abacd3d2b1f325e42916"
    },

    {
      "type": "Feature",
      "properties": {
        "name": "Northstar park",
        "description": "There's a lake on one side and wetland on the other, with some docks extending out onto the wetland that are sometimes closed, but have been open recently! A nice place to run! If you go in the evening, there are a lot of birds in the lake, and there are often dogs playing in the park and lots of people and families out for walks.",
        "by": "Violet",
        "icon": "heart-15_3",
        "energy": "High energy"
      },
      "geometry": {
        "coordinates": [
          -121.750024,
          38.571812
        ],
        "type": "Point"
      },
      "id": "5d29a87f5cc192bfcdc0968b0473aa3b"
    },

    {
      "type": "Feature",
      "properties": {
        "name": "Central Park Swings",
        "description": "Swing as high as you can!",
        "by": "Demi",
        "icon": "heart-15_3",
        "energy": "High energy"
      },
      "geometry": {
        "coordinates": [
          -121.744669,
          38.545794
        ],
        "type": "Point"
      },
      "id": "82aed0e168245709d3f107ebbe30bddd"
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Bike Path",
        "description": "This is a really nice bike path!",
        "by": "Tara",
        "icon": "heart-15_3",
        "energy": "High energy"
      },
      "geometry": {
        "coordinates": [
          -121.732362,
          38.537078
        ],
        "type": "Point"
      },
      "id": "866db7c010bbc4f797cbc72af615e036"
    }
  ],
  "type": "FeatureCollection"
};


//okay, create the map
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/violete/cjf2cc1q600k62spkbmtgnhlc',
  zoom: 12.27,
  center: [-121.733813, 38.547049]
});

//allow for location detection
map.addControl(new mapboxgl.GeolocateControl({
  positionOptions: {
    enableHighAccuracy: true
  },
  trackUserLocation: true
}));

//here's where it calls the initial display of all the points!
map.on('load', function() {

  //calling that initial set of all points
  map.addSource("lowenergy", {
    "type": "geojson",
    "data": lowenergydata
  });
  map.addSource("medenergy", {
    "type": "geojson",
    "data": medenergydata
  });
  map.addSource("highenergy", {
    "type": "geojson",
    "data": highenergydata
  });

  //mapbox wanted me to add this
  lowenergy.features.forEach(function(feature) {
    var symbol = feature.properties['icon'];
    var layerID = 'poi-' + symbol;

    //adding the low energy filter
    if (!map.getLayer("lowenergy")) {
      map.addLayer({
        "id": layerID,
        "type": "symbol",
        "source": "lowenergy",
        "layout": {
          "icon-allow-overlap": true
        },
        "filter": ["==", "icon", symbol]
      });

    }
  });

  //mapbox wanted me to add this
  medenergy.features.forEach(function(feature) {
    var symbol = feature.properties['icon'];
    var layerID = 'poi-' + symbol;

    //adding the low energy filter
    if (!map.getLayer("medenergy")) {
      map.addLayer({
        "id": layerID,
        "type": "symbol",
        "source": "medenergy",
        "layout": {
          "icon-allow-overlap": true
        },
        "filter": ["==", "icon", symbol]
      });

    }
  });

  //mapbox wanted me to add this
  highenergy.features.forEach(function(feature) {
    var symbol = feature.properties['icon'];
    var layerID = 'poi-' + symbol;

    //adding the low energy filter
    if (!map.getLayer("highenergy")) {
      map.addLayer({
        "id": layerID,
        "type": "symbol",
        "source": "highenergy",
        "layout": {
          "icon-allow-overlap": true
        },
        "filter": ["==", "icon", symbol]
      });

    }
  });


});

//here's how the pop-ups work!
map.on('click', 'lowenergy', function(e) {
  var coordinates = e.features[0].geometry.coordinates.slice();
  var name = e.features[0].properties.name;
  var description = e.features[0].properties.description;
  var by = e.features[0].properties.by;
  var energy = e.features[0].properties.energy;

  //also this re: how the pop-ups work
  new mapboxgl.Popup()
    .setLngLat(coordinates)
    .setHTML("<h2>" + name + "</h2>" + "<p>" + description + "</p>" + "<h4>This requires: " + energy + "</h4>" + "<h3>" + by + "</h3>")
    .addTo(map);
});

//here's how the pop-ups work!
map.on('click', 'medenergy', function(e) {
  var coordinates = e.features[0].geometry.coordinates.slice();
  var name = e.features[0].properties.name;
  var description = e.features[0].properties.description;
  var by = e.features[0].properties.by;
  var energy = e.features[0].properties.energy;

  //also this re: how the pop-ups work
  new mapboxgl.Popup()
    .setLngLat(coordinates)
    .setHTML("<h2>" + name + "</h2>" + "<p>" + description + "</p>" + "<h4>This requires: " + energy + "</h4>" + "<h3>" + by + "</h3>")
    .addTo(map);
});

//here's how the pop-ups work!
map.on('click', 'highenergy', function(e) {
  var coordinates = e.features[0].geometry.coordinates.slice();
  var name = e.features[0].properties.name;
  var description = e.features[0].properties.description;
  var by = e.features[0].properties.by;
  var energy = e.features[0].properties.energy;

  //also this re: how the pop-ups work
  new mapboxgl.Popup()
    .setLngLat(coordinates)
    .setHTML("<h2>" + name + "</h2>" + "<p>" + description + "</p>" + "<h4>This requires: " + energy + "</h4>" + "<h3>" + by + "</h3>")
    .addTo(map);
});
