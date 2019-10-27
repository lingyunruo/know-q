const fs = require('fs');
const path = require('path');
const h = require('../methods/h');

const databaseRootPath = path.join(__dirname, './database');

let tmpBase = {
    data: [],// 数据春初
    createTime: Date.now(), // 创建时间
};

class Data {
    constructor(options) {
        this.filePath = `${databaseRootPath}/${options.name}.json`;
        this.database = tmpBase;
        
        fs.readFile(this.filePath, {encoding: 'utf8'}, (err, data) => {
            if(!err) {
                this.database = JSON.parse(data);
            }
        });

        if(!h.isFileExist(this.filePath)) {
            fs.writeFile(this.filePath, JSON.stringify(tmpBase, null, '\t'), {
                encoding: 'utf8'
            }, function(err) {
                if(err) {
                    throw new Error(err);
                }
            })
        }
    }

    // 增加一条记录
    addRecord(data) {
        this.database.data.push({
            content: JSON.stringify(data),
            _id: Date.now()
        });
        fs.writeFile(this.filePath, JSON.stringify(this.database, null, '\t'), function(err) {
            if(err) {
                throw new Error(err);
            }
        });
    }

    // 读取记录
    getRecord(key, value) {
        if(!key) {
            return this.database.data.map(function(item) {
                let data = JSON.parse(item.content);
                return Object.assign({
                    _id: item._id
                }, data);
            });
        }
        else {
            return this.database.data.map(function(item) {
                let data = JSON.parse(item.content);
                return Object.assign({
                    _id: item._id
                }, data);
            }).filter(item => String(item[key]) === String(value));
        }
    }

    // 修改一条记录
    updateRecord(_id, data) {
        let changedData = this.database.data.filter(item => String(item._id) === String(_id));

        if(changedData.length <= 0) {
            throw new Error('没有这条数据');
        }
        else {
            changedData[0]['content'] = JSON.stringify(data);

            fs.writeFile(this.filePath, JSON.stringify(this.database, null, '\t'), function(err) {
                if(err) {
                    throw new Error(err);
                }
            });
        }
    }

    // 删除记录
    deleteRecord(_id) {
        let list = [];
        this.database.data.forEach((item) => {

            if(String(_id) !== String(item._id)) {
                list.push(item);
            }
        });
        this.database.data = list;

        fs.writeFile(this.filePath, JSON.stringify(this.database, null, '\t'), function(err) {
            if(err) {
                throw new Error(err);
            }
        });
    }
}

module.exports = Data;