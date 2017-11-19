import { Component, OnInit, Input } from '@angular/core';
import { GroupAdd } from '../group-add/group-add';
import { MatDialog } from '@angular/material';
import { ApiService } from '../../../../core/api/api.service';

@Component({
    selector: 'group-list',
    templateUrl: './group-list.html',
    styleUrls: ['./group-list.scss']
})
export class GroupList implements OnInit {
    list: any[] = [];
    @Input() title: string = '商品分类';
    @Input() action: string = 'goods';

    constructor(
        public dialog: MatDialog,
        public api: ApiService
    ) { }

    ngOnInit() {
        this.api.mpost(`${this.action}.update`, {}).subscribe(res => { });
        this.getList();
    }

    firstUpperCaseAction() {
        return `${this.action[0].toUpperCase()}${this.action.substring(1, this.action.length)}`;
    }

    getList() {
        this.api.mpost(`${this.action}.getList${this.firstUpperCaseAction()}Group`, {}).subscribe((res: any) => {
            this.list = res.info;
        });
    }

    onUpdateDisplayorder(data: any) {
        this.api.mpost(`${this.action}.update${this.firstUpperCaseAction()}GroupDisplayorder`, data).subscribe(res => {
            console.log(res);
        });
    }

    edit(data: any) {
        let { item, index } = data;
        let dialogRef = this.dialog.open(GroupAdd, { data: item });
        dialogRef.afterClosed().subscribe(res => {
            if (res && res.title) {
                this.api.mpost(`${this.action}.edit${this.firstUpperCaseAction()}Group`, res).subscribe((data: any) => {
                    this.getList();
                });
            }
        });
    }

    delete(data: any) {
        let { item, index } = data;
        this.api.mpost(`${this.action}.delete${this.firstUpperCaseAction()}Group`, item).subscribe(res => {
            this.getList();
        });
    }

    add() {
        let dialogRef = this.dialog.open(GroupAdd);
        dialogRef.afterClosed().subscribe(res => {
            if (res && res.title) {
                this.api.mpost(`${this.action}.edit${this.firstUpperCaseAction()}Group`, res).subscribe((data: any) => {
                    this.getList();
                });
            }
        });
    }

    addItem(e: any) {
        console.log(e);
        let dialogRef = this.dialog.open(GroupAdd, { data: { fid: e.item.id } });
        dialogRef.afterClosed().subscribe(res => {
            if (res && res.title) {
                this.api.mpost(`${this.action}.edit${this.firstUpperCaseAction()}Group`, res).subscribe((data: any) => {
                    this.getList();
                });
            }
        });
    }
}