import React from 'react';
import './index.less';
import MainAction from '../actions';
import {render} from 'ader';
import Header from '../../components/Header';
import Input from 'antd/lib/input';
import 'antd/dist/antd.css';
import Button from 'antd/lib/button';

const {TextArea} = Input;

export default render({
    actions: {
        ma: MainAction
    }
})(({props, state, action}) => {
    const {wm} = props;

    return (
        <div className="write-page">
            <Header 
                {...props}
            />
            <div className="write-page-content">
                <div className="write-page-left">
                    <div className="write-page-title">
                        输入markdown格式文档
                        <Button
                            type="primary"
                            style={{
                                float: 'right',
                                marginTop: '10px'
                            }}
                            onClick={action.ma.publishArticle}
                        >
                            保存
                        </Button>
                    </div>
                    <div
                        className="write-page-input"
                        placeholder="请输入markdown格式内容"
                    >
                        <TextArea
                            className="write-page-textarea"
                            value={wm.inputValue}
                            onChange={action.ma.inputMarkdown}
                            onKeyDown={action.ma.onKeyDown}
                        />
                    </div>
                </div>
                <div 
                    className="write-page-right markdown-body"
                    dangerouslySetInnerHTML={{
                        __html: wm.displayValue
                    }}
                >
                </div>
            </div>
        </div>
    );

});
