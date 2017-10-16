import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { CatalogService } from '../../../../design';
import { MatDialog } from '@angular/material';
import { AddGroupDialog, AddPageDialog } from '../../dialog';
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

    @Input() appId: any;

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
        this.api.mpost('app.getListAppCatalog', { page: 1, psize: 30, app_id: this.appId }).subscribe((res: any) => {
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
        const dialogRef = this.dialog.open(AddGroupDialog, { data: { app_id: this.appId } });
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
        const data = { cata_id: group.id, app_id: this.appId };
        const dialogRef = this.dialog.open(AddPageDialog, { data: data });
        dialogRef.afterClosed().subscribe((res) => {
            if (res) {
                this.getList();
            }
        });
    }

    removeGroup(group: any) {
        this.api.mpost('app.deleteAppCatalog', group).subscribe(() => {
            this.getList();
        });
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

