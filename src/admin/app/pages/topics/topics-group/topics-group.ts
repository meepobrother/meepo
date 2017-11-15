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
            $('#nestable2').nestable({
                group: 1
            }).on('change', (e: any) => {
                let list = e.length ? e : $(e.target);
                this.updateDisplayorder(list.nestable('serialize'));
            });
        });
    }

    updateDisplayorder(data: any) {
        this.api.mpost('topics.updateTopicGroupDisplayorder', data).subscribe(res => {
            console.log(res);
        });
    }

    edit(data: any) {
        let { item, index } = data;
        let dialogRef = this.dialog.open(TopicsGroupAdd, { data: item });
        dialogRef.afterClosed().subscribe(res => {
            if (res.title) {
                this.api.mpost('topics.editTopicGroup', res).subscribe((data: any) => {
                    this.list[index] = data.info;
                });
            }
        });
    }

    delete(data: any) {
        let { item, index } = data;
        this.api.mpost('topics.deleteTopicGroup', item).subscribe(res => {
            this.list.splice(index, 1);
        });
    }

    add() {
        let dialogRef = this.dialog.open(TopicsGroupAdd);
        dialogRef.afterClosed().subscribe(res => {
            if (res.title) {
                this.api.mpost('topics.editTopicGroup', res).subscribe((data: any) => {
                    this.list.push(data.info);
                });
            }
        });
    }
}

