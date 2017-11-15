import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core';
import { MatDialog } from '@angular/material';
import { SkillsGroupAdd } from './skills-group-add/skills-group-add';

@Component({
    selector: 'skills-group',
    templateUrl: './skills-group.html',
    styleUrls: ['./skills-group.scss']
})
export class SkillsGroup implements OnInit {
    list: any[] = [];
    constructor(
        public dialog: MatDialog,
        public api: ApiService
    ) { }

    ngOnInit() {
        this.getList();
    }

    getList() {
        this.api.mpost('skills.update', {}).subscribe(res => { });
        this.api.mpost('skills.getListActivesGroup', {}).subscribe((res: any) => {
            this.list = res.info;
        });
    }

    onUpdateDisplayorder(data: any) {
        this.api.mpost('skills.updateActivesGroupDisplayorder', data).subscribe(res => {
            console.log(res);
        });
    }

    edit(data: any) {
        let { item, index } = data;
        let dialogRef = this.dialog.open(SkillsGroupAdd, { data: item });
        dialogRef.afterClosed().subscribe(res => {
            if (res.title) {
                this.api.mpost('skills.editActivesGroup', res).subscribe((data: any) => {
                    this.list[index] = data.info;
                });
            }
        });
    }

    delete(data: any) {
        let { item, index } = data;
        this.api.mpost('skills.deleteActivesGroup', item).subscribe(res => {
            this.list.splice(index, 1);
        });
    }

    add() {
        let dialogRef = this.dialog.open(SkillsGroupAdd);
        dialogRef.afterClosed().subscribe(res => {
            if (res.title) {
                this.api.mpost('skills.editActivesGroup', res).subscribe((data: any) => {
                    this.list.push(data.info);
                });
            }
        });
    }
}
