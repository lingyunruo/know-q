

const artiIns = require('../data/article/article');

module.exports = function(req, res) {

    let userId = req.cookies.userID;
    let content = req.body.content;

    let time = new Date().getTime();

    req.database.article.addRecord({
        "title": time,
        "filename": `${time}.md`,
        "type": "markdown",
        "id": time,
        "authorId": userId
    });

    artiIns.setMarkContent(time, content);

    res.send({
        success: true
    });
}