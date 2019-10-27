// 获取短文


module.exports = function(req, res, condition) {

    let body = req.body;
    let userId = req.cookies.userID;
    
    let query = req.database.shortEssay.find(condition);

    req.database.praise.find();
    
    query
        .skip((body.current - 1) * body.pageSize)
        .limit(body.pageSize)
        .sort({createTime: -1});

    query.find(function(err, data) {
        if(res.handleError(err)) {

            let shortEssayIds = [];
            let queryCondition = {shortEssayId: {$in: shortEssayIds}}

            data.map(function(item) {
                shortEssayIds.push(item._id);
            });


            Promise.all([
                getPraiseCount(req, res, queryCondition), 
                getStarCount(req, res, queryCondition),
                getTotal(req, res, condition),
                getCommentCount(req, res, shortEssayIds)
            ])
                .then(function(resData) {
                    let praiseData = resData[0];
                    let starData = resData[1];
                    let total = resData[2];
                    let commentCount = resData[3];

                    let praiseMap = {};
                    let starMap = {};
                    let commentMap = {};
                    let essayList = [];

                    praiseData.map(function(item) {
                        praiseMap[item.shortEssayId] = item.praiseUserIds;
                    });
                    starData.map(function(item) {
                        starMap[item.shortEssayId] = item.starUser;
                    });
                    commentCount.map(function(item) {
                        commentMap[item[0]] = item[1]
                    });

                    data.map(function(item) {
                        let essay = {
                            _id: item._id,
                            content: item.content,
                            createTime: item.createTime,
                            authorName: item.authorName,
                            authorId: item.authorId,
                            praiseUsers: praiseMap[item._id] || [],
                            isMyPraise: praiseMap[item._id] ? praiseMap[item._id].includes(userId) : false,
                            starUsers: starMap[item._id] || [],
                            isMyStar: starMap[item._id] ? starMap[item._id].includes(userId) : false,
                            commentCount: commentMap[item._id]
                        };

                        essayList.push(essay);
                    });

                    res.send({
                        success: true,
                        data:{
                            list: essayList,
                            total: total
                        }
                    })
                });
        }
    });
}

function getPraiseCount(req, res, queryCondition) {

    return new Promise(function(resolve, reject) {

        req.database.praise.find(queryCondition, function(err, data) {
            if(res.handleError(err)) {
                resolve(data);
            }
        });

    });

}

function getStarCount(req, res, queryCondition) {
    return new Promise(function(resolve, reject) {
        req.database.star.find(queryCondition, function(err, data) {
            if(res.handleError(err)) {
                resolve(data);
            }
        });
    });
}

function getTotal(req, res, condition) {
    return new Promise(function(resolve, reject) {
        req.database.shortEssay.countDocuments(condition, function(err, count) {
            if(res.handleError(err)) {
                resolve(count);
            }
        });
    });
}

function getCommentCount(req, res, ids) {
    let promiseArr = [];

    ids.forEach(function(id) {
        promiseArr.push(
            new Promise(function(resolve, reject) {
                req.database.comment.countDocuments({essayId: id}, function(err, count) {
                    if(res.handleError(err)) {
                        resolve([id, count]);
                    }
                });
            })
        )
    });

    return Promise.all(promiseArr);
}