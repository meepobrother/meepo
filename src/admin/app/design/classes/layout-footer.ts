import { LayoutWidget } from './layout-widget';

export class LayoutFooter extends LayoutWidget {
    show: boolean = false;
    constructor() {
        super();
        this.type = 'layout-footer';
        this.name = '布局-底部';
        this.children = [];

        this.setContainerClass();
    }

    setContainerClass() {
        this.containerClass = { 'layout-footer': true };
        this.containerStyle = { 'color': '#fff', 'background-color': '#ccc'}
    }
}