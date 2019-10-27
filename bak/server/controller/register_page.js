

const path = require('path');

module.exports = function(req, res) {
    res.render(path.join(__dirname, '../../static/register/reg'));
}