

import { Widget } from '../widget';

export class MeepoFormAddressEndDefault extends Widget{
    show: boolean = true;
    required: boolean = true;

    constructor(){
        super();
        this.type = 'meepo-form-address-end';
        this.name = '收货地选择';

        this.containerStyle = {
            'margin-top': '0px'
        }
        this.styleObj = {
            'margin-top': '0px'
        }
    }
}