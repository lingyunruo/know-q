const path = require('path');

module.exports = function(req, res) {
    let userId = req.cookies.userID;
    let userData = req.database.user.getRecord('userId', userId)[0];

    res.render(path.join(__dirname, '../../static/web/page/index'), {
        userName: userData.name,
        userId: userId
    }, function(err, html) {
        res.send(html);
    })
}