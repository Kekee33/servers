var http = require('http');

var PORT = 7000;

function handleRequest(req, res){    
    res.end("You are beautiful!! Path hit: " + req.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("listening on: http://localhost:", PORT);
});

var http = require('http');

var PORT = 7500;

function handleRequest(req, res){    
    res.end("You left the house wearing that?? Path hit: " + req.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("listening on: http://localhost:", PORT);
});