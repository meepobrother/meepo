import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApiService } from '../../../../../core';
@Component({
    selector: 'tasks-group-data-select',
    templateUrl: './tasks-group-data-select.html',
    styleUrls: ['./tasks-group-data-select.scss']
})
export class TasksGroupDataSelect implements OnInit {
    list: any[] = [];
    constructor(
        public api: ApiService,
        public dialog: MatDialog
    ) { }

    ngOnInit() { 
        this.getList();
    }

    getList(){
        this.api.mpost('tasks.getListTasksTags',{}).subscribe((res: any)=>{
            this.list = res.info;
        });
    }
}