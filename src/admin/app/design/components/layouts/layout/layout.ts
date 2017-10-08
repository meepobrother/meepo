import { LayoutWidget } from '../widget';
export class Layout extends LayoutWidget {
    constructor(){
        super();
        this.children = [];
        this.type = 'layout';
        this.name = '布局';
    }
}