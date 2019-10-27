
import axios from 'axios';
import message from 'antd/lib/message';
export default class {
    name = 'ma'

    data = {
        pageHeight: 0,
        tractList: [],
        tractInputValue: '', // 输入框输入内容
        pageInfo: {
            current: 1,
            pageSize: 10,
            total: 1
        },
        page: 'main', // main首页  star我的收藏  knowledge我的知识点
        myPraise: [], // 我点赞的文章
        myStar: [], // 我收藏的文章
        commentModalVisible: false, // 评论弹窗显示隐藏
        commentPageInfo: {
            current: 1,
            pageSize: 10,
            total: 1
        },
        currentOptEssay: null, // 当前评论的短文
        commentValue: '', // 评论输入狂
        commentList: [], // 评论列表
    }

    methods = {
        getTract(store) {
            let pageInfo = store.getData('ma.pageInfo').value;
            let page = store.getData('ma.page').value;
            axios.post('/get_short_essay', {
                ...pageInfo,
                page: page
            })
                .then((res) => {
                    let result = res.data;
                    if(result.success) {
                        store.setData('ma.tractList', result.data.list);
                        store.setData('ma.pageInfo.total', result.data.total);
                    }
                    else {
                        message.error(result.msg);
                    }
                });
        },
        publishTract(store) {
            let value = store.getData('ma.tractInputValue').value;

            return axios.post('/publish_short_essay', {
                content: value
            })
                .then((res) => {
                    if(res.data.success) {
                        store.models.ma.getTract();
                        message.success('发布成功');
                        store.setData('ma.tractInputValue', '');
                    }
                    else {
                        message.error(res.data.msg);
                    }
                    return res;
                });
        },
        delete(item, store) {
            let id = item._id;

            axios.post('/delete_essay', {
                essayId: id
            })
                .then((res) => {
                    if(res.data.success) {
                        message.success('删除成功');
                        store.models.ma.getTract();
                    }
                    else {
                        message.error(res.data.msg);
                    }
                });
        },
        praise(item, index, store) {
            axios.post('/praise_essay', {
                essayId: item._id
            })
                .then((res) => {
                    if(res.data.success) {
                        message.success('+1');
                        store.models.ma.getTract();
                    }
                    else {
                        message.error(res.data.msg);
                    }
                });
        },
        starTract(item, store) {1
            axios.post('/star_essay', {
                essayId: item._id
            })
                .then((res) => {
                    if(res.data.success) {
                        message.success(`${res.data.optType === 'star' ? '收藏' : '取消收藏'}成功`);
                        store.models.ma.getTract();
                    }
                    else {
                        message.error(res.data.msg)
                    }
                });
        },
        publishComment(store) {
            let state = store.getData('ma').value;
            let postData = {
                essayId: state.currentOptEssay._id,
                comment: state.commentValue
            };

            return axios.post('/publish_comment', postData)
                .then((res) => {
                    if(res.data.success) {
                        message.success('发表成功')
                    }

                    return res;
                });
        },
        getComment(store) {
            let state = store.getData('ma').value;
            let postData = {
                essayId: state.currentOptEssay._id,
                ...state.commentPageInfo
            };

            return axios.post('/get_comment', postData)
                .then((res) => {
                    if(res.data.success) {
                        store.setData('ma.commentList', res.data.list);
                        store.setData('ma.commentPageInfo.total', res.data.total);
                    }
                });
        },
        deleteComment(comment, store) {
            return axios.post('/delete_comment', {
                comment: comment
            })
                .then((res) => {
                    if(res.data.success) {
                        message.success('删除成功');
                        store.models.ma.getComment();
                    }
                });
        }
    }
}