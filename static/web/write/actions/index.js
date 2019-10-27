import marked from 'marked';
import React from 'react';
import './markdown.less';
import message from 'antd/lib/message';

let renderer = new marked.Renderer();

marked.setOptions({
    renderer: renderer
});

export default class {
    constructor(c) {
        this.c = c;
        this.store = c.props.store;
        this.models = this.store.models;
    }

    inputMarkdown = (e) => {
        this.store.setData('wm.inputValue', e.target.value);
        this.store.setData('wm.displayValue', marked(e.target.value));
    }

    onKeyDown = (e) => {
        if(e.keyCode === 9) {
            e.target.value = e.target.value + '    ';
            e.returnValue = false;
            e.preventDefault();
        }
    }

    publishArticle = () => {
        let state = this.store.getData('wm').value;
        let postData = {
            display: state.displayValue,
            style: state.style
        };

        this.models.wm.pushArticle(postData)
            .then((res) => {
                if(res.success) {
                    message.success('发表成功');
                }
            });
    }
}