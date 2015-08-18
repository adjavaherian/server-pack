var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config/server-config');
var component = require('./app/MyComponent');

var server = express();
var port = 3000;

server.set('env', 'development');
server.enable('trust proxy');
server.disable('x-powered-by');

server.use(bodyParser.json());

server.listen(port, function() {
    console.info('Express server listening on port: ' + port);
    console.log('whatsup', config.configuration);
});

