import { LayoutWidget } from '../widget';
export class LayoutFooter extends LayoutWidget{
    constructor(){
        super();
        this.type = 'layout-footer';
        this.name = '布局-底部';
        this.children = [];
    }

    setContainerClass(){
        const containerClass: Map<string,boolean> = new Map();
        containerClass.set('layout-footer',true);
        this.containerClass = containerClass;
    }
}