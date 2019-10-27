
module.exports = function(req, res) {

    let body = req.body;

    let query = {userId: body.userName};

    req.database.userAccount.findOne(query, function(err, data) {
        if(err) {
            res.send({
                success: false,
                msg: JSON.stringify(err)
            });
        }
        else if(!data) {
            res.send({
                success: false,
                msg: '用户名不存在'
            });
        }
        else {
            if(data.password === body.password) {
                req.database.userAccount.updateOne({
                    _id: data._id
                }, {$set: {isLogin: true}}, function(err) {
                    if(err) {
                        console.log(err);
                        res.send({
                            success: false,
                            msg: JSON.stringify(err)
                        });
                    }
                    else {
                        res.cookie('userID', data.userId);
                        res.send({
                            success: true
                        });
                    }
                });
            }
            else {
                res.send({
                    success: false,
                    msg: '账号或密码错误'
                });
            }
        }
    });
}