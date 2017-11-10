import { Component, OnInit, Input } from '@angular/core';
import { TaskStatusDefault } from '../../../../classes';
import { ApiService } from '../../../../../core';
@Component({
    selector: 'task-status-view',
    templateUrl: './task-status-view.html',
    styleUrls: ['./task-status-view.scss']
})
export class TaskStatusView implements OnInit {
    @Input() widget: TaskStatusDefault = new TaskStatusDefault();

    task: any;
    constructor(
        public api: ApiService
    ) { }

    ngOnInit() { }

    getDetail(){
        this.api.mpost('tasks.getTaskDetail',{id: this.widget.task_id}).subscribe((res: any)=>{
            this.task = res.info;
        });
    }
}
