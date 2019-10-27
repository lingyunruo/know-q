


module.exports = function(req, res) {

    let body = req.body;
    let userId = req.cookies.userID;

    req.database.praise.updateOne(
        {shortEssayId: body.essayId}, 
        {
            $addToSet: {
                praiseUserIds: userId
            },
            shortEssayId: body.essayId
        }, 
        {upsert: true}, function(err) {
            if(res.handleError(err)) {
                res.send({
                    success: true
                });
            }
        });

}