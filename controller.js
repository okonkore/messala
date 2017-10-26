let user = require('./model/user');

module.exports.getModel = function (req, res) {
    return user;
};