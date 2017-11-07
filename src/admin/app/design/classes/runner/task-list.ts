
import { Widget } from '../widget';
export class TaskListDefault extends Widget {
    logs: any[] = [];
    styleType: string;
    listsStyle: any = {};
    btns: any[] = [];
    items: any[] = [];
    
    constructor() {
        super();
        this.type = 'task-list';
        this.name = '任务列表';
        this.styleType = 'default';
        
        this.items = [
            {
                title: '待接单',
                __post: {status: 0},
                __do: 'task.log',
                active: true
            }, {
                title: '配送中',
                __post: {status: 1},
                __do: 'task.log',
                active: false
            }, {
                title: '已送达',
                __post: {status: 2},
                __do: 'task.log',
                active: false
            }
        ];

        this.listsStyle = {
            'margin-top': '0px'
        }
    }
}