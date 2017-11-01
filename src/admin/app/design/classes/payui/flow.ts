
import { Widget } from '../widget';
export class PayuiFlowDefault extends Widget {
    logs: any[] = [];
    styleType: string;
    listsStyle: any = {};
    btn: any = {};
    constructor() {
        super();
        this.type = 'payui-flow';
        this.name = 'PayuiFlow';
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
        this.btn = {
            style: {
                'margin-top': '0px'
            },
            title: '下一步',
            icon: 'fa fa-user'
        }
    }
}