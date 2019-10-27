const Data = require('./data');

module.exports = function(options) {

    let dataName = options.dataName;
    let dataIns = {};

    if(Array.isArray(dataName)) {
        dataName.forEach(function(name) {
            dataIns[name] = new Data({
                name: name
            });
        });
    }
    else {
        throw new Error('dataName need an Array');
    }

    return function(req, res, next) {
        req.database = dataIns;
        next();
    }

}