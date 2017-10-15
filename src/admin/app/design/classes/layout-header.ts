import { LayoutWidget } from './layout-widget';

export class LayoutHeader extends LayoutWidget {
    show: boolean = false;
    // 左右菜单
    leftMenus: any[] = [];
    rightMenus: any[] = [];
    constructor() {
        super();
        this.type = 'layout-header';
        this.name = '布局-头部';
        this.children = [];
        this.content = '小明跑腿';
        this.setContainerClass();

        this.styleObj = {};
        this.classObj = {};
    }

    setContainerClass() {
        this.containerClass = { 'layout-header': true };
        this.containerStyle = { 'color': '#fff', 'background-color': '#19b394' };
        this.styleObj = { color: '#fff' };
    }
}
