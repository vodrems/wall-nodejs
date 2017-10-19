var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    console.log('working...');

    switch (req.url) {
        case '/':
            res.end(fs.readFileSync('index.html'));
            break;
    }
}).listen(3000);
