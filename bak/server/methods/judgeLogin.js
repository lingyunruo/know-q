const path = require('path');
const loginAPI = require('../config/login');

module.exports = function(app) {
    app.use(loginAPI, function(req, res, next) {
        let userId = req.cookies.userID;
        let userData = req.database.user.getRecord('userId', userId)[0];

        if(
            !userData || 
            userData.status === 'UN_login' ||
            new Date().getTime() - userData.loginDate > 21600000
        ) {
            res.render(path.join(__dirname, '../../static/login/login'));
            return;
        }
    
        userData['loginDate'] = new Date().getTime();
        req.database.user.updateRecord(userData._id, userData);
    
        next();
    });
}