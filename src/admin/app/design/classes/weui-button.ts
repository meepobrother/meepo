import { WeuiWidget } from './weui-widget';
// 按钮
export class Button extends WeuiWidget {
    type: string = 'button';
    name: string = '按钮';
    content: string = '点我啊';
    icon: string;
    classObj: any = new DefaultButton().date;
    styleObj: any;
    constructor(classObj?: any, icon?: string) {
        super();
        this.icon = icon ? icon : this.icon;
    }
}


export class DefaultButton {
    classObj: Map<string, boolean> = new Map();

    get date(){
        const results = {};
        this.classObj.forEach((value,key)=>{
            results[key] = value;
        });
        return results;
    }
    constructor() {
        this.classObj.set('weui-btn', true);
        this.classObj.set('weui-btn_default', true);
        this.classObj.set('weui-btn_loading', false);
        this.classObj.set('weui-btn_disabled', false);
        this.classObj.set('weui-btn_mini', false);
        this.classObj.set('weui-btn_primary', false);
        this.classObj.set('weui-btn_warn', false);
        this.classObj.set('weui-btn_plain-default', false);
        this.classObj.set('weui-btn_plain-primary', false);
        this.classObj.set('weui-btn_plain-warn', false);
        this.classObj.set('weui-btn_plain-disabled', false);
    }
}