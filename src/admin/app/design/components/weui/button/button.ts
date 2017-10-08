import { WeuiWidget } from '../widget';
// 按钮
export class Button extends WeuiWidget {
    type: string = 'button';
    name: string = '按钮';
    content: string = '点我啊';
    className: string = 'weui-btn';
    style: any;
    icon: string;
    constructor(className?: string, icon?: string) {
        super();
        this.className = className ? className : this.className;
        this.icon = icon ? icon : this.icon;
    }
}

export class ButtonContent {
    title: string = '点我啊';
}