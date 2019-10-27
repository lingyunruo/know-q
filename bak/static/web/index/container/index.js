import React from 'react';
import './index.less';
import 'antd/dist/antd.css';
import {render} from 'ader';

import MainAction from '../actions/main';

import Header from '../../components/Header';
import MicroItem from '../../components/MicroItem';
import ArticleItem from '../../components/ArticleItem';

const Home = render({
    actions: {
        ma: MainAction
    }
})(({props, action, state}) => {

    const {ma} = props;

    return (
        <div className="all-page">
            <Header 
                {...props}        
            />
            <div 
                className="page-content"
                style={{
                    height: ma.pageHeight && (ma.pageHeight - 50) + 'px'
                }}
            >
                <div className="left-side">
                    <div className="left-item-title">首页</div>
                </div>
                <div className="middle-side">
                    <MicroItem />
                    <MicroItem />
                </div>
                <div className="right-side">
                    <ArticleItem />
                    <ArticleItem />
                </div>
            </div>
        </div>
    )

});

export default Home;