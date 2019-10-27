const mongoose = require('mongoose');
const url = 'mongodb://smart:smart123@39.98.40.201:27017';

mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser:true,
    dbName: 'smarts'
}, function(err) {
    if(err) {
        console.log(err);
        console.log('连接数据库失败');
    }
    else {
        console.log('连接数据库成功');
    }
});

const userAccount = require('./schema/user_account');
const shortEssay = require('./schema/short_essay');
const praise = require('./schema/praise');
const star = require('./schema/star');
const comment = require('./schema/comment');
const article = require('./schema/article');

const UserAccountSchema = new mongoose.Schema(userAccount, {
    collection: 'user_account'
});
const ShortEssaySchema = new mongoose.Schema(shortEssay, {
    collection: 'short_essay'
});
const PraiseSchema = new mongoose.Schema(praise, {
    collection: 'praise'
});
const StarSchema = new mongoose.Schema(star, {
    collection: 'star'
});
const CommentSchema = new mongoose.Schema(comment, {
    collection: 'comment'
})
const ArticleSchema = new mongoose.Schema(article, {
    collection: 'article'
});

const userAccountModel = mongoose.model('userAccount', UserAccountSchema);
const shortEssayModel = mongoose.model('shortEssay', ShortEssaySchema);
const praiseModel = mongoose.model('praise', PraiseSchema);
const starModel = mongoose.model('star', StarSchema);
const commentModel = mongoose.model('comment', CommentSchema);
const articleModel = mongoose.model('article', ArticleSchema);

module.exports  = function() {
    
    return function(req, res, next) {

        req.database = {
            userAccount: userAccountModel,
            shortEssay: shortEssayModel,
            praise: praiseModel,
            star: starModel,
            comment: commentModel,
            article: articleModel
        }

        next();
    }
}