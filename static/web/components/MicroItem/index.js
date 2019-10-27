import React from 'react';
import './index.less';

import Icon from 'antd/lib/icon';

export default (props) => {
    const {data, header} = props;



    return (
        <div className="micro-item-square">
            <div className="item-name">{data.authorName}</div>
            <div className="item-publish-time">{data.createTime}</div>
            <div className="item-content">
                {data.content}
            </div>
            <div className="item-footer">
                <span>
                    <span
                        onClick={props.star}
                        className={data.isMyStar ? 'my-praise' : ''}
                    >
                        <Icon type="star" /> 收藏({data.starUsers.length})
                    </span>
                </span>
                <span
                    onClick={props.showComment}
                >
                    <span>
                        <Icon type="message" /> 评论({data.commentCount || 0})
                    </span>
                </span>
                <span>
                    <span
                        onClick={props.praise}
                        className={data.isMyPraise ? 'my-praise' : ''}
                    >
                        <Icon type="like" /> 赞({data.praiseUsers.length})
                    </span>
                </span>
            </div>
            {
                data.authorId === header.userInfo._id ? 
                    <Icon 
                        type="delete" 
                        className="delete-tract" 
                        onClick={props.clickDelete}
                    /> :
                    null
            }
            
        </div>
    )

}