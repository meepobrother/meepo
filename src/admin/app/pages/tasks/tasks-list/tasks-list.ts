import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core';
import { MatDialog } from '@angular/material';
import { TasksListAdd } from './tasks-list-add/tasks-list-add';
@Component({
    selector: "tasks-list",
    templateUrl: "./tasks-list.html",
    styleUrls: ["./tasks-list.scss"]
})
export class TasksList implements OnInit {

    list: any[] = [];

    groups: any[] = [];
    status: any[] = [];

    constructor(
        public api: ApiService,
        public dialog: MatDialog
    ) { 
        this.status = [
            {
                title: '待接单'
            },
            {
                title: '配送中'
            },
            {
                title: '已送达'
            },
            {
                title: '已确认'
            },
            {
                title: '已结款'
            }
        ];
    }

    selectStatus(item: any){
        item.active = !item.active;
    }

    getGroups(){
        this.api.mpost('tasks.getListTaskGroup',{page: 1, psize: 50}).subscribe((res: any)=>{
            this.groups = res.info;
        });
    }

    getList() {
        this.api.mpost('tasks.getListTask', {}).subscribe((res: any) => {
            this.list = res.info;
        });
    }

    ngOnInit() { 
        this.getList();
        this.getGroups();
    }

    edit(item: any) {
        let dialogRef = this.dialog.open(TasksListAdd, { data: item });
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.api.mpost('tasks.editTask', res).subscribe(res => {
                    this.getList();
                });
            }
        });
    }

    delete(item: any) {
        this.api.mpost('tasks.deleteTask', item).subscribe(res => {
            this.getList();
        });
    }

    add() {
        let dialogRef = this.dialog.open(TasksListAdd);
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.api.mpost('tasks.editTask', res).subscribe(res => {
                    this.getList();
                });
            }
        });
    }
}

