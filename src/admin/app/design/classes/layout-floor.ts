import { LayoutWidget } from './layout-widget';
export class LayoutFloorDefault extends LayoutWidget {
    show: boolean = true;
    constructor() {
        super();
        this.type = 'layout-floor';
        this.name = '布局-段落';
        this.children = [];
        this.setContainerClass();
    }

    setContainerClass() {
        this.containerStyle = {'margin-top': '0px'};
        this.styleObj = {'margin-top': '0px'};
    }
}