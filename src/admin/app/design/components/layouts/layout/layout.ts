import { LayoutWidget } from '../widget';
export class Layout extends LayoutWidget {
    constructor(){
        super();
        this.children = [];
        this.type = 'layout';
        this.name = '布局';
    }

    setContainerClass(){
        const containerClass: Map<string,boolean> = new Map();
        containerClass.set('layout',true);
        this.containerClass = containerClass;
    }
}