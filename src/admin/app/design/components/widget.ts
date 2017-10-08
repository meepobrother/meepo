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
    // 面板样式 内部样式
    styleObj: Map<string, string> = new Map();
    classObj: Map<string, boolean> = new Map();

    // 外部容器样式
    containerStyle: Map<string, string> = new Map();
    containerClass: Map<string, boolean> = new Map();

    constructor() { }
    getWidgetData() { }

    getStyleObj() { 
        return this._mapToObj(this.styleObj);
    }
    getClassObj() { 
        return this._mapToObj(this.classObj);
    }
    get widgetContaiernStyle() { 
        return this._mapToObj(this.containerStyle);
    }
    get widgetContaiernClass() { 
        return this._mapToObj(this.containerClass);
    }


    private _mapToObj(map: Map<any,any>){
        const results = {};
        map.forEach((value,key)=>{
            results[key] = value;
        });
        return results;
    }

    static cloneSelf(){
        return new this();
    }

}