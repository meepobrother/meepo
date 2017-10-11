import { LayoutWidget } from '../widget';
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
    }

    setContainerClass() {
        this.containerClass = { 'layout-header': true };
    }
}
