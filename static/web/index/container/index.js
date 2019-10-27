import React from 'react';
import './index.less';
import 'antd/dist/antd.css';
import {render} from 'ader';

import MainAction from '../actions/main';

import Header from '../../components/Header';
import MicroItem from '../../components/MicroItem';
import ArticleItem from '../../components/ArticleItem';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import Pagination from 'antd/lib/pagination';
import Modal from 'antd/lib/modal';
import Comment from 'antd/lib/comment';
import Icon from 'antd/lib/icon';

const {TextArea} = Input;

const Home = render({
    actions: {
        ma: MainAction
    }
})(({props, action, state}) => {

    const {ma, header, store} = props;

    return (
        <div className="all-page">
            <Header 
                {...props}        
            />
            <div 
                className="page-content"
                style={{
                    height: ma.pageHeight - 50
                }}
            >
                <div className="left-side">
                    <div 
                        className={`left-item-title ${ma.page === 'main' ? 'active' : ''}`}
                        onClick={action.ma.turnPage('main')}
                    >
                        首页
                    </div>
                    <div 
                        className={`left-item-title ${ma.page === 'star' ? 'active' : ''}`}
                        onClick={action.ma.turnPage('star')}
                    >
                        我的收藏
                    </div>
                    <div 
                        className={`left-item-title ${ma.page === 'knowledge' ? 'active' : ''}`}
                        onClick={action.ma.turnPage('knowledge')}
                    >
                        我的知识点
                    </div>
                </div>
                <div className="middle-side">
                    {
                        ma.page === 'main' ? 
                        <div className="micro-item-square input">
                            <div className="input-title">一句话的知识点</div>
                            <TextArea 
                                className="publish-text"
                                value={ma.tractInputValue}
                                onChange={action.ma.inputTract}
                            >
                            </TextArea>
                            <div className="publish-button">
                                <Button onClick={action.ma.publishTract}>发布</Button>
                            </div>
                        </div> : null
                    }
                    {ma.tractList.map((item, index) => {
                        return (
                            <MicroItem 
                                header={header}
                                data={item}
                                key={index}
                                praise={action.ma.praise(item, index)}
                                clickDelete={action.ma.deleteTract(item)}
                                star={action.ma.starTract(item)}
                                showComment={action.ma.showComment(item)}
                            />
                        )
                    })}
                    <div className="pagination-wrapper">
                        <Pagination
                            {...ma.pageInfo}
                            onChange={action.ma.changePage}
                        />
                    </div>
                </div>
                <div className="right-side">
                    <ArticleItem />
                    <ArticleItem />
                </div>
            </div>
            <Modal
                visible={ma.commentModalVisible}
                title='评论'
                footer={null}
                width={800}
                className="comment-modal"
                onCancel={() => {
                    props.store.setData('ma.commentModalVisible', false);
                    props.store.setData('ma.currentOptEssay', null);
                    props.store.setData('ma.commentList', []);
                    props.store.models.ma.getTract();
                }}
            >
                <TextArea 
                    className="publish-text"
                    value={ma.commentValue}
                    onChange={action.ma.inputComment}
                ></TextArea>   
                <div className="publish-button">
                    <Button
                        onClick={action.ma.publishComment}
                    >
                        发表评论
                    </Button>
                </div>
                {ma.commentList.map((item, index) => {
                    let essayInfo = store.getData('ma.currentOptEssay').value;

                    return (
                        <div 
                            className="comment-wrapper"
                            key={index}
                        >
                            <Comment
                                actions={[
                                    (header.userInfo._id === essayInfo.authorId) ? 
                                    <Icon 
                                        type="delete" 
                                        className="delete-icon"    
                                        onClick={action.ma.deleteComment(item)}
                                    /> : null
                                ]}
                                author={item.authorName}
                                content={item.content}
                                datetime={item.createTime}
                            />
                        </div>
                    )
                })}
                <div
                    className="comment-pagination"
                >
                    <Pagination
                        {...ma.commentPageInfo}
                        onChange={action.ma.changeCommentPage}
                    />
                </div>
                
            </Modal>
        </div>
    )

});

export default Home;