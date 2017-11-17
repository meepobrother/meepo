

import { Widget } from '../widget';

export class MeepoFormAddressStartDefault extends Widget{
    show: boolean = true;
    required: boolean = true;

    title: string = '起始地';
    placeholder: string = '请选择';
    field_name: string = 'start';
    
    constructor(){
        super();
        this.type = 'meepo-form-address-start';
        this.name = '地址选择';

        this.containerStyle = {
            'margin-top': '0px'
        }
        this.styleObj = {
            'margin-top': '0px'
        }
    }
}