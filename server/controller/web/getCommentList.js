

module.exports = function(req, res) {

    let body = req.body;

    let query = req.database.comment.find({essayId: body.essayId});

    query
        .skip((body.current - 1) * body.pageSize)
        .limit(body.pageSize)

    query.find(function(err, data) {
        if(res.handleError(err)) {
            getCommentCount(req, res, {essayId: body.essayId})
                .then(function(count) {
                    res.send({
                        success: true,
                        list: data,
                        total: count
                    });
                })
        }
    });
}

function getCommentCount(req, res, condition) {
    return new Promise(function(resolve, reject) {
        req.database.comment.countDocuments(condition, function(err, count) {
            if(res.handleError(err)) {
                resolve(count);
            }
        });
    });
}