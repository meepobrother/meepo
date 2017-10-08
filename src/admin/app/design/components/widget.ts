// 面板
export class Widget {
    type: string = 'widget';
    name: string = '基础面板';
    // 面板内容
    content: any;
    // 面板动画
    animations: any = {};
    // 包含内容
    children: Widget[] = [];
    // 面板样式
    styleObj: Map<string,string> = new Map();
    classObj: Map<string,boolean> = new Map();

    constructor() { }

    getWidgetData() { }
}