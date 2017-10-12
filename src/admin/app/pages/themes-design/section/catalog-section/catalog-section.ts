import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { MatDialog } from '@angular/material';
import { AddGroupDialog, AddPageDialog } from '../../dialog';

import { CatalogGroup } from '../model';
import {Store} from "@ngrx/store";
import * as actions from '../../../../ngrx/actions/catalog.action';

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
        public store: Store<any>
    ) {
        this.store.subscribe(res=>{
            this.list = res.catalog;
            console.log('store is ',res);
        });
    }

    ngOnInit() { }

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
                // 添加应用
                this.store.dispatch(new actions.CatalogAddAction(res));
            }
        });
    }
    // 编辑应用
    showEditGroupDialog(group: any) {
        const dialogRef = this.dialog.open(AddGroupDialog, { data: group });
        dialogRef.afterClosed().subscribe((res) => {
            if (res) {
                this.store.dispatch(new actions.CatalogEditAction(res));
            }
        });
    }
    // 添加应用页面
    showAddGroupPageDialog(group: any) {
        console.log(group);
        const dialogRef = this.dialog.open(AddPageDialog, { data: { cata_id: group.id } });
        dialogRef.afterClosed().subscribe((res) => {
            if (res) {
                group['pages'].push(res);
                this.store.dispatch(new actions.CatalogEditAction(group));
            }
        });
    }

    removeGroup(group: any) {
        this.store.dispatch(new actions.CatalogDeleteAction(group));
    }

    saveData(){
        // store2.set(cacheKey,this.list);
        this.store.dispatch(new actions.CatalogSaveToCacheAction({}))
    }

    showAddPageDialog(group: CatalogGroup) {
        const dialogRef = this.dialog.open(AddPageDialog);
        dialogRef.afterClosed().subscribe((res) => {
            if (res) {
                group.pages.push(res);
                this.store.dispatch(new actions.CatalogEditAction(group));
            }
        });
    }
}

