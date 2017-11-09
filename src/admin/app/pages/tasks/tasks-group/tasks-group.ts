import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core';
import { MatDialog } from '@angular/material';
import { TasksGroupAdd } from './tasks-group-add/tasks-group-add';
@Component({
    selector: "tasks-group",
    templateUrl: "./tasks-group.html"
})
export class TasksGroup implements OnInit {

    list: any[] = [];

    constructor(
        public api: ApiService,
        public dialog: MatDialog
    ) { }

    getList() {
        this.api.mpost('tasks.update', {}).subscribe((res: any) => { });
        this.api.mpost('tasks.getListTaskGroup', {}).subscribe((res: any) => {
            this.list = res.info;
        });
    }

    ngOnInit() {
        this.getList();
    }

    edit(item: any) {
        let dialogRef = this.dialog.open(TasksGroupAdd, { data: item });
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.api.mpost('tasks.editTaskGroup', res).subscribe(res => {
                    this.getList();
                });
            }
        });
    }

    delete(item: any) {
        this.api.mpost('tasks.deleteTaskGroup', item).subscribe(res => {
            this.getList();
        });
    }

    add() {
        let dialogRef = this.dialog.open(TasksGroupAdd);
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.api.mpost('tasks.editTaskGroup', res).subscribe(res => {
                    this.getList();
                });
            }
        });
    }
}

