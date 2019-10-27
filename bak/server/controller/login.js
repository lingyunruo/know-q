
module.exports = function(req, res) {
    let body = req.body;
    let userId = body.userId;
    let pwd = body.pwd;
    let userData = req.database.user.getRecord('userId', userId)[0];

    if(
        !userData || 
        userData.password !== pwd
    ) {
        res.send({
            success: false,
            msg: '用户名或密码错误'
        });
    }
    else {
        userData.status = 'login';
        userData.loginDate = new Date().getTime();

        res.cookie('userID', userId);

        req.database.user.updateRecord(userData._id, userData);

        res.send({
            success: true
        })
    }
}