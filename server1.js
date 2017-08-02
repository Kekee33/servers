var http = require('http');

var PORT = 7000;

function handleRequest(req, res){
    res.end("You look beautiful today!! Path hit: " + req.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("listening on: http://localhost:&s", PORT);
});


var PORT2 = 7500;

function handleRequest2(req, res){
    res.end("I can't believe you wore that out of the house!! Path hit: " + req.url);
}

var server2 = http.createServer(handleRequest2);

server2.listen(PORT2, function(){
    console.log("listening on: http://localhost:&s", PORT2);
});