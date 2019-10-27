import React from 'react';
import './index.less';

import Icon from 'antd/lib/icon';

export default (props) => {

    return (
        <div className="micro-item-square">
            <div className="item-name">英国报姐</div>
            <div className="item-publish-time">11分钟前</div>
            <div className="item-content">
                真是让人气氛啊
                真是让人气氛啊
                真是让人气氛啊
                真是让人气氛啊
                真是让人气氛啊
                真是让人气氛啊
                真是让人气氛啊
            </div>
            <div className="item-footer">
                <span>
                    <Icon type="star" /> 收藏
                </span>
                <span>
                    <Icon type="message" /> 评论
                </span>
                <span>
                    <Icon type="like" /> 赞
                </span>
            </div>
        </div>
    )

}