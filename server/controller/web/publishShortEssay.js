// 发布短文

module.exports = function(req, res) {

    let body = req.body;
    let userId = req.cookies.userID;

    req.database.userAccount.findOne({userId: userId},  function(err, data) {

        if(res.handleError(err)) {

            let shortEssayData = {
                content: body.content,
                createTime: new Date().getTime(),
                authorName: data.userName,
                authorId: data._id
            };

            req.database.shortEssay.create(shortEssayData, function(err) {
                if(res.handleError(err)) {
                    res.send({
                        success: true
                    });
                }
            });
        }

    });
}