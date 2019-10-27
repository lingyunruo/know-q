

module.exports = function(req, res) {

    let userId = req.cookies.userID;

    req.database.userAccount.updateOne({
        userId: userId
    }, {
        $set: {isLogin: false}
    }, function(err) {
        if(err) {
            console.log(err);
        }

        res.send({
            success: true
        });
    });

}