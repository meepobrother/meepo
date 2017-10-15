<<<<<<< HEAD
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { MatDialog } from '@angular/material';
import { AddGroupDialog, AddPageDialog } from '../../dialog';

import { CatalogGroup } from '../model';
import {Store} from "@ngrx/store";
import * as actions from '../../../../ngrx/actions/catalog.action';
=======
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { CatalogService } from '../../../../design';
import { MatDialog } from '@angular/material';
import { AddGroupDialog, AddPageDialog } from '../../dialog';
import { CatalogGroup } from '../model';
import { ApiService } from '../../../../core';
>>>>>>> master

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
<<<<<<< HEAD
        public store: Store<any>
    ) {
        this.store.subscribe(res=>{
            this.list = res.catalog;
            console.log('store is ',res);
        });
=======
        public api: ApiService
    ) { }

    ngOnInit() {
        this.getList();
>>>>>>> master
    }

    getList() {
        this.api.mpost('app.update').subscribe(res => { });
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
<<<<<<< HEAD
                // 添加应用
                this.store.dispatch(new actions.CatalogAddAction(res));
=======
                this.getList();
>>>>>>> master
            }
        });
    }
    // 编辑应用
    showEditGroupDialog(group: any) {
        const dialogRef = this.dialog.open(AddGroupDialog, { data: group });
        dialogRef.afterClosed().subscribe((res) => {
            if (res) {
<<<<<<< HEAD
                this.store.dispatch(new actions.CatalogEditAction(res));
=======
                this.getList();
>>>>>>> master
            }
        });
    }
    // 添加应用页面
    showAddGroupPageDialog(group: any) {
        const data = { cata_id: group.id, app_id: this.appId };
        console.log(data);
        const dialogRef = this.dialog.open(AddPageDialog, { data: data });
        dialogRef.afterClosed().subscribe((res) => {
            if (res) {
<<<<<<< HEAD
                group['pages'].push(res);
                this.store.dispatch(new actions.CatalogEditAction(group));
=======
                this.getList();
>>>>>>> master
            }
        });
    }

    removeGroup(group: any) {
<<<<<<< HEAD
        this.store.dispatch(new actions.CatalogDeleteAction(group));
    }

    saveData(){
        // store2.set(cacheKey,this.list);
        this.store.dispatch(new actions.CatalogSaveToCacheAction({}))
=======
        this.api.mpost('app.deleteAppCatalog', group).subscribe(() => {
            this.getList();
        });
    }

    saveData() {
        this.getList();
>>>>>>> master
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

