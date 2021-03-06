module.exports = [{
    url: '/',
    fn: require('../controller/web/main'),
    method: 'get'
}, {
    url: '/login_page',
    fn: require('../controller/web/loginPage'),
    method: 'get'
}, {
    url: '/login',
    fn: require('../controller/web/login'),
    method: 'post'
}, {
    url: '/logout',
    fn: require('../controller/web/logout'),
    method: 'post'
}, {
    url: '/register',
    fn: require('../controller/web/register'),
    method: 'post'
}, {
    url: '/publish_short_essay',
    fn: require('../controller/web/publishShortEssay'),
    method: 'post'
}, {
    url: '/get_short_essay',
    fn: require('../controller/web/getShortEssay'),
    method: 'post'
}, {
    url: '/get_init_data',
    fn: require('../controller/web/getInitData'),
    method: 'post'
}, {
    url: '/manager/delete_item',
    fn: require('../controller/manager/deleteTract'),
    method: 'get'
}, {
    url: '/manager/short_list',
    fn: require('../controller/manager/manageTracts'),
    method: 'get'
}, {
    url: '/praise_essay',
    fn: require('../controller/web/praiseEssay'),
    method: 'post'
}, {
    url: '/delete_essay',
    fn: require('../controller/web/deleteEssay'),
    method: 'post'
}, {
    url: '/star_essay',
    fn: require('../controller/web/star'),
    method: 'post'
}, {
    url: '/publish_comment',
    fn: require('../controller/web/publishComment'),
    method: 'post'
}, {
    url: '/get_comment',
    fn: require('../controller/web/getCommentList'),
    method: 'post'
}, {
    url: '/delete_comment',
    fn: require('../controller/web/deleteComment'),
    method: 'post'
}, {
    url: '/write_page',
    fn: require('../controller/web/toWritePage'),
    method: 'get'
}, {
    url: '/push_article',
    fn: require('../controller/web/pushArticle'),
    method: 'post'
}]