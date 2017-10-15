import { WeuiWidget } from './weui-widget';
// 按钮
export class MeepoUploader extends WeuiWidget {
    type: string = 'weui-cells';
    name: string = 'cells';
    content: any;
    style: any;
    constructor() {
        super();
    }
}