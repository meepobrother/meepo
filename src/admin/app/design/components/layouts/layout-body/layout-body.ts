import { LayoutWidget } from '../widget';
export class LayoutBody extends LayoutWidget {
    show: boolean = true;
    constructor() {
        super();
        this.type = 'layout-body';
        this.name = '布局-主体';
        this.children = [];

        this.setContainerClass();
    }

    setContainerClass() {
        this.containerClass = { 'layout-body': true };
        this.containerStyle = {'background-color': '#e6e6e6'};
    }
}