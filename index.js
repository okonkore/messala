'use strict'
const http = require('http');
const log4js = require('log4js');
const logger = log4js.getLogger();
const controller = require('./controller');
logger.level = 'trace';

let server = http.createServer(function (req, res) {
	logger.trace('requested.' + '[' + req.method + ']' + req.url);

	let model = controller.getModel(req, res);
	model.then(function (_req, _res) {
		logger.trace('success');
		logger.trace(JSON.stringify(_res));
		res.writeHead(200, { 'Content-Type': 'text/plain' });
		res.end('Hello messala.\n');
	}).catch(function (err) {
		logger.error('error');
		res.writeHead(500, { 'Content-Type': 'text/plain' });
		res.end(JSON.stringify(err));
	});
});
server.listen(1337);

logger.info('messala started.');

