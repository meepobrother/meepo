
import { Widget } from '../widget';

export class MeepoGoodsListDefault extends Widget{
    show: boolean = true;
    required: boolean = true;

    constructor(){
        super();
        this.type = 'meepo-goods-list';
        this.name = '商品列表';
    }
}