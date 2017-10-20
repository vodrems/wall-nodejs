var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res) {
    console.log('working...');

    switch (req.url) {
        case '/':
            res.end(fs.readFileSync('index.html'));
            break;

        case '/request':
            //console.log('request');
            res.end("hi");
            break;

        case '/request1':
            //console.log('request');
            res.statusCode = 404;
            res.end("hi");
            break;

        default:
            console.log('url.parse(req.url)', url.parse(req.url));
            break;
    }
}).listen(3000);
