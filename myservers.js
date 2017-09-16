var http = require('http');

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest1(request, response) {
	response.end('My mom says I am a catch ' + request.url)
}

function handleRequest2(request, response) {
	response.end('What does she know ' + request.url)
}

var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

server1.listen(PORT1, function() {
	console.log("Success! " + PORT1)
});

server2.listen(PORT2, function() {
	console.log("More Success! " + PORT2)
});
