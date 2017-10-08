import { LayoutWidget } from '../widget';
export class LayoutHeader extends LayoutWidget{
    constructor(){
        super();
        this.type = 'layout-header';
        this.name = '布局-头部';
        this.children = [];
    }

    setContainerClass(){
        const containerClass: Map<string,boolean> = new Map();
        containerClass.set('layout-header',true);
        this.containerClass = containerClass;
    }
}