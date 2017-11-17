

import { Widget } from '../widget';

export class MeepoFormAddressEndDefault extends Widget{
    show: boolean = true;
    required: boolean = true;

    title: string = '目的地';
    placeholder: string = '请选择';
    field_name: string = 'end';
    
    constructor(){
        super();
        this.type = 'meepo-form-address-end';
        this.name = '地址选择';

        this.containerStyle = {
            'margin-top': '0px'
        }
        this.styleObj = {
            'margin-top': '0px'
        }
    }
}