import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { MatDialog } from '@angular/material';
import { AddGroupDialog, AddPageDialog } from '../../dialog';
import { LayoutContainer } from '../../../../design';
import { CatalogGroup } from '../model';
import { ApiService } from '../../../../core';

@Component({
    selector: 'catalog-section',
    templateUrl: './catalog-section.html',
    styleUrls: ['./catalog-section.scss']
})
export class CatalogSection implements OnInit {
    list: CatalogGroup[] = [];
    currentGroupIndex: number;

    constructor(
        public catalogService: CatalogService,
        public dialog: MatDialog,
        public cd: ChangeDetectorRef,
        public api: ApiService
    ) { }

    ngOnInit() {
        this.getList();
    }

    getList() {
        // this.api.mpost('app.update').subscribe(res=>{});
        this.api.mpost('app.getListAppCatalog', { page: 1, psize: 30 }).subscribe((res: any) => {
            this.list = res.info;
        });
    }

    onGroup(index: number) {
        this.currentGroupIndex = index;
    }

    clearEvent(evt: any) {
        evt.stopPropagation();
    }

    // 添加应用
    showAddGroupDialog() {
        const dialogRef = this.dialog.open(AddGroupDialog);
        dialogRef.afterClosed().subscribe((res) => {
            if (res) {
                this.getList();
            }
        });
    }
    // 编辑应用
    showEditGroupDialog(group: any) {
        const dialogRef = this.dialog.open(AddGroupDialog, { data: group });
        dialogRef.afterClosed().subscribe((res) => {
            if (res) {
                this.getList();
            }
        });
    }
    // 添加应用页面
    showAddGroupPageDialog(group: any) {
        console.log(group);
        const dialogRef = this.dialog.open(AddPageDialog, { data: { cata_id: group.id } });
        dialogRef.afterClosed().subscribe((res) => {
            if (res) {
                this.getList();
            }
        });
    }

    removeGroup(group: any) {
        const index = this.list.indexOf(group);
        this.list.splice(index, 1);
        this.saveData();
    }

    saveData() {
        this.getList();
    }

    showAddPageDialog(group: CatalogGroup) {
        const dialogRef = this.dialog.open(AddPageDialog);
        dialogRef.afterClosed().subscribe((res) => {
            if (res) {
                group.pages.push(res);
            }
        });
    }
}

