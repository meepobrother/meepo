
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
                title: '成功'
            }, {
                title: '失败'
            }, {
                title: '退款'
            }
        ];

        this.listsStyle = {
            'margin-top': '0px'
        }
    }
}