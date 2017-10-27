let user = require('./model/user');

let mappingInfo = {
    '/user': user
    // '/mypage': mypage
};
module.exports.getModel = function (req, res) {
    if (mappingInfo[req.url]) {
        return mappingInfo[req.url](req, res);
    }

};