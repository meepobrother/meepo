
import { Widget } from '../widget';

export class MeepoGoodsListDefault extends Widget{
    show: boolean = true;
    required: boolean = true;
    dataSource: string = '';
    constructor(){
        super();
        this.type = 'meepo-goods-list';
        this.name = '商品列表';
    }
}