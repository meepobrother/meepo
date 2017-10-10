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

    constructor(
        public catalogService: CatalogService,
        public dialog: MatDialog
    ) { }

    ngOnInit() { }

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

    showAddPageDialog() {
        const dialogRef = this.dialog.open(AddPageDialog);
        dialogRef.afterClosed().subscribe((res) => {
            if (res) {
                this.catalogService.addCatalogGroup(res);
            }
        });
    }
}

