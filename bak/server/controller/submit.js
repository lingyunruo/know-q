
const path = require('path');

module.exports = function(req, res) {
    let userId = req.cookies.userID;
    let body = req.body;

    body && Object.keys(body).length > 0 && req.database.content.addRecord({
        ...body,
        authorId: userId
    });

    let list = req.database.content.getRecord();

    res.render(path.join(__dirname, '../template/list'), {
        docList: list.reverse(),
        userId: userId
    });
}