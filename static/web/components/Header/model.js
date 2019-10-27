
import axios from 'axios';

export default class {
    name = 'header'
    data = {
        userInfo: {
            userName: '',
            userId: ''
        }
    }

    methods = {
        getInitData(store) {
            axios.post('/get_init_data')
                .then((res) => {
                    if(res.data.success) {
                        store.setData('header.userInfo', res.data.data.userInfo);
                    }
                });
        },
        exit() {
            axios.post('/logout')
                .then((res) => {
                    if(res.data.success) {
                        window.location.href = '/login_page';
                    }
                });
        }
    }
}