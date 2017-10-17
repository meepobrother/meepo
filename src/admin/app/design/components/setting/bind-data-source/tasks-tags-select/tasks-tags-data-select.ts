import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApiService } from '../../../../../core';
@Component({
    selector: 'tasks-tags-data-select',
    templateUrl: './tasks-tags-data-select.html',
    styleUrls: ['./tasks-tags-data-select.scss']
})
export class TasksTagsDataSelect implements OnInit {
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