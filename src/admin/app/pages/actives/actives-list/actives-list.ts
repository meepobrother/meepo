import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/api';
import { MatDialog } from '@angular/material';
import { ActivesListAdd } from './actives-list-add/actives-list-add';
@Component({
    selector: 'actives-list',
    templateUrl: './actives-list.html',
    styleUrls: ['./actives-list.scss']
})
export class ActivesList implements OnInit {
    list: any[] = [];
    constructor(
        public api: ApiService,
        public dialog: MatDialog
    ) { }

    ngOnInit() {
        this.getList();
    }

    getList() {
        this.api.mpost('actives.update', {});
        this.api.mpost('actives.getListActive', { page: 1, psize: 30 }).subscribe((res: any) => {
            this.list = res.info;
        });
    }

    add() {
        let dialogRef = this.dialog.open(ActivesListAdd);
        dialogRef.afterClosed().subscribe((res: any) => {
            if (res && res.title) {
                this.api.mpost('actives.editActive', res).subscribe((data: any) => {
                    this.list.push(data.info);
                });
            }
        })
    }

    edit(item: any, index: number) {
        let dialogRef = this.dialog.open(ActivesListAdd, { data: item });
        dialogRef.afterClosed().subscribe((res: any) => {
            if (res && res.title) {
                this.api.mpost('actives.editActive', res).subscribe((data: any) => {
                    this.list[index] = data.info;
                });
            }
        })
    }

    delete(item: any, index: number) {
        this.api.mpost('actives.deleteActive', item).subscribe(res => {
            this.list.splice(index, 1);
        });
    }
}
