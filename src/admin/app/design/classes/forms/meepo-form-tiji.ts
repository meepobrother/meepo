
import { Widget } from '../widget';


export class MeepoFormTijiDefault extends Widget{
    show: boolean = true;
    required: boolean = true;
    placeholder: string = '请输入体积';
    title: string = '体积';

    constructor(){
        super();
        this.type = 'meepo-form-tiji';
        this.name = '体积';
    }
}