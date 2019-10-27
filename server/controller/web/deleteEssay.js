

module.exports = function(req, res) {

    let body = req.body;
    let userId = req.cookies.userID;

    req.database.shortEssay.deleteOne({
        _id: body.essayId
    }, function(err, data) {
        if(res.handleError(err)) {

            req.database.praise.deleteOne({
                shortEssayId: body.essayId
            }, function(err) {
                res.handleError(err);
            });
            req.database.star.deleteOne({
                shortEssayId: body.essayId
            }, function(err) {
                res.handleError(err);
            });
            req.database.comment.deleteMany({
                essayId: body.essayId
            }, function(err) {
                res.handleError(err);
            });

            
            res.send({
                success: true
            });
        }
    })

}