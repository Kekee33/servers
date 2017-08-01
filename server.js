var http = require('http');

var PORT = 8080;

function handleRequest(req, res){    
    res.end("It works!! Path hit: " + req.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("listening on: http://localhost:", PORT);
});