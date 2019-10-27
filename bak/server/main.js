const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();
const upload = multer(); // for parsing multipart/form-data
const controllerConfig = require('./config/controller');

const dataMid = require('./data/midware');

const judgeLogin = require('./methods/judgeLogin');

app.use('/static/', express.static(path.join(__dirname, '../static')));
app.use(cookieParser());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(dataMid({
    dataName: ['content', 'user', 'article']
}));

app.set('views', path.join('../static'));
app.engine('html',require('ejs').renderFile);
app.set('view engine', 'html');


judgeLogin(app);


controllerConfig.forEach(function(item) {
    app[item.method](item.url, item.fn);
});


app.listen(8000);