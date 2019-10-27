

module.exports = function(req, res) {

    let body = req.body;
    let comment = body.comment;

    req.database.comment.deleteOne({_id: comment._id}, function(err) {

        if(res.handleError(err)) {
            res.send({
                success: true
            });
        }

    });
}