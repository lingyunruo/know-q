const path = require('path');


module.exports = function(req, res) {

    let data = req.database.article.getRecord();

    res.render(path.join(__dirname, '../template/article_list.html'), {
        list: data
    }, function(err, html) {
        res.send({
            success: true,
            content: html
        });
    });
}