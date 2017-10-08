import { Widget } from '../widget';
// 按钮
export class Button extends Widget {
    type: string = 'button';
    name: string = '按钮';
    content: string = '点我啊';
    style: any;
    constructor() {
        super();
    }
}