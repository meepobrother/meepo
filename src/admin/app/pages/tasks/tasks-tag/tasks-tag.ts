import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TasksTagAdd } from './tasks-tag-add/tasks-tag-add';
import { ApiService } from '../../../core';
@Component({
    selector: 'tasks-tag',
    templateUrl: './tasks-tag.html',
    styleUrls: ['./tasks-tag.scss']
})
export class TasksTag implements OnInit {
    list: any[] = [];
    constructor(
        public api: ApiService,
        public dialog: MatDialog
    ) { }

    ngOnInit() { 

    }

    add() {
        let dialogRef = this.dialog.open(TasksTagAdd);
        dialogRef.afterClosed().subscribe(res => {
            
        });
    }

    edit(item: any){
        let dialogRef = this.dialog.open(TasksTagAdd, {data: item});
        dialogRef.afterClosed().subscribe(res => {
            
        });
    }
}