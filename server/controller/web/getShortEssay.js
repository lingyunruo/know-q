// 获取短文
const getShortEssayList = require('./methods/getShortEssayList');

module.exports = function(req, res) {

    let body = req.body;
    let userId = req.cookies.userID;

    if(body.page === 'main') {
        getShortEssayList(req, res, {});
    }
    else if(body.page === 'star') {
        req.database.star.find({starUser: userId}, function(err, data) {

            if(res.handleError(err)) {
                let idList = data.map(function(item) {
                    return item.shortEssayId
                });
                let condition = {_id: {$in: idList}};
                getShortEssayList(req, res, condition);
            }
        });
    }
    else if(body.page === 'knowledge') {
        req.database.userAccount.findOne({userId: userId}, function(err, data) {
            if(res.handleError(err)) {
                let condition = {authorId: data._id};

                getShortEssayList(req, res, condition);   
            }
        })
    }
}