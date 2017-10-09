import { LayoutWidget } from '../widget';
export class LayoutFooter extends LayoutWidget {
    constructor() {
        super();
        this.type = 'layout-footer';
        this.name = '布局-底部';
        this.children = [];

        this.setContainerClass();
    }

    setContainerClass() {
        this.containerClass = { 'layout-footer': true };
    }
}