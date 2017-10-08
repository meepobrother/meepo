import { LayoutWidget } from '../widget';
export class LayoutMenu extends LayoutWidget{
    direction: string = 'left';
    constructor(){
        super();
        this.type = 'layout-menu';
        this.name = '布局-菜单';
        this.children = [];
    }
}