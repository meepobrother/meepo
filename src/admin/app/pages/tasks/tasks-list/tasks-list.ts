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

    _post: any = {
        page: 1,
        psize: 50
    };

    constructor(
        public api: ApiService,
        public dialog: MatDialog
    ) { 
        this.status = [
            {
                title: '所有',
                status: 'all'
            },
            {
                title: '待接单',
                status: 1
            },
            {
                title: '配送中',
                status: 2
            },
            {
                title: '已送达',
                status: 3
            },
            {
                title: '已确认',
                status: 4
            },
            {
                title: '已结款',
                status: 5
            }
        ];
    }

    selectStatus(item: any){
        if(item){
            this.status.map((res: any)=>{
                res.active = false;
            });
            item.active = !item.active;
            this._post['status'] = item.status;
        }
        this.getList();
    }

    getGroups(){
        this.api.mpost('tasks.getListTaskGroup',{page: 1, psize: 50}).subscribe((res: any)=>{
            this.groups = res.info;
        });
    }

    getList() {
        this.api.mpost('tasks.getListTask', this._post).subscribe((res: any) => {
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

