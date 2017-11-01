
import { Widget } from '../widget';
export class PayuiFlowDefault extends Widget {
    logs: any[] = [];
    styleType: string;
    listsStyle: any = {};
    btn: any = {};
    flows: any[] = [
        {
            title: '录入资料',
            status: 1
        },
        {
            title: '车辆检查',
            status: 0
        },
        {
            title: '维修工单',
            status: 0
        },
        {
            title: '指派施工',
            status: 0
        },
        {
            title: '完成结款',
            status: 0
        }
    ];

    activeFlow: any;
    ActiveFlowIndex: number = 0;
    constructor() {
        super();
        this.type = 'payui-flow';
        this.name = 'PayuiFlow';
        this.styleType = 'default';
        
        this.activeFlow = this.flows[0];
        this.ActiveFlowIndex = 0;

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