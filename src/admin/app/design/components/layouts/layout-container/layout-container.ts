import { LayoutWidget } from '../widget';
export class LayoutContainer extends LayoutWidget{
    constructor(){
        super();
        this.type = 'layout-container';
        this.name = '布局-容器';
        this.children = [];
    }
}