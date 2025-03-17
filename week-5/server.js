var http = require("http");

var server = http.createServer(function(req, res) {
    res.statusCode = 200;

    if (req.url === "/html") {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><body><h1>Hello, HTML!</h1></body></html>');
    } else if (req.url === "/text") {
        res.setHeader('Content-Type', 'text/plain');
        res.write('Hello, this is a plain text response!');
    } else if (req.url === "/json") {
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify({ message: "Hello, this is a JSON response!" }));
    } else {
        res.setHeader('Content-Type', 'text/plain');
        res.write('Visit /html, /text, or /json');
    }

    res.end();
});

server.listen(3000, function() {
    console.log('Server is running on port 3000');
});