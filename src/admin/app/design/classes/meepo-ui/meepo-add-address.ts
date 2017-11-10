import { Widget } from '../widget';

export class MeepoAddAddress extends Widget {
    data: any;
    constructor() {
        super();
        this.type = 'meepo-add-address';
        this.name = '添加地址';
        this.children = [];
        this.data = {};
        this.styleObj = { 'background-color': '#fff' };
        this.containerStyle = { 'background-color': '#fff' };
    }
}