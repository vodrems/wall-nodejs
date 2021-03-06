var http = require('http');
var fs = require('fs');
var url = require('url');
var posts = require('./posts');

http.createServer(function(req, res) {

    switch (req.url) {
        case '/':
            res.end(fs.readFileSync('index.html'));
            break;

        case '/request':
            var body = "";
            req.on('data', function (chunk) {
                body += chunk;
            });
            req.on('end', function () {
                console.log('body: ' + body);
                var jsonObj = JSON.parse(body);
                posts.publish(jsonObj.post);
            });
            break;

        case '/subscribe':
            posts.subscribe(req, res);
            break;

        default:
            fs.readFile(__dirname + url.parse(req.url).href, function(err, content) {
                if (err) console.log(err);
                var mime = require('mime');
                mime = mime.getType(url.parse(req.url).href);
                res.setHeader('Content-type', mime + "; charset=utf-8");
                res.end(content)

            });
            break;
    }
}).listen(process.env.PORT || 8080, process.env.IP || 'localhost');
