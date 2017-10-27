const client = require('redis').createClient();
const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'trace';

module.exports = function (req, res) {
    return new Promise(function (resolve, reject) {
        client.set('user', 'hoge', function () {
            resolve('messala user');
        });
    });
}
