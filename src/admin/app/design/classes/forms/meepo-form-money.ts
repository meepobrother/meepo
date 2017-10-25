
import { Widget } from '../widget';


export class MeepoFormMoneyDefault extends Widget{
    show: boolean = true;
    required: boolean = true;
    placeholder: string = '请输入赏金';
    title: string = '赏金';

    constructor(){
        super();
        this.type = 'meepo-form-money';
        this.name = '赏金';

        this.containerStyle = {
            'margin-top': '0px'
        }
        this.styleObj = {
            'margin-top': '0px'
        }
    }
}