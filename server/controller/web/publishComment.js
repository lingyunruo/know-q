

module.exports = function(req, res) {

    let body = req.body;
    let userId = req.cookies.userID;

    getAccount(req, res, {userId: userId})
        .then(function(info) {
            if(info) {
                let data = {
                    content: body.comment,
                    essayId: body.essayId,
                    authorId: userId,
                    authorName: info.userName,
                    createTime: new Date().getTime()
                };
    
                req.database.comment.create(data, function(err) {
                    if(res.handleError(err)) {
                        res.send({
                            success: true
                        });
                    }
                });
            }
        })

}

function getAccount(req, res, condition) {

    return new Promise(function(resolve, reject) {
        req.database.userAccount.findOne(condition, function(err, data) {
            if(res.handleError(err)) {
                resolve(data);
            }
        });
    });
    
}