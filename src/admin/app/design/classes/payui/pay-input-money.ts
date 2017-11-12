
import { Widget } from '../widget';
export class PayInputMoneyDefault extends Widget {
    constructor() {
        super();
        this.type = 'pay-input-money';
        this.name = '输入金额付款';
        this.styleObj = {
            'margin-top': '0px'
        };
        this.containerStyle = {
            'margin-top': '0px'
        };
    }
}
