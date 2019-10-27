
import axios from 'axios';

export default class {
    name = 'ma'

    data = {
        userInfo: {
            
        },
        pageHeight: 0
    }

    methods = {
        getInitData(store) {
            axios.post('/getInitData')
                .then((res) => {
                    if(res.data.success) {
                        store.setData('ma.userInfo', res.data.data.userInfo);
                    }
                });
        },
        exit() {
            axios.post('/logout')
                .then((res) => {
                    if(res.data.success) {
                        window.location.reload();
                    }
                });
        }
    }
}