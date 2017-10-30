
import { Widget } from '../widget';
export class PaySelectMoneyDefault extends Widget {
    logs: any[] = [];
    btn: string = '立即支付';
    tip: string = '';
    payDesc: string = '支付金额给商户';
    payTitle: string = '选择金额付款';
    constructor() {
        super();
        this.type = 'pay-select-money';
        this.name = '提现项目';
        this.children = [
            {
                title: '1元',
                active: true,
                money: 1
            },
            {
                title: '5元',
                active: false,
                money: 5
            },
            {
                title: '10元',
                active: false,
                money: 10
            },
            {
                title: '20元',
                active: false,
                money: 20
            }
        ];

        this.styleObj = {'margin-top': '0px'};
        this.containerStyle = {'margin-top': '0px'};
    }
}