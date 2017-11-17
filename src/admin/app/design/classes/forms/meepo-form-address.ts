

import { Widget } from '../widget';

export class MeepoFormAddressDefault extends Widget{
    show: boolean = true;
    required: boolean = true;

    title: string = '地址';
    placeholder: string = '请选择';
    field_name: string = 'address';
    
    constructor(){
        super();
        this.type = 'meepo-form-address';
        this.name = '地址选择';

        this.containerStyle = {
            'margin-top': '0px'
        }
        this.styleObj = {
            'margin-top': '0px'
        }
    }
}