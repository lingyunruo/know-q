

module.exports = function(req, res) {

    let body = req.query;


    let deleteUser = body.userId;

    req.database.userAccount.deleteOne({userName: deleteUser}, function(err) {
        if(err) {
            console.log(err);
        }

        res.redirect('/manager/user_list');
    })

}