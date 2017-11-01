
import { Widget } from '../widget';

export class BargainItemDefault extends Widget{
    show: boolean = true;
    required: boolean = true;
    dataSource: string = '';
    constructor(){
        super();
        this.type = 'bargain-item';
        this.name = '砍价列表';
    }
}