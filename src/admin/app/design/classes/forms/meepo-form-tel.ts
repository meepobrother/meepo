
import { Widget } from '../widget';


export class MeepoFormTelDefault extends Widget{
    show: boolean = true;
    required: boolean = true;
    placeholder: string = '请输入联系电话';
    title: string = '联系电话';

    constructor(){
        super();
        this.type = 'meepo-form-tel';
        this.name = '联系电话';

        this.containerStyle = {
            'margin-top': '0px'
        }
        this.styleObj = {
            'margin-top': '0px'
        }
    }
}

