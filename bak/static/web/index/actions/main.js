

export default class MainAction {
    constructor(c) {
        this.c = c;
        this.store = this.c.props.store;
        this.models = this.store.models;
    }

    didMount = () => {
        this.getPageHeight();
    }

    // 获取页面高度
    getPageHeight = () => {
        if(window.getComputedStyle) {
            
            let height = window.getComputedStyle(document.getElementById('app')).height.replace('px', '')

            this.store.setData('ma.pageHeight', height);
        }
    }
}