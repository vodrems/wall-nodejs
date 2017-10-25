var clients = [];

module.exports.subscribe = function(res) {
    console.log('subscribe');
    clients.push(res);
    res.end('');
};

module.exports.publish = function(message) {

    clients.forEach(function (res) {
       res.end(message)
    });

    clients = [];
};