
module.exports = function(req, res) {
    let userId = req.cookies.userID;
    let userData = req.database.user.getRecord('userId', userId)[0];

    userData.status = 'UN_login';

    req.database.user.updateRecord(userData._id, userData);

    res.send({
        success: true
    })
}