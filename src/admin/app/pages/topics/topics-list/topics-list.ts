import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core';
import { MatDialog } from '@angular/material';
import { TopicsListAdd } from './topics-list-add/topics-list-add';
@Component({
    selector: "topics-list",
    templateUrl: "./topics-list.html"
})
export class TasksList implements OnInit {

    list: any[] = [];

    constructor(
        public api: ApiService,
        public dialog: MatDialog
    ) { }

    getList() {
        this.api.mpost('topics.getListTopic', {}).subscribe((res: any) => {
            this.list = res.info;
        });
    }

    ngOnInit() { 
        this.getList();
    }

    edit(item: any) {
        let dialogRef = this.dialog.open(TopicsListAdd, { data: item });
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.api.mpost('topics.editTopic', res).subscribe(res => {
                    this.getList();
                });
            }
        });
    }

    delete(item: any) {
        this.api.mpost('topics.deleteTopic', item).subscribe(res => {
            this.getList();
        });
    }

    add() {
        let dialogRef = this.dialog.open(TopicsListAdd);
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.api.mpost('topics.editTopic', res).subscribe(res => {
                    this.getList();
                });
            }
        });
    }
}

