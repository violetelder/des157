var config = {
  apiKey: "AIzaSyCfmWRFxwQzVE9CW65giKd_mn_uEuostw8",
  authDomain: "selfcare-c70c0.firebaseapp.com",
  databaseURL: "https://selfcare-c70c0.firebaseio.com",
  projectId: "selfcare-c70c0",
  storageBucket: "selfcare-c70c0.appspot.com",
  messagingSenderId: "1065851025216"
};
firebase.initializeApp(config);

$ npm install - g firebase - tools
$ firebase init# Generate a firebase.json(REQUIRED)
$ firebase serve# Start development server

var database = firebase.database();
