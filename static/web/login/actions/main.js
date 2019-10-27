

export default class {
    constructor(c) {
        this.c = c;
        this.store = c.props.store;
        this.models = this.store.models;
    }

    login = () => {
        this.models.log.login();
    }

    changeInput = (field) => {
        return (e) => {
            this.store.setData(`log.${field}`, e.target.value);
        }
    }

    turnToReg = () => {
        this.store.setData('log.page', 'reg');
    }

    turnToLogin = () => {
        this.store.setData('log.page', 'login');
    }

    register = () => {
        this.models.log.register()
            .then((res) => {
                if(res.data.success) {
                    this.turnToLogin();
                }
            });
    }
}