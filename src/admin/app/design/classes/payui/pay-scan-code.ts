
import { Widget } from '../widget';
export class PayScanCodeDefault extends Widget {
    constructor() {
        super();
        this.type = 'pay-scan-code';
        this.name = '扫码支付';
        this.styleObj = {
            'margin-top': '0px'
        };
        this.containerStyle = {
            'margin-top': '0px'
        };
    }
}
