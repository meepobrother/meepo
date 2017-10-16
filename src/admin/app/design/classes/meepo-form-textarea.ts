import { Widget } from './widget';

export class MeepoFormTextarea extends Widget {
    data: any;
    constructor() {
        super();
        this.type = 'meepo-form-textarea';
        this.name = '文本输入';
        this.children = [];
        this.data = {
            placeholder: '请输入文本'
        };
        this.styleObj = { 'background-color': '#fff' };
        this.containerStyle = { 'background-color': '#fff' };
    }
}