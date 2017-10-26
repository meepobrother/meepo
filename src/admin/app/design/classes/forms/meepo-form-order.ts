
import { Widget } from '../widget';

export class MeepoFormOrderDefault extends Widget{
    btnTitle: string = '提交订单';
    action: string = '';
    success: string = '';
    constructor(){
        super();
        this.type = 'meepo-form-order';
        this.name = '提交订单';

        this.containerStyle = {
            'margin-top': '0px'
        }
        this.styleObj = {
            'margin-top': '0px'
        }
    }
}