
import { Widget } from '../widget';


export class MeepoFormPriceDefault extends Widget{
    show: boolean = true;
    required: boolean = true;
    placeholder: string = '请输入价格';
    title: string = '价格';

    constructor(){
        super();
        this.type = 'meepo-form-price';
        this.name = '价格';

        this.containerStyle = {
            'margin-top': '0px'
        }
        this.styleObj = {
            'margin-top': '0px'
        }
    }
}