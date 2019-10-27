import React from 'react';
import './index.less';

import {render, relate} from 'ader';

import MainAction from './action';

import Icon from 'antd/lib/icon';
import DropDown from 'antd/lib/dropdown';
import Menu from 'antd/lib/menu';

export default render({
    actions: {
        ma: MainAction
    }
})(({props, state, action}) => {
    const {header} = props;
    return (
        <div className="page-header">
            <div className="page-header-content">
                <div className="page-header-logo">FE</div>
                <div className="page-header-logo-tips">小技术讨论平台</div>
                <div className="page-header-info-area">
                    <span className="page-header-name-info">
                        <Icon type="user" style={{
                            marginRight: '4px',
                            fontSize: '18px'
                        }}/>
                        {header.userInfo.userName}
                    </span>
                    <span className="setting-info" id="menuParent">
                        <DropDown
                            trigger={['click']}
                            overlay={(
                                <Menu
                                    onClick={action.ma.exit}
                                >
                                    <Menu.Item
                                        key="exit"
                                    >
                                        退出
                                    </Menu.Item>
                                </Menu>
                            )}
                            getPopupContainer={() => document.getElementById('menuParent')}
                        >
                            <Icon type="setting" style={{fontSize: '18px'}}/>
                        </DropDown>
                    </span>
                    <span className="write-essay">
                        <Icon 
                            type="edit" 
                            onClick={() => {
                                window.open('/write_page');
                            }}        
                        />
                    </span>
                </div>
            </div>
        </div>
    )

});