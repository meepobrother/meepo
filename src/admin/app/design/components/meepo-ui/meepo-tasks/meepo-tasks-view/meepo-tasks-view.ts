import { Component, OnInit, Input } from '@angular/core';
import { MeepoTasks } from '../../../../classes';
import { ApiService } from '../../../../../core';
@Component({
    selector: 'meepo-tasks-view',
    templateUrl: './meepo-tasks-view.html',
    styleUrls: ['./meepo-tasks-view.scss']
})
export class MeepoTasksView implements OnInit {
    @Input() widget: MeepoTasks = new MeepoTasks();
    tasks: any[] = [];
    constructor(
        public api: ApiService
    ) { }

    ngOnInit() { 
        this.getList();
    }

    getList(){
        this.api.mpost('task.getAll',{action: 'index'}).subscribe((res: any)=>{
            console.log(res);
            this.tasks = res.info;
        });
    }
}