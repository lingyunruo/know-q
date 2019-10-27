

module.exports = function(req, res) {

    let id = req.query.id;

    req.database.shortEssay.deleteOne({_id: id}, function(err) {
        if(err) {
            console.log(err);
        }

        res.redirect('/manager/short_list');
    });

}