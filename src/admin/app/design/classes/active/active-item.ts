
import { Widget } from '../widget';

export class ActiveItemDefault extends Widget{
    show: boolean = true;
    required: boolean = true;
    dataSource: string = '';
    constructor(){
        super();
        this.type = 'active-item';
        this.name = '活动列表';
    }
}