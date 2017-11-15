import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core';
import { MatDialog } from '@angular/material';
import { TopicsGroupAdd } from './topics-group-add/topics-group-add';
declare const $: any;
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


        this.loadScript();

    }


    loadScript() {
        this.api.loadJScript('https://meepo.com.cn/meepo/libs/plugins/nestable/jquery.nestable.js', '$').subscribe(res => {
            console.log(res);
            $(document).ready(function () {
                $('#nestable2').nestable({
                    group: 1
                }).on('change', (e: any) => {
                    console.log(e);
                });
            });
        })
    }

    edit(item: any, index: number) {
        let dialogRef = this.dialog.open(TopicsGroupAdd, { data: item });
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.api.mpost('topics.editTopicGroup', res).subscribe((res: any) => {
                    this.list[index] = res.info;
                });
            }
        });
    }

    delete(item: any,index: any) {
        this.api.mpost('topics.deleteTopicGroup', item).subscribe(res => {
            this.list.splice(index,1);
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

