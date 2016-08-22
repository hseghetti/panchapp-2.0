var express = require("express");
var path = require("path");
var firebase = require('firebase');

var app = express();

firebase.initializeApp({
    apiKey: 'AIzaSyAXYjuZzrvC0vtgpWEL1qKHv6BR7La1fZ0',
    authDomain: 'papp-cards.firebaseapp.com',
    databaseURL: 'https://mutombo-cards.firebaseio.com/',
    storageBucket: 'papp-cards.appspot.com'
});

var data;

firebase.database().ref().on('value', function(snapshot) {
    if (snapshot.val()) {
        data = snapshot.val();
    }
}.bind(this));

app.use(express.static(path.join(__dirname, "dist")));

app.get('/getCards', function (req, res) {
    res.send(data);
});

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(3000, function(){
    console.log("Started listening on port", 3000);
});
