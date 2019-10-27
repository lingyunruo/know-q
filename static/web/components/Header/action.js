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
        this.models.header.exit();
    }

    getInitData = () => {
        this.models.header.getInitData();
    }
}