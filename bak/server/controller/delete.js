const path = require('path');

module.exports = function(req, res) {
    let userId = req.cookies.userID;
    let body = req.body;

    if(Object.keys(body).length > 0) {
        req.database.content.deleteRecord(body.id);
    }
    
    let list = req.database.content.getRecord();

    res.render(path.join(__dirname, '../template/list.html'), {
        docList: list.reverse(),
        userId: userId
    });
}