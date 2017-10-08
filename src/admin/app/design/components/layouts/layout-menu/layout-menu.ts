import { LayoutWidget } from '../widget';
export class LayoutMenu extends LayoutWidget {
    direction: string = 'left';
    constructor() {
        super();
        this.type = 'layout-menu';
        this.name = '布局-菜单';
        this.children = [];

        this.setContainerClass();
    }

    setContainerClass() {
        const containerClass: Map<string, boolean> = new Map();
        containerClass.set('layout-menu', true);

        this.containerClass = containerClass;
    }

    setLeft() {
        this.containerClass.set('left', true);
        this.containerClass.set('right', false);
    }

    setRight() {
        this.containerClass.set('left', false);
        this.containerClass.set('right', true);
    }
}