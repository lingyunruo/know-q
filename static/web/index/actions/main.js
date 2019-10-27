import message from 'antd/lib/message';
import Modal from 'antd/lib/modal'
export default class MainAction {
    constructor(c) {
        this.c = c;
        this.store = this.c.props.store;
        this.models = this.store.models;
    }

    didMount = () => {
        this.getPageHeight();

        this.models.ma.getTract();
    }

    // 获取页面高度
    getPageHeight = () => {
        if(window.getComputedStyle) {
            
            let height = window.getComputedStyle(document.getElementById('app')).height.replace('px', '');
            document.body.style.height = height + 'px';

            this.store.setData('ma.pageHeight', height);
        }
    }

    inputTract = (e) => {
        let v = e.target.value;
        this.store.setData('ma.tractInputValue', v);
    }

    publishTract = () => {
        let v = this.store.getData('ma.tractInputValue').value;

        if(!v) {
            message.warn('请先输入内容');
        }
        else {
            this.models.ma.publishTract();
        }
    }

    changePage = (page) => {
        this.store.setData('ma.pageInfo.current', page);
        this.models.ma.getTract();
    }

    deleteTract = (item) => {
        return () => {
            Modal.confirm({
                title: '删除确认',
                content: '确定要删除本条内容吗？',
                okText: '确定',
                cancelText: '取消',
                onOk: () => {
                    this.models.ma.delete(item);
                }
            });
        }
    }

    praise = (item, index) => {
        return () => {
            this.models.ma.praise(item, index);
        }
    }

    starTract = (item) => {
        return () => {
            this.models.ma.starTract(item);
        }
    }

    turnPage = (page) => {
        return () => {
            this.store.setData('ma.page', page);
            if(page === 'main') {
                this.models.ma.getTract();
            }
            else if(page === 'star') {
                this.models.ma.getTract();
            }
            else if(page === 'knowledge') {
                this.models.ma.getTract();
            }
        }
    }

    showComment = (item) => {
        return () => {
            this.store.setData('ma.commentModalVisible', true);
            this.store.setData('ma.currentOptEssay', item);
            this.models.ma.getComment();
        }
    }

    publishComment = () => {
        const comment = this.store.getData('ma.commentValue').value;

        if(!comment) {
            message.warn('请先输入评论内容');
        }
        else {
            this.models.ma.publishComment()
                .then(() => {
                    this.store.setData('ma.commentValue', '');
                    this.models.ma.getComment();
                });
        }
    }

    changeCommentPage = (page) => {
        this.store.setData('ma.commentPageInfo.current', page);
        this.models.ma.getComment();
    }

    inputComment = (e) => {
        let v = e.target.value;
        this.store.setData('ma.commentValue', v);
    }

    deleteComment = (comment) => {
        return () => {
            this.models.ma.deleteComment(comment)
        }
    }
}