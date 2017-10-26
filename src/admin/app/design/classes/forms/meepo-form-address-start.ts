

import { Widget } from '../widget';

export class MeepoFormAddressStartDefault extends Widget{
    show: boolean = true;
    required: boolean = true;

    constructor(){
        super();
        this.type = 'meepo-form-address-start';
        this.name = '发货地选择';

        this.containerStyle = {
            'margin-top': '0px'
        }
        this.styleObj = {
            'margin-top': '0px'
        }
    }
}