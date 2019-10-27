const path = require('path');

module.exports = function(req, res) {

    let userId = req.cookies.userID;
    if(userId === 'lingyun') {
        req.database.shortEssay.find(function(err, data) {

            res.render(path.join(__dirname, '../../template/tractList.html'), {
                list: data
            });

        })
    }
    else {
        res.status(404);
        res.send('not fount')
    }

}