import { WeuiWidget } from '../widget';
// 按钮
export class Icon extends WeuiWidget {
    type: string = 'icon';
    name: string = '图标';
    content: string = 'icon';
    className: string = 'weui-loading';
    style: any;
    constructor() {
        super();
    }
}
