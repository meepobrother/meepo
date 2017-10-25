
import { Widget } from '../widget';


export class MeepoFormWeightDefault extends Widget{
    show: boolean = true;
    required: boolean = true;
    placeholder: string = '请输入重量';
    title: string = '重量';

    constructor(){
        super();
        this.type = 'meepo-form-weight';
        this.name = '重量';
    }
}