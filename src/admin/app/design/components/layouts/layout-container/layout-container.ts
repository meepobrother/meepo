import { LayoutWidget } from '../widget';
export class LayoutContainer extends LayoutWidget{
    constructor(){
        super();
        this.type = 'layout-container';
        this.name = '布局-容器';
        this.children = [];
    }

    setContainerClass(){
        const containerClass: Map<string,boolean> = new Map();
        containerClass.set('layout-container',true);
        this.containerClass = containerClass;
    }
}