import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { MatDialog } from '@angular/material';

import { AddGroupDialog, AddPageDialog } from '../../dialog';
@Component({
    selector: 'catalog-section',
    templateUrl: './catalog-section.html',
    styleUrls: ['./catalog-section.scss']
})
export class CatalogSection implements OnInit {
    currentGroupIndex: number;
    constructor(
        public catalogService: CatalogService,
        public dialog: MatDialog
    ) { }

    ngOnInit() { }

    onGroup(index: number) {
        this.currentGroupIndex = index;
    }

    clearEvent(evt: any) {
        evt.stopPropagation();
    }

    clickCata(evt: any) {

    }
    // 添加应用
    showAddGroupDialog() {
        const dialogRef = this.dialog.open(AddGroupDialog);
        dialogRef.afterClosed().subscribe((res) => {
            if (res) {
                this.catalogService.addCatalogGroup(res);
                console.log(this.catalogService.getGroupsData());
            }
        });
    }
    // 编辑应用
    showEditGroupDialog(group: any) {
        const dialogRef = this.dialog.open(AddGroupDialog, { data: group });
        dialogRef.afterClosed().subscribe((res) => {
            if (res) {
                this.catalogService.addCatalogGroup(res);
            }
        });
    }
    // 添加应用页面
    showAddGroupPageDialog(group: any) {
        const dialogRef = this.dialog.open(AddPageDialog, { data: { cata_id: group.id } });
        dialogRef.afterClosed().subscribe((res) => {
            if (res) {
                this.catalogService.addPage(res);
            }
        });
    }

    removeGroup(group: any){
        this.catalogService.removeGroup(group);
    }

    showAddPageDialog() {
        const dialogRef = this.dialog.open(AddPageDialog);
        dialogRef.afterClosed().subscribe((res) => {
            if (res) {
                this.catalogService.addCatalogGroup(res);
            }
        });
    }
}

