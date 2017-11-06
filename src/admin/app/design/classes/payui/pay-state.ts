
import { Widget } from '../widget';
export class PayStateDefault extends Widget {
    logs: any[] = [];
    styleType: string;
    listsStyle: any = {};
    btns: any[] = [];
    items: any[] = [];
    constructor() {
        super();
        this.type = 'pay-state';
        this.name = '支付统计';
        this.styleType = 'default';
        
        this.items = [
            {
                title: '日',
                __post: {type: 'day'},
                __do: 'money.state',
                active: true
            }, {
                title: '周',
                __post: {type: 'week'},
                __do: 'money.state',
                active: false
            }, {
                title: '月',
                __post: {type: 'month'},
                __do: 'money.state',
                active: false
            }, {
                title: '季',
                __post: {type: 'jidu'},
                __do: 'money.state',
                active: false
            }
        ];

        this.listsStyle = {
            'margin-top': '0px'
        }
    }
}