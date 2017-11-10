
import { Widget } from '../widget';
export class TaskStatusDefault extends Widget {
    task_id: number = 1;    
    btnTitle: string = '更新位置';
    constructor() {
        super();
        this.type = 'task-status';
        this.name = '任务状态';
    }
}