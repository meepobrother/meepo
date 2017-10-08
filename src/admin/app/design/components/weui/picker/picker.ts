import { WeuiWidget } from '../widget';

export class Picker extends WeuiWidget{
    constructor(){
        super();
        this.type = 'picker';
        this.name = '选择器';
    }
}