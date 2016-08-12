var express = require("express");
var path = require("path");

var app = express();

app.use(express.static(path.join(__dirname, "../app/dist")));

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, '../app/dist', 'index.html'));
})

app.listen(3000, function(){
    console.log("Started listening on port", 3000);
})
