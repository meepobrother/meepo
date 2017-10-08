import { LayoutWidget } from '../widget';
export class Layout extends LayoutWidget {
    active: boolean = false;
    constructor(){
        super();
        this.children = [];
        this.type = 'layout';
        this.name = '布局';

        this.setContainerClass();
    }

    setContainerClass(){
        const containerClass: Map<string,boolean> = new Map();
        containerClass.set('layout',true);
        this.containerClass = containerClass;
    }
}