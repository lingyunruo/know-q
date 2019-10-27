const path = require('path');
const fs = require('fs');


class Mark {
    getMarkContent(filename) {
        let filePath = path.join(__dirname, './markdown', filename);

        return new Promise((resolve, reject) => {
            fs.readFile(filePath, {encoding: 'utf8'}, function(err, data) {
                if(err) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            });
        });
    }

    setMarkContent(filename, content) {
        let filePath = path.join(__dirname, './markdown', filename + '.md');

        fs.writeFile(filePath, content, {
            encoding: 'utf8'
        }, function(err) {
            err && console.log(err);
        });
    }
}

module.exports = new Mark({
    jsonPath: path.join(__dirname, './article.json')
});