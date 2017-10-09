import { LayoutWidget } from '../widget';
export class LayoutHeader extends LayoutWidget {
    constructor() {
        super();
        this.type = 'layout-header';
        this.name = '布局-头部';
        this.children = [];

        this.setContainerClass();
    }

    setContainerClass() {
        this.containerClass = { 'layout-header': true };
    }
}