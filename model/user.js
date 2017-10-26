const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'trace';

module.exports = function (req, res) {
    let req = req;
    let res = res;
    return new Promise(function (resolve, reject) {
        logger.trace('user');
        resolve(req, res);
    });
}