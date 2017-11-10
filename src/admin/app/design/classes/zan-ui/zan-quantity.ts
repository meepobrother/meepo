
import { Widget } from '../widget';

export class ZanQuantityDefault extends Widget {
    num: number = 1;
    max: number = 100;
    min: number = 1;
    step: number = 1;
    constructor(){
        super();
        this.type = 'zan-quantity';
        this.name = '计数器';
    }
}

