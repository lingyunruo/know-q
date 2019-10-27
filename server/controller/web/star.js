// 收藏

module.exports = function(req, res) {


    let body = req.body;
    let userId = req.cookies.userID;

    let query = req.database.star.find({
        shortEssayId: body.essayId,
        starUser: userId
    });

    query.countDocuments(function(err, count) {
        if(res.handleError(err)) {
            let updateDoc = {};
            let optType = '';
            if(count <= 0) {
                updateDoc = {
                    $addToSet: {
                        starUser: userId
                    },
                    shortEssayId: body.essayId
                }
                optType = 'star';
            }
            else {
                updateDoc = {
                    $pull: {
                        starUser: userId
                    }
                };
                optType = 'unStar';
            }

            req.database.star.updateOne(
                {shortEssayId: body.essayId},
                updateDoc, 
                {upsert: true}, 
                function(err) {
                    if(res.handleError(err)) {
                        res.send({
                            success: true,
                            optType: optType
                        });
                    }
                }
            );
        }
    });
}