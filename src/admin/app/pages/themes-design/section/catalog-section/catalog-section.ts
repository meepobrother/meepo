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

    showAddGroupDialog() {
        const dialogRef = this.dialog.open(AddGroupDialog);
        dialogRef.afterClosed().subscribe((res) => {
            if (res) {
                this.catalogService.addCatalogGroup(res);
                console.log(this.catalogService.getGroupsData());
            }
        });
    }

    showEditGroupDialog(group: any) {
        const dialogRef = this.dialog.open(AddGroupDialog, { data: group });
        dialogRef.afterClosed().subscribe((res) => {
            if (res) {
                this.catalogService.addCatalogGroup(res);
            }
        });
    }

    showAddGroupPageDialog(cata_id: string) {
        const dialogRef = this.dialog.open(AddGroupDialog, { data: { cata_id: cata_id } });
        dialogRef.afterClosed().subscribe((res) => {
            if (res) {
                this.catalogService.addCatalogGroup(res);
            }
        });
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

