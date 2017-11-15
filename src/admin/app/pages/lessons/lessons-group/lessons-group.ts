import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core';
import { MatDialog } from '@angular/material';
import { LessonsGroupAdd } from './lessons-group-add/lessons-group-add';
@Component({
    selector: 'lessons-group',
    templateUrl: './lessons-group.html',
    styleUrls: ['./lessons-group.scss']
})
export class LessonsGroup implements OnInit {
    list: any[] = [];
    constructor(
        public dialog: MatDialog,
        public api: ApiService
    ) { }

    ngOnInit() {
        this.getList();
    }

    getList() {
        this.api.mpost('lessons.update', {}).subscribe(res => { });
        this.api.mpost('lessons.getListLessonsGroup', {}).subscribe((res: any) => {
            this.list = res.info;
        });
    }

    onUpdateDisplayorder(data: any){
        this.api.mpost('lessons.updateLessonsGroupDisplayorder', data).subscribe(res => {
            console.log(res);
        });
    }

    edit(data: any) {
        let { item, index } = data;
        let dialogRef = this.dialog.open(LessonsGroupAdd, { data: item });
        dialogRef.afterClosed().subscribe(res => {
            if (res.title) {
                this.api.mpost('lessons.editLessonsGroup', res).subscribe((data: any) => {
                    this.list[index] = data.info;
                });
            }
        });
    }

    delete(data: any) {
        let { item, index } = data;
        this.api.mpost('lessons.deleteLessonsGroup', item).subscribe(res => {
            this.list.splice(index, 1);
        });
    }

    add() {
        let dialogRef = this.dialog.open(LessonsGroupAdd);
        dialogRef.afterClosed().subscribe(res => {
            if (res.title) {
                this.api.mpost('lessons.editLessonsGroup', res).subscribe((data: any) => {
                    this.list.push(data.info);
                });
            }
        });
    }
}
