import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core';
import { MatDialog } from '@angular/material';
import { SkillsListEdit } from './skills-list-edit/skills-list-edit';
@Component({
    selector: "skills-list",
    templateUrl: "./skills-list.html"
})
export class SkillsList implements OnInit {

    list: any[] = [];

    constructor(
        public api: ApiService,
        public dialog: MatDialog
    ) { }

    getList() {
        this.api.mpost('skills.update',{}).subscribe(res=>{});
        this.api.mpost('skills.getListSkill', {}).subscribe((res: any) => {
            this.list = res.info;
        });
    }

    ngOnInit() { 
        this.getList();
    }

    edit(item: any,index: number) {
        let dialogRef = this.dialog.open(SkillsListEdit, { data: item });
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.api.mpost('skills.editSkill', res).subscribe(res => {
                    this.list[index] = res;
                });
            }
        });
    }

    delete(item: any,index: number) {
        this.api.mpost('skills.deleteSkill', item).subscribe(res => {
            this.list.splice(index,1);
        });
    }

    add() {
        let dialogRef = this.dialog.open(SkillsListEdit);
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.api.mpost('skills.editSkill', res).subscribe(res => {
                    this.list.push(res);
                });
            }
        });
    }
}

