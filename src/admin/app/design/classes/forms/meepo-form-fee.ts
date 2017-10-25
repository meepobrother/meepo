
import { Widget } from '../widget';


export class MeepoFormFeeDefault extends Widget{
    show: boolean = true;
    required: boolean = true;
    placeholder: string = '请输入费用';
    title: string = '费用';

    constructor(){
        super();
        this.type = 'meepo-form-fee';
        this.name = '费用';

        this.containerStyle = {
            'margin-top': '0px'
        }
        this.styleObj = {
            'margin-top': '0px'
        }
    }
}