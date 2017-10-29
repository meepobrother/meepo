
import { Widget } from '../widget';

export class CityItemDefault extends Widget{
    show: boolean = true;
    required: boolean = true;
    dataSource: string = '';
    constructor(){
        super();
        this.type = 'city-item';
        this.name = '城市列表';
    }
}
