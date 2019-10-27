const path = require('path');
const loginAPI = require('../config/login');

module.exports = function(app) {
    app.use(loginAPI, function(req, res, next) {
        // 此处判断loginAPI配置的接口是否已登录
        
        let userId = req.cookies.userID;    

        if(!userId) {
            res.redirect('/login_page');
        }
        else {
            req.database.userAccount.findOne({userId: userId}, function(err, data) {
                if(err) {
                    res.status(500);
                    res.send({
                        success: false,
                        msg: JSON.stringify(err)
                    });
                }
                else {
                    if(
                        !data ||
                        !data.isLogin
                    ) {
                        res.redirect('/login_page');
                    }
                }
                next();
            });
        }
    });
}