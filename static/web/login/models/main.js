import axios from 'axios';

import message from 'antd/lib/message';

export default class {
    name = 'log'
    data = {
        userName: '',
        password: '',
        page: 'login',
        name: ''
    }
    methods = {
        login(store) {
            let state = store.getData('log').value;
            let userName = state.userName;
            let password = state.password;

            axios.post('/login', {
                userName: userName,
                password: password
            })
                .then((res) => {
                    if(res.data.success) {
                        message.success('登录成功');
                        setTimeout(() => {
                            window.location.href = '/';
                        }, 1000);
                    }
                    else {
                        message.error(res.data.msg);
                    }
                });
        },
        register(store) {
            let state = store.getData('log').value;
            let userName = state.userName;
            let password = state.password;
            let name = state.name;

            return axios.post('/register', {
                userName: userName,
                password: password,
                name: name
            })
                .then((res) => {
                    if(!res.data.success) {
                        message.error(res.data.msg)
                    }
                    return res;
                });
        }
    }
}