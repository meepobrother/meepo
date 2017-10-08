import { LayoutWidget } from '../widget';
export class LayoutBody extends LayoutWidget{
    constructor(){
        super();
        this.type = 'layout-body';
        this.name = '布局-主体';
        this.children = [];
    }
}