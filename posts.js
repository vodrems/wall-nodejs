var clients = [];

module.exports.subscribe = function(req, res) {

    clients.push(res);

    res.on('close', function() {
        clients.splice(clients.indexOf(res), 1);
    });
};

module.exports.publish = function(message) {

    clients.forEach(function (res) {
       res.end(message)
    });

    clients = [];
};


setInterval(function() {
    console.log('Now clients: ' + clients.length);
}, 2000);