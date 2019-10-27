


module.exports = function(req, res) {

    let body = req.body;
    let userName = body.userName;
    let name = body.name;
    let pwd = body.password;

    req.database.userAccount.findOne({userId: userName}, function(err, data) {

        if(data) {
            res.send({
                success: false,
                msg: '用户名已存在'
            });
        }
        else {
            req.database.userAccount.create([{
                userId: userName,
                userName: name,
                password: pwd,
                isLogin: false
            }], function(err) {
                if(err) {
                    res.send({
                        success: false,
                        msg: JSON.stringify(err)
                    });
                }
                else {
                    res.send({
                        success: true
                    });
                }
            });
        }

    });

}