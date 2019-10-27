
module.exports = function(req, res) {
    let body = req.body;
    let userData = req.database.user.getRecord('userId', body.id);

    if(userData.length > 0) {
        res.send({
            success: false,
            msg: '此用户ID已注册'
        });
        return;
    }

    req.database.user.addRecord({
        "name": body.name,
		"password": body.pwd,
		"status": "UN_login",
        "loginDate": 0,
        "userId": body.id
    });

    res.send({
        success: true
    })
}