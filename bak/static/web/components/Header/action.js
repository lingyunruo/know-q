export default class {
    constructor(c) {
        this.c = c;
        this.store = this.c.props.store;
        this.models = this.store.models;
    }

    didMount = () => {
        this.getInitData();
    }

    exit = () => {
        this.models.ma.exit();
    }

    getInitData = () => {
        this.models.ma.getInitData();
    }
}