import { LayoutWidget } from './layout-widget';
export class Layout extends LayoutWidget {
    active: boolean = false;
    constructor() {
        super();
        this.children = [];
        this.type = 'layout';
        this.name = '布局';

        this.setContainerClass();
    }

    setContainerClass() {
        this.containerClass = { 'layout': true };
    }
}