



module.exports = function(req, res, next) {


    res.handleError = function(err) {
        if(err) {
            res.send({
                success: false,
                msg: JSON.stringify(err)
            });
            return false;
        }
        else {
            return true
        }
    }
    
    next();
}
