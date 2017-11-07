
import { Widget } from '../widget';
export class RunnerListDefault extends Widget {
    logs: any[] = [];
    styleType: string;
    listsStyle: any = {};
    btns: any[] = [];
    items: any[] = [];
    
    constructor() {
        super();
        this.type = 'runner-list';
        this.name = '跑腿列表';
        this.styleType = 'default';
        
        this.items = [
            {
                title: '审核',
                __post: {status: 0},
                __do: 'runner.log',
                active: true
            }, {
                title: '正常',
                __post: {status: 1},
                __do: 'runner.log',
                active: false
            }, {
                title: '禁止',
                __post: {status: 2},
                __do: 'runner.log',
                active: false
            }, {
                title: '拉黑',
                __post: {status: -1},
                __do: 'runner.log',
                active: false
            }
        ];

        this.listsStyle = {
            'margin-top': '0px'
        }
    }
}