const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'trace';

module.exports = function (req, res) {
    new Promise(function (resolve, reject) {
        logger.trace('user' + req.url);
        resolve(req, res);
    });
}