
import { Widget } from '../widget';
export class PayMessageSuccessDefault extends Widget {
    constructor() {
        super();
        this.type = 'pay-message-success';
        this.name = '付款成功提示';
        this.styleObj = {
            'margin-top': '0px'
        };
        this.containerStyle = {
            'margin-top': '0px'
        };
    }
}
