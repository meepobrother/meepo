import { LayoutWidget } from './layout-widget';

export class LayoutMenu extends LayoutWidget {
    direction: string = 'left';
    open: boolean = false;
    show: boolean = true;
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

    setOpen(){
        this.open = true;
    }

    setClose(){
        this.open = false;
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