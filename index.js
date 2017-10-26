'use strict'
const http = require('http');
const log4js = require('log4js');
const logger = log4js.getLogger();

logger.level = 'trace';

let server = http.createServer(function(req, res){
	logger.trace('requested.');
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello messala.\n');
});
server.listen(1337);

logger.info('messala started.');

