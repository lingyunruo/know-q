const path = require('path');
const fs = require('fs');
const marked = require('marked');

const artIns = require('../data/article/article');

const renderer = new marked.Renderer();

renderer.table = function(th, body) {
    return `
        <table class="markdown-table">
            ${th}
            ${body}
        </table>
    `
}

marked.setOptions({
    renderer: renderer,
    highlight: function(code) {
        return require('highlight.js').highlightAuto(code).value;
    },
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
});

module.exports = function(req, res) {

    let fileId = req.path.replace('/markdown/', '');
    let currentInfo = req.database.article.getRecord('id', fileId)[0];
    if(!currentInfo) {
        res.status(404).send('not found');
    }
    let markContent = artIns.getMarkContent(currentInfo.filename);

    markContent.then((data) => {
        res.render(path.join(__dirname, '../template/content.html'), {
            title: currentInfo.title,
            content: marked(data)
        }, function(err, html) {
            err && console.log(err);
            !err && res.send(html);
        });
    });
}