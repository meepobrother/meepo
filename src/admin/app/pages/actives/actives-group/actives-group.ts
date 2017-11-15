import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core';
import { MatDialog } from '@angular/material';
import { ActivesGroupAdd } from './actives-group-add/actives-group-add';
@Component({
    selector: 'actives-group',
    templateUrl: './actives-group.html',
    styleUrls: ['./actives-group.scss']
})
export class ActivesGroup implements OnInit {
    list: any[] = [];
    constructor(
        public dialog: MatDialog,
        public api: ApiService
    ) { }

    ngOnInit() {
        this.getList();
    }

    getList() {
        this.api.mpost('actives.update', {}).subscribe(res => { });
        this.api.mpost('actives.getListActivesGroup', {}).subscribe((res: any) => {
            this.list = res.info;
        });
    }

    onUpdateDisplayorder(data: any){
        this.api.mpost('actives.updateActivesGroupDisplayorder', data).subscribe(res => {
            console.log(res);
        });
    }

    edit(data: any) {
        let { item, index } = data;
        let dialogRef = this.dialog.open(ActivesGroupAdd, { data: item });
        dialogRef.afterClosed().subscribe(res => {
            if (res.title) {
                this.api.mpost('actives.editActivesGroup', res).subscribe((data: any) => {
                    this.list[index] = data.info;
                });
            }
        });
    }

    delete(data: any) {
        let { item, index } = data;
        this.api.mpost('actives.deleteActivesGroup', item).subscribe(res => {
            this.list.splice(index, 1);
        });
    }

    add() {
        let dialogRef = this.dialog.open(ActivesGroupAdd);
        dialogRef.afterClosed().subscribe(res => {
            if (res.title) {
                this.api.mpost('actives.editActivesGroup', res).subscribe((data: any) => {
                    this.list.push(data.info);
                });
            }
        });
    }
}
