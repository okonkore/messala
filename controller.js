let user = require('./model/user');

let mappingInfo = {
    '/user': user
    // '/mypage': mypage
};
module.exports.getModel = function (req, res) {
    console.log(req.url);
    if (mappingInfo[req.url]) {
        return mappingInfo[req.url](req, res);
    } else {
        return new Promise(function (resolve, reject) {
            resolve('not found.');
        });
    }

};