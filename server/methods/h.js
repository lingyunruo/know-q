
const fs = require('fs');

module.exports = {
    isFileExist: function isFileExist(filePath) {
        try {
            fs.accessSync(filePath, fs.constants.R_OK | fs.constants.W_OK);
            return true;
        }
        catch(e) {
            return false;
        }
    }
}