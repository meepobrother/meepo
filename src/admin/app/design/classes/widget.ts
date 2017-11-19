import * as uuid from 'uuid';
// 面板
export class Widget {
    code: string = uuid();
    type: string = 'widget';
    name: string = '基础面板';

    freeViewStyle: any = {};
    // 面板内容
    content: any;
    // 面板动画
    animations: any = {};
    // 包含内容
    children: any[] = [];
    // 面板样式 内部样式
    // styleObj: Map<string, string> = new Map();
    // classObj: Map<string, boolean> = new Map();

    styleObj: any = {};
    classObj: any = {};


    // 外部容器样式
    // containerStyle: Map<string, string> = new Map();
    // containerClass: Map<string, boolean> = new Map();
    containerStyle: any = {};
    containerClass: any = {};

    constructor() { }
    // getWidgetData() { }

    // getStyleObj() { 
    //     return this._mapToObj(this.styleObj);
    // }
    // getClassObj() { 
    //     return this._mapToObj(this.classObj);
    // }
    // get widgetContaiernStyle() { 
    //     return this._mapToObj(this.containerStyle);
    // }
    // get widgetContaiernClass() { 
    //     return this._mapToObj(this.containerClass);
    // }


    // private _mapToObj(map: Map<any,any>){
    //     const results = {};
    //     map.forEach((value,key)=>{
    //         results[key] = value;
    //     });
    //     return results;
    // }

}