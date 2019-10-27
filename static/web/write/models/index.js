import axios from 'axios';

export default class {
    name = 'wm'
    data = {
        inputValue: '',
        displayValue: '',
        style: `
            .markdown-body blockquote {
                padding: 0 1em;
                color: #6a737d;
                border-left: .25em solid #dfe2e5;
            }
            
            .markdown-body h1, .markdown-body h2 {
                padding-bottom: .3em;
                border-bottom: 1px solid #eaecef;
            }
            
            .markdown-body h1, .markdown-body h2, .markdown-body h3, .markdown-body h4, .markdown-body h5, .markdown-body h6 {
                margin-top: 24px;
                margin-bottom: 16px;
                font-weight: 600;
                line-height: 1.25;
            }
            
            .markdown-body .highlight pre, .markdown-body pre {
                padding: 16px;
                overflow: auto;
                font-size: 85%;
                line-height: 1.45;
                background-color: #f6f8fa;
                border-radius: 3px;
            }
        `
    }

    methods = {
        pushArticle(postData, store) {

            return axios.post('/push_article', postData)
                .then((res) => {
                    return res.data;
                });

        }
    }
}