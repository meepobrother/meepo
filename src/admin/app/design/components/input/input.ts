import { Widget } from '../widget';
// 按钮
export class MeepoInput extends Widget {
    type: string = 'input';
    name: string = '输入框';
    content: string = '内容';
    style: any;
    constructor() {
        super();
    }
}