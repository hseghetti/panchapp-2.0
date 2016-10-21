var express = require("express");
var path = require("path");

var app = express();

app.use(require('connect-livereload')({port: 35680}));
app.use(express.static(path.join(__dirname, "dist")));

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(3000, function(){
    console.log("Started listening on port", 3000);
});
