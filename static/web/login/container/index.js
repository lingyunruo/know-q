
import React from 'react';
import './index.less';
import 'antd/dist/antd.css';

import {render} from 'ader';

import MainAction from '../actions/main';

import Input from 'antd/lib/input';
import Button from 'antd/lib/button';

export default render({
    actions: {
        ma: MainAction
    }
})(({props, state, action}) => {

    const {log} = props;

    return (
        <div className="login-page">
            {
                log.page === 'login' ?
                <div className="login-content-box">
                    <div className="login-title">小知识点讨论平台</div>
                    <div className="login-input-wrapper">
                        <Input 
                            className="login-input"
                            placeholder="输入用户名"    
                            value={log.userName}
                            size="large"
                            onChange={action.ma.changeInput('userName')}
                        />
                    </div>
                    <div className="login-input-wrapper">
                        <Input 
                            className="login-input"
                            placeholder="输入密码"
                            type="password"  
                            value={log.password}   
                            size="large" 
                            onChange={action.ma.changeInput('password')}
                        />
                    </div>
                    <div className="login-input-wrapper">
                        <Button
                            type="primary"
                            className="login-button"
                            onClick={action.ma.login}
                        >
                            登录
                        </Button>
                    </div>
                    <div className="turn-to-link">
                        <span 
                            className="turn-to-register"
                            onClick={action.ma.turnToReg}
                        >
                            注册 >>
                        </span>
                    </div>
                </div> :
                <div className="login-content-box">
                    <div className="login-title">注册</div>
                    <div className="login-input-wrapper">
                        <Input 
                            className="login-input"
                            placeholder="输入用户名"    
                            value={log.userName}
                            onChange={action.ma.changeInput('userName')}
                        />
                    </div>
                    <div className="login-input-wrapper">
                        <Input 
                            className="login-input"
                            placeholder="输入真实姓名"
                            value={log.name}   
                            onChange={action.ma.changeInput('name')}
                        />
                    </div>
                    <div className="login-input-wrapper">
                        <Input 
                            className="login-input"
                            placeholder="输入密码"
                            type="password"  
                            value={log.password}   
                            onChange={action.ma.changeInput('password')}
                        />
                    </div>
                    <div className="login-input-wrapper">
                        <Button
                            type="primary"
                            className="login-button"
                            onClick={action.ma.register}
                        >
                            注册
                        </Button>
                    </div>
                    <div className="turn-to-link">
                        <span 
                            className="turn-to-register"
                            onClick={action.ma.turnToLogin}
                        >
                            登录 >>
                        </span>
                    </div>
                </div>
            }
        </div>
    )

});