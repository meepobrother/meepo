
import { Widget } from '../widget';
export class PayRecordDefault extends Widget {
    logs: any[] = [];
    styleType: string;
    listsStyle: any = {};
    constructor() {
        super();
        this.type = 'pay-record';
        this.name = '支付记录';
        this.styleType = 'default';
        this.children = [
            {
                title: '处理中',
                __post: {status: 0},
                __do: 'tixian.log',
                active: true
            }, {
                title: '已完成',
                __post: {status: 0},
                __do: 'tixian.log',
                active: false
            }
        ];

        this.listsStyle = {
            'margin-top': '0px'
        }
    }
}