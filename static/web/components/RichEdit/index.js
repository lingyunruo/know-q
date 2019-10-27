import React from 'react';
import './index.less';
import Tag from 'antd/lib/tag';
import 'antd/dist/antd.css';

class RichEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selection: null,
            range: null
        };

        this.onFocusEdit = this.onFocusEdit.bind(this);
        this.beCenter = this.beCenter.bind(this);
        this.collectInfo = this.collectInfo.bind(this);
        this.keyUp = this.keyUp.bind(this);
        this.focusDiv = this.focusDiv.bind(this);
    }

    onFocusEdit() {
    }

    beCenter() {
        let range = this.state.range;
        console.log(range);
    }

    collectInfo(e) {
        let selection = window.getSelection();
        let range = selection.getRangeAt(selection.rangeCount - 1);

        this.setState({
            selection: selection,
            range: range
        });
    }

    keyUp(e) {
        if(e.keyCode === 13) {
        }
    }

    focusDiv() {
    }

    render() {
        return (
            <div 
                className="rich-editor"
            >
                <div className="rich-edit-head-show">
                    <Tag>字号：14px</Tag>
                </div>
                <div className="rich-edit-head">
                    <Tag 
                        color="magenta"
                        onClick={this.beCenter}
                    >
                        居中
                    </Tag>
                    <Tag color="red">字号加1</Tag>
                    <Tag color="volcano">字号减1</Tag>
                    <Tag color="orange">行高加1</Tag>
                    <Tag color="gold">行高减1</Tag>
                    <Tag color="lime">加粗</Tag>
                    <Tag color="green">字体颜色</Tag>
                    <Tag color="cyan">背景颜色</Tag>
                    <Tag color="blue">blue</Tag>
                    <Tag color="geekblue">geekblue</Tag>
                    <Tag color="purple">purple</Tag>
                </div>
                <div
                    className="rich-edit-input" 
                    contentEditable={true}
                    onMouseUp={this.collectInfo}
                    onKeyUp={this.keyUp}
                    onFocus={this.focusDiv}
                >
                </div>
            </div>
        );
    }
}


export default RichEdit;