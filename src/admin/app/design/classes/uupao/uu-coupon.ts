
import { Widget } from '../widget';

export class UuCouponDefault extends Widget{
    show: boolean = true;
    required: boolean = true;
    dataSource: string = '';

    constructor(){
        super();
        this.type = 'uu-coupon';
        this.name = 'UU卡券列表';

        this.containerStyle = {
            'margin-top': '0px'
        }
        this.styleObj = {
            'margin-top': '0px'
        }
        this.dataSource = '';
    }
}