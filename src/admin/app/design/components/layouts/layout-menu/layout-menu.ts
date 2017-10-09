import { LayoutWidget } from '../widget';
export class LayoutMenu extends LayoutWidget {
    direction: string = 'left';
    open: boolean = false;
    constructor() {
        super();
        this.type = 'layout-menu';
        this.name = '布局-菜单';
        this.children = [];

        this.setContainerClass();
    }

    setContainerClass() {
        this.containerClass = { 'layout-menu': true, left: true, right: false };
    }

    setContainerStyle() {
        this.containerStyle = { 'left': '100%'}
    }

    setLeft() {
        this.containerClass['left'] = true;
        this.containerClass['right'] = false;
    }

    setRight() {
        this.containerClass['left'] = false;
        this.containerClass['right'] = true;
    }
}