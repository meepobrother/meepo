// 面板
export class Widget {
    type: string = 'widget';
    name: string = '基础面板';
    // 面板样式
    style: any;
    // 面板内容
    content: any;
    // 面板动画
    animations: any;
    // 包含内容
    children: any;

    constructor() { }

    getWidgetData() { }
}