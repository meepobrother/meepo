import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core';
import { MatDialog } from '@angular/material';
import { TopicsGroupAdd } from './topics-group-add/topics-group-add';
@Component({
    selector: "topics-group",
    templateUrl: "./topics-group.html"
})
export class TopicsGroup implements OnInit {

    list: any[] = [];

    constructor(
        public api: ApiService,
        public dialog: MatDialog
    ) { }

    getList() {
        this.api.mpost('topics.getListTopicGroup', {}).subscribe((res: any) => {
            this.list = res.info;
        });
    }

    ngOnInit() { 
        this.getList();
    }

    edit(item: any) {
        let dialogRef = this.dialog.open(TopicsGroupAdd, { data: item });
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.api.mpost('topics.editTopicGroup', res).subscribe(res => {
                    this.getList();
                });
            }
        });
    }

    delete(item: any) {
        this.api.mpost('topics.deleteTopicGroup', item).subscribe(res => {
            this.getList();
        });
    }

    add() {
        let dialogRef = this.dialog.open(TopicsGroupAdd);
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.api.mpost('topics.editTopicGroup', res).subscribe(res => {
                    this.getList();
                });
            }
        });
    }
}

