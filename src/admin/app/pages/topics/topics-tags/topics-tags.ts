import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core';
import { MatDialog } from '@angular/material';
import { TopicsTagsAdd } from './topics-tags-add/topics-tags-add';
@Component({
    selector: "topics-tags",
    templateUrl: "./topics-tags.html"
})
export class TopicsTags implements OnInit {

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
        let dialogRef = this.dialog.open(TopicsTagsAdd, { data: item });
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
        let dialogRef = this.dialog.open(TopicsTagsAdd);
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.api.mpost('topics.editTopic', res).subscribe(res => {
                    this.getList();
                });
            }
        });
    }
}

