

module.exports = function(req, res) {

    let body = req.body;
    let userId = req.cookies.userID;

    req.database.userAccount.findOne({userId: userId},  function(err, data) {

        if(res.handleError(err)) {

            let articleData = {
                content: body.display,
                createTime: new Date().getTime(),
                authorName: data.userName,
                authorId: data._id,
                style: body.style
            };

            req.database.article.create(articleData, function(err) {
                if(res.handleError(err)) {
                    res.send({
                        success: true
                    });
                }
            });
        }

    });

}