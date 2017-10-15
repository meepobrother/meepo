import { WeuiWidget } from './weui-widget';
// 按钮
export class MeepoInput extends WeuiWidget {
    type: string = 'input';
    name: string = '输入框';
    content: string = '内容';
    style: any;
    constructor() {
        super();
    }
}