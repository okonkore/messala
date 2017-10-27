const client = require('redis').createClient();
const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'trace';
const uuidGenerator = require('node-uuid');

module.exports = function (req, res) {
    return new Promise(function (resolve, reject) {
        let uuid = uuidGenerator.v4();
        client.set('user:' + uuid, uuid, function () {
            resolve('uuid:' + uuid);
        });
    });
}
