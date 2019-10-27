

module.exports = function(req, res) {

    let userId = req.cookies.userID;

    req.database.userAccount.findOne({userId: userId}, {
        password: 0
    }, function(err, data) {

        if(res.handleError(err)) {
            res.send({
                success: true,
                data: {
                    userInfo: data
                }
            });
        }

    });

}