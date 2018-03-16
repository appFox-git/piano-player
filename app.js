// app.js

console.log("PianoPlayer App at work, mind your ears!");


var express = require("express");
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));


//  "/"    => send main.html
app.get('/', function(req, res){
   res.sendFile('piano-player.html', {root : __dirname}); 
});

// Catch-all....
app.get('*', function(req, res){

    res.sendFile('piano-player.html', {root : __dirname});
});



// Tell Express to listen for requests (start server)
// env.PORT is a variable port number from cloud9.
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("PianoPlayer App Server has started!!!");
    });
